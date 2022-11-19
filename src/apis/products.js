import Api from './Api'

export default{

    all(){
        return Api().get('product');
    },
    show(id){
        return Api().get(`/product/${id}`);
    },

    addProduct(product){
        return Api().post("/product/add",product);
    },
}