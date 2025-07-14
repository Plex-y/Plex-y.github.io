'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "8f50fa7ac71e8967c66cfd9b3c2e15f7",
".git/config": "44bca3980f60fcbfbaf20f9d78760c71",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "f44c00e34cc2e9ea0b72f98d60609902",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "dc3724af4a1dc059618db42eb9adc606",
".git/logs/refs/heads/main": "ee012fe474fb53e5d173db8bf88d6ba0",
".git/logs/refs/remotes/origin/main": "7b38c7b768498c868cff88dcd1e1a13f",
".git/objects/00/3871a4af959be30b738fc4fd5eeed5cc1249d8": "ed503dbde0641c7cce4f783ae400b371",
".git/objects/02/f3f014f67dc4e98dcae25c0cc59041f154c85e": "d9aed814e5bac54a705e6f543d2d246c",
".git/objects/03/eea513dd75a0da4892dff36765be7e54c5bfaa": "ffb31f00e65b7fd5e5a8d340cb8cbc06",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/0a/bbc739d25616be62a82cf17ef659a316d4ae1e": "70200a81bc0be6f181fd97cb9b90ef94",
".git/objects/0c/865f92a97494681c9530b6398af47aec6e0d6a": "a09864ceebbb1e33a213c66ded73ae0c",
".git/objects/0e/a67e7b22b4c053d957a1b45682ff7889b505fa": "edcf01aa077679e4bfd68915c1188f35",
".git/objects/15/433313bfdff8f4f89aed29ca9ab7116e570bee": "aa8163c95bafba5a01511d66a250dafa",
".git/objects/1b/65eed7ee777dcf0307fe3dc33f66127ae62266": "b7c11c22e2438c52e07da3fe3552c239",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/21/4cc02703e6daf385674579c6563e33224fa9c8": "a1a98d4fb900217ff019acc3db0cc0ac",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/28/7a2d2dd85e46575f71819474176be4c3e7c3ec": "84f8ba340b1eff69aa9160e3f4139ba2",
".git/objects/37/e5c5cefebd83f087e18e1084a4662a37c5df09": "acfb7cb225693ffc656aee658168e5a7",
".git/objects/39/8098518e0fb53a3c28dfdbbdeda7909a0b44c2": "5cf4181c44c2a2e7d393a25c25e97116",
".git/objects/43/ed750795f4b60988c3062c5bb60f1e9acd94c1": "24b189645ad9d9adfb440975cb2cf324",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/bb28fba6c2f144ae6cd0545ffaba24a29b9bc0": "f0d5d4638a52d29cee5c0d629c63d0fb",
".git/objects/48/2504adb6d89e771fbf2f01e419a2762ee1bd91": "79b50aa71d1515dc8810b419785960f9",
".git/objects/49/7ba74b2739ba15502b4a4ec1c79f09b1ed9b70": "818c504dda20bf5dec2883bdbc93d0b3",
".git/objects/49/cbc5a2d20b81de4219e21efa52b22641d3b762": "ba389edabc546f1ec6bf9768151aa4be",
".git/objects/4e/574453da6b5cbbf454f2523853aa80fa20fa7e": "909f068db1e54bd04ab064fe9518c893",
".git/objects/4e/abc4de937b9f74a2927130111143f3e73afaa2": "6b7d261d15878677e6e6920e41cdec13",
".git/objects/51/8f94f8665f39012c564b04e53b853964b492ac": "029273614ab30864a6ad3bf1ebfbaed5",
".git/objects/57/78eb28d285e56b217e85a4cbc3c5522f67cd00": "f1cb0396af0b9a4c0722ebcc3682630d",
".git/objects/5a/d78d090cfba23cf46fe714e4a782ad9bdd7ec6": "c29e5a00f4be9a14eadc3d0cca8ebd17",
".git/objects/5c/043b5c6e30e9225e43995df7130bcb6d83696c": "c4ddc66d746a0b23a3c7dfe8f7ede5c4",
".git/objects/5c/671e3e5970f02171e9380dbc785d9fa62dfa45": "a67124caf64e8d625a75016a54525669",
".git/objects/63/5459def82ca925b2c2d4dad741dcad4a0eb139": "37e2b789d3d3071156fbb465dcaec74d",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/65/fb78a95c0339ff33cff7c6cf404075034db34d": "f5f0ed7343f7fafce191874b12d6dec4",
".git/objects/6a/73425556fb0260dc57b96db35e679b0bf9247d": "291a8a643a86fa93c014d37e892e8fa1",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/70/d2e2efe78da17003c7027fe5a3ac89db860b61": "7578bf893392867a3f3d5791930b25b4",
".git/objects/72/7e674ab6095f418d0473b52a49b563eb3e3c59": "5c1131f1f9b51dbf489f91c226abab18",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/74/748f4537c72f2fbbb27598b1d874a0750c3d19": "1147f84f3cc03f1b62933e3ba1b40b89",
".git/objects/77/90973864858602a96f5b2789aee4ccb49a672d": "96332883f8820b0a47737e5d057d2cbf",
".git/objects/78/4dcf1768aa1ce542199fa0bad2099fa6cec9ad": "f74f8d408babeddc1ca15694d85e5b45",
".git/objects/7b/5a9badac11be5ad64dcbd1a906316ca97d717f": "4e9897e588061f779644b978f6bf201f",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/82/87c27d2f270245b6c04d6b350b5c7dba651a6d": "f1e13de3ddd74a59aad32a1b64c294a5",
".git/objects/84/485d40eed56d10bdc00eeab93c1d14bf0cb8cd": "ac688fd410a5780e8f750fd300ba5363",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/7713557fd1231ac39695eec07faf6a08080db4": "053bf0e42dfefd1dacadf6d6b126f837",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/b7049e18679afad06bb1996c5a991ac9b6b7e2": "bdcd247ba9871577d8add84f95054fca",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/a2/85728319aadd4a094c58d8b8a8367190bf2f31": "e580583f8913f0234eed17aa3d507849",
".git/objects/a5/73d3a9ee8d1dc6ec7bd576bcf325167a20bda6": "4ad56cc4f4a57e73a606ddb020a90bed",
".git/objects/ae/f070fc250406e9462261e974c5f17de356ebb1": "a20ca1d3483ca1b698fb6a7b08261292",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b1/32bd7d26a9044f594ea3f6ebbdbb54b5e3d411": "c582ee04a64c44b7e298bcc2ef6e9b7c",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b5/d94f7fc858c372ff5dc132d4e1327659230511": "5efa032fd485b0d9c8a95d62391cc433",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c3/359b737d5bc8b7b3144687620c0cada9ed6ef0": "290fc1dc4902300b42514b39354016e7",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c5/d8a20ed2976817e5e9ace115b823228fb9deb1": "4399abdce4f3f62359974735abc29183",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/c7/c500c7e3c77e75220925b60cb01bc4528c1116": "6f5f232abbe9498cff2f3aa713ce42b4",
".git/objects/c8/8c186f8c34c973742cfccc8b9904450ad51782": "bb562f97c4a41a4e1c396c089fa6404d",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/25994a1b79f55b1b9f4dfd59180274e140be2f": "b59a033e433dba6d027f56af0d820d9a",
".git/objects/d6/057370c4f6088d2c9fb396ef7825cac60f83f2": "b84f8bd339fe866b33f119952d2b7c2c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/0b17b0a02659568f03897bcc35c797347efe80": "b9acdccd4545595e6e0b0713caeaea64",
".git/objects/d8/3f9f6145f1dd12d7387427a9fa94037831a27b": "379ae267d416bdaef8376b9fcc7fbc93",
".git/objects/db/fa07da243e051cbe507c53d1c72762d9de2c86": "804af3089d4f8f9490ea69038a80b044",
".git/objects/e1/5f6bd72314590984355ec7fafcf167a1014923": "2b52ca2e2165d541e7cadc16729bbd80",
".git/objects/e1/a650b84a05591c52f937f82d37768171b4554f": "147724ab75a1bb5ca08d9ebd2a4698c2",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f6/82416c2636cac088c18d7e85f72d36df0bb3b0": "0ea0a80fd83009bb96255ecf9c911ff3",
".git/objects/fb/857c2df26096a7d221fd2f18b1361164279561": "557d5d3eeeaec2e73daae84d57a154af",
".git/objects/fe/24f733b99445baec2a288108b0405b56d876df": "ef2ac0b494a5809882cafd2877f1831a",
".git/refs/heads/main": "e9ad9a61912d242481d5c94a9e61fc71",
".git/refs/remotes/origin/main": "e9ad9a61912d242481d5c94a9e61fc71",
"assets/AssetManifest.bin": "f7223d0e6e62862ee564fda25e7e34f7",
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
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/NOTICES": "7041bcc67547f8a0db758ce125288038",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "9b9cd49ca72f30fa80596ca06d680436",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "7042a88e76ce1a5d8e5e3347c6962768",
"/": "7042a88e76ce1a5d8e5e3347c6962768",
"main.dart.js": "31345799e75c4fbf3880ba0cd5c5d8dc",
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
