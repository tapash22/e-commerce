import Api from "./Api";

export default{
    get(){
        return Api().get('categorys');
    },

    show(id){
        return Api().get(`/category/${id}`);
    },
    updateCategory(id){
        return Api().post(`/category/update/${id}`)
    },

    addCategory(category){
        return Api().post('/category/add',category);
    },

    deleteCategory(categoryId){
        return Api().delete(`/category/delete/${categoryId}`)
    }
}