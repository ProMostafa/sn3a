from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

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

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)