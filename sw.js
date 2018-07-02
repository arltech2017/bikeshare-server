self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('video-store').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/appicons/icon36.png',
	'/appicons/icon48.png',
	'/appicons/icon72.png',
	'/appicons/icon96.png',
	'/appicons/icon144.png',
        '/appicons/icon192.png',
        '/appicons/icon512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      
      return response || fetch(e.request);
    })
  );
});
