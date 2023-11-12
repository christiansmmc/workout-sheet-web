import { AxiosError, AxiosResponse } from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { RequestError } from "../interfaces/request.tsx";
import {
  GetWorkoutExercisesResponse,
  GetWorkoutsResponse,
} from "../interfaces/workout.tsx";
import api from "./axiosConfig.ts";

export const getWorkoutsData = async (): Promise<GetWorkoutsResponse[]> => {
  const { data } = await api.get<GetWorkoutsResponse[]>(`/workouts`);
  return data;
};

export const useGetWorkoutsQuery = () => {
  const { isLoading, isSuccess, isError, error, data } = useQuery<
    GetWorkoutsResponse[],
    AxiosError<RequestError>
  >({
    queryKey: ["GetWorkouts"],
    queryFn: () => getWorkoutsData(),
  });

  return {
    isLoading,
    isSuccess,
    isError,
    error,
    data,
  };
};

export const getExercisesFromWorkoutQuery = async (
  workoutId: string,
): Promise<GetWorkoutExercisesResponse> => {
  const { data } = await api.get<GetWorkoutExercisesResponse>(
    `/workouts/${workoutId}`,
  );
  return data;
};

export const useGetExercisesFromWorkoutQuery = (workoutId: string) => {
  const { isLoading, isSuccess, isError, error, data } = useQuery<
    GetWorkoutExercisesResponse,
    AxiosError<RequestError>
  >({
    queryKey: ["GetWorkoutExercises"],
    enabled: workoutId != "",
    queryFn: () => getExercisesFromWorkoutQuery(workoutId),
  });

  return {
    isLoading,
    isSuccess,
    isError,
    error,
    data,
  };
};

export const deleteWorkout = (workoutId: string): Promise<AxiosResponse> => {
  return api.delete<void>(`/workouts/${workoutId}`);
};

export const useDeleteWorkoutMutation = () => {
  const queryClient = useQueryClient();

  const { mutate, isLoading, isSuccess, isError, error } = useMutation<
    AxiosResponse,
    AxiosError<RequestError>,
    string,
    unknown
  >({
    mutationFn: (workoutId: string) => deleteWorkout(workoutId),
    onSuccess: () => {
      queryClient.invalidateQueries("GetWorkouts");
    },
  });

  return {
    mutate,
    isLoading,
    isSuccess,
    isError,
    error,
  };
};

export const patchWorkout = (
  workoutId: string,
  name: string,
): Promise<AxiosResponse> => {
  return api.patch<void>(`/workouts/${workoutId}`, { name });
};

export const usePatchWorkoutMutation = () => {
  const queryClient = useQueryClient();

  const { mutate, isLoading, isSuccess, isError, error } = useMutation<
    AxiosResponse,
    AxiosError<RequestError>,
    { workoutId: string; name: string },
    unknown
  >({
    mutationFn: ({ workoutId, name }) => patchWorkout(workoutId, name),
    onSuccess: () => {
      queryClient.invalidateQueries("GetWorkouts");
    },
  });

  return {
    mutate,
    isLoading,
    isSuccess,
    isError,
    error,
  };
};

export const patchExerciseLoad = (
  workoutId: string,
  exerciseId: string,
  load: number,
) => {
  return api.patch(`/workouts/${workoutId}/exercises/${exerciseId}`, { load });
};

export const usePatchWorkoutExerciseMutation = () => {
  const queryClient = useQueryClient();

  const { mutate, isLoading, isSuccess, isError, error } = useMutation<
    AxiosResponse,
    AxiosError<RequestError>,
    { workoutId: string; exerciseId: string; load: number },
    unknown
  >({
    mutationFn: ({ workoutId, exerciseId, load }) =>
      patchExerciseLoad(workoutId, exerciseId, load),
    onSuccess: () => {
      queryClient.invalidateQueries("GetWorkoutExercises");
    },
  });

  return {
    mutate,
    isLoading,
    isSuccess,
    isError,
    error,
  };
};
