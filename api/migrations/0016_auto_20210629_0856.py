# Generated by Django 3.1 on 2021-06-29 06:56

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0015_makearticle'),
    ]

    operations = [
        migrations.RenameField(
            model_name='makearticle',
            old_name='data',
            new_name='date',
        ),
    ]