// (A) FILES TO CACHE
const cName = "cb-pwa",
cFiles = [
  // (A1) BOOTSTRAP
  "assets/bootstrap.bundle.min.js",
  "assets/bootstrap.min.css",
  // (A2) ICONS + IMAGES
  "assets/favicon.png",
  "assets/ico-512.png",
  "assets/gears.jpg",
  "assets/question.jpg",
  // (A3) COMMON INTERFACE
  "assets/PAGE-cb.js",
  "assets/maticon.woff2",
  // (A4) PAGES
  "assets/PAGE-company.js",
  "assets/PAGE-forgot.js",
  "assets/PAGE-jobs.js",
  "assets/PAGE-login.js",
  "assets/PAGE-myaccount.js",
  "assets/PAGE-register.js"
];

// (B) CREATE/INSTALL CACHE
self.addEventListener("install", (evt) => {
  evt.waitUntil(
    caches.open(cName)
    .then((cache) => { return cache.addAll(cFiles); })
    .catch((err) => { console.error(err) })
  );
});

// (C) LOAD FROM CACHE FIRST, FALLBACK TO NETWORK IF NOT FOUND
self.addEventListener("fetch", (evt) => {
  evt.respondWith(
    caches.match(evt.request)
    .then((res) => { return res || fetch(evt.request); })
  );
});
