from rest_framework import serializers
from .models import Services, SubServices


class ServicesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Services
        fields = '__all__'


class SubServicesSerializer(serializers.ModelSerializer):
    class Meta:
        model = SubServices
        fields = '__all__'
