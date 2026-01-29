# Endpoint: Items

The Items endpoint allows you to retrieve all available items in Escape from Tarkov.

---

## GET /api/items

**Description:** Retrieves the complete list of items with pagination and search.

**Base URL:** `https://api.nivmizz7.fr`

### Syntax

```
GET /api/items?search={query}&limit={limit}&offset={offset}
```

### Query Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `search` | string | No | - | Search by item name or shortName |
| `limit` | integer | No | 100 | Maximum number of items to return |
| `offset` | integer | No | 0 | Number of items to skip for pagination |

### Example Request

```bash
# Retrieve the first 10 items
curl "https://api.nivmizz7.fr/api/items?limit=10"

# Search for a specific item
curl "https://api.nivmizz7.fr/api/items?search=ak47"

# Pagination
curl "https://api.nivmizz7.fr/api/items?limit=20&offset=40"
```

### Response

```json
{
  "total": 1250,
  "count": 10,
  "offset": 0,
  "items": [
    {
      "id": "507a1cc571423cdc2b000407",
      "name": "5.45x39 BP",
      "shortName": "BP",
      "description": "5.45x39 BP - Armor-piercing bullet",
      "rarity": "uncommon",
      "handbook": {
        "parent": "5448bc234bdc2d3d268b457f",
        "price": 150
      },
      "properties": {
        "ammo": {
          "caliber": "Caliber545x39",
          "type": "Armor-piercing"
        }
      }
    }
  ]
}
```

### Response Codes

| Code | Description |
|------|-------------|
| 200  | Success - Items retrieved |
| 400  | Bad Request - Invalid parameters |
| 500  | Internal Server Error |

---

## GET /api/items/:id

**Description:** Retrieves details of a specific item by ID.

**Base URL:** `https://api.nivmizz7.fr`

### Syntax

```
GET /api/items/{id}
```

### Path Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique ID of the item |

### Example Request

```bash
# Retrieve a specific item
curl "https://api.nivmizz7.fr/api/items/507a1cc571423cdc2b000407"
```

### Response

```json
{
  "id": "507a1cc571423cdc2b000407",
  "name": "5.45x39 BP",
  "shortName": "BP",
  "description": "5.45x39 BP - Armor-piercing bullet",
  "rarity": "uncommon",
  "handbook": {
    "parent": "5448bc234bdc2d3d268b457f",
    "price": 150
  },
  "properties": {
    "ammo": {
      "caliber": "Caliber545x39",
      "type": "Armor-piercing"
    }
  }
}
```

### Response Codes

| Code | Description |
|------|-------------|
| 200  | Success - Item found |
| 404  | Not Found - Item not found |
| 500  | Internal Server Error |

---

## Item Properties

### Main Properties

| Property | Type | Description |
|----------|------|-------------|
| `id` | string | Unique identifier of the item |
| `name` | string | Full name of the item |
| `shortName` | string | Short name of the item |
| `description` | string | Item description |
| `rarity` | string | Item rarity (common, uncommon, rare, etc.) |

### Sub-properties

#### handbook
```json
{
  "parent": "string",
  "price": "number"
}
```

#### properties
Contains various properties based on item type:
- `ammo` - Ammunition properties
- `armor` - Armor properties
- `weapon` - Weapon properties
- etc.

---

## Common Use Cases

### Search for items of a specific rarity
```bash
curl "https://api.nivmizz7.fr/api/items?search=uncommon&limit=50"
```

### Paginate through all items
```bash
# Page 1
curl "https://api.nivmizz7.fr/api/items?limit=100&offset=0"

# Page 2
curl "https://api.nivmizz7.fr/api/items?limit=100&offset=100"

# Page 3
curl "https://api.nivmizz7.fr/api/items?limit=100&offset=200"
```

### Search for an item by partial name
```bash
# Find all items containing "gun"
curl "https://api.nivmizz7.fr/api/items?search=gun&limit=20"
```

---

## Notes

- Search is **case-insensitive**
- Search works on `name` and `shortName` fields
- Without pagination, the server returns ALL items (watch performance)
- Items are uniquely identified by their `id`

## GET /api/items

Récupère la liste complète des articles avec pagination et recherche.

