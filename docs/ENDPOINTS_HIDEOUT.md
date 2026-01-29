# Endpoint: Hideout

The Hideout endpoint allows you to retrieve all data related to player hideouts.

## GET /api/hideout

Retrieves the complete set of hideout data, including all modules and their details.

### Request

**URL:** `GET https://api.nivmizz7.fr/api/hideout`

### Query Parameters

No parameters required for this endpoint.

### Example Request

```bash
# Retrieve all hideout data
curl "https://api.nivmizz7.fr/api/hideout"
```

### Response

```json
{
  "modules": [
    {
      "id": "5d484fdf654e76006d4159b5",
      "name": "Bitcoin Farm",
      "description": "Allows generating Bitcoins over time",
      "level": 3,
      "requirements": {
        "gpuCount": 10,
        "electricity": 1500
      },
      "bonuses": [
        {
          "type": "bitcoinProduction",
          "value": 0.5
        }
      ]
    },
    {
      "id": "5d484fa654e76006d4159b4",
      "name": "Workbench",
      "description": "Crafting station for various items",
      "level": 3,
      "bonuses": [
        {
          "type": "crafting",
          "value": "faster"
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

---

## GET /api/hideout/:moduleId

Retrieves details of a specific hideout module.

### Request

**URL:** `GET https://api.nivmizz7.fr/api/hideout/{moduleId}`

### Path Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `moduleId` | string | Yes | The unique ID of the hideout module |

### Example Request

```bash
# Retrieve a specific hideout module
curl "https://api.nivmizz7.fr/api/hideout/5d484fdf654e76006d4159b5"
```

### Response

```json
{
  "id": "5d484fdf654e76006d4159b5",
  "name": "Bitcoin Farm",
  "description": "Allows generating Bitcoins over time",
  "level": 3,
  "requirements": {
    "gpuCount": 10,
    "electricity": 1500
  },
  "bonuses": [
    {
      "type": "bitcoinProduction",
      "value": 0.5
    }
  ]
}
```

### Response Codes

| Code | Description |
|------|-------------|
| 200 | Module found |
| 404 | Module not found |

---

## Hideout Module Properties

### Main Properties

| Property | Type | Description |
|----------|------|-------------|
| `id` | string | Unique identifier of the module |
| `name` | string | Name of the module |
| `description` | string | Description of the module |
| `level` | number | Maximum level of the module |

### Special Properties

#### requirements
Describes what is needed to operate the module:
```json
{
  "gpuCount": 10,
  "electricity": 1500,
  "materials": [
    {
      "id": "5d15b224fcb30f0d41696877",
      "count": 5
    }
  ]
}
```

#### bonuses
List of benefits provided by the module:
```json
{
  "type": "bitcoinProduction",
  "value": 0.5
}
```

Common bonus types:
- `bitcoinProduction` - Bitcoin Production
- `crafting` - Craft Improvement
- `healthRegeneration` - Health Regeneration
- `energyRegeneration` - Energy Regeneration
- `staminaRegeneration` - Stamina Regeneration
- `skillProgression` - Skill Progression
- `experience` - Experience Bonus
- `repairPrice` - Reduced repair price

---

## Available Module Types

| Module | ID | Description |
|--------|----|----|
| Bitcoin Farm | 5d484fdf654e76006d4159b5 | Produces Bitcoins over time |
| Workbench | 5d484fa654e76006d4159b4 | Crafting station to create items |
| Stash | 5d4741101a04cac4ac27f151 | Main item storage |
| Lavatory | 5d484ffb654e76006d4159b9 | Improves hygiene regeneration |
| Generator | 5d4741101a04cac4ac27f150 | Provides electricity to hideout |
| Air Filtering Unit | 5d4740101a04cac4ac27f14f | Improves air quality |
| Rest Space | 5d4740991a04cac4ac27f14e | Improves energy regeneration |
| Nutrition Unit | 5d47401d1a04cac4ac27f14d | Improves food statistics |
| Water Collector | 5d4740761a04cac4ac27f14c | Collects water |
| Medstation | 5d4740581a04cac4ac27f14b | Medical station for healing |
| Booze Generator | 5d4740321a04cac4ac27f14a | Generates alcohol |
| Intelligence Desk | 5d4740171a04cac4ac27f149 | Improves intelligence quests |
| Shooting Range | 5d4740101a04cac4ac27f148 | Improves shooting skills |
| Library | 5d4740001a04cac4ac27f147 | Improves skill progression |
| Scav Case | 5d4740000a04cac4ac27f146 | Send Scavs to find loot |

---

## Common Use Cases

### Get a complete hideout overview
```bash
curl "https://api.nivmizz7.fr/api/hideout"
```

### Check Bitcoin Farm requirements
```bash
curl "https://api.nivmizz7.fr/api/hideout/5d484fdf654e76006d4159b5"
```

### Find modules offering energy regeneration
```bash
curl "https://api.nivmizz7.fr/api/hideout" | jq '.modules[] | select(.bonuses[].type == "energyRegeneration")'
```

### Calculate total electricity needs
```bash
curl "https://api.nivmizz7.fr/api/hideout" | jq '[.modules[].requirements.electricity // 0] | add'
```

---

## Notes

- Modules are listed in recommended upgrade order
- Levels vary by module
- Some modules have dependencies with other modules
- Requirements can include items, electricity or other resources
- Bonuses are cumulative across all active modules

## GET /api/hideout

Récupère l'ensemble complet des données de la cachette, incluant tous les modules et leurs détails.

### Requête

**URL:** `GET https://api.nivmizz7.fr/api/hideout`

### Paramètres de requête

Aucun paramètre n'est nécessaire pour cet endpoint.

