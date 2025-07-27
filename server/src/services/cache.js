// In-memory cache object
const memoryCache = {};

function getCache(key) {
  const entry = memoryCache[key];
  if (!entry) return null;
  // Check if expired
  if (entry.expiry && Date.now() > entry.expiry) {
    delete memoryCache[key];
    return null;
  }
  return entry.value;
}

function setCache(key, value, ttl = 300) {
  // ttl in seconds
  const expiry = Date.now() + ttl * 1000;
  memoryCache[key] = { value, expiry };
}

module.exports = { getCache, setCache };
