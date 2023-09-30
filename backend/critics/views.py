from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.generics import RetrieveUpdateAPIView, DestroyAPIView
from django.contrib.auth import get_user_model
from django.contrib.auth.hashers import make_password
from rest_framework import generics
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from rest_framework.permissions import IsAuthenticated
from rest_framework.authtoken.models import Token
from django.conf import settings
from django.shortcuts import render
from django.core.mail import send_mail
from django.contrib.auth.models import User
from copy import deepcopy

from .models import Usuario
from .serializers import UsuarioSerializer

from django.conf import settings
from django.shortcuts import render
from django.core.mail import send_mail

subject = 'Test Email'
message = 'This is a test email sent from my Django app.'
from_email = settings.EMAIL_HOST_USER
recipient_list = ['testeemail@gmail.com']

send_mail(subject, message, from_email, recipient_list, fail_silently=False)

class UsuarioListView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        usuarios = Usuario.objects.all()
        serializer = UsuarioSerializer(usuarios, many=True)
        return Response(serializer.data)

class UsuarioCreateView(APIView):
    #permission_classes = [IsAuthenticated]

    def post(self, request):
        data = request.data
        password = data.get('senha')
        data.pop('senha')
        serializer = UsuarioSerializer(data=data)
        if serializer.is_valid():
            #print(f'\033[94m {serializer.validated_data} \033[0m]]')
            fields = deepcopy(serializer.validated_data) 
            serializer.save()
            user = User.objects.create_user(
                username = fields['email'],
                email = fields['email'],
                first_name = fields['primeiro_nome'],
                last_name = fields['sobrenome'],
                password = password
            )
            Token.objects.get_or_create(user=user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class UsuarioUpdateView(RetrieveUpdateAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer

class UsuarioDeleteView(DestroyAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer

User = get_user_model()

class UsuarioLoginView(TokenObtainPairView):
    pass

class UsuarioLogoutView(generics.CreateAPIView):
    authentication_classes = ()
    permission_classes = ()
    
