const currentCaches = {
    css: 'CSS',
    imgs: 'images'
}

self.addEventListener("install", event => {

    event.waitUntil(
        Promise.all(
            [
                caches.open(currentCaches.css)
                    .then(cache => {
                        // the cache is open
                    }),
                caches.open(currentCaches.imgs)
                    .then(cache => {

                    })
            ]
        )
    )

})
