var CACHE_NAME = '2022-03-18 01:40';
var urlsToCache = [
  "/english-sentences-typing/",
  "/english-sentences-typing/index.js",
  "/english-sentences-typing/mp3/bgm.mp3",
  "/english-sentences-typing/mp3/cat.mp3",
  "/english-sentences-typing/mp3/correct.mp3",
  "/english-sentences-typing/mp3/end.mp3",
  "/english-sentences-typing/mp3/keyboard.mp3",
  "/english-sentences-typing/favicon/original.svg",
  "https://marmooo.github.io/fonts/textar-light.woff2",
  "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css",
  "https://cdn.jsdelivr.net/npm/simple-keyboard@3.4.52/build/index.min.js",
];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then(function (cache) {
        return cache.addAll(urlsToCache);
      }),
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }),
  );
});

self.addEventListener("activate", function (event) {
  var cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.map(function (cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        }),
      );
    }),
  );
});
