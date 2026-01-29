# Data Structures

Complete reference of structures and JSON schemas used in the Tarkov API.

## Item (Article)

```json
{
  "id": "string",
  "name": "string",
  "shortName": "string",
  "description": "string",
  "rarity": "string",
  "handbook": {
    "parent": "string",
    "price": "number"
  },
  "properties": {
    "ammo": { ... },
    "armor": { ... },
    "weapon": { ... }
  }
}
```

### Main Properties
- `id` - Unique identifier (UUID)
- `name` - Full name of the item
- `shortName` - Short name for display
- `description` - Detailed description
- `rarity` - Rarity: common, uncommon, rare, very rare, legendary

### handbook
- `parent` - Parent category
- `price` - Reference price

---

## Ammunition (Munition)

```json
{
  "id": "string",
  "name": "string",
  "shortName": "string",
  "caliber": "string",
  "ballistics": {
    "damage": 0,
    "penetration": 0,
    "armorDamage": 0,
    "fragmentation": 0,
    "ricochet": "string"
  },
  "properties": {
    "cost": 0,
    "weight": 0
  }
}
```

### Ballistic Properties
- `damage` - Damage dealt (0-100)
- `penetration` - Armor penetration power (0-100)
- `armorDamage` - Damage to armor
- `fragmentation` - Fragmentation chance (0-1)
- `ricochet` - Ricochet type

---

## Trader (Commerçant)

```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "location": "string",
  "currency": "string",
  "level": 1,
  "image": "string",
  "quests": [
    {
      "id": "string",
      "name": "string"
    }
  ],
  "inventory": [
    {
      "id": "string",
      "name": "string",
      "price": 0,
      "currency": "string",
      "level": 1
    }
  ]
}
```

### Supported Currencies
- RUB - Russian Rubles
- EUR - Euros
- USD - US Dollars

### Trader Levels
- 1 - Initial access
- 2 - Unlocked with reputation
- 3 - Better inventory
- 4 - Complete inventory

---

## Quest (Quête)

```json
{
  "id": "string",
  "name": "string",
  "title": "string",
  "giver": "string",
  "description": "string",
  "reward": {
    "experience": 0,
    "items": [
      {
        "id": "string",
        "name": "string",
        "count": 1
      }
    ],
    "reputation": 0
  },
  "conditions": {
    "location": "string",
    "level": 0,
    "objectives": [
      {
        "target": "string",
        "count": 1
      }
    ]
  }
}
```

### Reward Properties
- `experience` - XP points earned
- `items` - Awarded items
- `reputation` - Reputation bonus with trader

---

## Map (Carte)

```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "min_level": 0,
  "players": 0,
  "duration": 0,
  "raidlevel": "string",
  "image": "string",
  "spawns": [
    {
      "name": "string",
      "description": "string"
    }
  ],
  "bosses": [
    {
      "name": "string",
      "description": "string",
      "spawnRate": "string"
    }
  ],
  "loot": [
    {
      "type": "string",
      "location": "string",
      "examples": ["string"]
    }
  ]
}
```

### Loot Types
- highvalue - High-value items
- currency - Currencies
- ammo - Ammunition
- medical - Medical items
- keys - Keys

---

## Hideout Module (Module de Cachette)

```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "level": 0,
  "requirements": {
    "gpuCount": 0,
    "electricity": 0,
    "materials": [
      {
        "id": "string",
        "count": 0
      }
    ]
  },
  "bonuses": [
    {
      "type": "string",
      "value": 0
    }
  ]
}
```

### Bonus Types
- bitcoinProduction - Bitcoin Production
- crafting - Craft Improvement
- healthRegeneration - Health Regeneration
- energyRegeneration - Energy Regeneration
- staminaRegeneration - Stamina Regeneration
- skillProgression - Skill Progression
- experience - Experience Bonus
- repairPrice - Repair Price Reduction

---

## Item Preset (Préréglage d'Article)

```json
{
  "id": "string",
  "name": "string",
  "baseId": "string",
  "description": "string",
  "ergonomics": 0,
  "weight": 0,
  "recoil": 0,
  "accuracy": 0,
  "fireRate": 0,
  "damagePerShot": 0,
  "mods": [
    {
      "slot": "string",
      "item": "string",
      "name": "string"
    }
  ]
}
```

