# Endpoint: Editor (Special Modes)

Editor endpoints allow you to manage data directly via the API. **These endpoints are only available for administrators or in development mode.**

## GET /api/editor/types

Retrieves the list of all available data types and their counts.

### Request

**URL:** `GET https://api.nivmizz7.fr/api/editor/types`

### Query Parameters

No parameters required.

### Example Request

```bash
curl "https://api.nivmizz7.fr/api/editor/types"
```

### Response

```json
{
  "types": [
    {
      "key": "items",
      "count": 1250
    },
    {
      "key": "ammunition",
      "count": 240
    },
    {
      "key": "hideout",
      "count": 14
    },
    {
      "key": "quests",
      "count": 243
    },
    {
      "key": "traders",
      "count": 9
    },
    {
      "key": "maps",
      "count": 10
    },
    {
      "key": "itemPresets",
      "count": 450
    },
    {
      "key": "levels",
      "count": 71
    },
    {
      "key": "storyline",
      "count": 125
    }
  ]
}
```

### Response Codes

| Code | Description |
|------|-------------|
| 200 | Success |

---

## GET /api/editor/:type

Retrieves all elements of a specific data type.

### Request

**URL:** `GET https://api.nivmizz7.fr/api/editor/{type}`

### Path Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `type` | string | Yes | The data type (items, ammunition, traders, etc.) |

### Example Request

```bash
# Retrieve all traders
curl "https://api.nivmizz7.fr/api/editor/traders"

# Retrieve all levels
curl "https://api.nivmizz7.fr/api/editor/levels"
```

### Response

```json
{
  "prapor": {
    "id": "54cb50c76803fa8b248b4571",
    "name": "Prapor",
    "description": "Military Supplier",
    "currency": "RUB"
  },
  "therapist": {
    "id": "54cb57776803fa8b248b4582",
    "name": "Therapist",
    "description": "Medical Supplier",
    "currency": "RUB"
  }
}
```

### Response Codes

| Code | Description |
|------|-------------|
| 200 | Success |
| 404 | Data type not found |

---

## POST /api/editor/:type

Adds a new element to a specific data type. **Requires administrator authentication.**

### Request

**URL:** `POST https://api.nivmizz7.fr/api/editor/{type}`

### Path Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `type` | string | Yes | The data type (items, ammunition, traders, etc.) |

### Request Body

Depends on the data type being added. For object types, an `id` is required.

### Example Request

```bash
# Add new ammunition
curl -X POST "https://api.nivmizz7.fr/api/editor/ammunition" \
  -H "Content-Type: application/json" \
  -d '{
    "id": "new_ammo_123",
    "name": "New Ammunition Type",
    "caliber": "545x39",
    "ballistics": {
      "damage": 50,
      "penetration": 40
    }
  }'
```

### Response

```json
{
  "success": true,
  "data": {
    "id": "new_ammo_123",
    "name": "New Ammunition Type",
    "caliber": "545x39",
    "ballistics": {
      "damage": 50,
      "penetration": 40
    }
  }
}
```

### Response Codes

| Code | Description |
|------|-------------|
| 200 | Element created successfully |
| 400 | Invalid data (missing ID for objects) |
| 401 | Unauthorized |
| 404 | Data type not found |

---

## PUT /api/editor/:type/:id

Updates an existing element. **Requires administrator authentication.**

### Request

**URL:** `PUT https://api.nivmizz7.fr/api/editor/{type}/{id}`

### Path Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `type` | string | Yes | The data type |
| `id` | string | Yes | The ID of the element to update |

### Request Body

The updated data for the element.

### Example Request

```bash
# Update existing ammunition
curl -X PUT "https://api.nivmizz7.fr/api/editor/ammunition/507a1cc571423cdc2b000407" \
  -H "Content-Type: application/json" \
  -d '{
    "id": "507a1cc571423cdc2b000407",
    "name": "5.45x39 BP Updated",
    "ballistics": {
      "damage": 50,
      "penetration": 42
    }
  }'
```

### Response

```json
{
  "success": true,
  "data": {
    "id": "507a1cc571423cdc2b000407",
    "name": "5.45x39 BP Updated",
    "ballistics": {
      "damage": 50,
      "penetration": 42
    }
  }
}
```

### Response Codes

| Code | Description |
|------|-------------|
| 200 | Element updated successfully |
| 401 | Unauthorized |
| 404 | Data type or element not found |

