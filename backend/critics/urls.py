from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

from . import views

urlpatterns = [
    path('usuarios/', views.UsuarioListView.as_view(), name='usuario-list'),
    path('usuarios/criar/', views.UsuarioCreateView.as_view(), name='usuario-create'),
    path('usuarios/<int:pk>/', views.UsuarioUpdateView.as_view(), name='usuario-update'),
    path('usuarios/<int:pk>/remover/', views.UsuarioDeleteView.as_view(), name='usuario-delete'),
    path('login/', views.UsuarioLoginView.as_view(), name='usuario-login'),  # Endpoint de login JWT
    path('logout/', views.UsuarioLogoutView.as_view(), name='usuario-logout'),  # Endpoint de logout (opcional)
    path('token-refresh/', TokenRefreshView.as_view(), name='token-refresh'),
]