### Performance Properties
- `ergonomics` - Ergonomics (better = higher)
- `weight` - Weight in kg
- `recoil` - Recoil control (better = lower)
- `accuracy` - Accuracy percentage
- `fireRate` - Fire rate (shots/min)
- `damagePerShot` - Damage per shot

---

## Level (Niveau de Progression)

```json
{
  "level": 0,
  "exp": 0,
  "expToNextLevel": 0,
  "totalExp": 0,
  "title": "string",
  "description": "string",
  "bonuses": {
    "carry_weight": 0,
    "health": 0,
    "stash_size": 0,
    "radiation_resist": 0
  }
}
```

### Available Levels
- Levels: 1 to 71
- Requirements increase exponentially
- Reset each season wipe

---

## Storyline (Élément de Narration)

```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "fullText": "string",
  "character": "string",
  "timeline": "string",
  "importance": "string",
  "relatedQuests": [
    {
      "id": "string",
      "name": "string"
    }
  ],
  "relatedCharacters": [
    {
      "id": "string",
      "name": "string",
      "role": "string"
    }
  ],
  "events": [
    {
      "date": "string",
      "title": "string",
      "description": "string"
    }
  ]
}
```

### Importance Levels
- critical - Essential for understanding
- major - Important for progression
- minor - Supplementary or context

---

## API Response (Réponse d'API)

### Paginated Response

```json
{
  "total": 0,
  "count": 0,
  "offset": 0,
  "items": []
}
```

### Error Response

```json
{
  "error": "string"
}
```

### HTTP Codes

| Code | Meaning | Example |
|------|---------|---------|
| 200 | OK | Successful request |
| 400 | Bad Request | Invalid parameters |
| 404 | Not Found | Resource doesn't exist |
| 500 | Internal Server Error | Server error |

---

## Enumerations

### Ammunition Calibers

```
545x39
545x39 BPZ FMJ
556x45 NATO
556x45NATO BPZ FMJ
762x25 TT
762x39
762x54R
9x19 PARA
9x21
9x33R
12 Gauge
20 Gauge
20x82
23x75mm
26x75
30x29mm
40x46mm
40x53
45 ACP
.366 TKM
```

### Rarity Levels

- common (Common)
- uncommon (Uncommon)
- rare (Rare)
- very rare (Very Rare)
- legendary (Legendary)

### Raid Difficulties

- Very Easy (Very Easy)
- Easy (Easy)
- Easy-Medium (Easy-Medium)
- Medium (Medium)
- Medium-Hard (Medium-Hard)
- Hard (Hard)
- Very Hard (Very Hard)

---

## Example of a Complete Request

```bash
curl "https://api.nivmizz7.fr/api/items?search=ak47&limit=5" \
  -H "Accept: application/json"
```

Response:

```json
{
  "total": 12,
  "count": 5,
  "offset": 0,
  "items": [
    {
      "id": "5c0d5e4486f7742e1b097b4e",
      "name": "AK 74M 5.45x39 assault rifle",
      "shortName": "AK 74M",
      "description": "Soviet semi-automatic rifle...",
      "rarity": "uncommon",
      "handbook": {
        "parent": "5448bc234bdc2d3d268b457f",
        "price": 45000
      },
      "properties": {
        "weapon": {
          "caliber": "545x39",
          "recoil": 345,
          "ergonomics": 65
        }
      }
    }
  ]
}
```

---

## Important Notes

- **IDs**: All IDs are UUID strings or unique identifiers
- **Timestamps**: Use ISO 8601 format when applicable
- **Numbers**: Prices and quantities are integers
- **Booleans**: Use true/false in lowercase
- **Null**: Missing values can be null or omitted

---

## Compatibility

This documentation corresponds to API version **1.0.0**.

Structures may evolve with Escape from Tarkov game updates.

## Article (Item)

```json
{
  "id": "string",
  "name": "string",
  "shortName": "string",
  "description": "string",
  "rarity": "string",
  "handbook": {
    "parent": "string",
    "price": "number"
  },
  "properties": {
    "ammo": { ... },
    "armor": { ... },
    "weapon": { ... }
  }
}
```

