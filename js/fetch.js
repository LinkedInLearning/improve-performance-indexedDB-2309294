async function fetchData(url) {

    let data = {products: [], categories: [], characters: []}

    await productStore.iterate(value => {data.products.push(value)})
    await categoryStore.iterate(value => {data.categories.push(value)})
    await characterStore.iterate(value => {data.characters.push(value)})

    if (
        data.products.length > 0 &&
        data.characters.length > 0 &&
        data.categories.length > 0
    ) {
        return data
    }

    const response = await fetch(url)
    data = await response.json()

    if (data.products.length > 0) {
        data.products.forEach((product, key) => {
            productStore.setItem(String(key), product);
        })
    }

    if (data.characters.length > 0) {
        data.characters.forEach((product, key) => {
            characterStore.setItem(String(key), product);
        })
    }

    if (data.categories.length > 0) {
        data.categories.forEach((product, key) => {
            categoryStore.setItem(String(key), product);
        })
    }

    return data
}

// async function APIFetchData(url) {
//     let data
//     const response = await fetch(url)
//     if (response.ok) {
//         data = await response.json()
//         sessionStorage.setItem(url, JSON.stringify(data))
//     } else {
//         data = JSON.parse(sessionStorage.getItem(url))
//     }
//     return data
// }
//
// async function localFetchData(url) {
//     let data = JSON.parse(sessionStorage.getItem(url))
//     if (data === null) {
//         const response = await fetch(url)
//         data = await response.json()
//         sessionStorage.setItem(url, JSON.stringify(data))
//     }
//     return data
// }