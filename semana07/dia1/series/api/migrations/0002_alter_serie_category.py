# Generated by Django 4.0.2 on 2022-02-01 20:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='serie',
            name='category',
            field=models.CharField(choices=[('horror', 'HORROR'), ('comedy', 'COMEDY'), ('action', 'ACTION'), ('drama', 'DRAMA')], max_length=10),
        ),
    ]
