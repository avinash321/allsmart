from django import forms

from .models import Answers

class mytableForm(forms.ModelForm):

    class Meta:
        model = Answers
        fields = ('name', 'q1','q2', 'q3','q4','q5','q6','q7','8','q9','q10')
