import Ajax from "./Ajax";

const Auth = {
    login: (data)=> {
        return Ajax.post('/login', data);
    },

    register: (data)=> {
        return Ajax.post('/register', data);
    },

    logout: (token)=> {
        return Ajax.post('/logout',null, {token});
    }
}