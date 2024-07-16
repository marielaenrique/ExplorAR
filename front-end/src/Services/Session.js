import axios from "axios";
const logoutRequest = "http://18.219.139.64:8080/api/v1/auth/logout";
const loginRequest = "http://18.219.139.64:8080/api/v1/auth/authenticate";
const registerRequest = "http://18.219.139.64:8080/api/v1/auth/register";


const verify = async verifyCode => {
    try{
        const {status} = await axios.post(`http://18.219.139.64:8080/api/v1/auth/verify?code=${verifyCode}`);
        console.log(status)
        return status;
    }catch(error){
        console.log(error)
    }
    };

const resend = async email =>{
    const {status} = await axios.post(`http://18.219.139.64:8080/api/v1/auth/resend?email=${email}`);
    return status;
}

const register = async userValues => {
    try{
        const {status} = await axios.post(registerRequest, userValues)
        console.log(status)
        return status
    }catch(error){
        console.log(error)
    }
}


const login = async credentials => {
    const {data} = await axios.post(loginRequest, credentials);
    return data;
}

const logout = async token => {
    const {data} = await axios.post(logoutRequest, {}, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return data;
}

export default {login, logout, register, verify, resend};