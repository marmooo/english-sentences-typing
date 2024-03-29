const CACHE_NAME = "2024-03-17 15:40";
const urlsToCache = [
  "/english-sentences-typing/",
  "/english-sentences-typing/index.js",
  "/english-sentences-typing/mp3/bgm.mp3",
  "/english-sentences-typing/mp3/cat.mp3",
  "/english-sentences-typing/mp3/correct.mp3",
  "/english-sentences-typing/mp3/end.mp3",
  "/english-sentences-typing/mp3/keyboard.mp3",
  "/english-sentences-typing/favicon/favicon.svg",
  "https://marmooo.github.io/fonts/textar-light.woff2",
  "https://cdn.jsdelivr.net/npm/simple-keyboard@3.4.52/build/index.min.js",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    }),
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    }),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.filter((cacheName) => cacheName !== CACHE_NAME)
          .map((cacheName) => caches.delete(cacheName)),
      );
    }),
  );
});
