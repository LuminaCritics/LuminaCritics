from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

from . import views

schema_view = get_schema_view(
    openapi.Info(
        title="Lumina Critics",
        default_version='v1',
        description="Recomendações de filmes",
        #terms_of_service="https://www.suaapi.com/terms/",
        contact=openapi.Contact(email="luminacritics@gmail.com"),
        license=openapi.License(name="MIT License"),
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)

urlpatterns = [
    path('usuarios/', views.UsuarioListView.as_view(), name='usuario-list'),
    path('usuarios/criar/', views.UsuarioCreateView.as_view(), name='usuario-create'),
    path('usuarios/<int:pk>/', views.UsuarioUpdateView.as_view(), name='usuario-update'),
    path('usuarios/<int:pk>/remover/', views.UsuarioDeleteView.as_view(), name='usuario-delete'),
    path('login/', views.UsuarioLoginView.as_view(), name='usuario-login'),  # Endpoint de login JWT
    path('logout/', views.UsuarioLogoutView.as_view(), name='usuario-logout'),  # Endpoint de logout (opcional)
    path('token-refresh/', TokenRefreshView.as_view(), name='token-refresh'),
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
]

