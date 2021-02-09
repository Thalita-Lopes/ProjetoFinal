# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render
from . forms import Form_Motorista
from django.http import JsonResponse
import json
from . models import Posicao, Motoristas, Linhas #Rota_atual, Rota_padrao, Onibus, Viagens, Paradas, Campi
from django.contrib.gis.geos import Point, LineString, Polygon

# Create your views here.
def index(request):
    form = Form_Motorista()
    return render(request, 'index.html',{'form':form})

def salvar_form(request):
    if request.method == 'POST':
        form = Form_Motorista(request.POST)
        if form.is_valid():
            result = form.save()
            id_moto = result.id_motorista
            nome_linha = result.nome_linha
            print nome_linha

            return render(request, 'mapa.html', {'id_moto':id_moto, 'nome_linha':nome_linha})
        else:
            print 'Não válido'
            return render(request, 'mapa.html')

def insereposicao(request):
    if request.is_ajax():
        if request.method == 'POST':
            dicionario = dict(request.POST)
            id_motorista = dicionario['id_moto'][0]
            nome_linha = dicionario['nome_linha'][0]
            print nome_linha

            ponto = Point(float(dicionario['ponto[]'][0]), float(dicionario['ponto[]'][1]))
            obj_motorista = Motoristas.objects.get(id_motorista = id_motorista)
            print ponto
            obj_linha = Linhas.objects.get(nome_linha = nome_linha)
            print obj_linha

            obj = Posicao(id_motorista = obj_motorista, geom = ponto, nome_linha = obj_linha)
            obj.save()

            """criar a linestring aqui"""
            resposta = '{result:ok}'
            return JsonResponse(json.dumps(resposta), safe=False)
