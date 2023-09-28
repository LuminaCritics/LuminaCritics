from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.db import models
from django.contrib.auth.models import User


class Usuario(models.Model):
    primeiro_nome = models.CharField(max_length=255)
    sobrenome = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    ativo = models.BooleanField(verbose_name=u'Ativo?',default=True, editable=False)
    user = models.ForeignKey(User, verbose_name='Usuário', blank=True, null=True, editable=False, on_delete=models.CASCADE)
    dataUltimaAlteracao = models.DateTimeField('Última alteração', null=True, blank=True, auto_now=True)

    def __str__(self):
        return f'{self.primeiro_nome} {self.sobrenome}'