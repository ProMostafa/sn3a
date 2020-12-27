import re
from django.core.exceptions import ValidationError


def phone_validation(val):
    if not re.match('^0(10|12|11|15)[0-9]{8}', str(val)):
        raise ValidationError('Enter Valid Egypt Phone Number')



# def password_validation(password1, password2):
#     # Check that the two password entries match
#     if password1 and password2 and password1 != password2:
#         raise ValidationError("Passwords don't match")
#     return password2
