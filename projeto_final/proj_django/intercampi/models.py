# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib.gis.db import models


# Create your models here.

class Motoristas_cadastrados(models.Model):
    nome = models.CharField(primary_key=True, max_length = 40)
    cpf = models.IntegerField('Informe seu CPF:')

    class Meta:
        db_table = 'motoristas_cadastrados'
        managed = True

    def __unicode__(self):
        return '%s' %self.nome



class Linhas(models.Model):
    nome_linha=models.CharField(primary_key=True, max_length = 40)
    rota_padrao = models.LineStringField()

    class Meta:
        db_table = 'linhas'
        managed = True

    def __unicode__(self):
        return '%s' %self.nome_linha

class Viagens(models.Model):
    id_viagem= models.AutoField(primary_key= True)
    nome_linha = models.ForeignKey(Linhas, on_delete = models.CASCADE)
    nome = models.ForeignKey(Motoristas_cadastrados, on_delete = models.CASCADE)
    cpf = models.IntegerField('Informe seu CPF:')
    data = models.DateField(auto_now_add= True)

    class Meta:
        db_table = 'viagens'
        managed = True


class Posicao(models.Model):
    id_posicao = models.AutoField(primary_key = True)
    id_viagem = models.ForeignKey(Viagens, on_delete = models.CASCADE)
    nome_linha = models.ForeignKey(Linhas, on_delete = models.CASCADE)
    geom = models.PointField()
    data = models.DateField(auto_now_add= True)

    class Meta:
        db_table = 'posicao'
        managed = True

class Rota_atual(models.Model):
    id_rota_atual = models.AutoField(primary_key = True)
    id_viagem = models.ForeignKey(Viagens, on_delete = models.CASCADE)
    nome_linha = models.ForeignKey(Linhas, on_delete = models.CASCADE)
    geom = models.LineStringField()


    class Meta:
        db_table = 'rota_atual'
        managed = True

class Posicao_atual(models.Model):
    id_pa = models.CharField(primary_key=True, max_length = 40)
    id_viagem = models.ForeignKey(Viagens, on_delete = models.CASCADE)
    nome_linha = models.ForeignKey(Linhas, on_delete = models.CASCADE)
    geom = models.PointField()

    class Meta:
        db_table = 'Posicao_atual'
        managed = True

class Posicao_atual_Linha(models.Model):
    id_pa = models.CharField(primary_key=True, max_length = 40)
    id_viagem = models.ForeignKey(Viagens, on_delete = models.CASCADE)
    nome_linha = models.ForeignKey(Linhas, on_delete = models.CASCADE)
    geom = models.LineStringField()

    class Meta:
        db_table = 'Posicao_atual_Linha'
        managed = True

class Posicao_atualII(models.Model):
    id_pa = models.CharField(primary_key=True, max_length = 40)
    id_viagem = models.ForeignKey(Viagens, on_delete = models.CASCADE)
    nome_linha = models.ForeignKey(Linhas, on_delete = models.CASCADE)
    geom = models.PointField()

    class Meta:
        db_table = 'Posicao_atualII'
        managed = True

class Posicao_atualIII(models.Model):
    id_pa = models.CharField(primary_key=True, max_length = 40)
    id_viagem = models.ForeignKey(Viagens, on_delete = models.CASCADE)
    nome_linha = models.ForeignKey(Linhas, on_delete = models.CASCADE)
    geom = models.PointField()

    class Meta:
        db_table = 'Posicao_atualIII'
        managed = True

class Posicao_atualIV(models.Model):
    id_pa = models.CharField(primary_key=True, max_length = 40)
    id_viagem = models.ForeignKey(Viagens, on_delete = models.CASCADE)
    nome_linha = models.ForeignKey(Linhas, on_delete = models.CASCADE)
    geom = models.PointField()

    class Meta:
        db_table = 'Posicao_atualIV'
        managed = True

class Posicao_atualExtra(models.Model):
    id_pa = models.CharField(primary_key=True, max_length = 40)
    id_viagem = models.ForeignKey(Viagens, on_delete = models.CASCADE)
    nome_linha = models.ForeignKey(Linhas, on_delete = models.CASCADE)
    geom = models.PointField()

    class Meta:
        db_table = 'Posicao_atualExtra'
        managed = True

class Posicao_atualFerias(models.Model):
    id_pa = models.CharField(primary_key=True, max_length = 40)
    id_viagem = models.ForeignKey(Viagens, on_delete = models.CASCADE)
    nome_linha = models.ForeignKey(Linhas, on_delete = models.CASCADE)
    geom = models.PointField()

    class Meta:
        db_table = 'Posicao_atualFerias'
        managed = True
"""_________________________________________________________________________"""
"""class Rota_padrao(models.Model):
    id_rota_padrao = models.AutoField(primary_key = True)
    cpf_motoristas = models.ForeignKey(Motoristas, on_delete = models.CASCADE)
    geom = models.LineStringField()

    class Meta:
        db_table = 'rota_padrao'
        managed = True

class Onibus(models.Model):
    nome_onibus = models.CharField('Escolha o ônibus', max_length = 30, primary_key = True)
    id_posicao = models.ForeignKey(Posicao, on_delete = models.CASCADE)
    #id_rota_atual = models.ForeignKey(Rota_atual, on_delete = models.CASCADE)
    id_rota_padrao = models.ForeignKey(Rota_padrao, on_delete = models.CASCADE)

    class Meta:
        db_table = 'onibus'
        managed = True

class Rota_atual(models.Model):
    id_rota_atual = models.AutoField(primary_key = True)
    cpf_motoristas = models.ForeignKey(Motoristas, on_delete = models.CASCADE)
    nome_onibus = models.ForeignKey(Onibus, on_delete = models.CASCADE)
    id_rota_padrao = models.ForeignKey(Rota_padrao, on_delete = models.CASCADE)
    geom = models.LineStringField()
    data_inicio = models.DateField()
    data_fim = models.DateField()

    class Meta:
        db_table = 'rota_atual'
        managed = True

class Viagens(models.Model):
    id_viagem = models.AutoField(primary_key = True)
    cpf_motoristas = models.ForeignKey(Motoristas, on_delete = models.CASCADE)
    id_rota_atual = models.ForeignKey(Rota_atual, on_delete = models.CASCADE)
    data_inicio = models.DateField()
    data_fim = models.DateField()

    class Meta:
        db_table = 'viagens'
        managed = True

class Paradas(models.Model):
    id_parada = models.AutoField(primary_key = True)
    nome_parada = models.CharField(max_length = 30)
    geom = models.PointField()

    class Meta:
        db_table = 'paradas'
        managed = True

class Campi(models.Model):
    id_campus = models.AutoField(primary_key = True)
    nome_campus = models.CharField(max_length = 30)
    geom = models.PolygonField()

    class Meta:
        db_table = 'campi'
        managed = True"""
