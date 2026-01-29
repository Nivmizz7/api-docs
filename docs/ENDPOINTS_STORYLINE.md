# Endpoint: Storyline

The Storyline endpoint allows you to retrieve information on the narrative and history of Escape from Tarkov.

## GET /api/storyline

Retrieves the complete list of storyline elements with search and pagination.

### Request

**URL:** `GET https://api.nivmizz7.fr/api/storyline`

### Query Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `search` | string | No | Search by name or description |
| `limit` | integer | No | Maximum number of elements to return |
| `offset` | integer | No | Number of elements to skip (default: 0) |

### Example Request

```bash
# Retrieve the first 20 storyline elements
curl "https://api.nivmizz7.fr/api/storyline?limit=20"

# Search for a specific element
curl "https://api.nivmizz7.fr/api/storyline?search=Prapor&limit=10"

# Paginate through storyline
curl "https://api.nivmizz7.fr/api/storyline?limit=15&offset=30"
```

### Response

```json
{
  "total": 125,
  "count": 20,
  "offset": 0,
  "storylines": [
    {
      "id": "5c51aac186f77412033199a2",
      "name": "The Beginning",
      "description": "Your arrival in Tarkov and first encounters",
      "character": "PMC",
      "timeline": "Day 1-7",
      "importance": "critical",
      "details": "You arrive in Tarkov as a PMC and begin your journey...",
      "relatedQuests": [
        {
          "id": "5c51aac186f77412033199a3",
          "name": "Debut"
        }
      ],
      "relatedCharacters": [
        {
          "id": "54cb50c76803fa8b248b4571",
          "name": "Prapor"
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

## GET /api/storyline/:id

Retrieves complete details of a specific storyline element.

### Request

**URL:** `GET https://api.nivmizz7.fr/api/storyline/{id}`

### Path Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique ID of the storyline element |

### Example Request

```bash
# Retrieve a specific storyline element
curl "https://api.nivmizz7.fr/api/storyline/5c51aac186f77412033199a2"
```

### Response

```json
{
  "id": "5c51aac186f77412033199a2",
  "name": "The Beginning",
  "description": "Your arrival in Tarkov and first encounters",
  "character": "PMC",
  "timeline": "Day 1-7",
  "importance": "critical",
  "fullText": "You arrive in Tarkov as a PMC, disoriented and confused. Your first survival depends on understanding the world around you...",
  "relatedQuests": [
    {
      "id": "5c51aac186f77412033199a3",
      "name": "Debut"
    },
    {
      "id": "5c51aac186f77412033199a4",
      "name": "Checking"
    }
  ],
  "relatedCharacters": [
    {
      "id": "54cb50c76803fa8b248b4571",
      "name": "Prapor",
      "role": "Military Supplier"
    },
    {
      "id": "54cb57776803fa8b248b4582",
      "name": "Therapist",
      "role": "Medical Supplier"
    }
  ],
  "events": [
    {
      "date": "2014-07-10",
      "title": "Conflict Begins",
      "description": "Armed conflict erupts in Tarkov"
    },
    {
      "date": "2014-07-15",
      "title": "Borders Closed",
      "description": "The city is sealed off from the outside"
    }
  ]
}
```

### Response Codes

| Code | Description |
|------|-------------|
| 200 | Element found |
| 404 | Element not found |

---

## Storyline Element Properties

### Main Properties

| Property | Type | Description |
|----------|------|-------------|
| `id` | string | Unique identifier |
| `name` | string | Name of the storyline element |
| `description` | string | Short description |
| `fullText` | string | Complete storyline text |
| `character` | string | Main character involved |
| `timeline` | string | Time period concerned |
| `importance` | string | Importance level (critical, major, minor) |

### Additional Properties

#### relatedQuests
Quests related to this storyline element:
```json
{
  "id": "5c51aac186f77412033199a3",
  "name": "Debut"
}
```

#### relatedCharacters
Characters involved in this element:
```json
{
  "id": "54cb50c76803fa8b248b4571",
  "name": "Prapor",
  "role": "Military Supplier"
}
```

#### events
Important historical events:
```json
{
  "date": "2014-07-10",
  "title": "Conflict Begins",
  "description": "Armed conflict erupts in Tarkov"
}
```

---

## Importance Levels

| Level | Description |
|-------|-------------|
| critical | Element essential to understanding the scenario |
| major | Element important for story progression |
| minor | Supplementary element or additional context |

---

## Main Characters

| Character | Role | Involvement |
|-----------|------|------------|
| Prapor | Military supplier | Primary mentor at start |
| Therapist | Medical supplier | Support and guidance |
| Fence | Scav trader | Introduction to Scav world |
| Peacekeeper | NATO coalition | External faction |
| Ragman | Equipment supplier | Tactical equipment |
| Mechanic | Weapons specialist | Weapons expertise |
| Jaeger | Survival specialist | Survival missions |
| Skier | Trader | Contraband |
| Lightkeeper | New | Content expansion |

