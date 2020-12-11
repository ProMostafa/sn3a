from django.shortcuts import render
from .models import Services, SubServices
from .serializers import ServicesSerializer, SubServicesSerializer
from rest_framework import viewsets, status
from rest_framework.permissions import AllowAny


# Create your views here.
class ServiceViewSet(viewsets.ModelViewSet):
    queryset = Services.objects.all()
    serializer_class = ServicesSerializer
    permission_classes = (AllowAny, )


class SubServicesViewSet(viewsets.ModelViewSet):
    queryset = SubServices.objects.all()
    serializer_class = SubServicesSerializer
    permission_classes = (AllowAny, )