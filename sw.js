const CACHE="knack-v14";
const ASSETS=["./", "./index.html", "./manifest.webmanifest", "./icon-180.png", "./icon-192.png", "./icon-512.png", "./knack-app-qr.png", "./logo-cyan.png", "./logo-red.png", "./logo-purple.png", "./logo-light.png", "./logo-ice.png", "./logo-pink.png", "./logo-dark.png", "./logo-green.png", "./logo-sand.png", "./logo-amber.png", "./logo-orange.png", "./logo-blue.png"];
self.addEventListener("install",e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener("fetch",e=>{if(e.request.method!=="GET")return;e.respondWith(fetch(e.request).catch(()=>caches.match(e.request).then(r=>r||caches.match("./index.html"))));});
