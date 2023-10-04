'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "a7625c30620a02076fd6a5a3d3245956",
"index.html": "e73aef3bb01e3788ab1347b0e08216a9",
"/": "e73aef3bb01e3788ab1347b0e08216a9",
"main.dart.js": "9657a74fc6bc71ad0ca3cb942ac62ce1",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "cecb4b615ee484fc3eb4cc19c42945ac",
"assets/AssetManifest.json": "5a01ba81f6cefadfe662795baf5391de",
"assets/NOTICES": "b7d4614c845cbf0e48d9e333617d699d",
"assets/FontManifest.json": "ad8c7b7d537e32323f27927f4af9634d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/dropdown_button2/assets/fonts/Roboto-Regular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/packages/flutter_dropzone_web/assets/flutter_dropzone.js": "31db837360ad5066e5c412067e806d54",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/lib/uat/dotenv": "db1f34e1cddf4e116a479e252cd371ac",
"assets/AssetManifest.bin": "ef16a31f7d2e3a9dbc1e014184595a1c",
"assets/fonts/MaterialIcons-Regular.otf": "05a6fe68d226febd280bfb6170f7791b",
"assets/assets/icons/ic_svg_notification.svg": "460268d6e4bdeab56538d7020cc4b326",
"assets/assets/icons/ic_svg_assign.svg": "fede388784da137e20fc3e886e1f2aca",
"assets/assets/icons/ic_svg_download.svg": "a666bb680d5105f1920cdeaf437384eb",
"assets/assets/icons/ic_svg_edit.svg": "f1d2a3932ae5977217326bd36a5edd21",
"assets/assets/icons/ic_svg_upload.svg": "3093b3560cb9a02e05e2c5cd233daa20",
"assets/assets/icons/ic_svg_device.svg": "1d053502b8a275f76b85f47c7a4ca96d",
"assets/assets/icons/ic_svg_back.svg": "13f86cd0ba326e97062b9be367bc26ea",
"assets/assets/icons/ic_png_pinterest.png": "8c3602fc129d8af20160145240ebf7eb",
"assets/assets/icons/ic_svg_users.svg": "62dd3d27ea21199a9654f926dd2668b7",
"assets/assets/icons/ic_png_404.png": "96b1b4f48fe2d2ea31d34d368185eb4c",
"assets/assets/icons/ic_svg_add.svg": "317af32adc3065545380442e09945d3d",
"assets/assets/icons/ic_svg_close_fill.svg": "ee8b89d2ba3bb2004aabdd3792a4f452",
"assets/assets/icons/ic_svg_setting.svg": "d0e24d5d0956729e0e2ab09cb4327e32",
"assets/assets/icons/ic_svg_error_line.svg": "f1770e61079469658f89f3774e634bdd",
"assets/assets/icons/ic_png_github.png": "50472625bd666f1693cc4ee9fd6dfe50",
"assets/assets/icons/ic_png_twitter.png": "b140ca3d5f022c5dae356d9871a02ad0",
"assets/assets/icons/media.svg": "059dfe46bd2d92e30bf361c2f7055c3b",
"assets/assets/icons/ic_svg_server.svg": "9ecbf2992d4b327ed86e3bc5f663ccdb",
"assets/assets/icons/ic_svg_network_device.svg": "b7470e37d7c30ece6f5d2cc859f2ef10",
"assets/assets/icons/ic_svg_key.svg": "c174c31e250c664fd6bca6747adc114d",
"assets/assets/icons/ic_svg_failed.svg": "19600d94c7a48083fcf72ce8b13765e9",
"assets/assets/icons/ic_png_logo.png": "91b677be92d1e7528f7427b12088d620",
"assets/assets/icons/ic_svg_logout.svg": "b76fcd98ff4d0eaf2052ba88daaefe9e",
"assets/assets/icons/ic_svg_eye_line.svg": "080535e086b7a7a6fe24deb287a9b6dd",
"assets/assets/icons/ic_svg_unknown_file.svg": "93ff030887252d38b07c16d97ff6cb2a",
"assets/assets/icons/ic_svg_profile.svg": "fe56f998a7c1b307809ea3653a1b62f9",
"assets/assets/icons/ic_svg_eye_off_line.svg": "69ee99eb302873980a9ff3b558b17d89",
"assets/assets/icons/ic_svg_computer.svg": "4a51b7d7c7894e795a3b183d931f1ce7",
"assets/assets/icons/ic_svg_dashboard.svg": "b2cdf62e9ce9ca35f3fc72f1c1fcc7d4",
"assets/assets/icons/ic_png_linkedin.png": "2b75cf32ce2af0381dec5e1204b3cc66",
"assets/assets/icons/folder.svg": "40a82e74e930ac73aa6ccb85d8c5a29c",
"assets/assets/icons/ic_svg_search.svg": "396d519c18918ed763d741f4ba90243a",
"assets/assets/fonts/Vera-Bold-Italic.ttf": "a99f3482bfc2d9c37b509e68d20d016a",
"assets/assets/fonts/Vera.ttf": "785d2fd45984c6548763ae6702d83e20",
"assets/assets/fonts/Vera-Bold.ttf": "4ebf664c986099acf6d151c62bdb24eb",
"assets/assets/fonts/Vera-Italic.ttf": "06ee45608b225ef0f22e94995bc981b2",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
