from django.shortcuts import get_object_or_404
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
