# Endpoint: Ammunition

The Ammunition endpoint allows you to retrieve all available ammunition with advanced filtering.

## GET /api/ammunition

Retrieves the complete list of ammunition with filtering, search and sorting.

### Request

**URL:** `GET https://api.nivmizz7.fr/api/ammunition`

### Query Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `caliber` | string | No | Filter by ammunition caliber |
| `search` | string | No | Search by name or shortName |
| `limit` | integer | No | Maximum number of ammunition to return |
| `offset` | integer | No | Number of ammunition to skip (default: 0) |

### Example Request

```bash
# Retrieve the first 20 ammunition
curl "https://api.nivmizz7.fr/api/ammunition?limit=20"

# Filter by caliber
curl "https://api.nivmizz7.fr/api/ammunition?caliber=545x39"

# Search for specific ammunition
curl "https://api.nivmizz7.fr/api/ammunition?search=BP&limit=10"

# Combine filtering and pagination
curl "https://api.nivmizz7.fr/api/ammunition?caliber=762x54&limit=15&offset=0"
```

### Response

```json
{
  "total": 240,
  "count": 20,
  "offset": 0,
  "ammunition": [
    {
      "id": "507a1cc571423cdc2b000407",
      "name": "5.45x39 BP",
      "shortName": "BP",
      "caliber": "Caliber545x39",
      "ballistics": {
        "damage": 48,
        "penetration": 39,
        "armorDamage": 62
      },
      "properties": {
        "cost": 150
      }
    }
  ]
}
```

### Response Codes

| Code | Description |
|------|-------------|
| 200 | Success |
| 400 | Invalid parameters |

---

## GET /api/ammunition/:id

Retrieves details of a specific ammunition by ID.

### Request

**URL:** `GET https://api.nivmizz7.fr/api/ammunition/{id}`

### Path Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique ID of the ammunition |

### Example Request

```bash
# Retrieve a specific ammunition
curl "https://api.nivmizz7.fr/api/ammunition/507a1cc571423cdc2b000407"
```

### Response

```json
{
  "id": "507a1cc571423cdc2b000407",
  "name": "5.45x39 BP",
  "shortName": "BP",
  "caliber": "Caliber545x39",
  "ballistics": {
    "damage": 48,
    "penetration": 39,
    "armorDamage": 62
  },
  "properties": {
    "cost": 150
  }
}
```

### Response Codes

| Code | Description |
|------|-------------|
| 200 | Ammunition found |
| 404 | Ammunition not found |

---

## GET /api/ammunition/calibers/list

Retrieves the list of all available ammunition calibers.

### Request

**URL:** `GET https://api.nivmizz7.fr/api/ammunition/calibers/list`

### Example Request

```bash
# Retrieve all available calibers
curl "https://api.nivmizz7.fr/api/ammunition/calibers/list"
```

### Response

```json
{
  "calibers": [
    "Caliber12ga",
    "Caliber209",
    "Caliber20ga",
    "Caliber366TKM",
    "Caliber545x39",
    "Caliber556x45NATO",
    "Caliber762x25TT",
    "Caliber762x39",
    "Caliber762x54R",
    "Caliber9x19PARA",
    "Caliber9x21",
    "Caliber9x33R"
  ]
}
```

### Response Codes

| Code | Description |
|------|-------------|
| 200 | Success |

---

## Ammunition Properties

### Main Properties

| Property | Type | Description |
|----------|------|-------------|
| `id` | string | Unique identifier of the ammunition |
| `name` | string | Full name of the ammunition |
| `shortName` | string | Short name of the ammunition |
| `caliber` | string | Ammunition caliber |

### Ballistic Properties (ballistics)

| Property | Type | Description |
|----------|------|-------------|
| `damage` | number | Damage dealt |
| `penetration` | number | Penetration power (0-100) |
| `armorDamage` | number | Damage to armor |

### Additional Properties (properties)

| Property | Type | Description |
|----------|------|-------------|
| `cost` | number | Ammunition cost |

---

## Automatic Sorting

Results are **automatically sorted by decreasing damage**. Ammunition with the highest damage appears first.

---

## Common Use Cases

### Find all available calibers
```bash
curl "https://api.nivmizz7.fr/api/ammunition/calibers/list"
```

### Retrieve all ammunition of a specific caliber
```bash
curl "https://api.nivmizz7.fr/api/ammunition?caliber=545x39&limit=50"
```

### Find the most powerful ammunition
```bash
# Results are already sorted by decreasing damage
curl "https://api.nivmizz7.fr/api/ammunition?limit=10"
```

### Search for ammunition by partial name
```bash
# Find all BP ammunition
curl "https://api.nivmizz7.fr/api/ammunition?search=BP&limit=20"
```

### Combine caliber and search
```bash
# Find BP ammunition of caliber 545x39
curl "https://api.nivmizz7.fr/api/ammunition?caliber=545x39&search=BP"
```

---

## Notes

- Results are sorted by **decreasing damage** (most powerful to least powerful)
- Search is **case-insensitive**
- Search works on `name` and `shortName` fields
- Calibers are returned in **alphabetical order**
- Caliber ID is used for filtering, not the readable name

## GET /api/ammunition

Récupère la liste complète des munitions avec filtrage, recherche et tri.

### Requête

**URL:** `GET https://api.nivmizz7.fr/api/ammunition`

### Paramètres de requête

