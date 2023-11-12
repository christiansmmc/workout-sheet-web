export interface LoginPayload {
    email: string;
    password: string;
}

export interface LoginResponse {
    access_token: string;
}

export interface RegisterPayload {
    email: string;
    password: string;
    client: {
        name: string;
        height: number;
        weight: number;
    };
}
