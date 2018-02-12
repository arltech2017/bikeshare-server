self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('video-store').then(function(cache) {
      return cache.addAll([
        '',
        'index.html',
        'icons/icon192.png',
        'icons/icon512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      
      return response;
    })
  );
});