---

## DELETE /api/editor/:type/:id

Deletes an element. **Requires administrator authentication.**

### Request

**URL:** `DELETE https://api.nivmizz7.fr/api/editor/{type}/{id}`

### Path Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `type` | string | Yes | The data type |
| `id` | string | Yes | The ID of the element to delete |

### Example Request

```bash
# Delete ammunition
curl -X DELETE "https://api.nivmizz7.fr/api/editor/ammunition/507a1cc571423cdc2b000407"
```

### Response

```json
{
  "success": true
}
```

### Response Codes

| Code | Description |
|------|-------------|
| 200 | Element deleted successfully |
| 401 | Unauthorized |
| 404 | Data type or element not found |

---

## POST /api/editor/save/:type

Saves data modifications to files. **Requires administrator authentication.**

### Request

**URL:** `POST https://api.nivmizz7.fr/api/editor/save/{type}`

### Path Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `type` | string | Yes | The data type to save |

### Example Request

```bash
# Save all ammunition modifications
curl -X POST "https://api.nivmizz7.fr/api/editor/save/ammunition"
```

### Response

```json
{
  "success": true,
  "message": "Data saved to file"
}
```

### Response Codes

| Code | Description |
|------|-------------|
| 200 | Data saved successfully |
| 400 | Invalid data type |
| 401 | Unauthorized |
| 404 | Data type not found |
| 500 | Save error |

---

## Important Notes

### Security

- **All POST, PUT and DELETE endpoints require administrator authentication**
- Modifications are first stored in memory
- You must call `POST /api/editor/save/{type}` to persist modifications
- The API must be restarted to load modified files

### Editing Workflow

1. **Retrieve data**: `GET /api/editor/{type}`
2. **Modify data**: Update locally
3. **Send modifications**:
   - Add: `POST /api/editor/{type}`
   - Update: `PUT /api/editor/{type}/{id}`
   - Delete: `DELETE /api/editor/{type}/{id}`
4. **Save**: `POST /api/editor/save/{type}`

### Supported Data Types

| Type | Description | File |
|------|-------------|---------|
| items | Game items | items.en.json |
| ammunition | Ammunition | ammunition.json |
| hideout | Hideout modules | hideout.json |
| quests | Available quests | quests.json |
| traders | Traders | traders.json |
| maps | Game maps | maps.json |
| itemPresets | Presets | item_presets.json |
| levels | Progression levels | levels.json |
| storyline | Narrative elements | storyline.json |

---

## Advanced Examples

### Create a chain of modifications

```bash
# 1. Add new ammunition
curl -X POST "https://api.nivmizz7.fr/api/editor/ammunition" \
  -H "Content-Type: application/json" \
  -d '{
    "id": "custom_ammo",
    "name": "Custom Ammo",
    "caliber": "545x39"
  }'

# 2. Update
curl -X PUT "https://api.nivmizz7.fr/api/editor/ammunition/custom_ammo" \
  -H "Content-Type: application/json" \
  -d '{
    "id": "custom_ammo",
    "name": "Custom Ammo Updated",
    "caliber": "545x39",
    "ballistics": {"damage": 55}
  }'

# 3. Save
curl -X POST "https://api.nivmizz7.fr/api/editor/save/ammunition"
```

### Duplicate an element

```bash
# Retrieve the original element
ORIGINAL=$(curl "https://api.nivmizz7.fr/api/editor/ammunition/507a1cc571423cdc2b000407")

# Create a copy with a new ID
curl -X POST "https://api.nivmizz7.fr/api/editor/ammunition" \
  -H "Content-Type: application/json" \
  -d "$(echo $ORIGINAL | jq '.id = "new_copy_id"')"
```

## GET /api/editor/types

Récupère la liste de tous les types de données disponibles et leurs comptes.

### Requête

**URL:** `GET https://api.nivmizz7.fr/api/editor/types`

### Paramètres de requête

Aucun paramètre n'est nécessaire.

### Exemple de requête

```bash
curl "https://api.nivmizz7.fr/api/editor/types"
```

### Réponse

```json
{
  "types": [
    {
      "key": "items",
      "count": 1250
    },
    {
      "key": "ammunition",
      "count": 240
    },
    {
      "key": "hideout",
      "count": 14
    },
    {
      "key": "quests",
      "count": 243
    },
    {
      "key": "traders",
      "count": 9
    },
    {
      "key": "maps",
      "count": 10
    },
    {
      "key": "itemPresets",
      "count": 450
    },
    {
      "key": "levels",
      "count": 71
    },
    {
      "key": "storyline",
      "count": 125
    }
  ]
}
```

