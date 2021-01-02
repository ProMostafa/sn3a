from django.db import models
# from service.models import Services as Job
# import service.models.Services
from django.contrib.auth.models import (BaseUserManager, AbstractBaseUser)
from .validations import phone_validation
from datetime import datetime
# from service.models import Rating

JOBS = [
    ('None', 'None'),
    ('سباك', 'سباك'),
    ('نجار', 'نجار'),
    ('كهربائى', 'كهربائى'),
    ('مبيض محاره', 'مبيض محاره'),
]

# Create your models here.

# for avoid circular import
class Services(models.Model):
    type = models.CharField(max_length=100)
    description = models.TextField()
    image = models.ImageField(upload_to='service/')

    def __str__(self):
        return f"Service Category: {self.type}"


class UserManager(BaseUserManager):

    def create_user(self, email, username, phone, address, password=None):
        """
                Creates and saves a User with the given email, date of
                birth and password.
        """
        # if not email or not username or not phone or not address:
        #     raise ValueError("User Must Have All Required Data ?")

        user = self.model(
            email=self.normalize_email(email),
            username=username,
            phone=phone,
            address=address
        )
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, username, phone, address, password=None):
        user = self.create_user(
            email,
            username=username,
            phone=phone,
            password=password,
            address=address
        )
        user.is_admin = True
        user.save(using=self._db)
        return user


class User(AbstractBaseUser):
    email = models.EmailField(
        verbose_name='email address',
        max_length=255,
        unique=True,
    )
    username = models.CharField(max_length=255, unique=True)
    first_name = models.CharField(max_length=60, blank=True, null=True)
    last_name = models.CharField(max_length=60, blank=True, null=True)
    avatar = models.ImageField(upload_to='avatar/', blank=True, null=True)
    address = models.CharField(max_length=1024)
    phone = models.CharField(
        max_length=11,
        null=False,
        validators=[phone_validation]
    )
    date_of_creation = models.DateField(auto_now_add=True)
    is_active = models.BooleanField(default=True)

    # for technical Account
    available = models.BooleanField(default=True)
    description = models.TextField(null=True, blank=True)
    technical_job = models.ForeignKey(Services, on_delete=models.CASCADE, null=True, blank=True, default='')

    # for manage users
    is_admin = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    is_stuff = models.BooleanField(default=False)

    objects = UserManager()

    # using for login
    # USERNAME_FIELD = 'username or email'
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username', 'phone', 'address']

    def __str__(self):
        if self.is_technical:
            return f"Technical Username: {self.username}"
        return f"Customer Username: {self.username}"

    # def no_of_rating(self):
    #     if self.is_technical:
    #         rating = Rating.objects.filter(technical=self)
    #         return len(rating)
    #     return 0
    #
    # def avg_rating(self):
    #     if self.is_technical:
    #         sum =0
    #         ratings = Rating.objects.filter(technical=self)
    #         for rating in ratings:
    #             sum += rating.stars
    #         if len(ratings) > 0:
    #             return sum/len(ratings)
    #         else:
    #             return 0
    #     return 0

    def has_perm(self, perm, obj=None):
        "Does the user have a specific permission?"
        # Simplest possible answer: Yes, always
        return True

    def has_module_perms(self, app_label):
        "Does the user have permissions to view the app `app_label`?"
        # Simplest possible answer: Yes, always
        return True

    @property
    def is_staff(self):
        "Is the user a member of staff?"
        # Simplest possible answer: All admins are staff
        return self.is_admin