### Exemple de requête

```bash
# Récupérer toutes les données de la cachette
curl "https://api.nivmizz7.fr/api/hideout"
```

### Réponse

```json
{
  "modules": [
    {
      "id": "5d484fdf654e76006d4159b5",
      "name": "Bitcoin Farm",
      "description": "Allows generating Bitcoins over time",
      "level": 3,
      "requirements": {
        "gpuCount": 10,
        "electricity": 1500
      },
      "bonuses": [
        {
          "type": "bitcoinProduction",
          "value": 0.5
        }
      ]
    },
    {
      "id": "5d484fa654e76006d4159b4",
      "name": "Workbench",
      "description": "Crafting station for various items",
      "level": 3,
      "bonuses": [
        {
          "type": "crafting",
          "value": "faster"
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

---

## GET /api/hideout/:moduleId

Récupère les détails d'un module spécifique de la cachette.

### Requête

**URL:** `GET https://api.nivmizz7.fr/api/hideout/{moduleId}`

### Paramètres de chemin

| Paramètre | Type | Obligatoire | Description |
|-----------|------|-------------|-------------|
| `moduleId` | string | Oui | L'ID unique du module de cachette |

### Exemple de requête

```bash
# Récupérer un module de cachette spécifique
curl "https://api.nivmizz7.fr/api/hideout/5d484fdf654e76006d4159b5"
```

### Réponse

```json
{
  "id": "5d484fdf654e76006d4159b5",
  "name": "Bitcoin Farm",
  "description": "Allows generating Bitcoins over time",
  "level": 3,
  "requirements": {
    "gpuCount": 10,
    "electricity": 1500
  },
  "bonuses": [
    {
      "type": "bitcoinProduction",
      "value": 0.5
    }
  ]
}
```

### Codes de réponse

| Code | Description |
|------|-------------|
| 200 | Module trouvé |
| 404 | Module non trouvé |

---

## Propriétés d'un module de cachette

### Propriétés principales

| Propriété | Type | Description |
|-----------|------|-------------|
| `id` | string | Identifiant unique du module |
| `name` | string | Nom du module |
| `description` | string | Description du module |
| `level` | number | Niveau maximum du module |

### Propriétés spéciales

#### requirements
Décrit ce qui est nécessaire pour faire fonctionner le module:
```json
{
  "gpuCount": 10,
  "electricity": 1500,
  "materials": [
    {
      "id": "5d15b224fcb30f0d41696877",
      "count": 5
    }
  ]
}
```

#### bonuses
Liste des avantages fournis par le module:
```json
{
  "type": "bitcoinProduction",
  "value": 0.5
}
```

Types de bonus courants:
- `bitcoinProduction` - Production de Bitcoin
- `crafting` - Amélioration des artisanats
- `healthRegeneration` - Régénération de santé
- `energyRegeneration` - Régénération d'énergie
- `staminaRegeneration` - Régénération d'endurance
- `skillProgression` - Progression des compétences
- `experience` - Bonus d'expérience
- `repairPrice` - Prix de réparation réduit

---

## Types de modules disponibles

| Module | ID | Description |
|--------|----|----|
| Bitcoin Farm | 5d484fdf654e76006d4159b5 | Produit des Bitcoins au fil du temps |
| Workbench | 5d484fa654e76006d4159b4 | Station d'artisanat pour créer des objets |
| Stash | 5d4741101a04cac4ac27f151 | Stockage principal des articles |
| Lavatory | 5d484ffb654e76006d4159b9 | Améliore la régénération d'hygiène |
| Generator | 5d4741101a04cac4ac27f150 | Fournit l'électricité à la cachette |
| Air Filtering Unit | 5d4740101a04cac4ac27f14f | Améliore la qualité de l'air |
| Rest Space | 5d4740991a04cac4ac27f14e | Améliore la régénération d'énergie |
| Nutrition Unit | 5d47401d1a04cac4ac27f14d | Améliore les statistiques alimentaires |
| Water Collector | 5d4740761a04cac4ac27f14c | Collecte l'eau |
| Medstation | 5d4740581a04cac4ac27f14b | Station médicale pour la guérison |
| Booze Generator | 5d4740321a04cac4ac27f14a | Génère des alcools |
| Intelligence Desk | 5d4740171a04cac4ac27f149 | Améliore les quêtes des renseignements |
| Shooting Range | 5d4740101a04cac4ac27f148 | Améliore les compétences de tir |
| Library | 5d4740001a04cac4ac27f147 | Améliore la progression des compétences |
| Scav Case | 5d4740000a04cac4ac27f146 | Envoyez des Scavs chercher du butin |

---

## Cas d'usage courants

### Obtenir un aperçu complet de la cachette
```bash
curl "https://api.nivmizz7.fr/api/hideout"
```

### Vérifier les exigences du Bitcoin Farm
```bash
curl "https://api.nivmizz7.fr/api/hideout/5d484fdf654e76006d4159b5"
```

### Trouver les modules offrant une régénération d'énergie
```bash
curl "https://api.nivmizz7.fr/api/hideout" | jq '.modules[] | select(.bonuses[].type == "energyRegeneration")'
```

### Calculer les besoins totaux en électricité
```bash
curl "https://api.nivmizz7.fr/api/hideout" | jq '[.modules[].requirements.electricity // 0] | add'
```

---

## Notes

- Les modules sont listés dans l'ordre recommandé d'amélioration
- Les niveaux varient selon le module
- Certains modules ont des dépendances avec d'autres modules
- Les exigences peuvent inclure des articles, de l'électricité ou d'autres ressources
- Les bonus sont cumulatifs à travers tous les modules actifs
