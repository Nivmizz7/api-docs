# Endpoint: Maps

The Maps endpoint allows you to retrieve information on all available maps (maps) in Escape from Tarkov.

## GET /api/maps

Retrieves the complete list of all maps with their properties.

### Request

**URL:** `GET https://api.nivmizz7.fr/api/maps`

### Query Parameters

No parameters required for this endpoint.

### Example Request

```bash
# Retrieve all maps
curl "https://api.nivmizz7.fr/api/maps"
```

### Response

```json
[
  {
    "id": "suburbs",
    "name": "Streets of Tarkov",
    "description": "Large urban street map with dynamic AI",
    "min_level": 1,
    "players": 24,
    "duration": 3600,
    "raidlevel": "Low-Medium",
    "image": "/assets/maps/streets.jpg",
    "spawns": [
      {
        "name": "Scav Spawn 1",
        "description": "Main spawn point"
      }
    ]
  },
  {
    "id": "interchange",
    "name": "Interchange",
    "description": "Large multi-story shopping mall",
    "min_level": 5,
    "players": 22,
    "duration": 2700,
    "raidlevel": "Low-Medium",
    "image": "/assets/maps/interchange.jpg",
    "spawns": [
      {
        "name": "South Spawns",
        "description": "Spawns at the south side"
      }
    ]
  }
]
```

### Response Codes

| Code | Description |
|------|-------------|
| 200 | Success |

---

## GET /api/maps/:mapId

Retrieves complete details of a specific map.

### Request

**URL:** `GET https://api.nivmizz7.fr/api/maps/{mapId}`

### Path Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `mapId` | string | Yes | The ID or name of the map |

### Example Request

```bash
# Retrieve a specific map by ID
curl "https://api.nivmizz7.fr/api/maps/interchange"

# Or by name
curl "https://api.nivmizz7.fr/api/maps/Interchange"
```

### Response

```json
{
  "id": "interchange",
  "name": "Interchange",
  "description": "Large multi-story shopping mall with shops, tunnels and safe rooms",
  "min_level": 5,
  "players": 22,
  "duration": 2700,
  "raidlevel": "Low-Medium",
  "image": "/assets/maps/interchange.jpg",
  "spawns": [
    {
      "name": "South Spawns",
      "description": "Spawns at the south side of Interchange"
    },
    {
      "name": "North Spawns",
      "description": "Spawns at the north side of Interchange"
    }
  ],
  "bosses": [
    {
      "name": "Kappa",
      "description": "Unique boss with high loot",
      "spawnRate": "10%"
    }
  ],
  "loot": [
    {
      "type": "highvalue",
      "location": "Shops",
      "examples": ["GPU", "Graphics Card"]
    }
  ]
}
```

### Response Codes

| Code | Description |
|------|-------------|
| 200 | Map found |
| 404 | Map not found |

---

## Map Properties

### Main Properties

| Property | Type | Description |
|----------|------|-------------|
| `id` | string | Unique identifier of the map |
| `name` | string | Name of the map |
| `description` | string | Detailed description of the map |
| `min_level` | number | Recommended minimum level |
| `players` | number | Maximum number of players |
| `duration` | number | Raid duration in seconds |
| `raidlevel` | string | Raid difficulty level |
| `image` | string | URL of the map image |

### Additional Properties

#### spawns
Player spawn points:
```json
{
  "name": "South Spawns",
  "description": "Spawns at the south side"
}
```

#### bosses
Bosses and mini-bosses on the map:
```json
{
  "name": "Kappa",
  "description": "Unique boss with high loot",
  "spawnRate": "10%"
}
```

#### loot
Valuable loot locations:
```json
{
  "type": "highvalue",
  "location": "Shops",
  "examples": ["GPU", "Graphics Card"]
}
```

---

## List of Maps

| Name | ID | Min Level | Players | Difficulty |
|------|----|-----------|---------| ---|
| Factory | factory | 1 | 6 | Very Easy |
| Customs | customs | 1 | 12 | Easy |
| Woods | woods | 1 | 14 | Easy-Medium |
| Shoreline | shoreline | 7 | 12 | Medium |
| The Lab | laboratory | 10 | 6 | Hard |
| Interchange | interchange | 5 | 22 | Medium |
| Streets of Tarkov | suburbs | 1 | 24 | Medium-Hard |
| Lighthouse | lighthouse | 30 | 6 | Very Hard |
| Reserve | reserve | 10 | 10 | Hard |
| Ground Zero | ground_zero | 10 | 12 | Hard |

