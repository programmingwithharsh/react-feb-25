import products from "../data/products";

const ProductReducer = function (state = products, action) {
    debugger
    switch (action.type) {
        case "REMOVE_PRODUCT":
            return [...state]; // write a logic to remove product

        case "ADD_PRODUCT":
            return [...state, action.product]; // appending

        case "LOAD_PRODUCTS":
            return [...state];

        default:
            return state;
    }
}

export default ProductReducer;