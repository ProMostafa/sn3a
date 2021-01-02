from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from account.models import User
from .models import Services, SubServices, Order, Rating, OrderPictures,\
    Product, OrderSubService, OrderProducts
from .serializers import ServicesSerializer, SubServicesSerializer,\
    OrderSerializer, RatingSerializer, ProductSerializer
from rest_framework import viewsets, status
from rest_framework.response import Response
from django.http import JsonResponse
from rest_framework.decorators import action
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from rest_framework.views import APIView


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

    @action(detail=False, methods=['POST'],
            authentication_classes=[TokenAuthentication],
            permission_classes=[IsAuthenticated])
    def apply_order(self, request, pk=None):
        serializer = OrderSerializer(data=request.data)
        if serializer.is_valid():
            customer = request.user
            service = Services.objects.get(id=request.data['service'])
            technical = User.objects.get(id=request.data['technical'])

            customer_order = Order.objects.create(
                customer=customer,
                service=service,
                technical=technical,
                date=request.data['date'],
                total_cost=request.data['total_cost']
            )

            #
            # check for image order
            if 'description' in request.data:
                customer_order.description=request.data['description']
            customer_order.save()
            # check for image order
            for image in request.FILES.getlist('images'):
                OrderPictures.objects.create(order=customer_order, pictures=image)

            # check for sub services in order
            for sub_service in request.data['sub_services']:
                sub_service = SubServices.objects.get(id=sub_service)
                OrderSubService.objects.create(order=customer_order, sub_service=sub_service)

            # check for products in order
            for product in request.data['products']:
                product = Product.objects.get(id=product)
                OrderProducts.objects.create(order=customer_order, product=product)

            serializer = OrderSerializer(customer_order, many=False)
            response = {'message': 'Order Created', 'result': serializer.data}
            return Response(response, status=status.HTTP_200_OK)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


    # @action(detail=True, methods=['POST'],
    #         authentication_classes=[TokenAuthentication],
    #         permission_classes=[IsAuthenticated])
    # def apply_order(self, request, pk=None):
    #     if 'technical' in request.data and 'date' in request.data and 'total_cost' in request.data and 'service' in request.data:
    #         customer = request.user
    #         service = Services.objects.get(id=request.data['service'])
    #         technical = User.objects.get(id=request.data['technical'])
    #         date = request.data['date']
    #         total_cost = request.data['total_cost']
    #         customer_order = Order.objects.create(
    #             customer=customer, service=service,
    #             technical=technical, date=date,
    #             total_cost=total_cost
    #         )
    #         customer_order.save()
    #         for image in request.FILES.getlist('images'):
    #             OrderPictures.objects.create(order=customer_order, pictures=image)
    #         serializer = OrderSerializer(customer_order, many=False)
    #         response = {'message': 'Order Created', 'result': serializer.data}
    #         return Response(response, status=status.HTTP_200_OK)
    #     else:
    #         response = {'message': 'You Need to provide All Requiring Data'}
    #         return Response(response, status=status.HTTP_400_BAD_REQUEST)


class CustomerOrder(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)

    @action(detail=True, methods=['POST'])
    def rate_technical_job(self, request, pk=None):
        if 'rate' in request.data:
            customer = request.user
            order = Order.objects.get(id=pk)
            rate = request.data['rate']
            try:
                rating = Rating.objects.get(customer=customer, technical=order.technical)
                rating.rate = rate
                rating.save()
                serializer=RatingSerializer(rating,many=False)
                response = {'message':'Rating Updated','result':serializer.data}
                return Response(response, status=status.HTTP_200_OK)
            except:
                rating = Rating.objects.create(customer=customer, technical=order.technical, order=order, rate=rate)
                serializer = RatingSerializer(rating,many=False)
                response = {'message': 'Rating Create', 'result': serializer.data}
                return Response(response, status=status.HTTP_200_OK)
        else:
            response = {'message': 'You Need to provide technical rate'}
            return Response(response, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=False, methods=['GET'])
    def get_all_customer_orders(self, request, pk=None):
        orders = Order.objects.filter(customer=request.user)
        serializer = OrderSerializer(orders, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class ProductView(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    @action(detail=True, methods=['GET'])
    def get_products(self, request, pk=None):
        products = Product.objects.filter(category=pk)
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

















