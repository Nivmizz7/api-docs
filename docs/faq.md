# Frequently Asked Questions (FAQ)

Answers to the most common questions about the Tarkov API.

## General Usage

### Q: Does the API require an authentication key?

**A:** No, the API is public and does not require an authentication key for read endpoints. Only editor endpoints (`/api/editor/*`) require administrator authentication.

### Q: What is the rate limit?

**A:** There is no officially documented rate limit. However, it is recommended to use reasonable usage. For large data volumes, use pagination with `limit` and `offset`.

### Q: Are the data up-to-date with the game?

**A:** Data is updated periodically but may be slightly behind the latest game version. For current data, check the original source: https://github.com/thaddeus/tarkovdata

### Q: Can I use the API in production?

**A:** Yes, the API is stable and can be used in production. However, make sure to implement proper error handling and a caching system.

---

## Endpoints and Data

### Q: How do I paginate through large lists?

**A:** Use the `limit` and `offset` parameters:

```bash
# Retrieve 100 items at a time
curl "https://api.nivmizz7.fr/api/items?limit=100&offset=0"  # Items 0-99
curl "https://api.nivmizz7.fr/api/items?limit=100&offset=100"  # Items 100-199
curl "https://api.nivmizz7.fr/api/items?limit=100&offset=200"  # Items 200-299
```

### Q: How do I search for a specific item?

**A:** Use the `search` parameter:

```bash
# Search for items containing "ak" in the name
curl "https://api.nivmizz7.fr/api/items?search=ak&limit=20"

# Search for ammunition
curl "https://api.nivmizz7.fr/api/ammunition?search=BP"
```

### Q: How do I get all quests from a trader?

**A:** Use the `trader` parameter:

```bash
curl "https://api.nivmizz7.fr/api/quests?trader=Prapor&limit=50"
```

### Q: How do I find all available calibers?

**A:** Use the specialized endpoint:

```bash
curl "https://api.nivmizz7.fr/api/ammunition/calibers/list"
```

### Q: Where do I find high-value items on a map?

**A:** Check the `/api/maps/{mapId}` endpoints to see loot zones:

```bash
curl "https://api.nivmizz7.fr/api/maps/interchange" | jq '.loot'
```

### Q: How do I retrieve details of a specific item?

**A:** Use the endpoint with the ID:

```bash
curl "https://api.nivmizz7.fr/api/items/507a1cc571423cdc2b000407"
```

### Q: How many items does the API contain?

**A:** Approximately 1250+ items, 240+ ammunition types, 243+ quests, and more. For exact count, use:

```bash
curl "https://api.nivmizz7.fr/api/editor/types" | jq '.types'
```

---

## Development

### Q: How do I cache data locally?

**A:** Here's an example in JavaScript:

```javascript
const cache = {};
const CACHE_TTL = 24 * 60 * 60 * 1000; // 24 hours

async function getCachedData(endpoint) {
  const now = Date.now();
  const cached = cache[endpoint];
  
  if (cached && (now - cached.timestamp) < CACHE_TTL) {
    console.log('Using cache');
    return cached.data;
  }
  
  const response = await fetch(`https://api.nivmizz7.fr/api${endpoint}`);
  const data = await response.json();
  
  cache[endpoint] = { data, timestamp: now };
  return data;
}
```

### Q: How do I handle request errors?

**A:** Implement a try-catch:

```javascript
async function safeRequest(endpoint) {
  try {
    const response = await fetch(`https://api.nivmizz7.fr/api${endpoint}`);
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error(`Error for ${endpoint}:`, error);
    // Return default data or null
    return null;
  }
}
```

### Q: How do I implement automatic retry?

**A:** Here's an implementation with retry:

```javascript
async function fetchWithRetry(endpoint, maxRetries = 3) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      const response = await fetch(`https://api.nivmizz7.fr/api${endpoint}`);
      if (response.ok) return await response.json();
    } catch (error) {
      console.log(`Attempt ${i + 1} failed, retrying...`);
      if (i === maxRetries - 1) throw error;
      await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)));
    }
  }
}
```

### Q: How do I combine requests in parallel?

**A:** Use Promise.all():

```javascript
async function getMultipleData() {
  const [items, ammo, traders] = await Promise.all([
    fetch('https://api.nivmizz7.fr/api/items?limit=50').then(r => r.json()),
    fetch('https://api.nivmizz7.fr/api/ammunition?limit=50').then(r => r.json()),
    fetch('https://api.nivmizz7.fr/api/traders').then(r => r.json())
  ]);
  
  return { items, ammo, traders };
}
```

### Q: How do I sort the results?

**A:** The API doesn't support sorting directly, sort locally:

```javascript
// Sort ammunition by decreasing damage
const ammo = await fetch('https://api.nivmizz7.fr/api/ammunition?limit=100')
  .then(r => r.json());

