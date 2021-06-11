# Generated by Django 3.1 on 2021-06-06 09:17

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('api', '0005_recipe_serving_size'),
    ]

    operations = [
        migrations.CreateModel(
            name='MakeBreed',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('animal_type', models.CharField(choices=[('Mace', 'Mace'), ('Qen', 'Qen')], max_length=20)),
                ('name', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='MakeCity',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='MakeComments',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('comment', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='MakeRating',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('rating', models.IntegerField(default=3)),
            ],
        ),
        migrations.CreateModel(
            name='MakeUser',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('city', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='api.makecity')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='PostAnimals',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('category', models.CharField(choices=[('Kafshe rruge', 'Kafshe rruge'), ('Kafshe e humbur', 'Kafshe e humbur'), ('Kafshe e gjetur', 'Kafshe e gjetur')], max_length=50)),
                ('photo', models.ImageField(default='Images/default.png', upload_to='Images/')),
                ('name', models.CharField(max_length=50)),
                ('description', models.TextField(max_length=500)),
                ('features', models.CharField(max_length=200)),
                ('reward', models.IntegerField(default=0)),
                ('phone', models.CharField(max_length=15)),
                ('breed', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='api.makebreed')),
                ('city', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='api.makecity')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.DeleteModel(
            name='Recipe',
        ),
        migrations.AddField(
            model_name='makerating',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.makeuser'),
        ),
        migrations.AddField(
            model_name='makecomments',
            name='post',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.postanimals'),
        ),
        migrations.AddField(
            model_name='makecomments',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.makeuser'),
        ),
    ]
