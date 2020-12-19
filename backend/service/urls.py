from django.urls import path, include
from .views import ServiceViewSet, SubServicesViewSet, CustomerOrder
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('services', ServiceViewSet)
router.register('subservices', SubServicesViewSet)
router.register('customerorders', CustomerOrder)
urlpatterns = [
    path('', include(router.urls)),
]
