# Generated by Django 4.2.6 on 2023-10-27 17:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('stores', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='img',
            field=models.ImageField(blank=True, default=None, null=True, upload_to=''),
        ),
    ]
