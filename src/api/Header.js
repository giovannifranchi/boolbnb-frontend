

const Header = {
    get: {
        'Accept': "application/json",
        "Content-Type": "multipart/form-data",
        'Authorization': null
    }, 

    post: {
        "Content-Type": "application/x-www-form-urlencoded",
        'Accept': "application/json",
        'Authorization': null
    },

    put: {

        "Content-Type": "application/x-www-form-urlencoded",
        'Accept': "application/json", 
        'Authorization': null
    },

    delete: {
        "Content-Type": "application/x-www-form-urlencoded",
        'Accept': "application/json", 
        'Authorization': null
    }

}

export default Header;