import {
  LoginPayload,
  LoginResponse,
  RegisterPayload,
} from "../interfaces/user.ts";
import { useMutation } from "react-query";
import api from "./axiosConfig.ts";
import { RequestError } from "../interfaces/request.ts";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { setToken } from "../utils/authUtils.ts";

export const postLoginData = async (
  payload: LoginPayload,
): Promise<LoginResponse> => {
  const { data } = await api.post<LoginResponse>(`/authenticate`, payload);
  return data;
};

export const useLoginMutation = () => {
  const navigate = useNavigate();

  const { mutate, isLoading, isError, error } = useMutation<
    LoginResponse,
    AxiosError<RequestError>,
    LoginPayload,
    unknown
  >({
    mutationFn: (data: LoginPayload) => postLoginData(data),
    onSuccess: (data) => {
      if (data) setToken(data.access_token);
      navigate("/workout");
    },
  });

  return {
    mutate,
    isLoading,
    isError,
    error,
  };
};

export const postRegisterData = async (payload: RegisterPayload) => {
  const { data } = await api.post(`/users`, payload);
  return data;
};

export const useRegisterMutation = () => {
  const navigate = useNavigate();

  const { mutate, isLoading, isError, error } = useMutation<
    unknown,
    AxiosError<RequestError>,
    RegisterPayload,
    unknown
  >({
    mutationFn: (data: RegisterPayload) => postRegisterData(data),
    onSuccess: () => {
      navigate("/login");
    },
  });

  return {
    mutate,
    isLoading,
    isError,
    error,
  };
};
