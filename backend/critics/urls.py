from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from django.contrib.auth.views import PasswordResetConfirmView, PasswordChangeView, PasswordResetView, PasswordResetDoneView

from . import views

urlpatterns = [
    path('usuarios/', views.UsuarioListView.as_view(), name='usuario-list'),
    path('usuarios/criar/', views.UsuarioCreateView.as_view(), name='usuario-create'),
    path('usuarios/<int:pk>/', views.UsuarioUpdateView.as_view(), name='usuario-update'),
    path('usuarios/<int:pk>/remover/', views.UsuarioDeleteView.as_view(), name='usuario-delete'),
    path('login/', views.UsuarioLoginView.as_view(), name='usuario-login'),  # Endpoint de login JWT
    path('logout/', views.UsuarioLogoutView.as_view(), name='usuario-logout'),  # Endpoint de logout (opcional)
    path('token-refresh/', TokenRefreshView.as_view(), name='token-refresh'),
    path('password_reset/confirm/<uidb64>/<token>/', PasswordResetConfirmView.as_view(template_name='password_reset_confirm.html'), name='password_reset_confirm'),
    path('password_change/', PasswordChangeView.as_view(template_name='reset_password.html'), name='password_change'),
    path('password_reset/', PasswordResetView.as_view(template_name='reset_password_by_email.html'), name='password_reset'),
    path('password_reset/done/', PasswordResetDoneView.as_view(template_name='password_reset_done.html'), name='password_reset_done'),
    #path('api/password_reset/confirm/', views.password_reset_confirm_view, name='password_reset_confirm'),
]