from django.shortcuts import render
from account.models import User
from .models import Services, SubServices, Order, Rating, OrderPictures
from .serializers import ServicesSerializer, SubServicesSerializer, OrderSerializer, RatingSerializer
from rest_framework import viewsets, status
from rest_framework.response import Response
from django.http import JsonResponse
from rest_framework.decorators import action
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.authentication import TokenAuthentication


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

    @action(detail=True, methods=['POST'],
            authentication_classes=[TokenAuthentication],
            permission_classes=[IsAuthenticated])
    def apply_order(self, request, pk=None):
        if 'technical_id' in request.data and 'date' in request.data and 'total_cost' in request.data:
            customer = request.user
            service = SubServices.objects.get(id=pk)
            technical = User.objects.get(id=request.data['technical_id'])
            date = request.data['date']
            total_cost = request.data['total_cost']
            customer_order = Order.objects.create(
                customer=customer, service=service,
                technical=technical, date=date,
                total_cost=total_cost)
            customer_order.save()
            for image in request.FILES.getlist('images'):
                OrderPictures.objects.create(order=customer_order, pictures=image)
            serializer = OrderSerializer(customer_order, many=False)
            response = {'message': 'Order Created', 'result': serializer.data}
            return Response(response, status=status.HTTP_200_OK)
        else:
            response = {'message': 'You Need to provide All Requiring Data'}
            return Response(response, status=status.HTTP_400_BAD_REQUEST)


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
















<<<<<<< HEAD

=======
    
    # def create(self, request):
        
    #     return super(, self).create(vals)

class RatingViewSet(viewsets.ModelViewSet):
    queryset = Rating.objects.all()
    serializer_class = RatingSerializer
    permission_classes = (AllowAny, )

# def get_all_orders(request):
#     orders = Order.objects.all()
#     context = {'orders': orders}
#     return Response(context)

def get_order_by_user_id(request,user_id):
    order_sel = Order.objects.get(user = user_id)
    context = {'orders': order_sel}
    return render(request, '', context)

def create_order(request):
    order = new(Order)
    if request.method == 'POST':
        order = order(request.POST, request.FILES)
        order.save()
        return redirect('')
    else:
        return HttpResponse("")

def update_order(request, order_id):
    order_sel = Order.objects.get(id = order_id)
    if request.method == 'POST':
        order_sel.save()
        return redirect('')
    else:
        context = {'order': order_sel}
        return render(request, '', context)


def delete_order(request, o_id):
    try :
        order_sel = Order.objects.get(id = o_id)
        order_sel.delete()
        return Response({'status':True})
    except:
        return Response({'status':False})
    


def create_rate(request):
    rate = new(Rating)
    if request.method == 'POST':
        rate = rate(request.POST)
        rate.save()
        return redirect('')
    else:
        return HttpResponse("")

def get_Rate_by_user_id(request , user_id):
    rate = Rating.objects.get(user = user_id)
    context = {'rate': rate}
    return render(request, '', context)
>>>>>>> de48ce98038d566cf8f34b906806f8bc2fcb95a9