### Requête

**URL:** `GET https://api.nivmizz7.fr/api/items`

### Paramètres de requête

| Paramètre | Type | Obligatoire | Description |
|-----------|------|-------------|-------------|
| `search` | string | Non | Recherche par nom ou shortName de l'article |
| `limit` | integer | Non | Nombre maximum d'articles à retourner |
| `offset` | integer | Non | Nombre d'articles à ignorer (défaut: 0) |

### Exemple de requête

```bash
# Récupérer les 10 premiers articles
curl "https://api.nivmizz7.fr/api/items?limit=10"

# Rechercher un article spécifique
curl "https://api.nivmizz7.fr/api/items?search=ak47"

# Pagination
curl "https://api.nivmizz7.fr/api/items?limit=20&offset=40"
```

### Réponse

```json
{
  "total": 1250,
  "count": 10,
  "offset": 0,
  "items": [
    {
      "id": "507a1cc571423cdc2b000407",
      "name": "5.45x39 BP",
      "shortName": "BP",
      "description": "5.45x39 BP - Armor-piercing bullet",
      "rarity": "uncommon",
      "handbook": {
        "parent": "5448bc234bdc2d3d268b457f",
        "price": 150
      },
      "properties": {
        "ammo": {
          "caliber": "Caliber545x39",
          "type": "Armor-piercing"
        }
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

## GET /api/items/:id

Récupère les détails d'un article spécifique par son ID.

### Requête

**URL:** `GET https://api.nivmizz7.fr/api/items/{id}`

### Paramètres de chemin

| Paramètre | Type | Obligatoire | Description |
|-----------|------|-------------|-------------|
| `id` | string | Oui | L'ID unique de l'article |

### Exemple de requête

```bash
# Récupérer un article spécifique
curl "https://api.nivmizz7.fr/api/items/507a1cc571423cdc2b000407"
```

### Réponse

```json
{
  "id": "507a1cc571423cdc2b000407",
  "name": "5.45x39 BP",
  "shortName": "BP",
  "description": "5.45x39 BP - Armor-piercing bullet",
  "rarity": "uncommon",
  "handbook": {
    "parent": "5448bc234bdc2d3d268b457f",
    "price": 150
  },
  "properties": {
    "ammo": {
      "caliber": "Caliber545x39",
      "type": "Armor-piercing"
    }
  }
}
```

### Codes de réponse

| Code | Description |
|------|-------------|
| 200 | Article trouvé |
| 404 | Article non trouvé |

---

## Propriétés d'un article

### Propriétés principales

| Propriété | Type | Description |
|-----------|------|-------------|
| `id` | string | Identifiant unique de l'article |
| `name` | string | Nom complet de l'article |
| `shortName` | string | Nom court de l'article |
| `description` | string | Description de l'article |
| `rarity` | string | Rareté de l'article (common, uncommon, rare, etc.) |

### Sous-propriétés

#### handbook
```json
{
  "parent": "string",
  "price": "number"
}
```

#### properties
Contient diverses propriétés selon le type d'article :
- `ammo` - Propriétés des munitions
- `armor` - Propriétés de l'armure
- `weapon` - Propriétés des armes
- etc.

---

## Cas d'usage courants

### Chercher tous les articles d'une rareté spécifique
```bash
curl "https://api.nivmizz7.fr/api/items?search=uncommon&limit=50"
```

### Paginer à travers tous les articles
```bash
# Page 1
curl "https://api.nivmizz7.fr/api/items?limit=100&offset=0"

# Page 2
curl "https://api.nivmizz7.fr/api/items?limit=100&offset=100"

# Page 3
curl "https://api.nivmizz7.fr/api/items?limit=100&offset=200"
```

### Rechercher un article par nom partiel
```bash
# Trouver tous les articles contenant "gun"
curl "https://api.nivmizz7.fr/api/items?search=gun&limit=20"
```

---

## Notes

- La recherche est **insensible à la casse** (case-insensitive)
- La recherche fonctionne sur les champs `name` et `shortName`
- Sans pagination, le serveur retourne TOUS les articles (attention à la performance)
- Les articles sont identifiés de manière unique par leur `id`
