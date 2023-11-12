export const getToken = () => {
    return localStorage.getItem("access_token");
};

export const setToken = (token: string) => {
    localStorage.setItem("access_token", token);
};

export const isAuthenticated = () => {
    return localStorage.getItem("access_token");
};

export const removeToken = () => {
    if (isAuthenticated()) {
        localStorage.removeItem("access_token")
    }
}
