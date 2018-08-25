export default {
    register: async (username, password) => {
        return await fetch("api/users/register",
            {
                credentials: "same-origin",
                method: "POST",
                body: JSON.stringify({ username, password })
            });
    }
}