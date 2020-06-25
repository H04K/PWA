const staticCacheName = "site-static"
const assets = [
    '/',
    '/index.html',
    '/js/app.js',
    '/js/matirialize.min.js',
    '/js/ui.js',
    '/css/style.css',
    '/css/materialize.min.css',
    '/img/dish.png',
    'https://fonts.googleapis.com/icon?family=Material+Icons',
    'https://fonts.gstatic.com/s/materialicons/v47/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2'
]
self.addEventListener('install', evt => {
    //console.log("service worker has been installed");
    evt.waitUntil(caches.open(staticCacheName).then(cache => {
        console.log('caching assets')
        cache.addAll(assets);
    }))

})

//install au dessus et activate en dessous

self.addEventListener('activate', evt => {-
    console.log("service worker activated")
})

//fetch event 
self.addEventListener('fetch', evt => {
    console.log("fect event", evt)
    evt.respondWith(
        caches.match(evt.request).then(cacheRes =>{
            return cacheRes || fetch(evt.request)
        })
    )
     
})