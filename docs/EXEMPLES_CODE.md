# API Usage Examples

Practical guide with examples in various programming languages.

## cURL

### Simple Example

```bash
# Retrieve the first 10 items
curl "https://api.nivmizz7.fr/api/items?limit=10"

# Using jq to format output
curl "https://api.nivmizz7.fr/api/items?limit=5" | jq '.items[] | {name: .name, shortName: .shortName}'
```

### Search with Filtering

```bash
# Search for items
curl "https://api.nivmizz7.fr/api/items?search=ak47&limit=10"

# Filter ammunition by caliber
curl "https://api.nivmizz7.fr/api/ammunition?caliber=545x39&limit=20"

# Display ammunition damage
curl "https://api.nivmizz7.fr/api/ammunition?caliber=545x39" | jq '.ammunition[] | {name: .name, damage: .ballistics.damage}'
```

### Requests with Data

```bash
# Add new ammunition (requires admin)
curl -X POST "https://api.nivmizz7.fr/api/editor/ammunition" \
  -H "Content-Type: application/json" \
  -d '{
    "id": "custom_ammo",
    "name": "Custom Ammunition",
    "caliber": "545x39"
  }'

# Update
curl -X PUT "https://api.nivmizz7.fr/api/editor/ammunition/custom_ammo" \
  -H "Content-Type: application/json" \
  -d '{
    "id": "custom_ammo",
    "name": "Updated Custom Ammo",
    "caliber": "545x39",
    "ballistics": {"damage": 55}
  }'

# Save changes
curl -X POST "https://api.nivmizz7.fr/api/editor/save/ammunition"
```

---

## JavaScript / Node.js

### Basic Configuration

```javascript
const API_BASE = 'https://api.nivmizz7.fr/api';

// Utility function for requests
async function apiRequest(endpoint, options = {}) {
  const response = await fetch(`${API_BASE}${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers
    },
    ...options
  });

  if (!response.ok) {
    throw new Error(`API Error: ${response.status} ${response.statusText}`);
  }

  return response.json();
}
```

### Retrieve Items

```javascript
async function getItems(limit = 10, search = null) {
  const params = new URLSearchParams();
  params.append('limit', limit);
  if (search) params.append('search', search);

  const data = await apiRequest(`/items?${params}`);
  console.log(`Found ${data.count} items`);
  return data.items;
}

// Usage
getItems(20, 'ak47').then(items => {
  items.forEach(item => {
    console.log(`${item.name} (${item.shortName})`);
  });
});
```

### Retrieve Traders

```javascript
async function getTraders() {
  const data = await apiRequest('/traders');
  return data;
}

async function getTraderDetails(traderId) {
  const data = await apiRequest(`/traders/${traderId}`);
  console.log(`${data.name} - ${data.description}`);
  console.log(`Inventory: ${data.inventory.length} items`);
  return data;
}

// Usage
getTraders().then(traders => {
  Object.keys(traders).forEach(key => {
    console.log(`${traders[key].name}: ${traders[key].description}`);
  });
});
```

### Pagination Management

```javascript
async function getAllItems() {
  const allItems = [];
  let offset = 0;
  const limit = 100;
  let hasMore = true;

  while (hasMore) {
    const data = await apiRequest(`/items?limit=${limit}&offset=${offset}`);
    allItems.push(...data.items);
    
    if (data.count < limit) {
      hasMore = false;
    }
    offset += limit;
  }

  console.log(`Retrieved ${allItems.length} total items`);
  return allItems;
}
```

### Advanced Search

```javascript
async function searchAmmo(caliber, minDamage = 0) {
  const data = await apiRequest(`/ammunition?caliber=${caliber}&limit=100`);
  
  const filtered = data.ammunition.filter(ammo => 
    ammo.ballistics && ammo.ballistics.damage >= minDamage
  );

  return filtered.sort((a, b) => 
    (b.ballistics?.damage || 0) - (a.ballistics?.damage || 0)
  );
}

// Usage
searchAmmo('545x39', 45).then(ammo => {
  console.log('Top 5 ammunition:');
  ammo.slice(0, 5).forEach(a => {
    console.log(`${a.name}: ${a.ballistics.damage} damage`);
  });
});
```

---

## Python

### Basic Configuration

```python
import requests
from typing import List, Dict, Any

