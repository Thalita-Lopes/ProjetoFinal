from django import forms
from . models import Viagens
from . models import Linhas
from . models import Motoristas_cadastrados


class Form_Viagens(forms.ModelForm):
    nome_linha = forms.ModelChoiceField(queryset=Linhas.objects.all(), to_field_name = 'nome_linha', empty_label="Selecione a linha")
    nome = forms.ModelChoiceField(queryset=Motoristas_cadastrados.objects.all(), to_field_name = 'nome', empty_label="nome completo")

    class Meta:
        model = Viagens
        fields = ['nome', 'cpf', 'nome_linha']
