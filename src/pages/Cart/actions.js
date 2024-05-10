// ADD TO CART
export function addToCart(product) {
    return {
        type: 'ADD_TO_CART',
        payload: product,
    };
};
// REMOVE FROM CART
export function removeFromCart(productId) {
    return {
        type: 'REMOVE_FROM_CART',
        payload: productId,
    };
};