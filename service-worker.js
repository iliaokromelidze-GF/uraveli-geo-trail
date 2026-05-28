const CACHE_NAME = "uraveli-geo-trail-v1";
const CORE_ASSETS = [
  "./",
  "./index.html",
  "./style.css",
  "./manifest.json",
  "./images/logo.png",
  "./images/icon-192.png",
  "./images/icon-512.png",
  "./images/main.jpg",
  "./images/object-1.jpg",
  "./images/object-2.jpg",
  "./images/object-3.jpg",
  "./images/gallery-1.jpg",
  "./images/gallery-2.jpg",
  "./images/gallery-3.jpg",
  "./images/gallery-4.jpg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(CORE_ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(event.request).then((networkResponse) => {
        const responseClone = networkResponse.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseClone);
        });
        return networkResponse;
      });
    })
  );
});
