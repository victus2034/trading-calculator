self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.filter(function (key) {
        return key !== "trading-calculator-v2";
      }).map(function (key) {
        return caches.delete(key);
      }));
    }).then(function () {
      return self.clients.claim();
    })
  );
});

self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open("trading-calculator-v2").then(function (cache) {
      return cache.addAll([
        "./",
        "./index.html",
        "./manifest.json"
      ]);
    }).then(function () {
      return self.skipWaiting();
    })
  );
});

self.addEventListener("fetch", function (e) {
  e.respondWith(
    fetch(e.request).then(function (response) {
      var copy = response.clone();
      caches.open("trading-calculator-v2").then(function (cache) {
        cache.put(e.request, copy);
      });
      return response;
    }).catch(function () {
      return caches.match(e.request);
    })
  );
});
