# -*- coding: utf-8 -*-
# Generated by Django 1.11.11 on 2021-03-09 21:03
from __future__ import unicode_literals

import django.contrib.gis.db.models.fields
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('intercampi', '0005_posicao_atualextra_posicao_atualferias_posicao_atualii_posicao_atualiii_posicao_atualiv'),
    ]

    operations = [
        migrations.CreateModel(
            name='Posicao_atual_Linha',
            fields=[
                ('id_pa', models.CharField(max_length=40, primary_key=True, serialize=False)),
                ('geom', django.contrib.gis.db.models.fields.LineStringField(srid=4326)),
                ('id_viagem', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='intercampi.Viagens')),
                ('nome_linha', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='intercampi.Linhas')),
            ],
            options={
                'db_table': 'Posicao_atual_Linha',
                'managed': True,
            },
        ),
    ]
