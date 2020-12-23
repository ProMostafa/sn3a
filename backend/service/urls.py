from django.urls import path, include
from .views import ServiceViewSet, SubServicesViewSet, CustomerOrder, ProductView
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('services', ServiceViewSet)
router.register('subservices', SubServicesViewSet)
router.register('customerorders', CustomerOrder)
router.register('products', ProductView)
urlpatterns = [
    path('', include(router.urls)),
]
