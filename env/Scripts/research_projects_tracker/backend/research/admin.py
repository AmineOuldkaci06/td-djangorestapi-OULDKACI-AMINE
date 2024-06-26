from django.contrib import admin
from .models import Chercheur, ProjetDeRecherche, Publication

admin.site.register(Chercheur)
admin.site.register(ProjetDeRecherche)
admin.site.register(Publication)
