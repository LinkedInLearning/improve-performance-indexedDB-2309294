self.addEventListener("install", event => {

    event.waitUntil(
        Promise.resolve(() => {
            console.log('service worker installed')
        })
    )

})