---

## Difficulty Levels

| Level | Description |
|-------|-------------|
| Very Easy | Recommended for beginners, few enemies |
| Easy | Few threats, good source of basic loot |
| Easy-Medium | Moderate threats, good progression |
| Medium | Balance between difficulty and rewards |
| Medium-Hard | Strong enemies, good endgame loot |
| Hard | Very dangerous, requires experience |
| Very Hard | Extremely dangerous, ultra-high loot |

---

## Common Use Cases

### Get all maps
```bash
curl "https://api.nivmizz7.fr/api/maps"
```

### Retrieve details of a specific map
```bash
curl "https://api.nivmizz7.fr/api/maps/interchange"
```

### Find spawns on a map
```bash
curl "https://api.nivmizz7.fr/api/maps/customs" | jq '.spawns'
```

### View bosses on a map
```bash
curl "https://api.nivmizz7.fr/api/maps/shoreline" | jq '.bosses'
```

### Display best loot zones
```bash
curl "https://api.nivmizz7.fr/api/maps/interchange" | jq '.loot'
```

### Find recommended maps for a given level
```bash
curl "https://api.nivmizz7.fr/api/maps" | jq '.[] | select(.min_level <= 5)'
```

### Display maps with most players
```bash
curl "https://api.nivmizz7.fr/api/maps" | jq 'sort_by(.players) | reverse | .[0:5]'
```

---

## Notes

- Each map has random spawns
- Bosses have variable spawn rates
- Extraction routes vary by spawn
- Some maps are only accessible through keys
- Maps are regularly updated with new content
- Difficulty depends not only on the map but also on your equipment and skills
- Raids on larger maps (Streets, Interchange) offer more loot but are longer

## GET /api/maps

Récupère la liste complète de toutes les cartes avec leurs propriétés.

### Requête

**URL:** `GET https://api.nivmizz7.fr/api/maps`

### Paramètres de requête

Aucun paramètre n'est nécessaire pour cet endpoint.

### Exemple de requête

```bash
# Récupérer toutes les cartes
curl "https://api.nivmizz7.fr/api/maps"
```

### Réponse

```json
[
  {
    "id": "suburbs",
    "name": "Streets of Tarkov",
    "description": "Large urban street map with dynamic AI",
    "min_level": 1,
    "players": 24,
    "duration": 3600,
    "raidlevel": "Low-Medium",
    "image": "/assets/maps/streets.jpg",
    "spawns": [
      {
        "name": "Scav Spawn 1",
        "description": "Main spawn point"
      }
    ]
  },
  {
    "id": "interchange",
    "name": "Interchange",
    "description": "Large multi-story shopping mall",
    "min_level": 5,
    "players": 22,
    "duration": 2700,
    "raidlevel": "Low-Medium",
    "image": "/assets/maps/interchange.jpg",
    "spawns": [
      {
        "name": "South Spawns",
        "description": "Spawns at the south side"
      }
    ]
  }
]
```

### Codes de réponse

| Code | Description |
|------|-------------|
| 200 | Succès |

---

## GET /api/maps/:mapId

Récupère les détails complets d'une carte spécifique.

### Requête

**URL:** `GET https://api.nivmizz7.fr/api/maps/{mapId}`

### Paramètres de chemin

| Paramètre | Type | Obligatoire | Description |
|-----------|------|-------------|-------------|
| `mapId` | string | Oui | L'ID ou nom de la carte |

### Exemple de requête

```bash
# Récupérer une carte spécifique par ID
curl "https://api.nivmizz7.fr/api/maps/interchange"

# Ou par nom
curl "https://api.nivmizz7.fr/api/maps/Interchange"
```

### Réponse

```json
{
  "id": "interchange",
  "name": "Interchange",
  "description": "Large multi-story shopping mall with shops, tunnels and safe rooms",
  "min_level": 5,
  "players": 22,
  "duration": 2700,
  "raidlevel": "Low-Medium",
  "image": "/assets/maps/interchange.jpg",
  "spawns": [
    {
      "name": "South Spawns",
      "description": "Spawns at the south side of Interchange"
    },
    {
      "name": "North Spawns",
      "description": "Spawns at the north side of Interchange"
    }
  ],
  "bosses": [
    {
      "name": "Kappa",
      "description": "Unique boss with high loot",
      "spawnRate": "10%"
    }
  ],
  "loot": [
    {
      "type": "highvalue",
      "location": "Shops",
      "examples": ["GPU", "Graphics Card"]
    }
  ]
}
```

