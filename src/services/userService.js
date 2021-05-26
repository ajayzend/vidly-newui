import http from "./httpService";

const apiEndpoint = "/users";

export function register(users) {
    return http.post(apiEndpoint, {
        email: users.username,
        password: users.password,
        name: users.name
    });
}