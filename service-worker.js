"use strict";var precacheConfig=[["/portfolio/index.html","1f4b7fe5d717a06e45d4f5f77f1ab1c9"],["/portfolio/static/css/main.a936552e.css","6dc6dec9c0f2606628ffe3d3125488ab"],["/portfolio/static/js/main.f23bd66d.js","c8962cbec53f6e1f4b2360c0c4efee5f"],["/portfolio/static/media/Roboto-Medium.d0884059.ttf","d08840599e05db7345652d3d417574a9"],["/portfolio/static/media/Roboto-Regular.3e1af3ef.ttf","3e1af3ef546b9e6ecef9f3ba197bf7d2"],["/portfolio/static/media/Roboto-Thin.89e2666c.ttf","89e2666c24d37055bcb60e9d2d9f7e35"],["/portfolio/static/media/css.bbe29a6c.svg","bbe29a6cf61aa91ac3aff1df40a3c2ca"],["/portfolio/static/media/image-funny-farm.bd71246b.jpg","bd71246b1f7fe852f752b09822534f37"],["/portfolio/static/media/image-greetings.9566f94c.jpg","9566f94cc91d5a8722cd186a993cfe5a"],["/portfolio/static/media/image-movies.938f4ec7.jpg","938f4ec752b680306c391251cabd2da6"],["/portfolio/static/media/image-pomidoro.85ccc4c8.jpg","85ccc4c876c3f457ca71d3148f98c788"],["/portfolio/static/media/image-without-water.fb3ef23b.jpg","fb3ef23b871365e8d68412f653519b4c"],["/portfolio/static/media/js.3f9ca62f.svg","3f9ca62fc3b9eb791c709f59c0648d07"],["/portfolio/static/media/react.f0793d9f.svg","f0793d9f85eb3f0d1c702c14d236ba9e"],["/portfolio/static/media/redux-saga.d5960a9f.png","d5960a9fb3873df414d6f791e794ff71"],["/portfolio/static/media/redux.5ae1af16.svg","5ae1af16ffc2f55bd739da81176302e9"],["/portfolio/static/media/responsive.42d4642c.svg","42d4642ccdf1f3ed861489c06a934337"],["/portfolio/static/media/sass.74c36290.png","74c362907475d0d7f0d59d0fb662135c"],["/portfolio/static/media/test.3ac357ac.png","3ac357ac48d7ef1319d48bc41a07d6f7"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,r){var n=new URL(e);return r&&n.pathname.match(r)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],r=new URL(t,self.location),n=createCacheKey(r,hashParamName,a,/\.\w{8}\./);return[r.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(r){return setOfCachedUrls(r).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return r.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),r="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,r),e=urlsToCacheKeys.has(a));var n="/portfolio/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});