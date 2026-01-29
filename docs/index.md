# Tarkov API Documentation

Welcome to the **Tarkov Standalone API** documentation. This API provides complete access to Escape from Tarkov game data.

## API Overview

**Tarkov API Standalone** is a complete REST API that exposes all essential game data from Escape from Tarkov:

- Items
- Ammunition
- Hideout
- Quests
- Traders
- Maps
- Item Presets
- Levels
- Storyline

## Quick Information

**Base URL:** `https://api.nivmizz7.fr`

**Authentication:** Not required - all endpoints are publicly accessible

**Response Format:** JSON

## Main Endpoints

| Endpoint | Description |
|----------|-------------|
| GET /api/items | Complete list of items with pagination |
| GET /api/ammunition | Ammunition data and caliber information |
| GET /api/traders | Trader data and inventories |
| GET /api/quests | Quest information and requirements |
| GET /api/maps | Game maps and location data |
| GET /api/hideout | Hideout modules and upgrade data |
| GET /api/item-presets | Pre-configured item loadouts |
| GET /api/levels | Player levels and experience requirements |
| GET /api/storyline | Game storyline and lore data |

## Getting Started

1. **New to the API?** Start with the [Getting Started](GUIDE_DEMARRAGE.md) guide
2. **Need code examples?** Check the [Code Examples](EXEMPLES_CODE.md) section
3. **Want API details?** Browse the [API Reference](ENDPOINTS_ITEMS.md) section
4. **Have questions?** See the [FAQ](FAQ.md)

## HTTP Status Codes

- **200 OK** - Request successful
- **400 Bad Request** - Invalid parameters
- **404 Not Found** - Resource not found
- **500 Internal Server Error** - Server error

## Pagination

Most endpoints support pagination:

```
GET /api/items?limit=10&offset=20
```

Parameters:
- `limit` - Maximum items to return
- `offset` - Number of items to skip

## Documentation

- [Syntax Reference](SYNTAX_REFERENCE.md) - Documentation format and conventions
- [Data Structures](STRUCTURES_DONNEES.md) - Data model reference
- [FAQ](FAQ.md) - Frequently asked questions

## Resources

- **GitHub Repository:** https://github.com/nivmizz7/api
- **Data Source:** https://github.com/thaddeus/tarkovdata
- **Official Game:** https://www.escapefromtarkov.com/

## Important Notes

- Data is updated periodically, may be slightly behind current game version
- API usage is subject to reasonable rate limiting
- Abusive usage may result in access restrictions
