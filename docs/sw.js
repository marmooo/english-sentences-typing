const CACHE_NAME="2024-02-25 09:42",urlsToCache=["/english-sentences-typing/","/english-sentences-typing/index.js","/english-sentences-typing/mp3/bgm.mp3","/english-sentences-typing/mp3/cat.mp3","/english-sentences-typing/mp3/correct.mp3","/english-sentences-typing/mp3/end.mp3","/english-sentences-typing/mp3/keyboard.mp3","/english-sentences-typing/favicon/favicon.svg","https://marmooo.github.io/fonts/textar-light.woff2","https://cdn.jsdelivr.net/npm/simple-keyboard@3.4.52/build/index.min.js"];self.addEventListener("install",e=>{e.waitUntil(caches.open(CACHE_NAME).then(e=>e.addAll(urlsToCache)))}),self.addEventListener("fetch",e=>{e.respondWith(caches.match(e.request).then(t=>t||fetch(e.request)))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(e=>Promise.all(e.filter(e=>e!==CACHE_NAME).map(e=>caches.delete(e)))))})