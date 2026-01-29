# Documentation Index

Complete list of all available documentation pages for the Tarkov API.

---

## Quick Navigation

### Main Pages

- **[INDEX](INDEX.md)** - Home and API overview
- **[GUIDE_DEMARRAGE](GUIDE_DEMARRAGE.md)** - Getting started with the API
- **[EXEMPLES_CODE](EXEMPLES_CODE.md)** - Code examples in multiple languages
- **[FAQ](FAQ.md)** - Frequently asked questions

### Reference

- **[STRUCTURES_DONNEES](STRUCTURES_DONNEES.md)** - Data structures and types
- **[SYNTAX_REFERENCE](SYNTAX_REFERENCE.md)** - Documentation format conventions

### API Endpoints

- **[ENDPOINTS_ITEMS](ENDPOINTS_ITEMS.md)** - Items API
- **[ENDPOINTS_AMMUNITION](ENDPOINTS_AMMUNITION.md)** - Ammunition API
- **[ENDPOINTS_TRADERS](ENDPOINTS_TRADERS.md)** - Traders API
- **[ENDPOINTS_MAPS](ENDPOINTS_MAPS.md)** - Maps API
- **[ENDPOINTS_QUESTS](ENDPOINTS_QUESTS.md)** - Quests API
- **[ENDPOINTS_HIDEOUT](ENDPOINTS_HIDEOUT.md)** - Hideout API
- **[ENDPOINTS_PRESETS](ENDPOINTS_PRESETS.md)** - Item Presets API
- **[ENDPOINTS_LEVELS](ENDPOINTS_LEVELS.md)** - Levels API
- **[ENDPOINTS_STORYLINE](ENDPOINTS_STORYLINE.md)** - Storyline API

### Admin

- **[ENDPOINTS_EDITOR](ENDPOINTS_EDITOR.md)** - Editor API (admin only)

---

## Documentation Organization

### By Purpose

#### Getting Started
Perfect for new users:
1. Start with [INDEX](INDEX.md) for API overview
2. Read [GUIDE_DEMARRAGE](GUIDE_DEMARRAGE.md) for setup
3. Check [EXEMPLES_CODE](EXEMPLES_CODE.md) for code samples

#### Learning About Data
Understand the data structures:
- [STRUCTURES_DONNEES](STRUCTURES_DONNEES.md) - Complete data reference

#### Using the API
Browse endpoints by resource:
- Items - [ENDPOINTS_ITEMS](ENDPOINTS_ITEMS.md)
- Ammunition - [ENDPOINTS_AMMUNITION](ENDPOINTS_AMMUNITION.md)
- Traders - [ENDPOINTS_TRADERS](ENDPOINTS_TRADERS.md)
- Maps - [ENDPOINTS_MAPS](ENDPOINTS_MAPS.md)
- Quests - [ENDPOINTS_QUESTS](ENDPOINTS_QUESTS.md)
- Hideout - [ENDPOINTS_HIDEOUT](ENDPOINTS_HIDEOUT.md)
- Presets - [ENDPOINTS_PRESETS](ENDPOINTS_PRESETS.md)
- Levels - [ENDPOINTS_LEVELS](ENDPOINTS_LEVELS.md)
- Storyline - [ENDPOINTS_STORYLINE](ENDPOINTS_STORYLINE.md)

#### Advanced Topics
- [SYNTAX_REFERENCE](SYNTAX_REFERENCE.md) - Documentation format
- [ENDPOINTS_EDITOR](ENDPOINTS_EDITOR.md) - Admin operations

#### Help & Support
- [FAQ](FAQ.md) - Common questions and solutions

---

## File Organization

All documentation files follow a consistent naming convention using **UPPERCASE with underscores**:

```
docs/
├── INDEX.md                      # Home page
├── GUIDE_DEMARRAGE.md           # Getting started
├── EXEMPLES_CODE.md             # Code examples
├── STRUCTURES_DONNEES.md        # Data structures
├── FAQ.md                        # Frequently asked questions
├── SYNTAX_REFERENCE.md          # Documentation format
│
├── ENDPOINTS_ITEMS.md           # Items API
├── ENDPOINTS_AMMUNITION.md      # Ammunition API
├── ENDPOINTS_TRADERS.md         # Traders API
├── ENDPOINTS_MAPS.md            # Maps API
├── ENDPOINTS_QUESTS.md          # Quests API
├── ENDPOINTS_HIDEOUT.md         # Hideout API
├── ENDPOINTS_PRESETS.md         # Presets API
├── ENDPOINTS_LEVELS.md          # Levels API
├── ENDPOINTS_STORYLINE.md       # Storyline API
└── ENDPOINTS_EDITOR.md          # Editor API (admin)
```

---

## Navigation Tips

### Using the Sidebar
- Use the navigation sidebar on the left to browse sections
- Click on any page to view its content
- Use the "On This Page" section on the right to jump to sections

### Search
- Use the search box to find specific topics or endpoints
- Search works across all documentation pages

### Mobile
- On mobile devices, click the menu icon to open the navigation
- Responsive design adapts to all screen sizes

---

## Content Overview

### Total Pages: 16

| Category | Count | Pages |
|----------|-------|-------|
| Main Pages | 4 | INDEX, GUIDE, EXEMPLES, FAQ |
| Reference | 2 | STRUCTURES, SYNTAX |
| Endpoints | 9 | ITEMS, AMMUNITION, TRADERS, MAPS, QUESTS, HIDEOUT, PRESETS, LEVELS, STORYLINE |
| Admin | 1 | EDITOR |

---

## API Reference Summary

### Main Endpoints

| Resource | Endpoint | Description |
|----------|----------|-------------|
| Items | GET /api/items | Retrieve items list |
| Ammunition | GET /api/ammunition | Retrieve ammunition data |
| Traders | GET /api/traders | Retrieve trader information |
| Maps | GET /api/maps | Retrieve game maps |
| Quests | GET /api/quests | Retrieve quests data |
| Hideout | GET /api/hideout | Retrieve hideout modules |
| Presets | GET /api/item-presets | Retrieve item presets |
| Levels | GET /api/levels | Retrieve level data |
| Storyline | GET /api/storyline | Retrieve storyline content |

### Admin Operations

| Operation | Endpoint | Description |
|-----------|----------|-------------|
| Editor | /api/editor/* | Data management (admin only) |

---

## Base Information

**API Base URL:** `https://api.nivmizz7.fr`

**Authentication:** Not required for public endpoints

**Response Format:** JSON

**Documentation Version:** 1.0

---

For more information, start with the [Home Page](INDEX.md) or the [Getting Started Guide](GUIDE_DEMARRAGE.md).
