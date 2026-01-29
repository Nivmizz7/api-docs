# Quick Reference - Tarkov API Documentation

A quick reference for all available endpoints and resources.

## Essential Commands

```bash
# Serve locally
mkdocs serve

# Build site
mkdocs build

# View docs
open http://localhost:8000
```

## All Endpoints

### Items (Articles)
```
GET /api/items                    # List items
GET /api/items/:id                # Item details
```

### Ammunition (Munitions)
```
GET /api/ammunition               # List ammunition
GET /api/ammunition/:id           # Ammunition details
GET /api/ammunition/calibers/list # List calibers
```

### Traders (Commerçants)
```
GET /api/traders                  # List traders
GET /api/traders/:traderId        # Trader details
```

### Maps (Cartes)
```
GET /api/maps                     # List maps
GET /api/maps/:mapId              # Map details
```

### Quests (Quêtes)
```
GET /api/quests                   # List quests
GET /api/quests/:questId          # Quest details
```

### Hideout (Cachette)
```
GET /api/hideout                  # Hideout details
GET /api/hideout/:moduleId        # Module details
```

### Item Presets (Préréglages)
```
GET /api/item-presets             # List presets
GET /api/item-presets/:id         # Preset details
```

### Levels (Niveaux)
```
GET /api/levels                   # All levels
```

### Storyline (Narration)
```
GET /api/storyline                # List storyline
GET /api/storyline/:id            # Storyline details
```

### Editor (Admin)
```
GET /api/editor/types             # Available data types
GET /api/editor/:type             # Get type
POST /api/editor/:type            # Create item
PUT /api/editor/:type/:id         # Update item
DELETE /api/editor/:type/:id      # Delete item
POST /api/editor/save/:type       # Save changes
```

---

## Main Documentation Pages

| Page | Description |
|------|-------------|
| [index.md](docs/index.md) | Home and overview |
| [guide-demarrage.md](docs/guide-demarrage.md) | Quick guide |
| [exemples-code.md](docs/exemples-code.md) | Practical examples |
| [structures-donnees.md](docs/structures-donnees.md) | JSON structures |
| [faq.md](docs/faq.md) | Questions/answers |
| [endpoints-*.md](docs/) | Details for each endpoint |

---

## Common Parameters

### Pagination
```bash
?limit=10        # Number of items (default: all)
?offset=0        # Skip items (for pagination)
```

### Search
```bash
?search=text     # Search by name
```

### Specific Filters
```bash
?caliber=545x39  # Ammunition: filter by caliber
?trader=Prapor   # Quests: filter by trader
?baseId=xxxxx    # Presets: filter by base item
```

---

## Quick Examples

### cURL
```bash
# Items
curl "https://api.nivmizz7.fr/api/items?limit=10"

# Ammunition with caliber
curl "https://api.nivmizz7.fr/api/ammunition?caliber=545x39"

# Trader quests
curl "https://api.nivmizz7.fr/api/quests?trader=Prapor"
```

### JavaScript
```javascript
const data = await fetch('https://api.nivmizz7.fr/api/items?limit=10')
  .then(r => r.json());
console.log(data.items);
```

### Python
```python
import requests
data = requests.get('https://api.nivmizz7.fr/api/items?limit=10').json()
print(data)
```

---

## Response Structures

### Paginated Response
```json
{
  "total": 1250,
  "count": 10,
  "offset": 0,
  "items": [...]
}
```

### Error Response
```json
{
  "error": "Item not found"
}
```

---

## Available Data

- **1250+** items
- **240+** ammunition types
- **9** traders
- **243+** quests
- **10** maps
- **14** hideout modules
- **450+** presets
- **71** levels
- **125+** storyline items

---

## Table of Contents

### Documentation
```
docs/
├── index.md                 # Start here
├── guide-demarrage.md       # Quick tutorial
├── exemples-code.md         # Examples
├── structures-donnees.md    # JSON reference
├── faq.md                   # Questions/Answers
├── endpoints-*.md           # Endpoint details
├── endpoints-editor.md      # Admin API
└── RESUME.md               # This file
```

---

## Quick Links

- **API**: https://api.nivmizz7.fr
- **GitHub Repo**: https://github.com/nivmizz7/api
- **Data Source**: https://github.com/thaddeus/tarkovdata
- **Escape from Tarkov**: https://www.escapefromtarkov.com/

---

## Recommended Learning Path

1. Read [index.md](docs/index.md) - 5 min
2. Read [guide-demarrage.md](docs/guide-demarrage.md) - 10 min
3. Try [exemples-code.md](docs/exemples-code.md) - 15 min
4. Refer to [endpoints-items.md](docs/endpoints-items.md) - 5-10 min
5. Check [structures-donnees.md](docs/structures-donnees.md) as needed

---

## Quick Verification

```bash
# Test the API
curl https://api.nivmizz7.fr

# Check a request
curl "https://api.nivmizz7.fr/api/items?limit=1"

# With pretty-print
curl "https://api.nivmizz7.fr/api/items?limit=1" | jq
```

---

## Maintenance

**Documentation created**: January 2026
**API Version**: 1.0.0
**Last updated**: January 2026

---

For **complete documentation**, see the `.md` files in the `docs/` folder.

For **questions**, see the [FAQ](docs/faq.md).

For **examples**, see [exemples-code.md](docs/exemples-code.md).

**Need help?** Read the [quick start guide](docs/guide-demarrage.md)!
