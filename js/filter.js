function applyFilters() {

    const displays = {
        false: 'none',
        true: 'block'
    };

    document.querySelectorAll('#categories input').forEach(input => {
        input.addEventListener('change', e => {
            let cat = e.target.dataset.cat;
            document.querySelectorAll(`#products .product[data-cat="${cat}"]`).forEach(product => {
                product.style.display = displays[e.target.checked]
            })
        })
    })

    document.querySelectorAll('#characters input').forEach(input => {
        input.addEventListener('change', e => {
            let char = e.target.dataset.char;
            document.querySelectorAll(`#products .product[data-char="${char}"]`).forEach(product => {
                product.style.display = displays[e.target.checked]
            })
        })
    })

}