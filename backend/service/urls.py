from django.urls import path, include
from .views import ServiceViewSet, SubServicesViewSet , OrderViewSet , RatingViewSet , delete_order ,create_order
from rest_framework.routers import DefaultRouter


router = DefaultRouter()
router.register('services', ServiceViewSet)
router.register('subservices', SubServicesViewSet)
router.register('order', OrderViewSet)
router.register('rating', RatingViewSet)
urlpatterns = [
    path('', include(router.urls)),
    path('del_order/<int:o_id>',delete_order),
    path('create_order',create_order)
]
