import axios from "axios";
import ILoginModel from "models/logins/login";

const login = (model: ILoginModel) => {
    return axios.post(`/login`, model, { headers: { 'Authorization':'aaaa'}});
};

const logout = () => {
    return axios.post(`/logout`);
};

export const AuthService = {
    login, logout
}