| Paramètre | Type | Obligatoire | Description |
|-----------|------|-------------|-------------|
| `caliber` | string | Non | Filtrer par calibre de munition |
| `search` | string | Non | Recherche par nom ou shortName |
| `limit` | integer | Non | Nombre maximum de munitions à retourner |
| `offset` | integer | Non | Nombre de munitions à ignorer (défaut: 0) |

### Exemple de requête

```bash
# Récupérer les 20 premières munitions
curl "https://api.nivmizz7.fr/api/ammunition?limit=20"

# Filtrer par calibre
curl "https://api.nivmizz7.fr/api/ammunition?caliber=545x39"

# Rechercher une munition spécifique
curl "https://api.nivmizz7.fr/api/ammunition?search=BP&limit=10"

# Combiner filtrage et pagination
curl "https://api.nivmizz7.fr/api/ammunition?caliber=762x54&limit=15&offset=0"
```

### Réponse

```json
{
  "total": 240,
  "count": 20,
  "offset": 0,
  "ammunition": [
    {
      "id": "507a1cc571423cdc2b000407",
      "name": "5.45x39 BP",
      "shortName": "BP",
      "caliber": "Caliber545x39",
      "ballistics": {
        "damage": 48,
        "penetration": 39,
        "armorDamage": 62
      },
      "properties": {
        "cost": 150
      }
    }
  ]
}
```

### Codes de réponse

| Code | Description |
|------|-------------|
| 200 | Succès |
| 400 | Paramètres invalides |

---

## GET /api/ammunition/:id

Récupère les détails d'une munition spécifique par son ID.

### Requête

**URL:** `GET https://api.nivmizz7.fr/api/ammunition/{id}`

### Paramètres de chemin

| Paramètre | Type | Obligatoire | Description |
|-----------|------|-------------|-------------|
| `id` | string | Oui | L'ID unique de la munition |

### Exemple de requête

```bash
# Récupérer une munition spécifique
curl "https://api.nivmizz7.fr/api/ammunition/507a1cc571423cdc2b000407"
```

### Réponse

```json
{
  "id": "507a1cc571423cdc2b000407",
  "name": "5.45x39 BP",
  "shortName": "BP",
  "caliber": "Caliber545x39",
  "ballistics": {
    "damage": 48,
    "penetration": 39,
    "armorDamage": 62
  },
  "properties": {
    "cost": 150
  }
}
```

### Codes de réponse

| Code | Description |
|------|-------------|
| 200 | Munition trouvée |
| 404 | Munition non trouvée |

---

## GET /api/ammunition/calibers/list

Récupère la liste de tous les calibres de munitions disponibles.

### Requête

**URL:** `GET https://api.nivmizz7.fr/api/ammunition/calibers/list`

### Exemple de requête

```bash
# Récupérer tous les calibres disponibles
curl "https://api.nivmizz7.fr/api/ammunition/calibers/list"
```

### Réponse

```json
{
  "calibers": [
    "Caliber12ga",
    "Caliber209",
    "Caliber20ga",
    "Caliber366TKM",
    "Caliber545x39",
    "Caliber556x45NATO",
    "Caliber762x25TT",
    "Caliber762x39",
    "Caliber762x54R",
    "Caliber9x19PARA",
    "Caliber9x21",
    "Caliber9x33R"
  ]
}
```

### Codes de réponse

| Code | Description |
|------|-------------|
| 200 | Succès |

---

## Propriétés d'une munition

### Propriétés principales

| Propriété | Type | Description |
|-----------|------|-------------|
| `id` | string | Identifiant unique de la munition |
| `name` | string | Nom complet de la munition |
| `shortName` | string | Nom court de la munition |
| `caliber` | string | Calibre de la munition |

### Propriétés balistiques (ballistics)

| Propriété | Type | Description |
|-----------|------|-------------|
| `damage` | number | Dégâts infligés |
| `penetration` | number | Pouvoir de pénétration (0-100) |
| `armorDamage` | number | Dégâts à l'armure |

### Propriétés supplémentaires (properties)

| Propriété | Type | Description |
|-----------|------|-------------|
| `cost` | number | Coût de la munition |

---

## Tri automatique

Les résultats sont **automatiquement triés par dégâts décroissants**. Les munitions avec les dégâts les plus élevés apparaissent en premier.

---

## Cas d'usage courants

### Trouver tous les calibres disponibles
```bash
curl "https://api.nivmizz7.fr/api/ammunition/calibers/list"
```

### Récupérer toutes les munitions d'un calibre spécifique
```bash
curl "https://api.nivmizz7.fr/api/ammunition?caliber=545x39&limit=50"
```

### Trouver les munitions les plus puissantes
```bash
# Les résultats sont déjà triés par dégâts décroissants
curl "https://api.nivmizz7.fr/api/ammunition?limit=10"
```

### Rechercher une munition par nom partiel
```bash
# Trouver toutes les munitions BP
curl "https://api.nivmizz7.fr/api/ammunition?search=BP&limit=20"
```

### Combiner calibre et recherche
```bash
# Trouver les munitions BP du calibre 545x39
curl "https://api.nivmizz7.fr/api/ammunition?caliber=545x39&search=BP"
```

---

## Notes

- Les résultats sont triés par **dégâts décroissants** (du plus puissant au moins puissant)
- La recherche est **insensible à la casse**
- La recherche fonctionne sur les champs `name` et `shortName`
- Les calibres sont retournés en **ordre alphabétique**
- L'ID du calibre est utilisé pour le filtrage, pas le nom lisible
