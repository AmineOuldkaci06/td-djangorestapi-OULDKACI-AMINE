# Endpoints de l'API

## Chercheurs

### Récupérer tous les chercheurs

**URL** : `/api/chercheurs/`

**Méthode HTTP** : `GET`

### Créer un nouveau chercheur

**URL** : `/api/chercheurs/`

**Méthode HTTP** : `POST`

```json
{
  "nom": "John Doe",
  "specialite": "Biologie"
}
# Mettre à jour un chercheur existant

## URL : `/api/chercheurs/{id}/`

## Méthode HTTP : `PUT`

```json
{
  "nom": "John Doe",
  "specialite": "Biologie moléculaire"
}
# Supprimer un chercheur
## URL : /api/chercheurs/{id}/
## Méthode HTTP : DELETE

# Projets de Recherche
## Récupérer tous les projets de recherche
### URL : /api/projets/
### Méthode HTTP : GET

## Créer un nouveau projet de recherche
### URL : /api/projets/
### Méthode HTTP : POST
```json
{
  "titre": "Nouveau Projet de Recherche",
  "description": "Description du nouveau projet de recherche",
  "date_debut": "2024-07-01",
  "date_fin_prevue": "2025-01-01",
  "chef_de_projet": 1
}
## Mettre à jour un projet de recherche existant
**URL** : `/api/projets/{id}/`

**Méthode HTTP** : `PUT`

```json
{
  "titre": "Nouveau Titre du Projet",
  "description": "Nouvelle description du projet",
  "date_debut": "2024-07-01",
  "date_fin_prevue": "2025-01-01",
  "chef_de_projet": 1
}
## Supprimer un projet de recherche

**URL** : `/api/projets/{id}/`

**Méthode HTTP** : `DELETE`

## Publications

### Récupérer toutes les publications

**URL** : `/api/publications/`

**Méthode HTTP** : `GET`

### Créer une nouvelle publication

**URL** : `/api/publications/`

**Méthode HTTP** : `POST`

#### JSON Body
```json
{
  "titre": "Nouvelle Publication",
  "resume": "Résumé de la nouvelle publication",
  "projet_associe": 1,
  "date_publication": "2024-08-01"
}
## Mettre à jour une publication existante

### URL
`/api/publications/{id}/`

### Méthode HTTP
`PUT`

### JSON Body
```json
{
  "titre": "Titre mis à jour de la publication",
  "resume": "Nouveau résumé de la publication",
  "projet_associe": 1,
  "date_publication": "2024-08-01"
}
# Supprimer une publication

## URL
`/api/publications/{id}/`

## Méthode HTTP
`DELETE`
