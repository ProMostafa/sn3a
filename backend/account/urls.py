from django.urls import path, include
from .views import UserViewSet, get_all_technical, UpdatePasswordView,\
    PasswordTokenCheck, RestPasswordByEmailView, VerifyEmail, SetNewPassowordView
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('users', UserViewSet)
urlpatterns = [
    path('', include(router.urls)),
    path('get_all_technical/<str:job>/', get_all_technical, name='get_all_technical'),

    path('email_verify/', VerifyEmail.as_view(), name='email_verify'),
    path('change_password/', UpdatePasswordView.as_view(), name='change_password'),
    path('reset_password/', RestPasswordByEmailView.as_view(), name='reset_password'),
    path('password_reset_confirm/<uid64>/<token>/', PasswordTokenCheck.as_view(), name='password_reset_confirm'),
    path('password_reset_complete/',SetNewPassowordView.as_view(), name='password_reset_complete')
]
