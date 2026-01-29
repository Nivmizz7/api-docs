# Endpoint: Levels

The Levels endpoint allows you to retrieve information on skill levels and progression in Escape from Tarkov.

## GET /api/levels

Retrieves the complete set of data on levels and progression requirements.

### Request

**URL:** `GET https://api.nivmizz7.fr/api/levels`

### Query Parameters

No parameters required for this endpoint.

### Example Request

```bash
# Retrieve all levels
curl "https://api.nivmizz7.fr/api/levels"
```

### Response

```json
[
  {
    "level": 1,
    "exp": 0,
    "expToNextLevel": 1000,
    "title": "Newbie"
  },
  {
    "level": 2,
    "exp": 1000,
    "expToNextLevel": 2500,
    "title": "Beginner"
  },
  {
    "level": 3,
    "exp": 3500,
    "expToNextLevel": 4000,
    "title": "Trainee"
  }
]
```

### Response Codes

| Code | Description |
|------|-------------|
| 200 | Success |

---

## Detailed Response Structure

### Example with Full Details

```json
[
  {
    "level": 1,
    "exp": 0,
    "expToNextLevel": 1000,
    "totalExp": 0,
    "title": "Newbie",
    "description": "Your first steps in the game",
    "bonuses": {
      "carry_weight": 0,
      "health": 0,
      "stash_size": 0
    }
  },
  {
    "level": 2,
    "exp": 1000,
    "expToNextLevel": 2500,
    "totalExp": 1000,
    "title": "Beginner",
    "description": "Growing familiarity with the game",
    "bonuses": {
      "carry_weight": 2,
      "health": 5,
      "stash_size": 10
    }
  }
]
```

---

## Level Properties

### Main Properties

| Property | Type | Description |
|----------|------|-------------|
| `level` | number | Level number (1-71) |
| `exp` | number | Experience points required for this level |
| `expToNextLevel` | number | Experience points required for next level |
| `totalExp` | number | Total cumulative experience points |
| `title` | string | Level title/name |
| `description` | string | Level description |

### Bonus Properties (bonuses)

Bonuses unlocked at each level:

| Property | Type | Description |
|----------|------|-------------|
| `carry_weight` | number | Increase in carrying capacity (kg) |
| `health` | number | Increase in maximum health |
| `stash_size` | number | Increase in stash size |
| `radiation_resist` | number | Radiation resistance |

---

## Levels and Progression

| Level | Title | Required Experience |
|-------|-------|-------------------|
| 1 | Newbie | 0 |
| 2 | Beginner | 1,000 |
| 3 | Trainee | 3,500 |
| 4 | Specialist | 7,500 |
| 5 | Expert | 13,000 |
| ... | ... | ... |
| 71 | Maximum Level | Very High |

---

## Common Use Cases

### Get all levels and their requirements
```bash
curl "https://api.nivmizz7.fr/api/levels"
```

### Display levels and their titles
```bash
curl "https://api.nivmizz7.fr/api/levels" | jq '.[] | {level: .level, title: .title, exp: .exp}'
```

### Find experience requirements for a specific level
```bash
curl "https://api.nivmizz7.fr/api/levels" | jq '.[] | select(.level == 10)'
```

### Calculate total experience required to reach a level
```bash
curl "https://api.nivmizz7.fr/api/levels" | jq '[.[0:15]] | add | .totalExp'
```

### Display bonuses unlocked by level
```bash
curl "https://api.nivmizz7.fr/api/levels" | jq '.[] | {level: .level, bonuses: .bonuses}'
```

### Find the level needed for a specific bonus
```bash
curl "https://api.nivmizz7.fr/api/levels" | jq '.[] | select(.bonuses.stash_size > 0)'
```

---

## Notes

- The maximum game level is 71
- Required experience increases exponentially
- Higher levels offer significant bonuses
- Bonuses accumulate across all levels
- Levels reset with each season wipe
- Experience can be earned through combat, quests and general activities
- Some quests require a minimum level to be unlocked

## GET /api/levels

Récupère l'ensemble complet des données sur les niveaux et les exigences de progression.

### Requête

**URL:** `GET https://api.nivmizz7.fr/api/levels`

### Paramètres de requête

