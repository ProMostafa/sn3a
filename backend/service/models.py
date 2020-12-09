from django.db import models
from django.contrib.auth.models import User


# Create your models here.


class Services(models.Model):
    type = models.CharField(max_length=100)
    description = models.TextField()


class ServicePicture(models.Model):
    service = models.ForeignKey(Services, on_delete=models.CASCADE)
    picture = models.ImageField(upload_to='services/')


class SubServices(models.Model):
    service = models.ForeignKey(Services, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    description = models.TextField()
    cost = models.FloatField()


class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    # technical = models.ForeignKey(technical, on_delete=models.CASCADE)
    service = models.ForeignKey(Services, on_delete=models.CASCADE)
    status = models.BooleanField(default=False)
    date = models.DateField()
    description = models.TextField()
    total_cost = models.FloatField()
    create_at = models.DateField(auto_now_add=True)


class OrderPictures(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    pictures = models.ImageField(upload_to='order/')


class Rating(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    # technical = models.ForeignKey(technical, on_delete=models.CASCADE)
    rate = models.CharField(choices=[
        (1,1),
        (2,2),
        (3,3),
        (4,4),
        (5,5)], max_length=1)
