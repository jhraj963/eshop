import axios from 'axios';
import { useNavigate } from "react-router-dom";

const cuslogin = async (data) => {
    const LOGIN_ENDPOINT = `${process.env.REACT_APP_API_URL}/cuslogin`;
    try {
        let response = await axios({
            method: 'post',
            url: LOGIN_ENDPOINT,
            data: data
        });

        if (response.data.data.token) {
            localStorage.setItem("front_access_token", response.data.data.token);
            localStorage.setItem("front_userdata", JSON.stringify(response.data.data.data));
            return true;
        } else {
            return false;
        }
    } catch (e) {
        // return false;
        console.log(e);
    }
}
const cusregister = async (data) => {
    const SIGNUP_ENDPOINT = `${process.env.REACT_APP_API_URL}/cusregister`;
    try {
        let response = await axios({
            method: 'post',
            responsiveTYpe: 'json',
            url: SIGNUP_ENDPOINT,
            data: data
            // withCredentials: true,
            // headers: {
            //     Accept: "application/json",
            //     "X-Request-With": "XMLHttpRequest",
            //     'Access-Control-Allow-origin': '*',
            //     "Content-Type": 'multipart/form-data'
            // }
        });
        console.log(response);
    }
    catch (e) {
        console.log(e);
    }
}
const logout = () => {
    localStorage.removeItem("front_access_token");
    localStorage.removeItem("front_userdata");
}

export { cuslogin, cusregister, logout }