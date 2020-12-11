from django.urls import path, include
from .views import ServiceViewSet, SubServicesViewSet , OrderViewSet , RatingViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('services', ServiceViewSet)
router.register('subservices', SubServicesViewSet)
router.register('order', OrderViewSet)
router.register('rating', RatingViewSet)
urlpatterns = [
    path('', include(router.urls)),
]
