# Tarkov API Documentation

Complete and detailed documentation for the **Tarkov Standalone API** available at `https://api.nivmizz7.fr`.

## About This Documentation

This documentation site provides comprehensive information about the Tarkov API, including:

- Quick start guides
- Complete API reference with examples
- Data structure documentation
- Frequently asked questions
- Code examples in multiple languages
- Documentation format conventions

## Quick Start

### View Documentation Locally

```bash
# Install dependencies
pip install mkdocs mkdocs-material

# Run local development server
mkdocs serve
```

Documentation will be available at `http://localhost:8000`

### Build for Production

```bash
mkdocs build
```

This generates a static HTML site in the `site/` folder.

## Documentation Structure

```
docs/
├── INDEX.md                      # Home page
├── GUIDE_DEMARRAGE.md           # Getting started guide
├── EXEMPLES_CODE.md             # Code examples
├── STRUCTURES_DONNEES.md        # Data structures reference
├── FAQ.md                        # Frequently asked questions
├── SYNTAX_REFERENCE.md          # Documentation syntax conventions
├── ENDPOINTS_ITEMS.md           # Items API endpoint
├── ENDPOINTS_AMMUNITION.md      # Ammunition API endpoint
├── ENDPOINTS_TRADERS.md         # Traders API endpoint
├── ENDPOINTS_MAPS.md            # Maps API endpoint
├── ENDPOINTS_QUESTS.md          # Quests API endpoint
├── ENDPOINTS_HIDEOUT.md         # Hideout API endpoint
├── ENDPOINTS_PRESETS.md         # Item Presets API endpoint
├── ENDPOINTS_LEVELS.md          # Levels API endpoint
├── ENDPOINTS_STORYLINE.md       # Storyline API endpoint
└── ENDPOINTS_EDITOR.md          # Editor API (admin)

mkdocs.yml                        # MkDocs configuration
```

## File Naming Convention

All documentation files follow a consistent naming convention:

- **Main pages**: `PAGE_NAME.md` (e.g., `GUIDE_DEMARRAGE.md`)
- **API endpoints**: `ENDPOINTS_RESOURCE.md` (e.g., `ENDPOINTS_ITEMS.md`)
- **Examples**: `EXEMPLES_TOPIC.md` (e.g., `EXEMPLES_CODE.md`)
- **Reference**: `STRUCTURES_DONNEES.md`

All names use **UPPERCASE with underscores** as separators.

## Documentation Contents

### Getting Started
- **INDEX.md** - API overview and quick reference
- **GUIDE_DEMARRAGE.md** - Setup and first requests

### API Reference
- **ENDPOINTS_ITEMS.md** - Item management
- **ENDPOINTS_AMMUNITION.md** - Ammunition and calibers
- **ENDPOINTS_TRADERS.md** - Trader data
- **ENDPOINTS_MAPS.md** - Game maps
- **ENDPOINTS_QUESTS.md** - Quest information
- **ENDPOINTS_HIDEOUT.md** - Hideout data
- **ENDPOINTS_PRESETS.md** - Item presets
- **ENDPOINTS_LEVELS.md** - Player levels
- **ENDPOINTS_STORYLINE.md** - Storyline content
- **ENDPOINTS_EDITOR.md** - Admin editor endpoints

### Additional Resources
- **EXEMPLES_CODE.md** - Code examples (cURL, JavaScript, Python, etc.)
- **STRUCTURES_DONNEES.md** - Data type and object structure reference
- **FAQ.md** - Frequently asked questions and troubleshooting
- **SYNTAX_REFERENCE.md** - Documentation format and conventions

## Navigation

The documentation is organized in `mkdocs.yml` with the following sections:

1. **Home** - Main overview
2. **Getting Started** - Quick start guide
3. **Code Examples** - Programming language examples
4. **Data Structures** - Reference documentation
5. **FAQ** - Common questions
6. **Documentation** - Format reference
7. **API Reference** - All endpoints
8. **Admin** - Editor endpoints

## Documentation Format

Each API endpoint is documented with:

- **Description** - What the endpoint does
- **Base URL** - API base URL
- **Syntax** - Endpoint syntax with parameters
- **Parameters** - Query, path, and body parameters
- **Example Requests** - cURL usage examples
- **Response** - Example JSON response
- **Response Codes** - HTTP status codes and meanings

See **SYNTAX_REFERENCE.md** for complete format details.

## API Information

**Base URL:** `https://api.nivmizz7.fr`

**Authentication:** Not required - public endpoints

**Response Format:** JSON

**Pagination:** Supported on most endpoints with `limit` and `offset` parameters

## Available Endpoints

| Endpoint | Description |
|----------|-------------|
| GET /api/items | Items with pagination and search |
| GET /api/ammunition | Ammunition data and calibers |
| GET /api/traders | Trader information |
| GET /api/quests | Quest data |
| GET /api/maps | Game maps |
| GET /api/hideout | Hideout modules |
| GET /api/item-presets | Equipment presets |
| GET /api/levels | Player levels |
| GET /api/storyline | Game storyline |

## Resources

- **API Repository:** https://github.com/nivmizz7/api
- **Data Source:** https://github.com/thaddeus/tarkovdata
- **Game Website:** https://www.escapefromtarkov.com/

## Support

For questions or issues:

1. Read the complete documentation
2. Check the [FAQ](docs/FAQ.md)
3. Visit the GitHub repository: https://github.com/nivmizz7/api

---

**Last Updated:** January 2026  
**Documentation Version:** 1.0  
**API Version:** 1.0.0
