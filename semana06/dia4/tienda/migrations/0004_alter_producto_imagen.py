# Generated by Django 3.2 on 2022-01-31 21:11

import cloudinary.models
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('tienda', '0003_pedido_pedidodetalle'),
    ]

    operations = [
        migrations.AlterField(
            model_name='producto',
            name='imagen',
            field=cloudinary.models.CloudinaryField(default='', max_length=255, verbose_name='image'),
        ),
    ]