---

## Factions and Groups

| Faction | Description |
|---------|-------------|
| PMC | Private Military Company - The player |
| USEC | United Security - NATO Faction |
| BEAR | Russian Faction |
| Scavengers | Armed civilians |
| Rogues | Renegade soldiers |
| Raiders | Specialized enemies |
| Bosses | Special threats |

---

## Common Use Cases

### Get complete storyline
```bash
curl "https://api.nivmizz7.fr/api/storyline?limit=100"
```

### Search for critical storyline elements
```bash
curl "https://api.nivmizz7.fr/api/storyline?limit=100" | jq '.storylines[] | select(.importance == "critical")'
```

### Find storyline elements involving a specific character
```bash
curl "https://api.nivmizz7.fr/api/storyline?search=Prapor&limit=20"
```

### View quests related to a storyline element
```bash
curl "https://api.nivmizz7.fr/api/storyline/5c51aac186f77412033199a2" | jq '.relatedQuests'
```

### Display historical events
```bash
curl "https://api.nivmizz7.fr/api/storyline" | jq '.storylines[] | select(.events != null) | .events'
```

### Find elements with major importance
```bash
curl "https://api.nivmizz7.fr/api/storyline?limit=50" | jq '.storylines[] | select(.importance == "major")'
```

### Display all involved characters
```bash
curl "https://api.nivmizz7.fr/api/storyline?limit=100" | jq '.storylines[].relatedCharacters | unique_by(.id)'
```

---

## Notes

- Storyline unfolds as the player progresses
- Storyline elements are linked to quests and characters
- Tarkov's history spans several years before the game
- Narrative includes lore, factions and geopolitical conflicts
- Historical events can influence current gameplay
- Understanding the narrative enriches the game experience
- Importance levels reflect impact on the overall story
- Some storyline elements can only be discovered by completing quests

## GET /api/storyline

Récupère la liste complète des éléments de la narration avec recherche et pagination.

### Requête

**URL:** `GET https://api.nivmizz7.fr/api/storyline`

### Paramètres de requête

| Paramètre | Type | Obligatoire | Description |
|-----------|------|-------------|-------------|
| `search` | string | Non | Recherche par nom ou description |
| `limit` | integer | Non | Nombre maximum d'éléments à retourner |
| `offset` | integer | Non | Nombre d'éléments à ignorer (défaut: 0) |

### Exemple de requête

```bash
# Récupérer les 20 premiers éléments de narration
curl "https://api.nivmizz7.fr/api/storyline?limit=20"

# Rechercher un élément spécifique
curl "https://api.nivmizz7.fr/api/storyline?search=Prapor&limit=10"

# Paginer à travers la narration
curl "https://api.nivmizz7.fr/api/storyline?limit=15&offset=30"
```

### Réponse

```json
{
  "total": 125,
  "count": 20,
  "offset": 0,
  "storylines": [
    {
      "id": "5c51aac186f77412033199a2",
      "name": "The Beginning",
      "description": "Your arrival in Tarkov and first encounters",
      "character": "PMC",
      "timeline": "Day 1-7",
      "importance": "critical",
      "details": "You arrive in Tarkov as a PMC and begin your journey...",
      "relatedQuests": [
        {
          "id": "5c51aac186f77412033199a3",
          "name": "Debut"
        }
      ],
      "relatedCharacters": [
        {
          "id": "54cb50c76803fa8b248b4571",
          "name": "Prapor"
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

## GET /api/storyline/:id

Récupère les détails complets d'un élément de narration spécifique.

### Requête

**URL:** `GET https://api.nivmizz7.fr/api/storyline/{id}`

### Paramètres de chemin

| Paramètre | Type | Obligatoire | Description |
|-----------|------|-------------|-------------|
| `id` | string | Oui | L'ID unique de l'élément de narration |

### Exemple de requête

```bash
# Récupérer un élément de narration spécifique
curl "https://api.nivmizz7.fr/api/storyline/5c51aac186f77412033199a2"
```

### Réponse

```json
{
  "id": "5c51aac186f77412033199a2",
  "name": "The Beginning",
  "description": "Your arrival in Tarkov and first encounters",
  "character": "PMC",
  "timeline": "Day 1-7",
  "importance": "critical",
  "fullText": "You arrive in Tarkov as a PMC, disoriented and confused. Your first survival depends on understanding the world around you...",
  "relatedQuests": [
    {
      "id": "5c51aac186f77412033199a3",
      "name": "Debut"
    },
    {
      "id": "5c51aac186f77412033199a4",
      "name": "Checking"
    }
  ],
  "relatedCharacters": [
    {
      "id": "54cb50c76803fa8b248b4571",
      "name": "Prapor",
      "role": "Military Supplier"
    },
    {
      "id": "54cb57776803fa8b248b4582",
      "name": "Therapist",
      "role": "Medical Supplier"
    }
  ],
  "events": [
    {
      "date": "2014-07-10",
      "title": "Conflict Begins",
      "description": "Armed conflict erupts in Tarkov"
    },
    {
      "date": "2014-07-15",
      "title": "Borders Closed",
      "description": "The city is sealed off from the outside"
    }
  ]
}
```

