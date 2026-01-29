# Tarkov API Documentation

Complete and detailed documentation for the Tarkov Standalone API available at `https://api.nivmizz7.fr`.

## Documentation Content

### Main Pages

- **index.md** - Home page with API overview
- **guide-demarrage.md** - Quick start guide with practical examples

### Available Endpoints

1. **endpoints-items.md** - Item/Item management
   - GET /api/items
   - GET /api/items/:id

2. **endpoints-ammunition.md** - Ammunition management
   - GET /api/ammunition
   - GET /api/ammunition/:id
   - GET /api/ammunition/calibers/list

3. **endpoints-traders.md** - Trader data
   - GET /api/traders
   - GET /api/traders/:traderId

4. **endpoints-maps.md** - Game maps
   - GET /api/maps
   - GET /api/maps/:mapId

5. **endpoints-quests.md** - Quest management
   - GET /api/quests
   - GET /api/quests/:questId

6. **endpoints-hideout.md** - Hideout data
   - GET /api/hideout
   - GET /api/hideout/:moduleId

7. **endpoints-presets.md** - Item presets
   - GET /api/item-presets
   - GET /api/item-presets/:id

8. **endpoints-levels.md** - Levels and progression
   - GET /api/levels

9. **endpoints-storyline.md** - Storyline and lore
   - GET /api/storyline
   - GET /api/storyline/:id

10. **endpoints-editor.md** - Editing endpoints (admin)
    - GET/POST/PUT/DELETE /api/editor/*

## Quick Access

### Build documentation locally

```bash
# Install dependencies
pip install mkdocs mkdocs-material

# Serve documentation locally
mkdocs serve

# Documentation is accessible at http://localhost:8000
```

### Build for production

```bash
mkdocs build
```

This generates a `site/` folder with static HTML documentation.

## Documentation Structure

```
docs/
├── index.md                    # Home page
├── guide-demarrage.md         # Quick start guide
├── endpoints-items.md         # Items endpoint
├── endpoints-ammunition.md    # Ammunition endpoint
├── endpoints-traders.md       # Traders endpoint
├── endpoints-maps.md          # Maps endpoint
├── endpoints-quests.md        # Quests endpoint
├── endpoints-hideout.md       # Hideout endpoint
├── endpoints-presets.md       # Item Presets endpoint
├── endpoints-levels.md        # Levels endpoint
├── endpoints-storyline.md     # Storyline endpoint
├── endpoints-editor.md        # Editor endpoint (admin)
└── levels.md                  # Legacy (ignore)

mkdocs.yml                      # MkDocs configuration
```

## Resources

- **API Base URL**: https://api.nivmizz7.fr
- **GitHub Repository**: https://github.com/nivmizz7/api
- **Data Source**: https://github.com/thaddeus/tarkovdata
- **Escape from Tarkov**: https://www.escapefromtarkov.com/

## Documentation Format

Each endpoint is documented with:

- **Description** - What the endpoint does
- **URL** - Exact endpoint path
- **Parameters** - All accepted parameters
- **Request Examples** - Usage examples with cURL
- **Response** - Example JSON response
- **Response Codes** - Possible HTTP codes
- **Properties** - Detailed explanation of each field
- **Use Cases** - Common practical examples
- **Notes** - Important additional information

## Authentication

The API **does not require authentication** for most endpoints.

Only editor endpoints (`/api/editor/*`) require administrator authentication.

## Statistics

- **9 main endpoints** (items, ammo, traders, maps, quests, hideout, presets, levels, storyline)
- **Editor endpoints** for data management (admin)
- **Pagination support** for most endpoints
- **Uniform JSON response format**

## Usage

### Example with cURL

```bash
# Retrieve first 10 items
curl "https://api.nivmizz7.fr/api/items?limit=10"

# Search for ammunition
curl "https://api.nivmizz7.fr/api/ammunition?search=BP&limit=5"

# Display all traders
curl "https://api.nivmizz7.fr/api/traders"
```

### Example with JavaScript

```javascript
async function getItems() {
  const response = await fetch('https://api.nivmizz7.fr/api/items?limit=10');
  const data = await response.json();
  console.log(data.items);
}

getItems();
```

### Example with Python

```python
import requests

response = requests.get('https://api.nivmizz7.fr/api/items?limit=10')
data = response.json()
print(data)
```

## Read the Documentation

Consult the quick start guide to get started: **guide-demarrage.md**

For complete technical details, see the specific endpoint pages.

## Features

- Complete access to all items
- Detailed ammunition data with ballistics
- Trader inventories
- All available quests
- Map information and spawns
- Hideout data
- Equipment presets
- Levels and progression
- Game storyline and lore
- Editing endpoints (admin)

## Support

For questions or issues:
1. Read the complete documentation
2. Check the original GitHub repository: https://github.com/nivmizz7/api
3. Check the data source: https://github.com/thaddeus/tarkovdata

---

**Last Updated**: January 2026
**API Version**: 1.0.0
