import Ajax from './Ajax';

const Plan = {
    get: ()=> {
        return Ajax.get('/plans');
    }
}

export default Plan