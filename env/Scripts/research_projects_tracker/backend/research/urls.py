# research/urls.py

from django.urls import path
from .views import ChercheurViewSet, ProjetDeRechercheViewSet, PublicationViewSet

urlpatterns = [
    path('chercheurs/', ChercheurViewSet.as_view({'get': 'list', 'post': 'create'}), name='chercheur-list'),
    path('projets/', ProjetDeRechercheViewSet.as_view({'get': 'list', 'post': 'create'}), name='projet-list'),
    path('publications/', PublicationViewSet.as_view({'get': 'list', 'post': 'create'}), name='publication-list'),
    # Ajoutez d'autres URLs ici si nécessaire
]
