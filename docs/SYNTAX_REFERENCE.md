# Documentation Syntax Reference

Cette page explique la syntaxe standardisée utilisée pour documenter les endpoints de l'API Tarkov.

---

## Format Standard des Endpoints

Chaque endpoint est documenté avec la structure suivante:

```markdown
## METHOD /api/route

**Description:** Description claire de ce que fait l'endpoint.

**Base URL:** `https://api.nivmizz7.fr`

### Syntax

```
METHOD /api/route?param1={type}&param2={type}
```

### Parameters

[Tableau avec colonnes: Parameter | Type | Required | Default | Description]

### Example Request

```bash
# Exemples avec curl ou autre client HTTP
curl "https://api.nivmizz7.fr/api/route?param=value"
```

### Response

```json
{
  "exemple": "response structure"
}
```

### Response Codes

| Code | Description |
|------|-------------|
| 200  | Success - Description |
| 4xx  | Client Error - Description |
| 5xx  | Server Error - Description |
```

---

## Éléments Clés

### 1. **Méthode HTTP et Route**
- Format: `## METHOD /api/route`
- Méthodes supportées: GET, POST, PUT, DELETE, PATCH

### 2. **Description**
- Description courte et claire de la fonction de l'endpoint
- Une seule ligne, directe et informative

### 3. **Syntaxe**
- Format standardisé montrant la requête complète
- Utilise des accolades `{}` pour les variables/paramètres
- Exemple: `/api/items/{id}` ou `/api/search?query={query}&limit={limit}`

### 4. **Paramètres**
- **Query Parameters**: Pour GET, PATCH, DELETE (dans l'URL)
- **Path Parameters**: Pour les variables dans la route
- **Body Parameters**: Pour POST, PUT (dans le corps de la requête)

Tableau standardisé avec colonnes:
| Parameter | Type | Required | Default | Description |

### 5. **Exemples de Requête**
- Utiliser `curl` pour les exemples
- Ajouter des commentaires explicatifs (`# ...`)
- Montrer plusieurs cas d'usage quand pertinent

### 6. **Codes de Réponse**
- Tableau avec colonnes: Code | Description
- Inclure les codes courants: 200, 400, 404, 500
- Descriptions claires et précises

---

## Convention de Nommage

### Fichiers

Tous les fichiers de documentation suivent la convention **MAJUSCULES avec underscores**:

| Type | Format | Exemple |
|------|--------|---------|
| Pages principales | `PAGE_NAME.md` | `GUIDE_DEMARRAGE.md` |
| Endpoints API | `ENDPOINTS_RESOURCE.md` | `ENDPOINTS_ITEMS.md` |
| Examples | `EXEMPLES_TOPIC.md` | `EXEMPLES_CODE.md` |
| Structure | `STRUCTURES_NAME.md` | `STRUCTURES_DONNEES.md` |

### Sections

- Titres de niveau 1: `# Titre Principal`
- Titres de niveau 2: `## Endpoint ou Section`
- Titres de niveau 3: `### Sous-section (Syntax, Parameters, etc.)`

---

## Types de Données

| Type | Format | Exemple |
|------|--------|---------|
| string | Texte | `"name": "item_name"` |
| integer | Nombre entier | `"id": 123` |
| number | Nombre décimal | `"price": 150.50` |
| boolean | true/false | `"available": true` |
| array | Liste | `"items": [...]` |
| object | Objet JSON | `"data": {...}` |

---

## Codes de Réponse Courants

### Succès
- **200 OK**: Requête réussie
- **201 Created**: Ressource créée avec succès

### Erreurs Clients
- **400 Bad Request**: Paramètres invalides
- **401 Unauthorized**: Authentification requise
- **403 Forbidden**: Accès refusé
- **404 Not Found**: Ressource non trouvée
- **409 Conflict**: Conflit avec l'état actuel

### Erreurs Serveur
- **500 Internal Server Error**: Erreur serveur générale
- **503 Service Unavailable**: Service temporairement indisponible

---

## URL de Base

Tous les endpoints utilisent l'URL de base:
```
https://api.nivmizz7.fr
```

Les routes commencent par `/api/` suivi du chemin de la ressource.

Exemple complet:
```
https://api.nivmizz7.fr/api/items?limit=10
```

---

## Exemple Complet

```markdown
## GET /api/items/:id

**Description:** Récupère les détails d'un article spécifique par son ID.

**Base URL:** `https://api.nivmizz7.fr`

### Syntax

```
GET /api/items/{id}
```

### Path Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | L'identifiant unique de l'article |

### Example Request

```bash
curl "https://api.nivmizz7.fr/api/items/507a1cc571423cdc2b000407"
```

### Response

```json
{
  "id": "507a1cc571423cdc2b000407",
  "name": "5.45x39 BP",
  "shortName": "BP"
}
```

### Response Codes

| Code | Description |
|------|-------------|
| 200  | Succès - Article trouvé |
| 404  | Non trouvé - Article inexistant |
| 500  | Erreur serveur |
```
