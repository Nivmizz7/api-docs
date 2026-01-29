# Endpoint: Traders

The Traders endpoint allows you to retrieve information on all available traders in Escape from Tarkov.

## GET /api/traders

Retrieves the complete set of data on all traders and their inventories.

### Request

**URL:** `GET https://api.nivmizz7.fr/api/traders`

### Query Parameters

No parameters required for this endpoint.

### Example Request

```bash
# Retrieve all traders
curl "https://api.nivmizz7.fr/api/traders"
```

### Response

```json
{
  "prapor": {
    "id": "54cb50c76803fa8b248b4571",
    "name": "Prapor",
    "description": "Military Supplier",
    "location": "Basement 2",
    "currency": "RUB",
    "level": 4,
    "image": "/assets/traders/prapor.jpg",
    "inventory": [
      {
        "id": "5ef6fd846d294f413c2f9524",
        "name": "Maxim 9 9x19 suppressed pistol",
        "price": 68000,
        "currency": "RUB"
      }
    ]
  }
}
```

### Response Codes

| Code | Description |
|------|-------------|
| 200 | Success |

---

## GET /api/traders/:traderId

Retrieves complete details of a specific trader.

### Request

**URL:** `GET https://api.nivmizz7.fr/api/traders/{traderId}`

### Path Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `traderId` | string | Yes | The ID or name of the trader |

### Example Request

```bash
# Retrieve a specific trader by name
curl "https://api.nivmizz7.fr/api/traders/prapor"

# Or by ID
curl "https://api.nivmizz7.fr/api/traders/54cb50c76803fa8b248b4571"
```

### Response

```json
{
  "id": "54cb50c76803fa8b248b4571",
  "name": "Prapor",
  "description": "Military Supplier",
  "location": "Basement 2",
  "currency": "RUB",
  "level": 4,
  "image": "/assets/traders/prapor.jpg",
  "quests": [
    {
      "id": "5c51aac186f77412033199a2",
      "name": "Punisher"
    }
  ],
  "inventory": [
    {
      "id": "5ef6fd846d294f413c2f9524",
      "name": "Maxim 9 9x19 suppressed pistol",
      "price": 68000,
      "currency": "RUB",
      "level": 1
    }
  ]
}
```

### Response Codes

| Code | Description |
|------|-------------|
| 200 | Trader found |
| 404 | Trader not found |

---

## Trader Properties

### Main Properties

| Property | Type | Description |
|----------|------|-------------|
| `id` | string | Unique identifier of the trader |
| `name` | string | Trader name |
| `description` | string | Description of the trader's role |
| `location` | string | Trader's location in the game |
| `currency` | string | Currency used (RUB, EUR, USD) |
| `level` | number | Maximum trader level |
| `image` | string | URL of the trader's image |

### Additional Properties

#### inventory
List of items sold by the trader:
```json
{
  "id": "5ef6fd846d294f413c2f9524",
  "name": "Maxim 9 9x19 suppressed pistol",
  "price": 68000,
  "currency": "RUB",
  "level": 1
}
```

#### quests
List of quests offered by the trader:
```json
{
  "id": "5c51aac186f77412033199a2",
  "name": "Punisher"
}
```

---

## List of Traders

| Name | Description | Currency | Location |
|------|-------------|----------|----------|
| Prapor | Military supplier | RUB | Basement 2 |
| Therapist | Medical supplies supplier | RUB | Main 1 |
| Fence | Scav trader | RUB | Military Base |
| Peacekeeper | NATO supplies supplier | USD | Warehouse 4 |
| Mechanic | Weapon and parts specialist | RUB | Garage |
| Ragman | Clothing supplier | RUB | Ragged Line |
| Jaeger | Outdoor survival specialist | RUB | Scav Camp |
| Skier | Contraband goods trader | RUB | Commerce Street |
| Lightkeeper | Shoreline specialist | RUB | Water Station |

---

## Trader Levels

Each trader has up to 4 levels:

| Level | Description |
|-------|-------------|
| 1 | Initial level - basic inventory |
| 2 | Unlocked after positive reputation |
| 3 | Better inventory |
| 4 | Complete inventory and best prices |

---

## Common Use Cases

### Get all traders
```bash
curl "https://api.nivmizz7.fr/api/traders"
```

### Search for Prapor trader
```bash
curl "https://api.nivmizz7.fr/api/traders/prapor"
```

### View a trader's inventory
```bash
curl "https://api.nivmizz7.fr/api/traders/peacekeeper" | jq '.inventory'
```

### Find a trader's quests
```bash
curl "https://api.nivmizz7.fr/api/traders/prapor" | jq '.quests'
```

### Display all traders and their levels
```bash
curl "https://api.nivmizz7.fr/api/traders" | jq 'to_entries[] | {name: .value.name, level: .value.level}'
```

### Search for a specific item in inventories
```bash
curl "https://api.nivmizz7.fr/api/traders" | jq '.[] | select(.inventory[].name | contains("AK"))'
```

---

## Notes

- Traders unlock their levels progressively during gameplay
- Each trader level offers better inventory and better prices
- Reputation affects access to higher trader levels
- Trader prices are fixed and do not vary
- Each trader uses their own currency (though convertible)
- Trader levels reset each season wipe

## GET /api/traders

Récupère l'ensemble complet des données sur tous les commerçants et leurs inventaires.

### Requête

**URL:** `GET https://api.nivmizz7.fr/api/traders`

### Paramètres de requête

Aucun paramètre n'est nécessaire pour cet endpoint.

### Exemple de requête

```bash
# Récupérer tous les commerçants
curl "https://api.nivmizz7.fr/api/traders"
```

