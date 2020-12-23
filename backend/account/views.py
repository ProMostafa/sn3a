from django.shortcuts import render
from django.http import JsonResponse
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.contrib.sites.shortcuts import get_current_site
from django.urls import reverse
from django.utils.encoding import smart_bytes, force_str, smart_str, DjangoUnicodeDecodeError
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.decorators import action
from rest_framework.authentication import TokenAuthentication
from rest_framework_simplejwt.tokens import RefreshToken
from django.template import Context
from django.template.loader import render_to_string, get_template
from django.core.mail import EmailMessage


from .models import User
from .utils import Util
from .serializers import UserSerializer, ChangePasswordSerializer,\
    ResetPassowrdByEmailSerializer, SetNewPasswordSeriliazer
import jwt
from decouple import config
# Create your views here.


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (AllowAny,)

    def create(self, request, *args, **kwargs):
        user = request.data
        serializer = self.serializer_class(data=user)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        user_data = serializer.data
        user = User.objects.get(email=user_data['email'])
        # user.is_active = False
        # user.save()
        token = RefreshToken.for_user(user).access_token
        current_site = get_current_site(request)
        # relative_link = reverse('email_verify')
        # adsurl = f'http://{current_site}{relative_link}?token={str(token)}'

        # relative_link = reverse('email_verify')
        adsurl = f'http://localhost:4200/activate_account?token={str(token)}'
        # email_body = f'Hi {user.username} Use link below to verify your email \n {adsurl}'
        # data = {'email_body': email_body, 'to_email': user.email, 'email_subject': 'Verify Your Account'}
        # Util.send_email(data)
        ctx = {
            'user': user.username,
            'adsurl': adsurl
        }
        message = get_template('activate.html').render(ctx)
        data = {'email_body': message, 'to_email':user.email, 'email_subject': 'Verify Your Account'}
        print(data)
        Util.send_html_email(data)
        response ={
            'message': 'user created',
            'user': user_data
        }
        return Response(response, status=status.HTTP_201_CREATED)

    @action(detail=False, methods=['GET'])
    def get_all_technical(self, request, pk=None):
        # technicals = User.objects.filter(~Q(job=None))
        technicals = User.objects.filter(is_technical=True)
        serializer = UserSerializer(technicals, many=True)
        # response = {'message': 'get all technicals', 'result': serializer.data}
        return Response(serializer.data, status=status.HTTP_200_OK)



class VerifyEmail(APIView):
    def get(self, request):
        token = request.GET.get('token')
        try:
            data = jwt.decode(token, config('SECRET_KEY'))
            user = User.objects.get(id=data['user_id'])
            user.is_active = True
            user.save()
            return Response({'message': 'Successfully activated Account'},status=status.HTTP_200_OK)
        # if  jwt (JSon Web Token )token ExpiredSignatureError generate new token ****** not do untill now
        except jwt.ExpiredSignatureError as err:
            return Response({'error': 'Activation link Expired'}, status=status.HTTP_400_BAD_REQUEST)
        except jwt.exceptions.DecodeError as err:
            return Response({'error': 'Invalid token'}, status=status.HTTP_400_BAD_REQUEST)



class UpdatePasswordView(APIView):
    """
    An endpoint for changing password.
    """
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated, )

    def get_object(self, queryset=None):
        return self.request.user

    def put(self, request, *args, **kwargs):
        self.object = self.get_object()
        serializer = ChangePasswordSerializer(data=request.data)

        if serializer.is_valid():
            # Check old password
            old_password = serializer.data.get("old_password")
            if not self.object.check_password(old_password):
                return Response({"old_password": ["Wrong password."]},
                                status=status.HTTP_400_BAD_REQUEST)
            # set_password also hashes the password that the user will get
            self.object.set_password(serializer.data.get("new_password"))
            self.object.save()
            response = {
                'message': 'Password changed'
            }
            return Response(response, status=status.HTTP_200_OK)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class RestPasswordByEmailView(APIView):

    # override post method
    def post(self, request):
        serializer = ResetPassowrdByEmailSerializer(data=request.data)
        if serializer.is_valid():
            email = request.data['email']
            print(email)
            if User.objects.filter(email=email).exists():
                user = User.objects.get(email=email)
                uid64 = urlsafe_base64_encode(smart_bytes(user.id))
                token = PasswordResetTokenGenerator().make_token(user)
                current_site = get_current_site(
                    request=request).domain
                relative_link = reverse(
                    'password_reset_confirm', kwargs={'uid64': uid64, 'token': token})
                absurl = f'http://{current_site}{relative_link}'
                email_body = f'Hello,\n {user.username} Use Link below to rest your password \n' + absurl
                data = {'email_body': email_body, 'to_email': email, 'email_subject': 'Rest your password'}
                Util.send_email(data)
                return Response({'success': 'We have send you a link to rest your password'}, status=status.HTTP_200_OK)
            return Response({'fail': 'This email not registrations'}, status=status.HTTP_400_BAD_REQUEST)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



class PasswordTokenCheck(APIView):
    def get(self, request, uid64, token):
        try:
            id = smart_str(urlsafe_base64_decode(uid64))
            user = User.objects.get(id=id)
            if not PasswordResetTokenGenerator().check_token(user, token):
                return Response({'error': 'Token is not valid, please request a new one'},status=status.HTTP_401_UNAUTHORIZED)
            return Response({'success': True, 'message': 'Credentials Valid', 'uid64':uid64, 'token': token},status= status.HTTP_200_OK)
        except DjangoUnicodeDecodeError as err:
            return Response({'error': 'Token is not valid, please request a new one'}, status=status.HTTP_401_UNAUTHORIZED)


class SetNewPasswordView(APIView):
    def patch(self, request):
        serializer = SetNewPasswordSeriliazer(data=request.data)
        serializer.is_valid(raise_exception=True)
        return Response({'success': True, 'message':'Password reset successfully'}, status=status.HTTP_200_OK)