### Propriétés principales
- `id` - Identifiant unique (UUID)
- `name` - Nom complet de l'article
- `shortName` - Nom court pour l'affichage
- `description` - Description détaillée
- `rarity` - Rareté: common, uncommon, rare, very rare, legendary

### handbook
- `parent` - Catégorie parente
- `price` - Prix de référence

---

## Munition (Ammunition)

```json
{
  "id": "string",
  "name": "string",
  "shortName": "string",
  "caliber": "string",
  "ballistics": {
    "damage": 0,
    "penetration": 0,
    "armorDamage": 0,
    "fragmentation": 0,
    "ricochet": "string"
  },
  "properties": {
    "cost": 0,
    "weight": 0
  }
}
```

### Propriétés balistiques
- `damage` - Dégâts infligés (0-100)
- `penetration` - Puissance de pénétration d'armure (0-100)
- `armorDamage` - Dégâts causés à l'armure
- `fragmentation` - Chance de fragmentation (0-1)
- `ricochet` - Type de ricochet

---

## Commerçant (Trader)

```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "location": "string",
  "currency": "string",
  "level": 1,
  "image": "string",
  "quests": [
    {
      "id": "string",
      "name": "string"
    }
  ],
  "inventory": [
    {
      "id": "string",
      "name": "string",
      "price": 0,
      "currency": "string",
      "level": 1
    }
  ]
}
```

### Devises supportées
- RUB - Roubles russes
- EUR - Euros
- USD - Dollars américains

### Niveaux de commerçants
- 1 - Accès initial
- 2 - Déverrouillé avec réputation
- 3 - Meilleur inventaire
- 4 - Inventaire complet

---

## Quête (Quest)

```json
{
  "id": "string",
  "name": "string",
  "title": "string",
  "giver": "string",
  "description": "string",
  "reward": {
    "experience": 0,
    "items": [
      {
        "id": "string",
        "name": "string",
        "count": 1
      }
    ],
    "reputation": 0
  },
  "conditions": {
    "location": "string",
    "level": 0,
    "objectives": [
      {
        "target": "string",
        "count": 1
      }
    ]
  }
}
```

### Propriétés des récompenses
- `experience` - Points XP gagnés
- `items` - Articles récompensés
- `reputation` - Bonus de réputation avec le commerçant

---

## Carte (Map)

```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "min_level": 0,
  "players": 0,
  "duration": 0,
  "raidlevel": "string",
  "image": "string",
  "spawns": [
    {
      "name": "string",
      "description": "string"
    }
  ],
  "bosses": [
    {
      "name": "string",
      "description": "string",
      "spawnRate": "string"
    }
  ],
  "loot": [
    {
      "type": "string",
      "location": "string",
      "examples": ["string"]
    }
  ]
}
```

### Types de loot
- highvalue - Articles de grande valeur
- currency - Monnaies
- ammo - Munitions
- medical - Articles médicaux
- keys - Clés

---

## Module de Cachette (Hideout Module)

```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "level": 0,
  "requirements": {
    "gpuCount": 0,
    "electricity": 0,
    "materials": [
      {
        "id": "string",
        "count": 0
      }
    ]
  },
  "bonuses": [
    {
      "type": "string",
      "value": 0
    }
  ]
}
```

### Types de bonus
- bitcoinProduction - Production de Bitcoin
- crafting - Amélioration des artisanats
- healthRegeneration - Régénération de santé
- energyRegeneration - Régénération d'énergie
- staminaRegeneration - Régénération d'endurance
- skillProgression - Progression des compétences
- experience - Bonus d'expérience
- repairPrice - Réduction du prix de réparation

---

## Préréglage d'Article (Item Preset)

```json
{
  "id": "string",
  "name": "string",
  "baseId": "string",
  "description": "string",
  "ergonomics": 0,
  "weight": 0,
  "recoil": 0,
  "accuracy": 0,
  "fireRate": 0,
  "damagePerShot": 0,
  "mods": [
    {
      "slot": "string",
      "item": "string",
      "name": "string"
    }
  ]
}
```

