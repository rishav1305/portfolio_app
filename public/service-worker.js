// This is the service worker with the combined offline experience (Offline page + Offline copy of pages)

const CACHE = "pwabuilder-offline-page";

// These are the routes we are going to cache for offline support
const offlineFallbackPage = "/offline.html";
const urlsToCache = [
  "/",
  "/about",
  "/experience",
  "/tech-skills",
  "/projects",
  "/testimonials",
  "/contact",
  "/images/profile.png",
  "/manifest.json",
  "/fonts/", // Cache all font files
  "/images/", // Cache images
];

self.addEventListener("install", async (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// If any fetch fails, it will look for the request in the cache and serve it from there first
self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        event.waitUntil(updateCache(event.request, response.clone()));
        return response;
      })
      .catch((error) => {
        return fromCache(event.request);
      })
  );
});

function fromCache(request) {
  // Check to see if you have it in the cache
  // Return response
  // If not in the cache, then return the offline page
  return caches.open(CACHE).then((cache) => {
    return cache.match(request).then((matching) => {
      if (!matching || matching.status === 404) {
        if (request.destination !== "document" && request.destination !== "")
          return Promise.reject("no-match");
        return cache.match(offlineFallbackPage);
      }
      return matching;
    });
  });
}

function updateCache(request, response) {
  return caches.open(CACHE).then((cache) => {
    return cache.put(request, response);
  });
}
