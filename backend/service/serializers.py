from rest_framework import serializers
from .models import Services, SubServices , Order , Rating, Product
from  account.models import User


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
        fields = ['technical', 'service', 'status', 'create_at','description','date','total_cost']

        # def create(self, validated_data):
        #     service = Services.objects.get(id=validated_data['service'])
        #     technical = User.objects.get(id=validated_data['technical'])
        #     order = Order.objects.create(
        #         technical=technical,
        #         service=service,
        #         date=validated_data['date'],
        #         total_cost=validated_data['total_cost'],
        #     )
        #     return order

        # def validate(self, attrs):
        #     try:
        #         technical = attrs.get('technical')
        #         service = attrs.get('service')
        #         date = attrs.get('date')
        #         total_cost = attrs.get('total_cost')
        #         return attrs
        #     except Exception as err:
        #         raise ValueError('some of requiring data is missing')



class RatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rating
        fields = '__all__'


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'


# class OrderDataSerializers(serializers.Serializer):

