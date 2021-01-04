from django.shortcuts import render, get_object_or_404,reverse
from django.conf import settings
from  service.models import Order
from rest_framework.response import Response
from rest_framework import  status
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.authentication import TokenAuthentication
# Create your views here.


class payment_process(APIView):

    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated, )

    def post(self, request):
        if 'order_id' in request.data:
            order = get_object_or_404(Order,id= request.data['order_id'])

            paypal_dict = {
                'business':settings.PAYPAL_RECEIVED_EMAIL,
                'amount': order.total_cost,
                'invoice': str(order.id),
                'currency_code':'EGP',
                'notify_url':'', #  url for notify ??? must be in angular how ???
                'return_url':'',# angular url for return home
                'cancel_return':'',# angular url for cancel
            }
            return Response(paypal_dict,status=status.HTTP_200_OK)
        return Response({'message':'order_id not found'},status=status.HTTP_400_BAD_REQUEST)
