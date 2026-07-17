const CACHE_NAME = 'cablefinder-v1';
const urlsToCache = [
  '/cablefinder/',
  '/cablefinder/index.html',
  '/cablefinder/app.html',
  '/cablefinder/manifest.json',
  '/cablefinder/assets/icons/icon-72.png',
  '/cablefinder/assets/icons/icon-96.png',
  '/cablefinder/assets/icons/icon-128.png',
  '/cablefinder/assets/icons/icon-144.png',
  '/cablefinder/assets/icons/icon-152.png',
  '/cablefinder/assets/icons/icon-192.png',
  '/cablefinder/assets/icons/icon-384.png',
  '/cablefinder/assets/icons/icon-512.png'
];

// Install event - cache assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('CableFinder: Caching assets');
        return cache.addAll(urlsToCache);
      })
      .catch((err) => {
        console.log('CableFinder: Cache failed', err);
      })
  );
  self.skipWaiting();
});

// Activate event - clean old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    })
  );
  self.clients.claim();
});

// Fetch event - serve from cache or network
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        if (response) {
          return response;
        }
        return fetch(event.request)
          .then((networkResponse) => {
            // Cache new requests
            if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
              return networkResponse;
            }
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseToCache);
            });
            return networkResponse;
          })
          .catch(() => {
            // Return offline fallback if available
            console.log('CableFinder: Network request failed, serving from cache');
          });
      })
  );
});
