# research_projects_tracker/urls.py

from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('research.urls')),  # Incluez les URLs de votre application research
]
