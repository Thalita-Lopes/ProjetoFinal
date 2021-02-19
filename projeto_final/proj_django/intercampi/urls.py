from django.conf.urls import url,include
from django.contrib import admin
from . import views

urlpatterns = [
    url(r'index$', views.index, name = 'index'),
    url(r'salvar_form$', views.salvar_form, name = 'salvar_form'),
    url(r'insereposicao$', views.insereposicao, name = 'insereposicao'),
    url(r'pararinsercao$', views.pararinsercao, name = 'pararinsercao'),
]
