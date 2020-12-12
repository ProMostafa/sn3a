# Generated by Django 3.1.4 on 2020-12-11 17:15

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service', '0003_auto_20201211_1714'),
    ]

    operations = [
        migrations.AlterField(
            model_name='rating',
            name='rate',
            field=models.IntegerField(validators=[django.core.validators.MinLengthValidator(1), django.core.validators.MaxLengthValidator(5)]),
        ),
    ]