### Réponse

```json
{
  "prapor": {
    "id": "54cb50c76803fa8b248b4571",
    "name": "Prapor",
    "description": "Military Supplier",
    "location": "Basement 2",
    "currency": "RUB",
    "level": 4,
    "image": "/assets/traders/prapor.jpg",
    "inventory": [
      {
        "id": "5ef6fd846d294f413c2f9524",
        "name": "Maxim 9 9x19 suppressed pistol",
        "price": 68000,
        "currency": "RUB"
      }
    ]
  }
}
```

### Codes de réponse

| Code | Description |
|------|-------------|
| 200 | Succès |

---

## GET /api/traders/:traderId

Récupère les détails complets d'un commerçant spécifique.

### Requête

**URL:** `GET https://api.nivmizz7.fr/api/traders/{traderId}`

### Paramètres de chemin

| Paramètre | Type | Obligatoire | Description |
|-----------|------|-------------|-------------|
| `traderId` | string | Oui | L'ID ou nom du commerçant |

### Exemple de requête

```bash
# Récupérer un commerçant spécifique par nom
curl "https://api.nivmizz7.fr/api/traders/prapor"

# Ou par ID
curl "https://api.nivmizz7.fr/api/traders/54cb50c76803fa8b248b4571"
```

### Réponse

```json
{
  "id": "54cb50c76803fa8b248b4571",
  "name": "Prapor",
  "description": "Military Supplier",
  "location": "Basement 2",
  "currency": "RUB",
  "level": 4,
  "image": "/assets/traders/prapor.jpg",
  "quests": [
    {
      "id": "5c51aac186f77412033199a2",
      "name": "Punisher"
    }
  ],
  "inventory": [
    {
      "id": "5ef6fd846d294f413c2f9524",
      "name": "Maxim 9 9x19 suppressed pistol",
      "price": 68000,
      "currency": "RUB",
      "level": 1
    }
  ]
}
```

### Codes de réponse

| Code | Description |
|------|-------------|
| 200 | Commerçant trouvé |
| 404 | Commerçant non trouvé |

---

## Propriétés d'un commerçant

### Propriétés principales

| Propriété | Type | Description |
|-----------|------|-------------|
| `id` | string | Identifiant unique du commerçant |
| `name` | string | Nom du commerçant |
| `description` | string | Description du rôle du commerçant |
| `location` | string | Emplacement du commerçant dans le jeu |
| `currency` | string | Devise utilisée (RUB, EUR, USD) |
| `level` | number | Niveau maximum du commerçant |
| `image` | string | URL de l'image du commerçant |

### Propriétés supplémentaires

#### inventory
Liste des articles vendus par le commerçant:
```json
{
  "id": "5ef6fd846d294f413c2f9524",
  "name": "Maxim 9 9x19 suppressed pistol",
  "price": 68000,
  "currency": "RUB",
  "level": 1
}
```

#### quests
Liste des quêtes proposées par le commerçant:
```json
{
  "id": "5c51aac186f77412033199a2",
  "name": "Punisher"
}
```

---

## Liste des commerçants

| Nom | Description | Devise | Localisation |
|-----|-------------|--------|-------------|
| Prapor | Fournisseur de fournitures militaires | RUB | Basement 2 |
| Therapist | Fournisseur de fournitures médicales | RUB | Main 1 |
| Fence | Commerçant de Scav | RUB | Military Base |
| Peacekeeper | Fournisseur de fournitures OTAN | USD | Warehouse 4 |
| Mechanic | Spécialiste des armes et pièces | RUB | Garage |
| Ragman | Fournisseur de vêtements | RUB | Ragged Line |
| Jaeger | Spécialiste de survie en plein air | RUB | Scav Camp |
| Skier | Commerçant de biens de contrebande | RUB | Commerce Street |
| Lightkeeper | Spécialiste des Shoreline | RUB | Water Station |

---

## Niveaux de commerçants

Chaque commerçant a jusqu'à 4 niveaux :

| Niveau | Description |
|--------|-------------|
| 1 | Niveau initial - inventaire basique |
| 2 | Déverrouillé après réputation positive |
| 3 | Meilleur inventaire |
| 4 | Inventaire complet et meilleurs prix |

---

## Cas d'usage courants

### Obtenir tous les commerçants
```bash
curl "https://api.nivmizz7.fr/api/traders"
```

### Rechercher le commerçant Prapor
```bash
curl "https://api.nivmizz7.fr/api/traders/prapor"
```

### Consulter l'inventaire d'un commerçant
```bash
curl "https://api.nivmizz7.fr/api/traders/peacekeeper" | jq '.inventory'
```

### Trouver les quêtes d'un commerçant
```bash
curl "https://api.nivmizz7.fr/api/traders/prapor" | jq '.quests'
```

### Afficher tous les commerçants et leurs niveaux
```bash
curl "https://api.nivmizz7.fr/api/traders" | jq 'to_entries[] | {name: .value.name, level: .value.level}'
```

### Chercher un article spécifique dans les inventaires
```bash
curl "https://api.nivmizz7.fr/api/traders" | jq '.[] | select(.inventory[].name | contains("AK"))'
```

---

## Notes

- Les commerçants déverrouillent progressivement leurs niveaux au cours du jeu
- Chaque niveau de commerçant offre un meilleur inventaire et de meilleurs prix
- La réputation affecte votre accès aux niveaux supérieurs des commerçants
- Les prix des commerçants sont fixes et ne varient pas
- Chaque commerçant utilise sa propre devise (bien que convertible)
- Les niveaux de commerçants sont réinitialisés à chaque wipe de saison