API_BASE = 'https://api.nivmizz7.fr/api'

def api_request(endpoint: str, params: Dict[str, Any] = None) -> Dict:
    """Make a request to the API."""
    try:
        response = requests.get(f'{API_BASE}{endpoint}', params=params)
        response.raise_for_status()
        return response.json()
    except requests.exceptions.RequestException as e:
        print(f"API Error: {e}")
        return None
```

### Retrieve Items

```python
def get_items(limit: int = 10, search: str = None) -> List[Dict]:
    """Retrieve items."""
    params = {'limit': limit}
    if search:
        params['search'] = search
    
    data = api_request('/items', params)
    if data:
        print(f"Found {data['count']} items")
        return data['items']
    return []

# Usage
items = get_items(20, 'ak')
for item in items:
    print(f"{item['name']} ({item['shortName']})")
```

### Analyze Ammunition

```python
def analyze_ammo(caliber: str) -> List[Dict]:
    """Analyze ammunition by caliber."""
    data = api_request('/ammunition', {'caliber': caliber, 'limit': 50})
    
    if data:
        ammo = data['ammunition']
        
        # Calculate statistics
        damages = [a['ballistics']['damage'] for a in ammo if a.get('ballistics')]
        penetrations = [a['ballistics']['penetration'] for a in ammo if a.get('ballistics')]
        
        return {
            'count': len(ammo),
            'avg_damage': sum(damages) / len(damages) if damages else 0,
            'avg_penetration': sum(penetrations) / len(penetrations) if penetrations else 0,
            'ammo': ammo
        }
    return {}

# Usage
stats = analyze_ammo('545x39')
print(f"Caliber 545x39:")
print(f"  Count: {stats['count']}")
print(f"  Average damage: {stats['avg_damage']:.1f}")
print(f"  Average penetration: {stats['avg_penetration']:.1f}")
```

### Local Cache

```python
import json
import os
from datetime import datetime, timedelta

class APICache:
    def __init__(self, cache_dir: str = '.cache'):
        self.cache_dir = cache_dir
        os.makedirs(cache_dir, exist_ok=True)
    
    def _get_cache_path(self, key: str) -> str:
        return os.path.join(self.cache_dir, f"{key}.json")
    
    def get(self, key: str, ttl_hours: int = 24) -> Dict:
        """Retrieve data from cache."""
        cache_file = self._get_cache_path(key)
        
        if os.path.exists(cache_file):
            mod_time = os.path.getmtime(cache_file)
            age = (datetime.now() - datetime.fromtimestamp(mod_time)).total_seconds() / 3600
            
            if age < ttl_hours:
                with open(cache_file, 'r') as f:
                    return json.load(f)
        
        return None
    
    def set(self, key: str, data: Dict):
        """Save data to cache."""
        cache_file = self._get_cache_path(key)
        with open(cache_file, 'w') as f:
            json.dump(data, f)

# Usage
cache = APICache()

def get_traders_cached():
    cached = cache.get('traders', ttl_hours=24)
    if cached:
        print("Using cache")
        return cached
    
    print("Fetching from API")
    data = api_request('/traders')
    cache.set('traders', data)
    return data
```

### Parallelize Requests

```python
from concurrent.futures import ThreadPoolExecutor
import concurrent.futures

def fetch_all_trader_details() -> Dict[str, Dict]:
    """Fetch details of all traders in parallel."""
    traders_data = api_request('/traders')
    
    if not traders_data:
        return {}
    
    trader_ids = list(traders_data.keys())
    results = {}
    
    with ThreadPoolExecutor(max_workers=5) as executor:
        futures = {
            executor.submit(api_request, f'/traders/{tid}'): tid 
            for tid in trader_ids
        }
        
        for future in concurrent.futures.as_completed(futures):
            trader_id = futures[future]
            try:
                results[trader_id] = future.result()
            except Exception as e:
                print(f"Error for {trader_id}: {e}")
    
    return results

# Usage
traders = fetch_all_trader_details()
for name, data in traders.items():
    print(f"{data['name']}: {len(data.get('inventory', []))} items")
```

---

## TypeScript

### Basic Configuration

```typescript
interface APIResponse<T> {
  total?: number;
  count?: number;
  offset?: number;
  [key: string]: any;
}