const sorted = ammo.ammunition.sort((a, b) => 
  (b.ballistics?.damage || 0) - (a.ballistics?.damage || 0)
);

sorted.slice(0, 10).forEach(a => {
  console.log(`${a.name}: ${a.ballistics.damage} damage`);
});
```

---

## Common Issues

### Q: I get a 404 code for an item I know exists.

**A:** Check:
1. The ID is exact (case-sensitive)
2. The endpoint is correct
3. The item hasn't been deleted

Try using search instead:
```bash
curl "https://api.nivmizz7.fr/api/items?search=nom_article&limit=5"
```

### Q: The search request returns no results.

**A:** 
1. Check spelling
2. Search is case-insensitive
3. Use partial words: "ak" for "AK 74M"
4. Try without parameters to see all items

### Q: The total number of items doesn't match what I get.

**A:** You probably forgot to paginate:
```bash
# Check total count
curl "https://api.nivmizz7.fr/api/items?limit=1" | jq '.total'

# Paginate properly
for offset in 0 100 200 300; do
  curl "https://api.nivmizz7.fr/api/items?limit=100&offset=$offset"
done
```

### Q: How can I update the data?

**A:** Use the editor endpoints (requires admin authentication):

```bash
# Add a new item
curl -X POST "https://api.nivmizz7.fr/api/editor/ammunition" \
  -H "Content-Type: application/json" \
  -d '{"id":"custom","name":"Custom Ammo"}'

# Save
curl -X POST "https://api.nivmizz7.fr/api/editor/save/ammunition"
```

See the [Editor Documentation](endpoints-editor.md) for more details.

---

## Performance and Optimization

### Q: How many requests can I make per second?

**A:** There is no documented limit, but for optimal performance:
- Use pagination
- Cache results
- Avoid unnecessary requests
- Group requests in parallel if possible

### Q: What is the largest response the API can return?

**A:** Use `limit` to control size:
- Recommended: 50-100 items per request
- Maximum: No officially documented limit
- Default: All items if no limit specified

### Q: How do I optimize an application using the API?

**A:** Best practices:
1. **Cache**: Save data locally
2. **Pagination**: Fetch in batches, not all at once
3. **Filtering**: Use parameters (search, caliber, trader)
4. **Parallelization**: Combine non-dependent requests
5. **Compression**: Use gzip if possible
6. **Lazy loading**: Load data on demand

---

## Support and Resources

### Q: Where can I report a bug or make a suggestion?

**A:** 
- GitHub Repository: https://github.com/nivmizz7/api
- Data Source: https://github.com/thaddeus/tarkovdata
- Documentation: Check files on this site

### Q: Where can I find more information?

**A:** 
- [Getting Started Guide](guide-demarrage.md)
- [Code Examples](exemples-code.md)
- [Endpoint Documentation](endpoints-items.md)
- [Data Structures](structures-donnees.md)

### Q: Is the API officially maintained?

**A:** The API is maintained and stable. It uses data from the Tarkov Data project (https://github.com/thaddeus/tarkovdata) which is regularly updated.

---

## Use Cases

### Q: I want to create an inventory management application.

**A:** See the [Examples Documentation](exemples-code.md#complete-use-case-inventory-management-application)

### Q: I want to create an ammunition damage calculator.

**A:** Use the ammunition endpoint with ballistic properties:

```bash
curl "https://api.nivmizz7.fr/api/ammunition?caliber=545x39&limit=100" \
  | jq '.ammunition[] | {name: .name, damage: .ballistics.damage, penetration: .ballistics.penetration}'
```

### Q: I want to create a loot guide by map.

**A:** Use the maps endpoint:

```bash
curl "https://api.nivmizz7.fr/api/maps/interchange" | jq '.loot'
```

### Q: I want to track quest progression.

**A:** Use the quests endpoint:

```bash
curl "https://api.nivmizz7.fr/api/quests?trader=Prapor" | jq '.quests[] | {title: .title, reward: .reward.experience}'
```

---

## Contributions

### Q: Can I contribute to the documentation?

**A:** Yes! The documentation is in the `docs/` folder in Markdown format. Check the main README for instructions.

### Q: Can I add new data to the API?

**A:** Use the editor endpoints if you have admin access. Otherwise, contribute to the source project: https://github.com/thaddeus/tarkovdata

---

**Last updated:** January 2026

Can't find your answer? Check the [complete documentation](index.md) or report an issue on GitHub.