### Codes de réponse

| Code | Description |
|------|-------------|
| 200 | Succès |

---

## GET /api/editor/:type

Récupère tous les éléments d'un type de données spécifique.

### Requête

**URL:** `GET https://api.nivmizz7.fr/api/editor/{type}`

### Paramètres de chemin

| Paramètre | Type | Obligatoire | Description |
|-----------|------|-------------|-------------|
| `type` | string | Oui | Le type de données (items, ammunition, traders, etc.) |

### Exemple de requête

```bash
# Récupérer tous les commerçants
curl "https://api.nivmizz7.fr/api/editor/traders"

# Récupérer tous les niveaux
curl "https://api.nivmizz7.fr/api/editor/levels"
```

### Réponse

```json
{
  "prapor": {
    "id": "54cb50c76803fa8b248b4571",
    "name": "Prapor",
    "description": "Military Supplier",
    "currency": "RUB"
  },
  "therapist": {
    "id": "54cb57776803fa8b248b4582",
    "name": "Therapist",
    "description": "Medical Supplier",
    "currency": "RUB"
  }
}
```

### Codes de réponse

| Code | Description |
|------|-------------|
| 200 | Succès |
| 404 | Type de données non trouvé |

---

## POST /api/editor/:type

Ajoute un nouvel élément à un type de données spécifique. **Nécessite une authentification administrateur.**

### Requête

**URL:** `POST https://api.nivmizz7.fr/api/editor/{type}`

### Paramètres de chemin

| Paramètre | Type | Obligatoire | Description |
|-----------|------|-------------|-------------|
| `type` | string | Oui | Le type de données (items, ammunition, traders, etc.) |

### Body de la requête

Dépend du type de données ajouté. Pour les types d'objets, un `id` est obligatoire.

### Exemple de requête

```bash
# Ajouter une nouvelle munition
curl -X POST "https://api.nivmizz7.fr/api/editor/ammunition" \
  -H "Content-Type: application/json" \
  -d '{
    "id": "new_ammo_123",
    "name": "New Ammunition Type",
    "caliber": "545x39",
    "ballistics": {
      "damage": 50,
      "penetration": 40
    }
  }'
```

### Réponse

```json
{
  "success": true,
  "data": {
    "id": "new_ammo_123",
    "name": "New Ammunition Type",
    "caliber": "545x39",
    "ballistics": {
      "damage": 50,
      "penetration": 40
    }
  }
}
```

### Codes de réponse

| Code | Description |
|------|-------------|
| 200 | Élément créé avec succès |
| 400 | Données invalides (ID manquant pour objets) |
| 401 | Non autorisé |
| 404 | Type de données non trouvé |

---

## PUT /api/editor/:type/:id

Met à jour un élément existant. **Nécessite une authentification administrateur.**

### Requête

**URL:** `PUT https://api.nivmizz7.fr/api/editor/{type}/{id}`

### Paramètres de chemin

| Paramètre | Type | Obligatoire | Description |
|-----------|------|-------------|-------------|
| `type` | string | Oui | Le type de données |
| `id` | string | Oui | L'ID de l'élément à mettre à jour |

### Body de la requête

Les données mises à jour pour l'élément.

### Exemple de requête

```bash
# Mettre à jour une munition existante
curl -X PUT "https://api.nivmizz7.fr/api/editor/ammunition/507a1cc571423cdc2b000407" \
  -H "Content-Type: application/json" \
  -d '{
    "id": "507a1cc571423cdc2b000407",
    "name": "5.45x39 BP Updated",
    "ballistics": {
      "damage": 50,
      "penetration": 42
    }
  }'
```

### Réponse

```json
{
  "success": true,
  "data": {
    "id": "507a1cc571423cdc2b000407",
    "name": "5.45x39 BP Updated",
    "ballistics": {
      "damage": 50,
      "penetration": 42
    }
  }
}
```

### Codes de réponse

| Code | Description |
|------|-------------|
| 200 | Élément mis à jour avec succès |
| 401 | Non autorisé |
| 404 | Type de données ou élément non trouvé |

---

## DELETE /api/editor/:type/:id

