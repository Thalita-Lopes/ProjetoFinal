# -*- coding: utf-8 -*-
# Generated by Django 1.11.11 on 2021-03-05 18:42
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('intercampi', '0003_posicao_atual'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='posicao_atual',
            name='id_posicao',
        ),
    ]
