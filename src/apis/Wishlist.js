import Api from './Api';

export default{

    all(){
        return Api().get('wish');
    },

    store(data){
        return Api().post('wish',data);
    },

    delete(id){
        return Api().delete(`wish/${id}`);
    },

    deleteAll(){
        return Api().delete('wish');
    }
}