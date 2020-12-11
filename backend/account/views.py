from django.shortcuts import render
from .models import User
from .serializers import UserSerializer
from rest_framework import viewsets, status
from rest_framework.permissions import AllowAny


# Create your views here.

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (AllowAny,)
