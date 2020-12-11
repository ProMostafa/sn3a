from django.shortcuts import render
from .models import Services, SubServices , Order , Rating
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

class OrderViewSet(viewsets.ModelViewSet):
    queryset = SubServices.objects.all()
    serializer_class = SubServicesSerializer
    permission_classes = (AllowAny, )

class RatingViewSet(viewsets.ModelViewSet):
    queryset = SubServices.objects.all()
    serializer_class = SubServicesSerializer
    permission_classes = (AllowAny, )

def get_all_orders(request):
    orders = Order.objects.all()
    context = {'orders': orders}
    return render(request, '', context)

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


def delete_order(request, order_id):
    order_sel = Order.objects.get(id = order_id)
    order_sel.delete()
    return redirect('')
    


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