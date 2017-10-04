from django.shortcuts import render
import logging
from .models import Answers
from django.views.decorators.csrf import csrf_protect, csrf_exempt

from .models import Answers
import ast
import json

import unicodedata
import collections

from django.http import HttpResponse
from django.views.decorators.csrf import csrf_protect, csrf_exempt

# Create your views here.
# Logger
LOG_FILENAME = 'example.log'
logging.basicConfig(filename=LOG_FILENAME,level=logging.DEBUG)

@csrf_exempt
def tipi_test(request):
    logging.debug("Hey I am coming Here")
    if request.POST:
        mydata = request.POST;
        mydata = mydata.dict()
        for i in mydata:
            mydata = i
            mydata = eval(mydata)
        name1 = mydata.get('name')
        a1 = mydata.get('q1')
        a2 = mydata.get('q2')
        a3 = mydata.get('q3')
        a4 = mydata.get('q4')
        a5 = mydata.get('q5')
        a6 = mydata.get('q6')
        a7 = mydata.get('q7')
        a8 = mydata.get('q8')
        a9 = mydata.get('q9')
        a10 = mydata.get('q10')
        Answers.objects.create(name=name1, q1=a1, q2=a2, q3=a3, q4=a4,q5=a5, q6=a6, q7=a7,
                               q8=a8,q9=a9,q10=a10)

        return render(request, 'bigfive/tipi_test.html',{})
    else:
        return render(request, 'bigfive/tipi_test.html', {})
def test(request):
    return render(request, 'bigfive/test.html',{})
