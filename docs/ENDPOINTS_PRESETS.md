# Endpoint: Item Presets

The Item Presets endpoint allows you to retrieve preset items (weapon configurations, equipment, etc.) available in Escape from Tarkov.

## GET /api/item-presets

Retrieves the complete list of item presets with filtering and search.

### Request

**URL:** `GET https://api.nivmizz7.fr/api/item-presets`

### Query Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `baseId` | string | No | Filter by base item ID |
| `search` | string | No | Search by preset name |
| `limit` | integer | No | Maximum number of presets to return |
| `offset` | integer | No | Number of presets to skip (default: 0) |

### Example Request

```bash
# Retrieve the first 20 presets
curl "https://api.nivmizz7.fr/api/item-presets?limit=20"

# Filter by base item
curl "https://api.nivmizz7.fr/api/item-presets?baseId=5ac66d9b5acfc40198510692"

# Search for a specific preset
curl "https://api.nivmizz7.fr/api/item-presets?search=Modular+AK&limit=10"

# Combine filtering and pagination
curl "https://api.nivmizz7.fr/api/item-presets?baseId=5ac66d9b5acfc40198510692&limit=15&offset=0"
```

### Response

```json
{
  "total": 450,
  "count": 20,
  "offset": 0,
  "presets": [
    {
      "id": "5e00dca186f77412033199e7",
      "name": "Modular AK 74M",
      "baseId": "5ac66d9b5acfc40198510692",
      "description": "Fully modular AK 74M build",
      "ergonomics": 82,
      "weight": 3.5,
      "recoil": 245,
      "accuracy": 88,
      "mods": [
        {
          "slot": "barrel",
          "item": "5a0eea80fcdbcb00165aa685"
        },
        {
          "slot": "stock",
          "item": "5a0eea80fcdbcb00165aa686"
        }
      ]
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

## GET /api/item-presets/:id

Retrieves complete details of a specific preset.

### Request

**URL:** `GET https://api.nivmizz7.fr/api/item-presets/{id}`

### Path Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique ID of the preset |

### Example Request

```bash
# Retrieve a specific preset
curl "https://api.nivmizz7.fr/api/item-presets/5e00dca186f77412033199e7"
```

### Response

```json
{
  "id": "5e00dca186f77412033199e7",
  "name": "Modular AK 74M",
  "baseId": "5ac66d9b5acfc40198510692",
  "description": "Fully modular AK 74M build with optimal balance",
  "ergonomics": 82,
  "weight": 3.5,
  "recoil": 245,
  "accuracy": 88,
  "fireRate": 650,
  "damagePerShot": 48,
  "mods": [
    {
      "slot": "barrel",
      "item": "5a0eea80fcdbcb00165aa685",
      "name": "Magpul MOE-K2 Carbine Stock"
    },
    {
      "slot": "stock",
      "item": "5a0eea80fcdbcb00165aa686",
      "name": "SilencerCo Hybrid 46"
    },
    {
      "slot": "handguard",
      "item": "5a0eea80fcdbcb00165aa687",
      "name": "Magpul MOE-K2 Handguard"
    }
  ]
}
```

### Response Codes

| Code | Description |
|------|-------------|
| 200 | Preset found |
| 404 | Preset not found |

---

## Preset Properties

### Main Properties

| Property | Type | Description |
|----------|------|-------------|
| `id` | string | Unique identifier of the preset |
| `name` | string | Name of the preset |
| `baseId` | string | ID of the base item (weapon) |
| `description` | string | Description of the preset |

### Performance Properties

| Property | Type | Description |
|----------|------|-------------|
| `ergonomics` | number | Overall ergonomics (higher = better) |
| `weight` | number | Total weight in kg |
| `recoil` | number | Recoil control (lower = better) |
| `accuracy` | number | Accuracy percentage |
| `fireRate` | number | Fire rate in shots/min |
| `damagePerShot` | number | Damage per shot |

### Additional Properties

#### mods
List of applied modifications:
```json
{
  "slot": "barrel",
  "item": "5a0eea80fcdbcb00165aa685",
  "name": "SilencerCo Hybrid 46"
}
```

Common slot types:
- `barrel` - Barrel
- `stock` - Stock
- `handguard` - Handguard
- `gas_tube` - Gas tube
- `dust_cover` - Dust cover
- `charging_handle` - Charging handle
- `bolt_carrier` - Bolt carrier
- `tactical_comp` - Muzzle brake
- `rear_sight` - Rear sight
- `front_sight` - Front sight
- `scope` - Scope
- `mount` - Optical mount
- `magazine` - Magazine

---

## Base Item Types

