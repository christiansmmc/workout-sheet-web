import { useQuery } from "react-query";
import api from "./axiosConfig.ts";
import { RequestError } from "../interfaces/request.ts";
import { AxiosError } from "axios";
import { GetExerciseResponse } from "../interfaces/exercise.ts";

export const getExercisesData = async (): Promise<GetExerciseResponse[]> => {
  const { data } = await api.get<GetExerciseResponse[]>(`/exercises`);
  return data;
};

export const useGetExercisesQuery = (
  errorToastCallback?: (error: AxiosError<RequestError>) => void,
) => {
  const { data } = useQuery<GetExerciseResponse[], AxiosError<RequestError>>({
    queryKey: ["GetExercises"],
    queryFn: () => getExercisesData(),
    onError: (error) => {
      if (errorToastCallback) errorToastCallback(error);
    },
  });

  return {
    data,
  };
};
