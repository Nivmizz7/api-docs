# Endpoint: Quests

The Quests endpoint allows you to retrieve all available quests in Escape from Tarkov.

## GET /api/quests

Retrieves the complete list of quests with filtering and search.

### Request

**URL:** `GET https://api.nivmizz7.fr/api/quests`

### Query Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `trader` | string | No | Filter by trader name offering the quest |
| `search` | string | No | Search by quest title or name |
| `limit` | integer | No | Maximum number of quests to return |
| `offset` | integer | No | Number of quests to skip (default: 0) |

### Example Request

```bash
# Retrieve the first 20 quests
curl "https://api.nivmizz7.fr/api/quests?limit=20"

# Filter by trader
curl "https://api.nivmizz7.fr/api/quests?trader=Prapor&limit=30"

# Search for a specific quest
curl "https://api.nivmizz7.fr/api/quests?search=Punisher&limit=10"

# Combine filtering and pagination
curl "https://api.nivmizz7.fr/api/quests?trader=Peacekeeper&limit=15&offset=0"
```

### Response

```json
{
  "total": 243,
  "count": 20,
  "offset": 0,
  "quests": [
    {
      "id": "5c51aac186f77412033199a2",
      "name": "Punisher",
      "title": "Punisher",
      "giver": "Prapor",
      "reward": {
        "experience": 2500,
        "items": [
          {
            "id": "5e00dca186f77412033199e7",
            "name": "Roubles",
            "count": 15000
          }
        ],
        "reputation": 0.03
      },
      "conditions": {
        "location": "interchange",
        "objectives": [
          {
            "target": "Unknown",
            "count": 3
          }
        ]
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

## GET /api/quests/:questId

Retrieves complete details of a specific quest.

### Request

**URL:** `GET https://api.nivmizz7.fr/api/quests/{questId}`

### Path Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `questId` | string | Yes | The unique ID of the quest |

### Example Request

```bash
# Retrieve a specific quest
curl "https://api.nivmizz7.fr/api/quests/5c51aac186f77412033199a2"
```

### Response

```json
{
  "id": "5c51aac186f77412033199a2",
  "name": "Punisher",
  "title": "Punisher",
  "giver": "Prapor",
  "description": "Kill Scavs in Streets of Tarkov using a Mosin Sniper Rifle",
  "reward": {
    "experience": 2500,
    "items": [
      {
        "id": "5e00dca186f77412033199e7",
        "name": "Roubles",
        "count": 15000
      }
    ],
    "reputation": 0.03
  },
  "conditions": {
    "location": "interchange",
    "level": 1,
    "objectives": [
      {
        "target": "Unknown",
        "count": 3
      }
    ]
  }
}
```

### Response Codes

| Code | Description |
|------|-------------|
| 200 | Quest found |
| 404 | Quest not found |

---

## Quest Properties

### Main Properties

| Property | Type | Description |
|----------|------|-------------|
| `id` | string | Unique identifier of the quest |
| `name` | string | Quest name |
| `title` | string | Quest title |
| `giver` | string | Name of the trader offering the quest |
| `description` | string | Detailed description of the quest |

### Reward Properties (reward)

| Property | Type | Description |
|----------|------|-------------|
| `experience` | number | Experience points earned |
| `items` | array | Items given as reward |
| `reputation` | number | Reputation gains with the trader |

### Condition Properties (conditions)

| Property | Type | Description |
|----------|------|-------------|
| `location` | string | Location where the quest takes place |
| `level` | number | Minimum required level |
| `objectives` | array | Objectives to accomplish |

---

## Available Traders

| Trader | ID | Description |
|--------|----|----|
| Prapor | unknown | Military supplies supplier |
| Therapist | unknown | Medical supplies supplier |
| Fence | unknown | Scav trader |
| Peacekeeper | unknown | NATO supplies trader |
| Mechanic | unknown | Weapons and parts specialist |
| Ragman | unknown | Clothing and equipment supplier |
| Jaeger | unknown | Outdoor survival specialist |
| Skier | unknown | Contraband goods trader |
| Lightkeeper | unknown | New Shoreline trader |

---

## Common Use Cases

### Get all quests from a specific trader
```bash
curl "https://api.nivmizz7.fr/api/quests?trader=Prapor&limit=50"
```

### Search for a quest series
```bash
# Find all "Punisher" quests
curl "https://api.nivmizz7.fr/api/quests?search=Punisher"
```

### Get the first 10 available quests
```bash
curl "https://api.nivmizz7.fr/api/quests?limit=10&offset=0"
```

### Paginate through all quests
```bash
# Page 1
curl "https://api.nivmizz7.fr/api/quests?limit=50&offset=0"

# Page 2
curl "https://api.nivmizz7.fr/api/quests?limit=50&offset=50"

# Page 3
curl "https://api.nivmizz7.fr/api/quests?limit=50&offset=100"
```

### Search for quests from a specific trader
```bash
curl "https://api.nivmizz7.fr/api/quests?trader=Peacekeeper&search=Test&limit=20"
```

---

## Notes

- Search is **case-insensitive**
- Search works on `title` and `name` fields
- Total quests exceed 240
- Quests are progressive and often require minimum levels
- Some quests may have prerequisites from other quests
- Rewards are cumulative in a quest progression

## GET /api/quests

Récupère la liste complète des quêtes avec filtrage et recherche.

### Requête

**URL:** `GET https://api.nivmizz7.fr/api/quests`

### Paramètres de requête

