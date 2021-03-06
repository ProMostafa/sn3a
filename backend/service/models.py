from django.db import models
from django.core.validators import MaxLengthValidator,MinLengthValidator
from account.models import User , Services


# Create your models here.


# class Services(models.Model):
#     type = models.CharField(max_length=100)
#     description = models.TextField()
#     image = models.ImageField(upload_to='service/')
#
#     def __str__(self):
#         return f"Service Category: {self.type}"


# class ServicePicture(models.Model):
#     service = models.ForeignKey(Services, on_delete=models.CASCADE)
#     picture = models.ImageField(upload_to='services/')


class SubServices(models.Model):
    service = models.ForeignKey(Services, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    description = models.TextField()
    image = models.ImageField(upload_to='sub_services/')
    cost = models.FloatField()

    def __str__(self):
        return f"Service Category: {self.service.type}, Service Name: {self.name}"


class Product(models.Model):
    category = models.ForeignKey(Services, on_delete=models.CASCADE, related_name='product_category')
    name = models.CharField(max_length=255)
    cost = models.FloatField()
    image = models.ImageField(upload_to='products/')

    # def __str__(self):
    #     return f"category: {self.category.name} , product name:{self.name}"


class Order(models.Model):
    customer = models.ForeignKey(User, related_name='customer_order', on_delete=models.CASCADE)
    technical = models.ForeignKey(User, related_name='technical_order', on_delete=models.CASCADE)
    service = models.ForeignKey(Services, related_name='service_order', on_delete=models.CASCADE)
    status = models.BooleanField(default=False)
    create_at = models.DateField(auto_now_add=True)
    description = models.TextField(blank=True)
    date = models.DateField()
    total_cost = models.FloatField()


class OrderPictures(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    pictures = models.ImageField(upload_to='order/')


class OrderSubService(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    sub_service = models.ForeignKey(SubServices, related_name='sub_services_order', on_delete=models.CASCADE)


class OrderProducts(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    product = models.ForeignKey(Product,on_delete=models.CASCADE)


class Rating(models.Model):
    customer = models.ForeignKey(User, related_name='customer_rate', on_delete=models.CASCADE)
    technical = models.ForeignKey(User, related_name='technical_rate', on_delete=models.CASCADE)
    order = models.ForeignKey(Order, related_name='customer_rate_order', on_delete=models.CASCADE, blank=True)
    rate = models.IntegerField(choices=[
        (1, 1),
        (2, 2),
        (3, 3),
        (4, 4),
        (5, 5),
    ])

    class Meta:
        unique_together = (('customer', 'technical'),)
        # when ordering data
        index_together = (('customer', 'technical'),)



