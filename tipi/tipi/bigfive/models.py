from __future__ import unicode_literals

from django.db import models

# Create your models here.
from django.db import models
from django.utils import timezone


class Answers(models.Model):
    name = models.CharField(max_length=30)
    q1 = models.CharField(max_length=200)
    q2 = models.CharField(max_length=200)
    q3 = models.CharField(max_length=200)
    q4 = models.CharField(max_length=200)
    q5 = models.CharField(max_length=200)
    q6 = models.CharField(max_length=200)
    q7 = models.CharField(max_length=200)
    q8 = models.CharField(max_length=200)
    q9 = models.CharField(max_length=200)
    q10 = models.CharField(max_length=200)