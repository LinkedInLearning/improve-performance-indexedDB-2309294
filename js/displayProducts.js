const categories = document.querySelector('#categories')
const characters = document.querySelector('#characters')
const products = document.querySelector('main')

const dbName = 'store'
const productStore = localforage.createInstance({
    name: dbName,
    storeName: 'products'
})

const characterStore = localforage.createInstance({
    name: dbName,
    storeName: 'characters'
})

const categoryStore = localforage.createInstance({
    name: dbName,
    storeName: 'categories'
})

fetchData('data/products.json')
.then(data => {
    data.categories.forEach(category => {
        categories.innerHTML += `<label>
                        <input type="checkbox" checked data-cat="${category.id}">
                        ${category.name}
                    </label>`
    })

    data.characters.forEach(character => {
        characters.innerHTML += `<label>
                        <input type="checkbox" checked data-char="${character.id}">
                        ${character.name}
                    </label>`
    })

    data.products.forEach(product => {
        products.innerHTML += `<div class="product" data-cat="${product.cat}" data-char="${product.char}">
            <img src="${product.image}">
            <h4>${product.title}</h4>
            <p>$${product.price}</p>
        </div>`
    })

    applyFilters();
})