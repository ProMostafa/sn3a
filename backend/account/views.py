from django.shortcuts import render
from .models import User
from .serializers import UserSerializer
from rest_framework import viewsets, status
from rest_framework.response import Response
from django.http import JsonResponse
from rest_framework.decorators import action
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.authentication import TokenAuthentication


# Create your views here.

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (AllowAny,)


def get_all_technical(request, job=None):
    technicals = User.objects.filter(job=job)
    serializer = UserSerializer(technicals, many=True)
    response = {'message': 'get all technicals', 'result': serializer.data}
    return JsonResponse(response, status=status.HTTP_200_OK)

