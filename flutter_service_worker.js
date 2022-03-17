'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "e47667ae186e15f81e12bab391a6f3de",
"assets/assets/img/b2.jpg": "4ff25034a8b6823c870f8fc60d9b64c7",
"assets/assets/img/Badminton.png": "1f0f6ddcfea6e15ae5de21e7212fcc1a",
"assets/assets/img/ce1.jpg": "3e2e4fbd297c030c5771d81430bb4e66",
"assets/assets/img/code.png": "7acc13cd221dc0323551dd93b0f11b81",
"assets/assets/img/game.png": "b3e5e1ae592dff85181130979c7cee6b",
"assets/assets/img/gordi.png": "a1b41d9c0a550ba6fc604ec5df9f636d",
"assets/assets/img/hendy.png": "14c11bd431927f6f96bed1de0f5d73de",
"assets/assets/img/pama.png": "6c6ecf58b8438ad229b78773fdf94ca5",
"assets/assets/img/ping.png": "6e0118be92895813bc700dc3f8c1163a",
"assets/assets/img/pp.png": "679654e5a693c6444c70929d55f34695",
"assets/assets/img/Reading.png": "67bac4dc8c4ff63eecee80e62382d8aa",
"assets/assets/img/Swim.png": "a899dab7233ed110ab061567580834c2",
"assets/assets/img/toga.png": "45c2b76cc36ce45b63fa1bdcb6268f70",
"assets/assets/Logo/api.png": "15bbf68b78d899f7a1fd2110e439d457",
"assets/assets/Logo/aws.png": "c85e15ac87d15ca7cf8c94305e5c9579",
"assets/assets/Logo/C%2523.png": "ed83777a61334bffb374ca4498ea32a3",
"assets/assets/Logo/css.png": "4642fda4d7acfd0e9aa3986546fdc6bc",
"assets/assets/Logo/firebase.png": "aeffb28c039a9a4f5f5f21685a69e384",
"assets/assets/Logo/flutter.png": "aff1fb8ba9ba16a0260d71c72b1417aa",
"assets/assets/Logo/git.png": "8592a803b620c6b1bd106ddd8e8e51c9",
"assets/assets/Logo/gitlab.png": "6c314e48c832d612d59b26612a365ec3",
"assets/assets/Logo/go.png": "aa522129bf6fc0825e26d1931778a363",
"assets/assets/Logo/hero.png": "f869c1267c2b835e52cf7a757db04aff",
"assets/assets/Logo/html.png": "8c9578f8016470ebaaba2e604958d030",
"assets/assets/Logo/mongo.png": "fa29aaffe5eb21ce7810c97a71d5d8b5",
"assets/assets/Logo/mys.png": "2f12abb25586c84b8c84baef366ae9dd",
"assets/assets/Logo/node.png": "a53712645ccc895ad663e7ac0e5493e0",
"assets/assets/Logo/npm.png": "40201279a77ece39527042fc4cffd6a2",
"assets/assets/Logo/postman.png": "d3eb82fe7554827e856283dccd74afa2",
"assets/assets/Logo/react.png": "49abf02563fed77c304cf0631201fbf9",
"assets/assets/Logo/unity.png": "e76ae2f939ac656b9c9824ca54a8e8be",
"assets/assets/video/APD.gif": "8cd53c8cb40408b0aa1a8eefc0cfda18",
"assets/assets/video/apd.png": "97c2e4193a42633f479a03bbb1db1be4",
"assets/assets/video/clone.gif": "05a2aa4b9a5e425c9c793e99c4bc5fcb",
"assets/assets/video/clone.jpg": "4112bf682e0ad1698893b51b3ecff3ad",
"assets/assets/video/course.gif": "4d5fbfa9cee38015f7ff75bea2a85e93",
"assets/assets/video/course.jpg": "97816d769bb630dc68f45bf1bd688122",
"assets/assets/video/ecom.gif": "010684308149391b23ef3ddb4f8427f9",
"assets/assets/video/ecom.jpg": "f8f8e2a7c934501b4f33a93a939540e7",
"assets/assets/video/glass.gif": "5f89693319513cf887225eb12680d38d",
"assets/assets/video/glass.jpg": "590342c483a3617c4cd36e6a385ba307",
"assets/assets/video/Inspection.gif": "f67f84f67187af78468e1cec177b4f9b",
"assets/assets/video/inspection.png": "2807728c0d6eabda90816003ae39e81d",
"assets/assets/video/job.gif": "f531a23dee2c9d170a78592d20b4f105",
"assets/assets/video/job.jpg": "4ed746a994039b0e29c8637139a2412a",
"assets/assets/video/neu.gif": "0eb1e4f77b7c0b1f91169c46b0f2b47e",
"assets/assets/video/neu.jpg": "0fd937f7b348869bfd025175295b6c37",
"assets/assets/video/note.jpg": "e9d33a2399ecbbdf4e89b424e9fba6a7",
"assets/assets/video/notesapi.gif": "b6552ab479b713a88a9b3798d22fa5e1",
"assets/assets/video/playsound.gif": "684f7cc45e934e5b499100108c8452b3",
"assets/assets/video/playsound.jpg": "a9cc6cdaed0612c89ace59199bd9c0f7",
"assets/assets/video/porto3.gif": "b236a50d3f66cfa36c51b2a4f1775360",
"assets/assets/video/porto3.jpg": "e108dc3f2eecd818c2e04566961efc6a",
"assets/assets/video/Tools.gif": "ba75903abb8fdf5d9dadee923b5ed23d",
"assets/assets/video/tools.png": "da1c9e750a03602024ef84c70ea4826b",
"assets/FontManifest.json": "a7eb515315ccbbd7d7a064bef6b35455",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "1d475203a2223c2b8e72cbf38779c736",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_neumorphic/fonts/NeumorphicIcons.ttf": "32be0c4c86773ba5c9f7791e69964585",
"assets/packages/line_icons/lib/assets/fonts/LineIcons.ttf": "23621397bc1906a79180a918e98f35b2",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "96fe46b07fcdd50e9a87f5b9a9f963c8",
"/": "96fe46b07fcdd50e9a87f5b9a9f963c8",
"main.dart.js": "459c4b6ce4db63b738441e574fd55635",
"manifest.json": "7f1bd2cbe01c22ba6b50abe4be998cd2",
"version.json": "4fc1b49028a0afa684ef201d73c76cad"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