### Propriétés de performance
- `ergonomics` - Ergonomie (meilleur = plus élevé)
- `weight` - Poids en kg
- `recoil` - Contrôle de recul (meilleur = plus bas)
- `accuracy` - Précision en pourcentage
- `fireRate` - Cadence de tir (coups/min)
- `damagePerShot` - Dégâts par coup

---

## Niveau de Progression (Level)

```json
{
  "level": 0,
  "exp": 0,
  "expToNextLevel": 0,
  "totalExp": 0,
  "title": "string",
  "description": "string",
  "bonuses": {
    "carry_weight": 0,
    "health": 0,
    "stash_size": 0,
    "radiation_resist": 0
  }
}
```

### Niveaux disponibles
- Niveaux: 1 à 71
- Les exigences augmentent exponentiellement
- Réinitialisation à chaque wipe de saison

---

## Élément de Narration (Storyline)

```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "fullText": "string",
  "character": "string",
  "timeline": "string",
  "importance": "string",
  "relatedQuests": [
    {
      "id": "string",
      "name": "string"
    }
  ],
  "relatedCharacters": [
    {
      "id": "string",
      "name": "string",
      "role": "string"
    }
  ],
  "events": [
    {
      "date": "string",
      "title": "string",
      "description": "string"
    }
  ]
}
```

### Niveaux d'importance
- critical - Essentiel à la compréhension
- major - Important pour la progression
- minor - Supplémentaire ou contexte

---

## Réponse d'API (API Response)

### Réponse paginée

```json
{
  "total": 0,
  "count": 0,
  "offset": 0,
  "items": []
}
```

### Réponse d'erreur

```json
{
  "error": "string"
}
```

### Codes HTTP

| Code | Sens | Exemple |
|------|------|---------|
| 200 | OK | Requête réussie |
| 400 | Bad Request | Paramètres invalides |
| 404 | Not Found | Ressource inexistante |
| 500 | Internal Server Error | Erreur serveur |

---

## Enumerations

### Calibres de munitions

```
545x39
545x39 BPZ FMJ
556x45 NATO
556x45NATO BPZ FMJ
762x25 TT
762x39
762x54R
9x19 PARA
9x21
9x33R
12 Gauge
20 Gauge
20x82
23x75mm
26x75
30x29mm
40x46mm
40x53
45 ACP
.366 TKM
```

### Niveaux de rareté

- common (Commun)
- uncommon (Peu commun)
- rare (Rare)
- very rare (Très rare)
- legendary (Légendaire)

### Difficultés de raid

- Very Easy (Très facile)
- Easy (Facile)
- Easy-Medium (Facile-Moyen)
- Medium (Moyen)
- Medium-Hard (Moyen-Difficile)
- Hard (Difficile)
- Very Hard (Très difficile)

---

## Exemple d'une requête complète

```bash
curl "https://api.nivmizz7.fr/api/items?search=ak47&limit=5" \
  -H "Accept: application/json"
```

Réponse:

```json
{
  "total": 12,
  "count": 5,
  "offset": 0,
  "items": [
    {
      "id": "5c0d5e4486f7742e1b097b4e",
      "name": "AK 74M 5.45x39 assault rifle",
      "shortName": "AK 74M",
      "description": "Soviet semi-automatic rifle...",
      "rarity": "uncommon",
      "handbook": {
        "parent": "5448bc234bdc2d3d268b457f",
        "price": 45000
      },
      "properties": {
        "weapon": {
          "caliber": "545x39",
          "recoil": 345,
          "ergonomics": 65
        }
      }
    }
  ]
}
```

---

## Notes importantes

- **IDs**: Tous les IDs sont des strings UUID ou des identifiants uniques
- **Timestamps**: Utilisent le format ISO 8601 quand applicable
- **Nombres**: Les prix et quantités sont des entiers
- **Booléens**: Utilisent true/false en minuscules
- **Null**: Les valeurs manquantes peuvent être null ou omises

---

## Compatibilité

Cette documentation correspond à la version **1.0.0** de l'API.

Les structures peuvent évoluer avec les mises à jour du jeu Escape from Tarkov.
