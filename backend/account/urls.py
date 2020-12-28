from django.urls import path, include
from .views import UserViewSet, UpdatePasswordView,\
    PasswordTokenCheck, RestPasswordByEmailView, VerifyEmail, SetNewPasswordView, SendMessageToAdmin
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('users', UserViewSet)
urlpatterns = [
    path('', include(router.urls)),

    path('send_message/', SendMessageToAdmin.as_view(), name='send_message'),
    path('email_verify/', VerifyEmail.as_view(), name='email_verify'),
    path('change_password/', UpdatePasswordView.as_view(), name='change_password'),
    path('reset_password/', RestPasswordByEmailView.as_view(), name='reset_password'),
    path('password_reset_confirm/<uid64>/<token>/', PasswordTokenCheck.as_view(), name='password_reset_confirm'),
    path('password_reset_complete/',SetNewPasswordView.as_view(), name='password_reset_complete')
]