interface Item {
  id: string;
  name: string;
  shortName: string;
  description?: string;
  rarity?: string;
}

const API_BASE = 'https://api.nivmizz7.fr/api';

async function apiRequest<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const response = await fetch(`${API_BASE}${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`API Error: ${response.status}`);
  }

  return response.json();
}
```

### Typed Requests

```typescript
async function getItems(limit: number = 10, search?: string): Promise<Item[]> {
  const params = new URLSearchParams({ limit: String(limit) });
  if (search) params.append('search', search);

  const response = await apiRequest<APIResponse<Item>>(
    `/items?${params}`
  );

  return response.items || [];
}

async function searchItems(query: string): Promise<Item[]> {
  const items = await getItems(50, query);
  return items.sort((a, b) => 
    a.name.localeCompare(b.name)
  );
}

// Usage
const results = await searchItems('ak');
results.forEach(item => {
  console.log(`${item.name} - ${item.shortName}`);
});
```

---

## Complete Use Case: Inventory Management Application

### Structure

```
my-tarkov-app/
├── src/
│   ├── api.ts           # API Client
│   ├── cache.ts         # Cache System
│   ├── inventory.ts     # Inventory Management
│   └── main.ts          # Entry Point
├── package.json
└── tsconfig.json
```

### Implementation

```typescript
// api.ts
export async function getItemDetails(itemId: string) {
  return apiRequest(`/items/${itemId}`);
}

// cache.ts
class Cache<T> {
  private data: Map<string, T> = new Map();
  private ttl: Map<string, number> = new Map();

  set(key: string, value: T, ttlSeconds: number = 3600) {
    this.data.set(key, value);
    this.ttl.set(key, Date.now() + ttlSeconds * 1000);
  }

  get(key: string): T | null {
    const ttl = this.ttl.get(key);
    if (ttl && Date.now() > ttl) {
      this.data.delete(key);
      this.ttl.delete(key);
      return null;
    }
    return this.data.get(key) || null;
  }
}

// inventory.ts
class InventoryManager {
  private cache = new Cache<any>();
  private items: Map<string, number> = new Map();

  async addItem(itemId: string, quantity: number = 1) {
    const item = await this.getItemWithCache(itemId);
    if (item) {
      this.items.set(itemId, (this.items.get(itemId) || 0) + quantity);
    }
  }

  private async getItemWithCache(itemId: string) {
    let item = this.cache.get(itemId);
    if (!item) {
      item = await getItemDetails(itemId);
      this.cache.set(itemId, item);
    }
    return item;
  }

  getInventory() {
    return Array.from(this.items.entries());
  }
}
```

---

## Best Practices

### 1. Error Handling

```javascript
async function safeApiCall(endpoint, options = {}) {
  try {
    const response = await fetch(`${API_BASE}${endpoint}`, options);
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Unknown error');
    }
    
    return await response.json();
  } catch (error) {
    console.error(`API Error on ${endpoint}:`, error);
    // Implement retry logic or fallback
    return null;
  }
}
```

### 2. Rate Limiting

```javascript
class RateLimitedClient {
  constructor(maxRequests = 10, timeWindow = 1000) {
    this.maxRequests = maxRequests;
    this.timeWindow = timeWindow;
    this.requests = [];
  }

  async request(endpoint) {
    // Clean up old requests
    const now = Date.now();
    this.requests = this.requests.filter(time => now - time < this.timeWindow);

    // Wait if necessary
    if (this.requests.length >= this.maxRequests) {
      const waitTime = this.requests[0] + this.timeWindow - now;
      await new Promise(resolve => setTimeout(resolve, waitTime));
    }

    this.requests.push(Date.now());
    return apiRequest(endpoint);
  }
}
```

### 3. Data Validation

```python
from pydantic import BaseModel, validator

class Item(BaseModel):
    id: str
    name: str
    shortName: str
    
    @validator('name')
    def name_not_empty(cls, v):
        if not v or not v.strip():
            raise ValueError('Name cannot be empty')
        return v

def validate_item(data: dict) -> Item:
    return Item(**data)
```

---

## Additional Resources

- [Complete API Documentation](index.md)
- [Getting Started Guide](guide-demarrage.md)
- [Detailed Endpoints](endpoints-items.md)

