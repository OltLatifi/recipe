# Generated by Django 3.1 on 2021-05-15 11:12

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_recipe_photos'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='recipe',
            name='photos',
        ),
    ]
