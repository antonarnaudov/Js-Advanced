function solve() {
    let productList = {}
    document.querySelector('.shopping-cart').addEventListener('click', onClick)

    function onClick(ev) {
        const element = ev.target
        const result = document.querySelector('textarea')

        if (element.tagName === 'BUTTON' && element.className === 'add-product') {
            const product = element.parentNode.parentNode
            const name = product.querySelector('.product-title').textContent
            const money = Number(product.querySelector('.product-line-price').textContent)

            if (productList[name]) {
                productList[name] += money
            } else {
                productList[name] = money
            }
            result.value += `Added ${name} for ${money.toFixed(2)} to the cart.\n`

        } else if (element.tagName === 'BUTTON' && element.className === 'checkout') {
            const totalPrice = Object.values(productList).reduce((acc, c) => acc + c)
            const allProductsNames = Object.keys(productList)

            result.value += `You bought ${allProductsNames.join(', ')} for ${totalPrice.toFixed(2)}.\n`
            productList = {}
        }
    }
}
