import Product from '@/apis/products';
import Cart from '@/apis/Cart';

export const getProducts = ({ commit }) => {
    Product.all().then((response) => {
        commit('SET_PRODUCTS', response.data);
    })
}

export const getProduct = ({ commit }, productId) => {
    Product.show(productId).then((response) => {
        commit('SET_PRODUCT', response.data);
    })
}

export const addProductToCard = ({ commit ,dispatch},{ product, quantity })=> {
    commit('ADD_PRODUCT_TO_CART', { product, quantity });

    dispatch('addNotification',{
        type:'success',
        message:'Add product to cart'
    },{root:true})

    Cart.store({
        product_id: product.id,
        quantity,
    })
}

export const getCartItem = ({commit})=>{
    Cart.all().then(response=>{
        commit('SET_CART',response.data);
    })
}

export const removeProductFromCart= ({commit,dispatch},product)=>{
    commit('REMOVE_PRODUCT_FROM_CART',product);

    dispatch('addNotification',{
        type:'success',
        message:'remove product from cart'
    },{root:true})

    Cart.delete(product.id);
}

export const clearCardItem = ({commit,dispatch})=>{
    commit('CLEAR_CART_ITEM');

    dispatch('addNotification',{
        type:'success',
        message:'remove all from  cart'
    },{root:true})
    
    Cart.deleteAll();
}

export const addNotification = ({commit},notification)=>{
    commit('PUSH_NOTIFICATION',notification);

}

export const removeNotification = ({commit}, notification)=>{
    commit('REMOVE_NOTIFICATION',notification)
}