| Type | Description |
|------|-------------|
| Assault Rifles | Assault rifles (AK, M4, etc.) |
| Sniper Rifles | Sniper rifles (Mosin, SVD, etc.) |
| Shotguns | Pump/semi-automatic shotguns |
| Submachine Guns | Submachine guns (MP5, etc.) |
| Pistols | Semi-automatic pistols |
| Machine Guns | Machine guns (PKM, etc.) |
| Special Weapons | Special weapons (Grenade Launcher, etc.) |

---

## Common Use Cases

### Get all presets
```bash
curl "https://api.nivmizz7.fr/api/item-presets?limit=100"
```

### Find presets for a specific weapon
```bash
curl "https://api.nivmizz7.fr/api/item-presets?baseId=5ac66d9b5acfc40198510692&limit=50"
```

### Search presets by name
```bash
curl "https://api.nivmizz7.fr/api/item-presets?search=AK+74M&limit=20"
```

### Find the preset with best ergonomics
```bash
curl "https://api.nivmizz7.fr/api/item-presets?limit=100" | jq 'max_by(.ergonomics)'
```

### Find presets with lowest recoil
```bash
curl "https://api.nivmizz7.fr/api/item-presets?limit=100" | jq 'sort_by(.recoil) | .[0:5]'
```

### Compare modifications between presets
```bash
curl "https://api.nivmizz7.fr/api/item-presets/5e00dca186f77412033199e7" | jq '.mods'
```

### Filter by ergonomics range
```bash
curl "https://api.nivmizz7.fr/api/item-presets?limit=100" | jq '.[] | select(.ergonomics >= 75)'
```

---

## Notes

- Presets provide optimized configurations for different playstyles
- Performance properties are calculated in real-time based on modifications
- Each weapon can have multiple presets with different purposes (CQB, Distance, Raid, PvP)
- Modifications affect all weapon attributes
- Custom presets can be created in-game by players
- Ergonomics affects ADS speed and recoil control
- Weight affects radiation costs and movement handling
- Optimized presets vary by gameplay context (Raids, PvP, Quests)

## GET /api/item-presets

Récupère la liste complète des préréglages d'articles avec filtrage et recherche.

### Requête

**URL:** `GET https://api.nivmizz7.fr/api/item-presets`

### Paramètres de requête

| Paramètre | Type | Obligatoire | Description |
|-----------|------|-------------|-------------|
| `baseId` | string | Non | Filtrer par ID de l'article de base |
| `search` | string | Non | Recherche par nom du préréglage |
| `limit` | integer | Non | Nombre maximum de préréglages à retourner |
| `offset` | integer | Non | Nombre de préréglages à ignorer (défaut: 0) |

### Exemple de requête

```bash
# Récupérer les 20 premiers préréglages
curl "https://api.nivmizz7.fr/api/item-presets?limit=20"

# Filtrer par article de base
curl "https://api.nivmizz7.fr/api/item-presets?baseId=5ac66d9b5acfc40198510692"

# Rechercher un préréglage spécifique
curl "https://api.nivmizz7.fr/api/item-presets?search=Modular+AK&limit=10"

# Combiner filtrage et pagination
curl "https://api.nivmizz7.fr/api/item-presets?baseId=5ac66d9b5acfc40198510692&limit=15&offset=0"
```

### Réponse

```json
{
  "total": 450,
  "count": 20,
  "offset": 0,
  "presets": [
    {
      "id": "5e00dca186f77412033199e7",
      "name": "Modular AK 74M",
      "baseId": "5ac66d9b5acfc40198510692",
      "description": "Fully modular AK 74M build",
      "ergonomics": 82,
      "weight": 3.5,
      "recoil": 245,
      "accuracy": 88,
      "mods": [
        {
          "slot": "barrel",
          "item": "5a0eea80fcdbcb00165aa685"
        },
        {
          "slot": "stock",
          "item": "5a0eea80fcdbcb00165aa686"
        }
      ]
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

## GET /api/item-presets/:id

Récupère les détails complets d'un préréglage spécifique.

### Requête

**URL:** `GET https://api.nivmizz7.fr/api/item-presets/{id}`

### Paramètres de chemin

| Paramètre | Type | Obligatoire | Description |
|-----------|------|-------------|-------------|
| `id` | string | Oui | L'ID unique du préréglage |

### Exemple de requête

```bash
# Récupérer un préréglage spécifique
curl "https://api.nivmizz7.fr/api/item-presets/5e00dca186f77412033199e7"
```

### Réponse

