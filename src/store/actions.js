import Product from '@/apis/products';
import Cart from '@/apis/Cart';
import Wishing from '@/apis/Wishlist';
import Category from '@/apis/Category';

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

export const addProductToWish = ({commit }, product)=>{

    commit('ADD_PRODUCT_TO_WISH',{product});
    Wishing.store(product);
}

export const getWishItem = ({commit})=>{
    Wishing.all().then(response =>{
        commit('SET_WISHING',response.data);
    })
}

export const removeProductFromWishing = ({commit},product)=>{
    commit('REMOVE_PRODUCT_FROM_WISHING',product);

    Wishing.delete(product.id);
}

export const clearWishingItem = ({commit})=>{

    commit('CLEAR_WISHING_ITEM');
    Wishing.deleteAll();
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

export const addCategory = ({commit, dispatch},category)=>{
    commit('ADD_CATEGORY',category);

    dispatch('addNotification',{
        type:'success',
        message:'Add new  category'
    },{root:true})

    Category.addCategory(category);
}

export const getCategorys = ({ commit }) => {
    Category.get().then((response) => {
        commit('SET_CATEGORYS', response.data);
    })
}

export const getCategory = ({commit},categoryId)=>{
    Category.show(categoryId).then((response) => {
        commit('SET_CATEGORY', response.data);
    })
}

export const updateCategoroy = ({dispatch},category)=>{

    dispatch('addNotification',{
        type:'success',
        message:'update category'
    },{root:true})

    Category.udateCategory(category);
    
}

export const removeCategory= ({dispatch},categoryId)=>{
    // commit('REMOVE_CATEGORY',categoryId);

    dispatch('addNotification',{
        type:'success',
        message:'remove category'
    },{root:true})

    Category.deleteCategory(categoryId);
}