### Codes de réponse

| Code | Description |
|------|-------------|
| 200 | Carte trouvée |
| 404 | Carte non trouvée |

---

## Propriétés d'une carte

### Propriétés principales

| Propriété | Type | Description |
|-----------|------|-------------|
| `id` | string | Identifiant unique de la carte |
| `name` | string | Nom de la carte |
| `description` | string | Description détaillée de la carte |
| `min_level` | number | Niveau minimum recommandé |
| `players` | number | Nombre maximum de joueurs |
| `duration` | number | Durée de la raid en secondes |
| `raidlevel` | string | Niveau de difficulté de la raid |
| `image` | string | URL de l'image de la carte |

### Propriétés supplémentaires

#### spawns
Points de spawn pour les joueurs:
```json
{
  "name": "South Spawns",
  "description": "Spawns at the south side"
}
```

#### bosses
Boss et mini-bosses présents sur la carte:
```json
{
  "name": "Kappa",
  "description": "Unique boss with high loot",
  "spawnRate": "10%"
}
```

#### loot
Emplacements de butin précieux:
```json
{
  "type": "highvalue",
  "location": "Shops",
  "examples": ["GPU", "Graphics Card"]
}
```

---

## Liste des cartes

| Nom | ID | Niveau Min | Joueurs | Difficulté |
|-----|----|-----------|---------| ---|
| Factory | factory | 1 | 6 | Très Facile |
| Customs | customs | 1 | 12 | Facile |
| Woods | woods | 1 | 14 | Facile-Moyen |
| Shoreline | shoreline | 7 | 12 | Moyen |
| The Lab | laboratory | 10 | 6 | Difficile |
| Interchange | interchange | 5 | 22 | Moyen |
| Streets of Tarkov | suburbs | 1 | 24 | Moyen-Difficile |
| Lighthouse | lighthouse | 30 | 6 | Très Difficile |
| Reserve | reserve | 10 | 10 | Difficile |
| Ground Zero | ground_zero | 10 | 12 | Difficile |

---

## Niveaux de difficulté

| Niveau | Description |
|--------|-------------|
| Très Facile | Recommandé pour débutants, peu d'ennemis |
| Facile | Peu de menaces, bonne source de loot basique |
| Facile-Moyen | Menaces modérées, bonne progression |
| Moyen | Équilibre entre difficulté et récompenses |
| Moyen-Difficile | Ennemis forts, bon loot endgame |
| Difficile | Très dangereux, nécessite expérience |
| Très Difficile | Extrêmement dangereux, ultra-haut loot |

---

## Cas d'usage courants

### Obtenir toutes les cartes
```bash
curl "https://api.nivmizz7.fr/api/maps"
```

### Récupérer les détails d'une carte spécifique
```bash
curl "https://api.nivmizz7.fr/api/maps/interchange"
```

### Trouver les spawns d'une carte
```bash
curl "https://api.nivmizz7.fr/api/maps/customs" | jq '.spawns'
```

### Consulter les boss présents sur une carte
```bash
curl "https://api.nivmizz7.fr/api/maps/shoreline" | jq '.bosses'
```

### Afficher les meilleures zones de loot
```bash
curl "https://api.nivmizz7.fr/api/maps/interchange" | jq '.loot'
```

### Trouver les cartes recommandées pour un niveau donné
```bash
curl "https://api.nivmizz7.fr/api/maps" | jq '.[] | select(.min_level <= 5)'
```

### Afficher les cartes avec le plus de joueurs
```bash
curl "https://api.nivmizz7.fr/api/maps" | jq 'sort_by(.players) | reverse | .[0:5]'
```

---

## Notes

- Chaque carte a des spawns aléatoires
- Les boss ont des taux de spawn variables
- Les chemins d'extraction varient selon le spawn
- Certaines cartes ne sont accessibles qu'à travers des clés
- Les cartes sont régulièrement mises à jour avec de nouveaux contenus
- La difficulté dépend non seulement de la carte mais aussi de votre équipement et compétences
- Les raids sur les cartes plus grandes (Streets, Interchange) proposent plus de loot mais sont plus longues
