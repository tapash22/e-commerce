import Api from "./Api";

export default{
    get(){
        return Api().get('categorys');
    },

    show(id){
        return Api().get(`/category/${id}`);
    },

    addCategory(category){
        return Api().post('/category/add',category);
    },

    udateCategory(category){
        return Api().put(`/category/update/${category.id}`,category);
    },

    deleteCategory(categoryId){
        return Api().delete(`/category/delete/${categoryId}`)
    }
}