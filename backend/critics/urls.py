from django.urls import path
from . import views

urlpatterns = [
    path('usuarios/', views.UsuarioListView.as_view(), name='usuario-list'),
    path('usuarios/criar/', views.UsuarioCreateView.as_view(), name='usuario-create'),
    path('usuarios/<int:pk>/', views.UsuarioUpdateView.as_view(), name='usuario-update'),
    path('usuarios/<int:pk>/remover/', views.UsuarioDeleteView.as_view(), name='usuario-delete'),
]