### Codes de réponse

| Code | Description |
|------|-------------|
| 200 | Élément trouvé |
| 404 | Élément non trouvé |

---

## Propriétés d'un élément de narration

### Propriétés principales

| Propriété | Type | Description |
|-----------|------|-------------|
| `id` | string | Identifiant unique |
| `name` | string | Nom de l'élément de narration |
| `description` | string | Description courte |
| `fullText` | string | Texte complet de la narration |
| `character` | string | Personnage principal impliqué |
| `timeline` | string | Période temporelle concernée |
| `importance` | string | Niveau d'importance (critical, major, minor) |

### Propriétés supplémentaires

#### relatedQuests
Quêtes liées à cet élément de narration:
```json
{
  "id": "5c51aac186f77412033199a3",
  "name": "Debut"
}
```

#### relatedCharacters
Personnages impliqués dans cet élément:
```json
{
  "id": "54cb50c76803fa8b248b4571",
  "name": "Prapor",
  "role": "Military Supplier"
}
```

#### events
Événements historiques importants:
```json
{
  "date": "2014-07-10",
  "title": "Conflict Begins",
  "description": "Armed conflict erupts in Tarkov"
}
```

---

## Niveaux d'importance

| Niveau | Description |
|--------|-------------|
| critical | Élément essentiel à la compréhension du scénario |
| major | Élément important pour la progression de l'histoire |
| minor | Élément supplémentaire ou contexte additionnel |

---

## Personnages principaux

| Personnage | Rôle | Implication |
|-----------|------|------------|
| Prapor | Fournisseur militaire | Mentor principal au début |
| Therapist | Fournisseur médical | Support et guidance |
| Fence | Commerçant de Scav | Introduction au monde des Scav |
| Peacekeeper | Coalition OTAN | Faction externe |
| Ragman | Fournisseur d'équipement | Équipement tactique |
| Mechanic | Spécialiste des armes | Expertise en armement |
| Jaeger | Spécialiste survie | Missions de survie |
| Skier | Commerçant | Contrebande |
| Lightkeeper | Nouveau | Expansion de contenu |

---

## Factions et groupes

| Faction | Description |
|---------|-------------|
| PMC | Private Military Company - Le joueur |
| USEC | United Security - Faction OTAN |
| BEAR | Faction Russe |
| Scavengers | Civils armés |
| Rogues | Soldats renégats |
| Raiders | Ennemis spécialisés |
| Bosses | Menaces spéciales |

---

## Cas d'usage courants

### Obtenir la narration complète
```bash
curl "https://api.nivmizz7.fr/api/storyline?limit=100"
```

### Rechercher les éléments de narration critiques
```bash
curl "https://api.nivmizz7.fr/api/storyline?limit=100" | jq '.storylines[] | select(.importance == "critical")'
```

### Trouver les éléments impliquant un personnage spécifique
```bash
curl "https://api.nivmizz7.fr/api/storyline?search=Prapor&limit=20"
```

### Consulter les quêtes liées à un élément de narration
```bash
curl "https://api.nivmizz7.fr/api/storyline/5c51aac186f77412033199a2" | jq '.relatedQuests'
```

### Afficher les événements historiques
```bash
curl "https://api.nivmizz7.fr/api/storyline" | jq '.storylines[] | select(.events != null) | .events'
```

### Trouver les éléments avec une importance majeure
```bash
curl "https://api.nivmizz7.fr/api/storyline?limit=50" | jq '.storylines[] | select(.importance == "major")'
```

### Afficher tous les personnages impliqués
```bash
curl "https://api.nivmizz7.fr/api/storyline?limit=100" | jq '.storylines[].relatedCharacters | unique_by(.id)'
```

---

## Notes

- La narration se déploie au fur et à mesure de la progression du joueur
- Les éléments de narration sont liés aux quêtes et aux personnages
- L'historique de Tarkov s'étend sur plusieurs années avant le jeu
- La narration inclut les lore, les factions et les conflits géopolitiques
- Les événements historiques peuvent influencer le gameplay actuel
- La compréhension de la narration enrichit l'expérience de jeu
- Les niveaux d'importance reflètent l'impact sur l'histoire globale
- Certains éléments de narration peuvent être découverts uniquement en accomplissant des quêtes
