from django.contrib import admin
from .models import Order, Services, SubServices, OrderProducts, Product
# Register your models here.
admin.site.register(Order)
admin.site.register(Services)
admin.site.register(SubServices)
admin.site.register(Product)