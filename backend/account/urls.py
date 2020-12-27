from django.urls import path, include
from .views import UserViewSet, UpdatePasswordView,\
<<<<<<< HEAD
    PasswordTokenCheck, RestPasswordByEmailView, VerifyEmail, SetNewPasswordView
=======
    PasswordTokenCheck, RestPasswordByEmailView, VerifyEmail, SetNewPasswordView, SendMessageToAdmin
>>>>>>> 0437395646b64ffa278e112794d621d4c3354659
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('users', UserViewSet)
urlpatterns = [
    path('', include(router.urls)),

<<<<<<< HEAD
=======
    path('send_message/', SendMessageToAdmin.as_view(), name='send_message'),
>>>>>>> 0437395646b64ffa278e112794d621d4c3354659
    path('email_verify/', VerifyEmail.as_view(), name='email_verify'),
    path('change_password/', UpdatePasswordView.as_view(), name='change_password'),
    path('reset_password/', RestPasswordByEmailView.as_view(), name='reset_password'),
    path('password_reset_confirm/<uid64>/<token>/', PasswordTokenCheck.as_view(), name='password_reset_confirm'),
    path('password_reset_complete/',SetNewPasswordView.as_view(), name='password_reset_complete')
]