Supprime un élément. **Nécessite une authentification administrateur.**

### Requête

**URL:** `DELETE https://api.nivmizz7.fr/api/editor/{type}/{id}`

### Paramètres de chemin

| Paramètre | Type | Obligatoire | Description |
|-----------|------|-------------|-------------|
| `type` | string | Oui | Le type de données |
| `id` | string | Oui | L'ID de l'élément à supprimer |

### Exemple de requête

```bash
# Supprimer une munition
curl -X DELETE "https://api.nivmizz7.fr/api/editor/ammunition/507a1cc571423cdc2b000407"
```

### Réponse

```json
{
  "success": true
}
```

### Codes de réponse

| Code | Description |
|------|-------------|
| 200 | Élément supprimé avec succès |
| 401 | Non autorisé |
| 404 | Type de données ou élément non trouvé |

---

## POST /api/editor/save/:type

Sauvegarde les modifications de données dans les fichiers. **Nécessite une authentification administrateur.**

### Requête

**URL:** `POST https://api.nivmizz7.fr/api/editor/save/{type}`

### Paramètres de chemin

| Paramètre | Type | Obligatoire | Description |
|-----------|------|-------------|-------------|
| `type` | string | Oui | Le type de données à sauvegarder |

### Exemple de requête

```bash
# Sauvegarder toutes les modifications de munitions
curl -X POST "https://api.nivmizz7.fr/api/editor/save/ammunition"
```

### Réponse

```json
{
  "success": true,
  "message": "Data saved to file"
}
```

### Codes de réponse

| Code | Description |
|------|-------------|
| 200 | Données sauvegardées avec succès |
| 400 | Type de données invalide |
| 401 | Non autorisé |
| 404 | Type de données non trouvé |
| 500 | Erreur de sauvegarde |

---

## Notes importantes

### Sécurité

- **Tous les endpoints POST, PUT et DELETE nécessitent une authentification administrateur**
- Les modifications sont d'abord stockées en mémoire
- Vous devez appeler `POST /api/editor/save/{type}` pour persister les modifications
- L'API doit être redémarrée pour charger les fichiers modifiés

### Workflow d'édition

1. **Récupérer les données**: `GET /api/editor/{type}`
2. **Modifier les données**: Mettre à jour localement
3. **Envoyer les modifications**:
   - Ajouter: `POST /api/editor/{type}`
   - Mettre à jour: `PUT /api/editor/{type}/{id}`
   - Supprimer: `DELETE /api/editor/{type}/{id}`
4. **Sauvegarder**: `POST /api/editor/save/{type}`

### Types de données supportées

| Type | Description | Fichier |
|------|-------------|---------|
| items | Articles du jeu | items.en.json |
| ammunition | Munitions | ammunition.json |
| hideout | Modules de cachette | hideout.json |
| quests | Quêtes disponibles | quests.json |
| traders | Commerçants | traders.json |
| maps | Cartes de jeu | maps.json |
| itemPresets | Préréglages | item_presets.json |
| levels | Niveaux de progression | levels.json |
| storyline | Éléments narratifs | storyline.json |

---

## Exemples avancés

### Créer une chaîne de modifications

```bash
# 1. Ajouter une nouvelle munition
curl -X POST "https://api.nivmizz7.fr/api/editor/ammunition" \
  -H "Content-Type: application/json" \
  -d '{
    "id": "custom_ammo",
    "name": "Custom Ammo",
    "caliber": "545x39"
  }'

# 2. Mettre à jour
curl -X PUT "https://api.nivmizz7.fr/api/editor/ammunition/custom_ammo" \
  -H "Content-Type: application/json" \
  -d '{
    "id": "custom_ammo",
    "name": "Custom Ammo Updated",
    "caliber": "545x39",
    "ballistics": {"damage": 55}
  }'

# 3. Sauvegarder
curl -X POST "https://api.nivmizz7.fr/api/editor/save/ammunition"
```

### Dupliquer un élément

```bash
# Récupérer l'élément original
ORIGINAL=$(curl "https://api.nivmizz7.fr/api/editor/ammunition/507a1cc571423cdc2b000407")

# Créer une copie avec un nouvel ID
curl -X POST "https://api.nivmizz7.fr/api/editor/ammunition" \
  -H "Content-Type: application/json" \
  -d "$(echo $ORIGINAL | jq '.id = "new_copy_id"')"
```
