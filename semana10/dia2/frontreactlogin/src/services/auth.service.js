import axios from 'axios';

const API_AUTH = "http://localhost:8000/"

class AuthService {
    login(username, password){
        return axios
        .post(API_HOST + "login", {
            username,
            password
        })
        .then(res =>{
            if(res.data.token){
                localStore.setItem("user",JSON.stringify(res.data));
            }

            return res.data;
        })
    }
}

export default new AuthService();