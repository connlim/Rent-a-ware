export default {
    login: async (username, password) => {
        return await fetch("api/users/login",
            {
                credentials: "same-origin",
                method: "POST",
                body: JSON.stringify({ username, password })
            });
    }
    register: async (username, password) => {
        return await fetch("api/users/register",
            {
                credentials: "same-origin",
                method: "POST",
                body: JSON.stringify({ username, password })
            });
    }
}