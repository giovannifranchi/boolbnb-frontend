import Ajax from "./Ajax";

const View = {
    post: ($apartment_id)=>{
        return Ajax.post(`/view/${$apartment_id}`);
    }
}

export default View;