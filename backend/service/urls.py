from django.urls import path, include
from .views import ServiceViewSet, SubServicesViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('services', ServiceViewSet)
router.register('subservices', SubServicesViewSet)
urlpatterns = [
    path('', include(router.urls)),
]
