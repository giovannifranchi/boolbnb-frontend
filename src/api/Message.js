import Ajax from "./Ajax";

const Message = {
    post: async (data)=> {
        return Ajax.post('/apartment/message', data);
    }
}

export default Message;