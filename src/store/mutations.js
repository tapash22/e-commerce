export const SET_PRODUCTS =(state,products)=>{
    state.products = products;
}

export const SET_PRODUCT = (state,product)=>{
    state.product = product;
}

export const ADD_PRODUCT_TO_WISH =(state,product)=>{
    state.wishing.push(product);
}

export const SET_WISHING = (state,wishingItem)=>{
    state.wishing = wishingItem;
}

export const REMOVE_PRODUCT_FROM_WISHING =(state,product)=>{
    state.wishing =state.wishing.filter(item =>{
        return item.product.id !== product.id;
    })
}

export const CLEAR_WISHING_ITEM = (state)=>{
    state.wishing = [];
}

export const ADD_PRODUCT_TO_CART = (state,{ product, quantity })=>{

    let productInCard = state.cart.find(item=>{
        return item.product.id === product.id;
    });

    if(productInCard){
        productInCard.quantity += quantity;
        return;
    }

    state.cart.push({
        product,
        quantity
    })
}


export const SET_CART= (state,cartItem)=>{
    state.cart = cartItem;
}

export const REMOVE_PRODUCT_FROM_CART =(state,product)=>{

    state.cart = state.cart.filter(item =>{
        return item.product.id !== product.id;
    })
}

export const CLEAR_CART_ITEM = (state)=>{
    state.cart = [];
}

export const PUSH_NOTIFICATION =(state,notification)=>{
    state.notifications.push({
        ...notification,
        id:(Math.random().toString(36)+Date.now().toString(36)).substring(2)
    })
}

export const REMOVE_NOTIFICATION = (state,notificationToRemove)=>{
    state.notifications =state.notifications.filter(notification=>{
        return notification.id != notificationToRemove.id;
    })
}

export const ADD_CATEGORY = (state,category)=>{
    state.categorys.push(category);
}

export const SET_CATEGORYS = (state, categorys) =>{
    state.categorys = categorys;
}

export const SET_CATEGORY = (state,category)=>{
    state.category = category;
}

// export const REMOVE_CATEGORY =(state,categoryId)=>{

//     state.categorys = state.categorys.filter(item =>{
//         return item.category.id !== categoryId;
//     })
// }

export const ADD_QUANTITY = (state,{ product, quantity })=>{

    let productInCard = state.cart.find(item=>{
        return item.id === product.id;
    });

    if(productInCard){
        productInCard.quantity ++;
        return;
    }

    state.cart.push({
        product,
        quantity
    })
}

export const MINUS_QUANTITY=(state,{product, quantity})=>{
    let productInCard = state.cart.find(item=>{
        return item.id === product.id;
    });

    if(productInCard){
        productInCard.quantity --;
        return;
    }

    state.cart.push({
        product,
        quantity
    })
}