from django.urls import path, include
from .views import UserViewSet, get_all_technical
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('users', UserViewSet)
urlpatterns = [
    path('', include(router.urls)),
    path('get_all_technical/<str:job>/', get_all_technical, name='get_all_technical'),
]
