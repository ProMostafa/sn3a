# Generated by Django 3.1.4 on 2021-01-02 00:10

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0005_auto_20210102_0010'),
        ('service', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='service',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='service_order', to='account.services'),
        ),
        migrations.AlterField(
            model_name='product',
            name='category',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='product_category', to='account.services'),
        ),
        migrations.AlterField(
            model_name='subservices',
            name='service',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='account.services'),
        ),
        migrations.DeleteModel(
            name='Services',
        ),
    ]
