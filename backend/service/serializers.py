from rest_framework import serializers
from .models import Services, SubServices , Order , Rating, Product


class ServicesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Services
        fields = '__all__'


class SubServicesSerializer(serializers.ModelSerializer):
    class Meta:
        model = SubServices
        fields = '__all__'


class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = '__all__'


class RatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rating
<<<<<<< HEAD
        fields = '__all__'
=======
        fields = '__all__'


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'
>>>>>>> 66ad482f2948d2845b0c33da53df08e5ee61535d
