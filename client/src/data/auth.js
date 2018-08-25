import {get, post} from './rest';

export default {
    logout: async () => {
        return (await get("api/users/logout")).json();
    },
    login: async (username, password) => {
        return (await post("api/users/login", { username, password })).json();
    },
    register: async (username, password) => {
        return (await post("api/users/register", { username, password })).json();
    },
    info: async () => {
        return (await get("api/users/info/me")).json();
    },
    isAuthenticated: (info) => {
        return info.auth === false;
    }
}