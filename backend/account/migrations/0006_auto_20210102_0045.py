# Generated by Django 3.1.4 on 2021-01-02 00:45

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0005_auto_20210102_0010'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='is_technical',
        ),
        migrations.RemoveField(
            model_name='user',
            name='job',
        ),
    ]
