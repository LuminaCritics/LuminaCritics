from django.urls import path

from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

from .views import(
    register_user,
    get_users,
    update_user,
    delete_user,
    login
)

schema_view = get_schema_view(
    openapi.Info(
        title="Lumina Critics",
        default_version='v1',
        description="Recomendações de filmes",
        contact=openapi.Contact(email="luminacritics@gmail.com"),
        license=openapi.License(name="MIT License"),
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)

urlpatterns = [
    path('usuarios/', get_users, name='listar-usuarios'),
    path('usuarios/criar/', register_user, name='criar-usuarios'),
    path('usuarios/login/', login, name='login-usuarios'),
    path('usuarios/<int:user_id>/', update_user, name='atualizar-usuario'),
    path('usuarios/<int:user_id>/remover/', delete_user, name='deletar-usuario'),
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
]

