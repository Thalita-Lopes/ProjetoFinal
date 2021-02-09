from django import forms
from . models import Motoristas
from . models import Linhas


class Form_Motorista(forms.ModelForm):
    nome_linha = forms.ModelChoiceField(queryset=Linhas.objects.all(), to_field_name = 'nome_linha', empty_label="Selecione a linha")

    class Meta:
        model = Motoristas
        fields = ['nome', 'cpf', 'nome_linha']




        """def __init__(self, *args, **kwargs):
            user = kwargs.pop('user')
            super(Form_Posicao, self).__init__(*args, **kwargs)
            self.fields['Linhas']=forms.ModelChoiceField(queryset=Linhas.objects.filter(nome_linha=user))"""


"""class Form_linhas(forms.ModelForm):
    class Meta:
        model = Linhas
        fields = ['nome_linha']"""
