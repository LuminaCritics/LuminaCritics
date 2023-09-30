from django.contrib.auth.models import AbstractUser, User
from django.db import models
from django.conf import settings

class CustomUser(AbstractUser):
    email = models.EmailField(unique=True)
    ativo = models.BooleanField(verbose_name=u'ativo?',default=True, editable=False)
    dataUltimaAlteracao = models.DateTimeField('ultima_alteracao', null=True, blank=True, auto_now=True)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, verbose_name='usuario', blank=True, null=True, editable=False, on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.id} {self.username} {self.email}'