import Api from './Api';

export default{

    all(){
        return Api().get('cart');
    },

    store(data){
        return Api().post('cart',data);
    },

    delete(id){
        return Api().delete(`cart/${id}`);
    },

    deleteAll(){
        return Api().delete('cart');
    }
}