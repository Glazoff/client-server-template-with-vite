const CACHE_VER = 1;
const CURRENT_CACHE = `cache ver-${CACHE_VER}`;

const cacheCurrentFiles = ['/', '/index.html'];
const isFromCache = (request) => caches.open(CURRENT_CACHE).then((cache) => cache.match(request));

self.addEventListener('activate', (evt: ExtendableEvent) => {
  console.log(`Service worker ${CURRENT_CACHE} запущен`);
  evt.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CURRENT_CACHE) {
            console.log(`Предыдущий service worker ${cacheName} удален`);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('install', (event: ExtendableEvent) => {
  event.waitUntil(
    caches
      .open(CURRENT_CACHE)
      .then((cache) => {
        console.log('Загружен в кэш');
        return cache.addAll(cacheCurrentFiles);
      })
      .catch((error) => {
        console.warn(error);
        throw error;
      })
  );
});

const update = (request, fetchResponse) =>
  caches.open(CURRENT_CACHE).then((cache) => {
    cache.put(request, fetchResponse.clone());
    return fetchResponse;
  });

self.addEventListener('fetch', (event: FetchEvent) => {
  event.respondWith(
    isFromNetwork(event.request, 5000).catch(() => {
      console.log(`Фетч запрос по адрессу: ${event.request.url} взят из кэша`);
      return isFromCache(event.request);
    })
  );
});

const isFromNetwork = (request, timeout) =>
  new Promise((resolve, reject) => {
    const timeoutId = setTimeout(reject, timeout);
    fetch(request)
      .then((fetchResponse) => {
        clearTimeout(timeoutId);
        return update(request, fetchResponse);
      })
      .then(resolve)
      .catch(reject);
  });
