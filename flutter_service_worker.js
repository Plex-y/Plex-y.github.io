'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "f7223d0e6e62862ee564fda25e7e34f7",
"assets/AssetManifest.bin.json": "670e35ae6607b39e2af86a53ef64b294",
"assets/AssetManifest.json": "567ddca99d425d46ed19c5a4926afec8",
"assets/assets/aboutme.png": "667fba3d44e5c0cb6f7c33d863f15560",
"assets/assets/back_liso.png": "9e88052cbc5d293a82f35af93a1532f7",
"assets/assets/buttons/project/camback.png": "3958665805e2cd67553ddb66dab55a11",
"assets/assets/buttons/project/guitar_logo.png": "b3c2e193b1886220d24d724f9256b427",
"assets/assets/buttons/project/Healy_icon_pink.jpg": "542234a23510728ad7c350537a6beb5b",
"assets/assets/buttons/project/heal_back.png": "ed6fab0de1915f70722c019825e49cd3",
"assets/assets/buttons/project/MM.png": "1d9e58627e3397814dd8354bac7fa7c7",
"assets/assets/buttons/project/photography_icon.png": "fecfbf8f7a251c12f6040c0e168a89b8",
"assets/assets/buttons/project/smallguitar.jpg": "0e0a5798147d159b6666218d535f58d6",
"assets/assets/buttons/project/test_back.png": "731273ccc4f7b8d740d276114c249965",
"assets/assets/guitar/gui1.png": "3e1e659f0cf5a46b18b92f2d2e47b6c6",
"assets/assets/guitar/gui2.png": "914b0f1f13afea548dd23dbe8cf41102",
"assets/assets/guitar/gui3.png": "681f1fa16e39d51d48270748a4389204",
"assets/assets/guitar/gui4.png": "152ada40265013bd3771044a64398f86",
"assets/assets/guitar/gui5.png": "7611ee19a4d7f61f89006a5177a8cc99",
"assets/assets/healy/5img.png": "6c22009b8e410beac58c194972c6f237",
"assets/assets/healy/bloc.png": "74926b7c78dbfc2468400dfb9ea7dfbd",
"assets/assets/healy/firebase.png": "3602dbeac7b595e78e75ceda8f0e9002",
"assets/assets/healy/google_play.png": "c2df105161b3ff20d1ada04e6bceab58",
"assets/assets/healy/h1.jpg": "f6547011db69fae67a85ce784701f97a",
"assets/assets/healy/h2.jpg": "17027e3164850cb81819915d3ae7b2d6",
"assets/assets/healy/h3.jpg": "21d71fc034c02a9634be350c698c5038",
"assets/assets/healy/h3_r.jpg": "6c1fc642de9af32a83c595ed6c2986cf",
"assets/assets/healy/h4.jpg": "77b02dc5b5a5dac6f97e53f1d691760d",
"assets/assets/healy/h4_r.jpg": "e997c5d9e7f920723cc480949f41cb30",
"assets/assets/healy/h5.jpg": "f226947fb8d6593e81721c57d19809bf",
"assets/assets/healy/h5_r.jpg": "57208a4cfcdacd1138e7e634ca6a5b48",
"assets/assets/healy/homebanner.jpg": "120dc7d8c84e790906e08ff0be664df1",
"assets/assets/healy/json.png": "298a571c3aa42e8e3e1e605c84f6a231",
"assets/assets/healy/login.jpg": "03e43af74c886ab65f7b611dca3d5cf3",
"assets/assets/healy/soydoctor.png": "74ae318929f3386ee9eb0693ca35ffc7",
"assets/assets/healy/soypaciente.png": "fb1ea154800df3210087464915c38ae0",
"assets/assets/home_screen/background_home.png": "90f5bf8254ea8ee14e3afc5effcf4e59",
"assets/assets/photography/cph.jpeg": "a8a9627a1c85bca59fb05df367d2a6ce",
"assets/assets/photography/ph1.png": "75eac9099a238269e90f6ff61cd21db9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "66aedd4833d4ce35a40982c78ec67b5a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "62cf87c65805d23f3999b9b73a76a95d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c3cab8b83ae09e567e22f0a5cf784452",
"/": "c3cab8b83ae09e567e22f0a5cf784452",
"main.dart.js": "51fe8125dfb6ab1adf552bee514b6785",
"manifest.json": "2fe27cd9def95bb90afa8785a43b4157",
"version.json": "2addab2a125166ad4ea17f9320662d52"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
