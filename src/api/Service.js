import Ajax from "./Ajax";

const Service = {
    get: ()=> {
        return Ajax.get('/services');
    }
}

export default Service;