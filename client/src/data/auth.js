import {get, post} from './rest';

export default {
    logout: async () => {
        return await get("api/users/logout");
    },
    login: async (username, password) => {
        return await post("api/users/login", { username, password });
    },
    register: async (username, password) => {
        return await post("api/users/register", { username, password });
    },
    info: async () => {
        return await get("api/users/info/me");
    },
    isAuthenticated: (info) => {
        return info.auth === false;
    }
}