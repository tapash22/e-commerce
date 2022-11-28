export const wishingItemCount = (state)=>{
    return state.wishing.length;
}

export const cartItemCount = (state)=>{
    return state.cart.length;
}

export const cardTotalPrice = (state)=>{
    let total = 0;
    state.cart.forEach(item => {
        total += item.product.price * item.quantity;
    });
    return total;
}