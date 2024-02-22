const CACHE_VER = 1;
const CURRENT_CACHE = `cache ver-${CACHE_VER}`;

const cacheCurrentFiles = ['/', '/index.html'];
const NETWORK_URL_SAVE = new Set(['https://ya-praktikum.tech/api/v2/auth/user']);

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
  if (NETWORK_URL_SAVE.has(event.request.url)) {
    isFetchSaveFromNetwork(event);
  } else {
    isFetchFromCashe(event);
  }
});

function isFetchFromCashe(event) {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response;
      }

      const fetchRequest = event.request.clone();
      return fetch(fetchRequest)
        .then((response) => {
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          const responseToCache = response.clone();
          return update(event.request, responseToCache);
        })
        .catch((err) => {
          console.log(err);
          throw err;
        });
    })
  );
}

function isFetchSaveFromNetwork(event) {
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        if (!response || response.status !== 200) {
          return response;
        }

        const responseToCache = response.clone();
        return update(event.request, responseToCache);
      })
      .catch(() => {
        return caches.match(event.request);
      })
  );
}