| Paramètre | Type | Obligatoire | Description |
|-----------|------|-------------|-------------|
| `trader` | string | Non | Filtrer par nom du commerçant qui propose la quête |
| `search` | string | Non | Recherche par titre ou nom de la quête |
| `limit` | integer | Non | Nombre maximum de quêtes à retourner |
| `offset` | integer | Non | Nombre de quêtes à ignorer (défaut: 0) |

### Exemple de requête

```bash
# Récupérer les 20 premières quêtes
curl "https://api.nivmizz7.fr/api/quests?limit=20"

# Filtrer par commerçant
curl "https://api.nivmizz7.fr/api/quests?trader=Prapor&limit=30"

# Rechercher une quête spécifique
curl "https://api.nivmizz7.fr/api/quests?search=Punisher&limit=10"

# Combiner filtrage et pagination
curl "https://api.nivmizz7.fr/api/quests?trader=Peacekeeper&limit=15&offset=0"
```

### Réponse

```json
{
  "total": 243,
  "count": 20,
  "offset": 0,
  "quests": [
    {
      "id": "5c51aac186f77412033199a2",
      "name": "Punisher",
      "title": "Punisher",
      "giver": "Prapor",
      "reward": {
        "experience": 2500,
        "items": [
          {
            "id": "5e00dca186f77412033199e7",
            "name": "Roubles",
            "count": 15000
          }
        ],
        "reputation": 0.03
      },
      "conditions": {
        "location": "interchange",
        "objectives": [
          {
            "target": "Unknown",
            "count": 3
          }
        ]
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

## GET /api/quests/:questId

Récupère les détails complets d'une quête spécifique.

### Requête

**URL:** `GET https://api.nivmizz7.fr/api/quests/{questId}`

### Paramètres de chemin

| Paramètre | Type | Obligatoire | Description |
|-----------|------|-------------|-------------|
| `questId` | string | Oui | L'ID unique de la quête |

### Exemple de requête

```bash
# Récupérer une quête spécifique
curl "https://api.nivmizz7.fr/api/quests/5c51aac186f77412033199a2"
```

### Réponse

```json
{
  "id": "5c51aac186f77412033199a2",
  "name": "Punisher",
  "title": "Punisher",
  "giver": "Prapor",
  "description": "Kill Scavs in Streets of Tarkov using a Mosin Sniper Rifle",
  "reward": {
    "experience": 2500,
    "items": [
      {
        "id": "5e00dca186f77412033199e7",
        "name": "Roubles",
        "count": 15000
      }
    ],
    "reputation": 0.03
  },
  "conditions": {
    "location": "interchange",
    "level": 1,
    "objectives": [
      {
        "target": "Unknown",
        "count": 3
      }
    ]
  }
}
```

### Codes de réponse

| Code | Description |
|------|-------------|
| 200 | Quête trouvée |
| 404 | Quête non trouvée |

---

## Propriétés d'une quête

### Propriétés principales

| Propriété | Type | Description |
|-----------|------|-------------|
| `id` | string | Identifiant unique de la quête |
| `name` | string | Nom de la quête |
| `title` | string | Titre de la quête |
| `giver` | string | Nom du commerçant qui propose la quête |
| `description` | string | Description détaillée de la quête |

### Propriétés de récompense (reward)

| Propriété | Type | Description |
|-----------|------|-------------|
| `experience` | number | Points d'expérience gagnés |
| `items` | array | Articles donnés en récompense |
| `reputation` | number | Gains de réputation auprès du commerçant |

### Propriétés de condition (conditions)

| Propriété | Type | Description |
|-----------|------|-------------|
| `location` | string | Localisation où la quête se déroule |
| `level` | number | Niveau minimum requis |
| `objectives` | array | Les objectifs à accomplir |

---

## Commerçants disponibles

| Commerçant | ID | Description |
|-----------|----|----|
| Prapor | unknown | Fournisseur de fournitures militaires |
| Therapist | unknown | Fournisseur de fournitures médicales |
| Fence | unknown | Commerçant de Scav |
| Peacekeeper | unknown | Commerçant de fournitures OTAN |
| Mechanic | unknown | Spécialiste des armes et pièces |
| Ragman | unknown | Fournisseur de vêtements et équipements |
| Jaeger | unknown | Spécialiste de survie en plein air |
| Skier | unknown | Commerçant de biens de contrebande |
| Lightkeeper | unknown | Nouveau commerçant des Shoreline |

---

## Cas d'usage courants

### Obtenir toutes les quêtes d'un commerçant spécifique
```bash
curl "https://api.nivmizz7.fr/api/quests?trader=Prapor&limit=50"
```

### Rechercher une série de quêtes
```bash
# Trouver toutes les quêtes "Punisher"
curl "https://api.nivmizz7.fr/api/quests?search=Punisher"
```

### Obtenir les 10 premières quêtes disponibles
```bash
curl "https://api.nivmizz7.fr/api/quests?limit=10&offset=0"
```

### Paginer à travers toutes les quêtes
```bash
# Page 1
curl "https://api.nivmizz7.fr/api/quests?limit=50&offset=0"

# Page 2
curl "https://api.nivmizz7.fr/api/quests?limit=50&offset=50"

# Page 3
curl "https://api.nivmizz7.fr/api/quests?limit=50&offset=100"
```

### Chercher des quêtes d'un commerçant spécifique
```bash
curl "https://api.nivmizz7.fr/api/quests?trader=Peacekeeper&search=Test&limit=20"
```

---

## Notes

- La recherche est **insensible à la casse**
- La recherche fonctionne sur les champs `title` et `name`
- Le nombre total de quêtes dépasse 240
- Les quêtes sont progressives et requièrent souvent des niveaux minimum
- Certaines quêtes peuvent avoir des prérequis d'autres quêtes
- Les récompenses sont cumulatives dans une progression de quête