Aucun paramètre n'est nécessaire pour cet endpoint.

### Exemple de requête

```bash
# Récupérer tous les niveaux
curl "https://api.nivmizz7.fr/api/levels"
```

### Réponse

```json
[
  {
    "level": 1,
    "exp": 0,
    "expToNextLevel": 1000,
    "title": "Newbie"
  },
  {
    "level": 2,
    "exp": 1000,
    "expToNextLevel": 2500,
    "title": "Beginner"
  },
  {
    "level": 3,
    "exp": 3500,
    "expToNextLevel": 4000,
    "title": "Trainee"
  }
]
```

### Codes de réponse

| Code | Description |
|------|-------------|
| 200 | Succès |

---

## Structure de réponse détaillée

### Exemple avec détails complets

```json
[
  {
    "level": 1,
    "exp": 0,
    "expToNextLevel": 1000,
    "totalExp": 0,
    "title": "Newbie",
    "description": "Your first steps in the game",
    "bonuses": {
      "carry_weight": 0,
      "health": 0,
      "stash_size": 0
    }
  },
  {
    "level": 2,
    "exp": 1000,
    "expToNextLevel": 2500,
    "totalExp": 1000,
    "title": "Beginner",
    "description": "Growing familiarity with the game",
    "bonuses": {
      "carry_weight": 2,
      "health": 5,
      "stash_size": 10
    }
  }
]
```

---

## Propriétés d'un niveau

### Propriétés principales

| Propriété | Type | Description |
|-----------|------|-------------|
| `level` | number | Numéro de niveau (1-71) |
| `exp` | number | Points d'expérience nécessaires pour ce niveau |
| `expToNextLevel` | number | Points d'expérience nécessaires pour le niveau suivant |
| `totalExp` | number | Points d'expérience cumulatifs totaux |
| `title` | string | Titre/nom du niveau |
| `description` | string | Description du niveau |

### Propriétés de bonus (bonuses)

Les bonus déverrouillés à chaque niveau:

| Propriété | Type | Description |
|-----------|------|-------------|
| `carry_weight` | number | Augmentation de la capacité de transport (kg) |
| `health` | number | Augmentation de la santé maximale |
| `stash_size` | number | Augmentation de la taille de la cache |
| `radiation_resist` | number | Résistance aux radiations |

---

## Niveaux et progressions

| Niveau | Titre | Expérience requise |
|--------|-------|-------------------|
| 1 | Newbie | 0 |
| 2 | Beginner | 1,000 |
| 3 | Trainee | 3,500 |
| 4 | Specialist | 7,500 |
| 5 | Expert | 13,000 |
| ... | ... | ... |
| 71 | Maximum Level | Très élevée |

---

## Cas d'usage courants

### Obtenir tous les niveaux et leurs exigences
```bash
curl "https://api.nivmizz7.fr/api/levels"
```

### Afficher les niveaux et leurs titres
```bash
curl "https://api.nivmizz7.fr/api/levels" | jq '.[] | {level: .level, title: .title, exp: .exp}'
```

### Trouver les exigences d'expérience pour un niveau spécifique
```bash
curl "https://api.nivmizz7.fr/api/levels" | jq '.[] | select(.level == 10)'
```

### Calculer l'expérience totale requise pour atteindre un niveau
```bash
curl "https://api.nivmizz7.fr/api/levels" | jq '[.[0:15]] | add | .totalExp'
```

### Afficher les bonus débloqués par niveau
```bash
curl "https://api.nivmizz7.fr/api/levels" | jq '.[] | {level: .level, bonuses: .bonuses}'
```

### Trouver le niveau nécessaire pour un bonus spécifique
```bash
curl "https://api.nivmizz7.fr/api/levels" | jq '.[] | select(.bonuses.stash_size > 0)'
```

---

## Notes

- Le jeu maximum est de niveau 71
- L'expérience requise augmente de manière exponentielle
- Les niveaux plus élevés offrent des bonus significatifs
- Les bonus s'accumulent à travers tous les niveaux
- Les niveaux se réinitialisent avec chaque saison de wipe
- L'expérience peut être gagnée en combat, quêtes et activités générales
- Certaines quêtes requièrent un niveau minimum pour être déverrouillées
