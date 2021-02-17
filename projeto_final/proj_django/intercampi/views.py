# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render
from . forms import Form_Viagens
from django.http import JsonResponse
import json
from . models import Posicao, Viagens, Linhas, Motoristas_cadastrados, Rota_atual #Rota_atual, Rota_padrao, Onibus, Paradas, Campi
from django.contrib.gis.geos import Point, LineString, Polygon

# Create your views here.
def index(request):
    form = Form_Viagens()
    return render(request, 'index.html',{'form':form})

def salvar_form(request):
    if request.method == 'POST':
        form = Form_Viagens(request.POST)
        if form.is_valid():
            result = form.save()
            id_vg = result.id_viagem
            nome_linha = result.nome_linha
            print nome_linha

            return render(request, 'mapa.html', {'id_vg':id_vg, 'nome_linha':nome_linha})
        else:
            print 'Não válido'
            return render(request, 'mapa.html')
pontos = []
def insereposicao(request):
    if request.is_ajax():
        if request.method == 'POST':
            dicionario = dict(request.POST)
            id_viagem = dicionario['id_vg'][0]
            nome_linha = dicionario['nome_linha'][0]
            print nome_linha

            ponto = Point(float(dicionario['ponto[]'][0]), float(dicionario['ponto[]'][1]))
            obj_viagem = Viagens.objects.get(id_viagem = id_viagem)
            print ponto
            obj_linha = Linhas.objects.get(nome_linha = nome_linha)


            obj = Posicao(id_viagem = obj_viagem, geom = ponto, nome_linha = obj_linha)
            obj.save()

            """todosospontos = []
            todosospontos = Posicao.objects.filter(nome_linha = obj_linha).get(geom = ponto)
            print todosospontos
            pontos = []
            for p in todosospontos:
                pontos.append(p)
                print pontos"""
            todosospontos = (float(dicionario['ponto[]'][0]), float(dicionario['ponto[]'][1]))
            print todosospontos

            if 1 == 1:
                pontos.append(todosospontos)
                print pontos

            if len(pontos) >= 2:
                linestring = LineString(pontos)
                print linestring


                objRA = Rota_atual(id_viagem = obj_viagem, nome_linha = obj_linha, geom = linestring)
                objRA.save()


            resposta = '{result:ok}'
            return JsonResponse(json.dumps(resposta), safe=False)
