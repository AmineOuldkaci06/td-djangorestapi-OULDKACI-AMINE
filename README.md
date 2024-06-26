﻿# td-djangorestapi-OULDKACI-AMINE
# Application de Suivi de Projets de Recherche

Ce projet consiste en une application de suivi de projets de recherche développée avec Django (pour l'API backend) et Vue.js (pour l'interface utilisateur frontend). L'application permet la gestion des informations sur les projets de recherche, les chercheurs impliqués et les publications associées via une API RESTful.

### Étapes d'installation

1. **Clonez le dépôt Git**
git clone https://github.com/AmineOuldkaci06/td-djangorestapi-OULDKACI-AMINE.git
cd td-djangorestapi-OULDKACI-AMINE

2. **Installez les dépendances backend**
pip install -r requirements.txt

3. **Installez les dépendances frontend**
cd ..\frontend
npm install


## Configuration

### Configuration de l'API Django

1. **Appliquez les migrations**

Exécutez les migrations pour créer les tables de base de données requises.
python manage.py makemigrations
python manage.py migrate


2. **Créez un super utilisateur**
Créez un compte administrateur pour accéder à l'interface d'administration Django.
python manage.py createsuperuser
inserez le nom d'utilisateur et le mot de passe pour les utiliser dans l'authentification poour se connecter comme admin


3. **Lancez le serveur Django**
Démarrez le serveur de développement Django.
python manage.py runserver
L'API sera accessible à l'adresse : `http://127.0.0.1:8000/` faut noter que j'ai un bug là dessus et je suis en train de travailler 
et pour vous connecter avec vos cordonnées et avoir l'accès à toutes les fonctionalité tout ca sera accessible à l'adresse : 'http://127.0.0.1:8000/admin'

### Configuration du Frontend Vue.js

1. **Lancez le serveur frontend**
cd ...\frontend
npm run serve

Tests de l'Interface Utilisateur Frontend
Ouvrez votre navigateur et visitez les différentes routes de l'application :

Chercheurs : http://localhost:8080/chercheurs
Projets : http://localhost:8080/projets
Publications : http://localhost:8080/publications

notez que l'interface est en phase d'amélioration j'ai beaucoup de chose à rajouter mais malheuresemnt j'ai pas vraiment eu le temps de tout faire sur l'interface et y a pas mal de bug que je trvaille dessus jusqu'a maintenant 






