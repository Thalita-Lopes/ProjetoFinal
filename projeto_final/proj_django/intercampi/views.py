# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render
from . forms import Form_Viagens
from django.http import JsonResponse
import json
from . models import Posicao, Viagens, Linhas, Motoristas_cadastrados, Rota_atual, Posicao_atual, Posicao_atualII, Posicao_atualIV, Posicao_atualIII, Posicao_atualExtra, Posicao_atualFerias, Posicao_atual_Linha #Rota_atual, Rota_padrao, Onibus, Paradas, Campi
from django.contrib.gis.geos import Point, LineString, Polygon
from django.contrib.gis.geos import GEOSGeometry

# Create your views here.
def home(request):
    return render(request, 'home.html')

def mapadousuario(request):
    return render(request, 'mapadousuario.html')

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
            return render(request, 'mapa')

def ExcluirAnteriores(obj_linha):
    ObjPos = Posicao.objects.filter(nome_linha = obj_linha)
    a = len(ObjPos)
    b = a - 1
    print 'chamou!'
    """exclui  = Posicao.objects.filter(id_posicao = Posicao.id_posicao).delete()"""


sequencia = []
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

            """objpa = Posicao_atualII(id_pa = 'atual', id_viagem = obj_viagem, nome_linha = obj_linha, geom = ponto)
            objpa.save()
            objpa = Posicao_atualIII(id_pa = 'atual', id_viagem = obj_viagem, nome_linha = obj_linha, geom = ponto)
            objpa.save()
            objpa = Posicao_atualIV(id_pa = 'atual', id_viagem = obj_viagem, nome_linha = obj_linha, geom = ponto)
            objpa.save()
            objpa = Posicao_atualFerias(id_pa = 'atual', id_viagem = obj_viagem, nome_linha = obj_linha, geom = ponto)
            objpa.save()"""


            if nome_linha == 'INTERCAMPI I':
                Posicao_atual.objects.filter(id_pa = 'atual').update(id_viagem = obj_viagem, nome_linha = obj_linha, geom = ponto)
            elif nome_linha == 'INTERCAMPI II':
                Posicao_atualII.objects.filter(id_pa = 'atual').update(id_viagem = obj_viagem, nome_linha = obj_linha, geom = ponto)
            elif nome_linha ==  'INTERCAMPI III':
                Posicao_atualIII.objects.filter(id_pa = 'atual').update(id_viagem = obj_viagem, nome_linha = obj_linha, geom = ponto)
            elif nome_linha == 'INTERCAMPI IV':
                Posicao_atualIV.objects.filter(id_pa = 'atual').update(id_viagem = obj_viagem, nome_linha = obj_linha, geom = ponto)
            elif nome_linha == 'INTERCAMPI EXTRA':
                Posicao_atualExtra.objects.filter(id_pa = 'atual').update(id_viagem = obj_viagem, nome_linha = obj_linha, geom = ponto)
            else:
                Posicao_atualFerias.objects.filter(id_pa = 'atual').update(id_viagem = obj_viagem, nome_linha = obj_linha, geom = ponto)



            todosospontos = Posicao.objects.filter(nome_linha = obj_linha).order_by('id_posicao')
            """a = Posicao.objects.filter(nome_linha = obj_linha).order_by('-id_posicao')
            Posicao_atual_Linha.Entry.objects.all()[:3]
            print a"""
            ordenados = Posicao.objects.filter(nome_linha = obj_linha).order_by('-id_posicao').all()[:3]
            print ordenados
            ordem = []
            for o in ordenados:
                ordem.append(o.geom)
            print ordem

            pontos = []
            for p in todosospontos:

                pontos.append(p.geom)


            if len(pontos) >= 2:
                linestring = LineString(pontos)
                linhaPosicaoAtual = LineString(ordem)
                print linestring
                print linhaPosicaoAtual
                ExcluirAnteriores(obj_linha)


                GEOSGeometry.simplify(linestring,tolerance = 0.0)
                objRA = Rota_atual(id_viagem = obj_viagem, nome_linha = obj_linha, geom = linestring)
                objRA.save()
                """objpa = Posicao_atual_Linha(id_pa = 'atual', id_viagem = obj_viagem, nome_linha = obj_linha, geom = linestring)
                objpa.save()"""
                Posicao_atual_Linha.objects.filter(id_pa = 'atual').update(id_viagem = obj_viagem, nome_linha = obj_linha, geom = linhaPosicaoAtual)
                print len(pontos)



            resposta = '{result:ok}'
            return JsonResponse(json.dumps(resposta), safe=False)

def pararinsercao(request):
    if request.is_ajax():
        if request.method == 'POST':
            dicionario = dict(request.POST)
            id_viagem = dicionario['id_vg'][0]
            nome_linha = dicionario['nome_linha'][0]
            print "Dados da Tabela Posicao apagados"

            excluidos = Posicao.objects.filter(nome_linha = nome_linha).delete()
            excluida = Rota_atual.objects.filter(nome_linha = nome_linha).delete()
            Posicao_atual.objects.filter(id_pa = 'atual').update(id_viagem = id_viagem, nome_linha = nome_linha, geom = 'POINT(23.042753 9.8000838)')
            Posicao_atualII.objects.filter(id_pa = 'atual').update(id_viagem = id_viagem, nome_linha = nome_linha, geom = 'POINT(23.042753 9.8000838)')
            Posicao_atualIII.objects.filter(id_pa = 'atual').update(id_viagem = id_viagem, nome_linha = nome_linha, geom = 'POINT(23.042753 9.8000838)')
            Posicao_atualIV.objects.filter(id_pa = 'atual').update(id_viagem = id_viagem, nome_linha = nome_linha, geom = 'POINT(23.042753 9.8000838)')
            Posicao_atualExtra.objects.filter(id_pa = 'atual').update(id_viagem = id_viagem, nome_linha = nome_linha, geom = 'POINT(23.042753 9.8000838)')
            Posicao_atualFerias.objects.filter(id_pa = 'atual').update(id_viagem = id_viagem, nome_linha = nome_linha, geom = 'POINT(23.042753 9.8000838)')
            Posicao_atual_Linha.objects.filter(id_pa = 'atual').update(id_viagem = id_viagem, nome_linha = nome_linha, geom = 'LINESTRING(23.141703 9.8000808, 23.242753 9.8000838, 23.343773 9.8000878)')
            print excluidos
            print excluida



            resposta = '{result:ok}'
            return JsonResponse(json.dumps(resposta), safe=False)
