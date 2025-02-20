export function removeProduct(index) {
    return {
        type: "REMOVE_PRODUCT",
        index: index
    }
}

export function addProduct(product) {
    debugger
    return {
        type: "ADD_PRODUCT",
        product: product
    }
}

export function loadProducts() {
    return {
        type: "LOAD_PRODUCTS"
    }
}