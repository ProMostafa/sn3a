# Generated by Django 3.1.4 on 2021-01-02 21:08

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0007_user_is_technical'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='is_technical',
        ),
    ]