```json
{
  "id": "5e00dca186f77412033199e7",
  "name": "Modular AK 74M",
  "baseId": "5ac66d9b5acfc40198510692",
  "description": "Fully modular AK 74M build with optimal balance",
  "ergonomics": 82,
  "weight": 3.5,
  "recoil": 245,
  "accuracy": 88,
  "fireRate": 650,
  "damagePerShot": 48,
  "mods": [
    {
      "slot": "barrel",
      "item": "5a0eea80fcdbcb00165aa685",
      "name": "Magpul MOE-K2 Carbine Stock"
    },
    {
      "slot": "stock",
      "item": "5a0eea80fcdbcb00165aa686",
      "name": "SilencerCo Hybrid 46"
    },
    {
      "slot": "handguard",
      "item": "5a0eea80fcdbcb00165aa687",
      "name": "Magpul MOE-K2 Handguard"
    }
  ]
}
```

### Codes de réponse

| Code | Description |
|------|-------------|
| 200 | Préréglage trouvé |
| 404 | Préréglage non trouvé |

---

## Propriétés d'un préréglage

### Propriétés principales

| Propriété | Type | Description |
|-----------|------|-------------|
| `id` | string | Identifiant unique du préréglage |
| `name` | string | Nom du préréglage |
| `baseId` | string | ID de l'article de base (arme) |
| `description` | string | Description du préréglage |

### Propriétés de performance

| Propriété | Type | Description |
|-----------|------|-------------|
| `ergonomics` | number | Ergonomie globale (plus élevé = mieux) |
| `weight` | number | Poids total en kg |
| `recoil` | number | Contrôle du recul (plus bas = mieux) |
| `accuracy` | number | Précision en pourcentage |
| `fireRate` | number | Cadence de tir en coups/min |
| `damagePerShot` | number | Dégâts par coup |

### Propriétés supplémentaires

#### mods
Liste des modifications appliquées:
```json
{
  "slot": "barrel",
  "item": "5a0eea80fcdbcb00165aa685",
  "name": "SilencerCo Hybrid 46"
}
```

Types de slots courants:
- `barrel` - Canon
- `stock` - Crosse
- `handguard` - Garde-main
- `gas_tube` - Tube à gaz
- `dust_cover` - Couvre-poussière
- `charging_handle` - Manette de chargement
- `bolt_carrier` - Ensemble de culasse
- `tactical_comp` - Compensateur de tir
- `rear_sight` - Visée arrière
- `front_sight` - Visée avant
- `scope` - Lunette de visée
- `mount` - Montage optique
- `magazine` - Chargeur

---

## Types d'articles de base

| Type | Description |
|------|-------------|
| Assault Rifles | Fusils d'assaut (AK, M4, etc.) |
| Sniper Rifles | Fusils de précision (Mosin, SVD, etc.) |
| Shotguns | Fusils à pompe/semi-automatiques |
| Submachine Guns | Pistolets mitrailleurs (MP5, etc.) |
| Pistols | Pistolets semi-automatiques |
| Machine Guns | Mitrailleuses (PKM, etc.) |
| Special Weapons | Armes spéciales (Grenade Launcher, etc.) |

---

## Cas d'usage courants

### Obtenir tous les préréglages
```bash
curl "https://api.nivmizz7.fr/api/item-presets?limit=100"
```

### Trouver des préréglages pour une arme spécifique
```bash
curl "https://api.nivmizz7.fr/api/item-presets?baseId=5ac66d9b5acfc40198510692&limit=50"
```

### Rechercher des préréglages par nom
```bash
curl "https://api.nivmizz7.fr/api/item-presets?search=AK+74M&limit=20"
```

### Trouver le préréglage avec la meilleure ergonomie
```bash
curl "https://api.nivmizz7.fr/api/item-presets?limit=100" | jq 'max_by(.ergonomics)'
```

### Trouver les préréglages avec le plus bas recul
```bash
curl "https://api.nivmizz7.fr/api/item-presets?limit=100" | jq 'sort_by(.recoil) | .[0:5]'
```

### Comparer les modifications entre préréglages
```bash
curl "https://api.nivmizz7.fr/api/item-presets/5e00dca186f77412033199e7" | jq '.mods'
```

### Filtrer par gamme d'ergonomie
```bash
curl "https://api.nivmizz7.fr/api/item-presets?limit=100" | jq '.[] | select(.ergonomics >= 75)'
```

---

## Notes

- Les préréglages fournissent des configurations optimisées pour différents styles de jeu
- Les propriétés de performance sont calculées en temps réel en fonction des modifications
- Chaque arme peut avoir plusieurs préréglages avec différentes fins (CQB, Distance, Raid, PvP)
- Les modifications affectent tous les attributs de l'arme
- Les préréglages personnalisés peuvent être créés en jeu par les joueurs
- L'ergonomie affecte la vitesse d'ADS et la gestion du recoil
- Le poids affecte les coûts de radiation et la gestion des mouvements
- Les préréglages optimisés varient selon le contexte de jeu (Raids, PvP, Quêtes)
