# Generated by Django 3.1.4 on 2020-12-11 17:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service', '0004_auto_20201211_1715'),
    ]

    operations = [
        migrations.AlterField(
            model_name='rating',
            name='rate',
            field=models.IntegerField(verbose_name=range(0, 5)),
        ),
    ]