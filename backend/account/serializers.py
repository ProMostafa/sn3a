from django.contrib.auth.password_validation import validate_password
from django.contrib.auth import password_validation
from django.utils.translation import gettext_lazy as _

from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.contrib.sites.shortcuts import get_current_site
from django.urls import reverse
from django.utils.encoding import smart_bytes, force_str, smart_str, DjangoUnicodeDecodeError
from rest_framework.exceptions import AuthenticationFailed
from rest_framework.authtoken.models import Token
from rest_framework import serializers
from .models import User



class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
        extra_kwargs = {'password': {'write_only': True, 'required': True}}

    def create(self, validated_data):
        user = User.objects.create_user(
            email=validated_data['email'],
            username=validated_data['username'],
            phone=validated_data['phone'],
            address=validated_data['address'],
            password=validated_data['password'],
        )

        if validated_data['is_technical']:
            user.is_technical = True
            user.save()

# very important Hint:
# Django not create Token When create user for this you must create token for every user register
        Token.objects.create(user=user)
        return user


class ChangePasswordSerializer(serializers.Serializer):
    """
    Serializer for password change endpoint.
    """
    old_password = serializers.CharField(required=True)
    new_password = serializers.CharField(required=True)
    confirm_new_password = serializers.CharField(required=True)

    def validate(self, data):
        if data['new_password'] != data['confirm_new_password']:
            raise serializers.ValidationError({'confirm_new_password': _("The two password fields didn't match.")})
        # password_validation.validate_password(data['new_password'], self.context['request'].user)
        return data

    def validate_new_password(self, value):
        validate_password(value)
        return value


class EmailVerificationSerializer(serializers.Serializer):
    token = serializers.CharField(max_length=600)

    class Meta:
        model = User
        fields = ['token']

class ResetPassowrdByEmailSerializer(serializers.Serializer):
    email = serializers.EmailField(min_length=2)

    class Meta:
        fields = ['email']



class SetNewPasswordSeriliazer(serializers.Serializer):
    password = serializers.CharField(min_length=2, max_length=20, write_only=True)
    token = serializers.CharField(min_length=2, write_only=True)
    uid64 = serializers.CharField(min_length=2, write_only=True)

    class Meta:
        fields=['password','token','uid64']

    def validate(self, attrs):
        try:
            password = attrs.get('password')
            token = attrs.get('token')
            uid64 = attrs.get('uid64')

            id = force_str(urlsafe_base64_decode(uid64))
            user = User.objects.get(id=id)

            if not PasswordResetTokenGenerator().check_token(user,token):
                raise AuthenticationFailed('The reset link is invalid', 401)

            user.set_password(password)
            user.save()

            return user
        except Exception as err:
            raise AuthenticationFailed('The reset link is invalid',401)
        return super().validate(attrs)


class SendMessageToAdminSeriliazer(serializers.Serializer):
    email = serializers.EmailField(min_length=2)
    subject = serializers.CharField(max_length=1024, min_length=5)
    message = serializers.CharField(style={'base_template': 'textarea.html'})

    class Meta:
        fields = ['email', 'subject', 'message']
