const cacheVersion = '0'

const currentCaches = {
    css: 'CSS-' + cacheVersion + '.2',
    imgs: 'images-' + cacheVersion + '.1',
    perm: 'perm-' + cacheVersion + '.1'
}

const cachesToDelete = [
    'CSS',
    'images',
    'CSS-0.1'
]

const cacheFiles = {
    css: [
        'http://localhost:8080/css/style.css'
    ],
    imgs: [
        'http://localhost:8080/imgs/logo.svg',
        'http://localhost:8080/imgs/product-montage.png',
        'http://localhost:8080/imgs/rex-disc.png',
        'http://localhost:8080/imgs/dolores-disc.png',
        'http://localhost:8080/imgs/bubbles-disc.png',
        'http://localhost:8080/imgs/fred-disc.png',
        'http://localhost:8080/imgs/rivet-disc.png',
        'http://localhost:8080/imgs/eileen-disc.png',
        'http://localhost:8080/imgs/belle-disc.png',
        'http://localhost:8080/imgs/cosmo-disc.png',
        'http://localhost:8080/imgs/dolly-disc.png',
        'http://localhost:8080/imgs/sergeant-disc.png',
        'http://localhost:8080/imgs/oscar-disc.png',
        'http://localhost:8080/imgs/levi-disc.png',
        'http://localhost:8080/imgs/elton-disc.png',
        'http://localhost:8080/imgs/spring-disc.png',
        'http://localhost:8080/imgs/header.png'
    ],
    perm: [
        'https://fonts.googleapis.com/css?family=Roboto:400,500,700',
        'https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css'
    ]
}

self.addEventListener("install", event => {

    event.waitUntil(
        Promise.all(
            [
                caches.open(currentCaches.css)
                    .then(cache => {
                        return cache.addAll(cacheFiles.css)
                    }),
                caches.open(currentCaches.imgs)
                    .then(cache => {
                        return cache.addAll(cacheFiles.imgs)
                    }),
                caches.open(currentCaches.perm)
                    .then(cache => {
                        return cache.addAll(cacheFiles.perm)
                    }),
                ...cachesToDelete.map(cache => {
                    return caches.delete(cache)
                })
            ]
        )
    )

})

self.addEventListener("fetch", function (event) {
    if ([...cacheFiles.css, ...cacheFiles.imgs, ...cacheFiles.perm].includes(event.request.url)) {
        event.respondWith(
            caches.match(event.request)
                .then(function (response) {
                    if (response) {
                        console.log('returning file from cache')
                        return response
                    } else {
                        return fetch(event.request)
                    }
                })
        )
    }
})
