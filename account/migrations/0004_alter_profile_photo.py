# Generated by Django 4.0.1 on 2022-02-19 21:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0003_alter_profile_photo'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='photo',
            field=models.ImageField(default='default.png', upload_to='users/%Y/%m/%d'),
        ),
    ]
