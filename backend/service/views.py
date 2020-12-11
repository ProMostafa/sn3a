from django.shortcuts import render
from .models import Services, SubServices
from .serializers import ServicesSerializer, SubServicesSerializer
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework.permissions import AllowAny


# Create your views here.
class ServiceViewSet(viewsets.ModelViewSet):
    queryset = Services.objects.all()
    serializer_class = ServicesSerializer
    permission_classes = (AllowAny, )

    @action(detail=True, methods=['GET'])
    def get_sub_service(self, request, pk=None):
        sub_services = SubServices.objects.filter(service=pk)
        serializer = SubServicesSerializer(sub_services, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class SubServicesViewSet(viewsets.ModelViewSet):
    queryset = SubServices.objects.all()
    serializer_class = SubServicesSerializer
    permission_classes = (AllowAny, )