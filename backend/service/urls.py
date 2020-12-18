from django.urls import path, include
<<<<<<< HEAD
from .views import ServiceViewSet, SubServicesViewSet, CustomerOrder
=======
from .views import ServiceViewSet, SubServicesViewSet , OrderViewSet , RatingViewSet , delete_order ,create_order
>>>>>>> de48ce98038d566cf8f34b906806f8bc2fcb95a9
from rest_framework.routers import DefaultRouter


router = DefaultRouter()
router.register('services', ServiceViewSet)
router.register('subservices', SubServicesViewSet)
router.register('customerorders', CustomerOrder)
urlpatterns = [
    path('', include(router.urls)),
    path('del_order/<int:o_id>',delete_order),
    path('create_order',create_order)
]
