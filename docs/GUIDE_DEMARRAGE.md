# Quick Start Guide

Welcome! This guide will help you get started with the Tarkov API in just a few minutes.

## Setup and Configuration

### 1. Base URL
```
https://api.nivmizz7.fr
```

### 2. First Request
```bash
curl "https://api.nivmizz7.fr"
```

Response:
```json
{
  "name": "Tarkov API Standalone",
  "version": "1.0.0",
  "description": "REST API for Escape from Tarkov data",
  "endpoints": { ... }
}
```

## Common Examples

### Retrieve Items

```bash
# First 10 items
curl "https://api.nivmizz7.fr/api/items?limit=10"

# Search for an item
curl "https://api.nivmizz7.fr/api/items?search=ak47&limit=5"
```

### Check Traders

```bash
# All traders
curl "https://api.nivmizz7.fr/api/traders"

# A specific trader
curl "https://api.nivmizz7.fr/api/traders/prapor"
```

### Find Quests

```bash
# All quests
curl "https://api.nivmizz7.fr/api/quests?limit=20"

# Quests from a trader
curl "https://api.nivmizz7.fr/api/quests?trader=Prapor"
```

### Explore Maps

```bash
# All maps
curl "https://api.nivmizz7.fr/api/maps"

# A specific map
curl "https://api.nivmizz7.fr/api/maps/interchange"
```

## Using with Libraries

### JavaScript/Node.js

```javascript
const fetch = require('node-fetch');

async function getItems() {
  const response = await fetch('https://api.nivmizz7.fr/api/items?limit=10');
  const data = await response.json();
  console.log(data);
}

getItems();
```

### Python

```python
import requests

response = requests.get('https://api.nivmizz7.fr/api/items?limit=10')
data = response.json()
print(data)
```

### cURL with jq

```bash
# Display all item names
curl "https://api.nivmizz7.fr/api/items?limit=50" | jq '.items[] | .name'

# Filter ammunition by caliber
curl "https://api.nivmizz7.fr/api/ammunition?caliber=545x39" | jq '.ammunition[] | {name: .name, damage: .ballistics.damage}'

# Display level bonuses
curl "https://api.nivmizz7.fr/api/levels" | jq '.[] | {level: .level, title: .title}'
```

## Managing Pagination

For large results, use `limit` and `offset`:

```bash
# Page 1 (items 0-99)
curl "https://api.nivmizz7.fr/api/items?limit=100&offset=0"

# Page 2 (items 100-199)
curl "https://api.nivmizz7.fr/api/items?limit=100&offset=100"

# Page 3 (items 200-299)
curl "https://api.nivmizz7.fr/api/items?limit=100&offset=200"
```

## Error Handling

The API returns standard error responses:

```json
{
  "error": "Item not found"
}
```

HTTP Codes:
- `200` - Success
- `404` - Not found
- `400` - Bad request
- `500` - Server error

## Best Practices Tips

### 1. Use Pagination
Remember to limit your results to improve performance:
```bash
curl "https://api.nivmizz7.fr/api/items?limit=50&offset=0"
```

### 2. Cache Results
API data rarely changes, consider caching locally:
```javascript
const cache = {};
async function getItemsWithCache(limit = 50) {
  const key = `items_${limit}`;
  if (cache[key]) return cache[key];
  
  const response = await fetch(`https://api.nivmizz7.fr/api/items?limit=${limit}`);
  const data = await response.json();
  cache[key] = data;
  return data;
}
```

### 3. Handle Network Errors
```javascript
try {
  const response = await fetch('https://api.nivmizz7.fr/api/items');
  if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error('Error:', error);
}
```

### 4. Use Appropriate Filters
```bash
# Good - Uses built-in filters
curl "https://api.nivmizz7.fr/api/ammunition?caliber=545x39"

# Bad - Retrieves everything then filters locally
curl "https://api.nivmizz7.fr/api/ammunition" | jq '.[] | select(.caliber == "545x39")'
```

## Next Steps

- Check the [complete endpoint documentation](endpoints-items.md)
- Explore [quests](endpoints-quests.md)
- Discover [maps](endpoints-maps.md)
- Learn about [storyline](endpoints-storyline.md)

## Help and Support

- GitHub Repository: https://github.com/nivmizz7/api
- Data Source: https://github.com/thaddeus/tarkovdata
- Official Escape from Tarkov Site: https://www.escapefromtarkov.com/
