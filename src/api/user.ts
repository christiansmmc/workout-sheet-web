import {LoginPayload, LoginResponse, RegisterPayload} from "../interfaces/user.tsx";
import {useMutation} from "react-query";
import api from "./axiosConfig.ts";
import {RequestError} from "../interfaces/request.tsx";
import {AxiosError} from "axios";


export const postLoginData = async (payload: LoginPayload): Promise<LoginResponse> => {
    const {data} = await api.post<LoginResponse>(`/authenticate`, payload);
    return data;
}

export const useLoginMutation = () => {
    const {
        mutate,
        isLoading,
        isSuccess,
        isError,
        error,
        data
    } = useMutation<LoginResponse, AxiosError<RequestError>, LoginPayload, unknown>({
        mutationFn: (data: LoginPayload) => postLoginData(data)
    })

    return {
        mutate, isLoading, isSuccess, isError, error, data
    }
}

export const postRegisterData = async (payload: RegisterPayload) => {
    const {data} = await api.post(`/users`, payload);
    return data
}

export const useRegisterMutation = () => {
    const {
        mutate,
        isLoading,
        isSuccess,
        isError,
        error
    } = useMutation<unknown, AxiosError<RequestError>, RegisterPayload, unknown>({
        mutationFn: (data: RegisterPayload) => postRegisterData(data)
    })

    return {
        mutate, isLoading, isSuccess, isError, error
    }
}