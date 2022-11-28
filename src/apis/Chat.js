import Api from './Api'

export default{
    all(){
        return Api().get('/chat/rooms');
    },

    messages(id){
        return Api().get(`/chat/room/${id}/messages`);
    },

    message(id,msg){
        return Api().post("/chat/room/${roomId}/message",msg);
    }

}