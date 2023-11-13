import { AxiosError, AxiosResponse } from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { RequestError } from "../interfaces/request.ts";
import {
  CreateWorkoutPayload,
  GetWorkoutExercisesResponse,
  GetWorkoutsResponse,
} from "../interfaces/workout.ts";
import api from "./axiosConfig.ts";
import { useNavigate } from "react-router-dom";

export const getWorkoutsData = async (): Promise<GetWorkoutsResponse[]> => {
  const { data } = await api.get<GetWorkoutsResponse[]>(`/workouts`);
  return data;
};

export const useGetWorkoutsQuery = (
  errorToastCallback?: (error: AxiosError<RequestError>) => void,
) => {
  const { isLoading, isSuccess, isError, error, data } = useQuery<
    GetWorkoutsResponse[],
    AxiosError<RequestError>
  >({
    queryKey: ["GetWorkouts"],
    queryFn: () => getWorkoutsData(),
    onError: (error) => {
      if (errorToastCallback) errorToastCallback(error);
    },
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

export const useGetExercisesFromWorkoutQuery = (
  workoutId: string,
  errorToastCallback?: (error: AxiosError<RequestError>) => void,
) => {
  const { isLoading, isSuccess, isError, error, data } = useQuery<
    GetWorkoutExercisesResponse,
    AxiosError<RequestError>
  >({
    queryKey: ["GetWorkoutExercises"],
    enabled: workoutId != "",
    queryFn: () => getExercisesFromWorkoutQuery(workoutId),
    onError: (error) => {
      if (errorToastCallback) errorToastCallback(error);
    },
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

export const useDeleteWorkoutMutation = (
  successToastCallback?: () => void,
  errorToastCallback?: (error: AxiosError<RequestError>) => void,
) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation<
    AxiosResponse,
    AxiosError<RequestError>,
    string,
    unknown
  >({
    mutationFn: (workoutId: string) => deleteWorkout(workoutId),
    onSuccess: () => {
      if (successToastCallback) successToastCallback();
      queryClient.invalidateQueries("GetWorkouts");
    },
    onError: (err) => {
      if (errorToastCallback) errorToastCallback(err);
    },
  });

  return {
    mutate,
  };
};

export const patchWorkout = (
  workoutId: string,
  name: string,
): Promise<AxiosResponse> => {
  return api.patch<void>(`/workouts/${workoutId}`, { name });
};

export const usePatchWorkoutMutation = (
  successToastCallback?: () => void,
  errorToastCallback?: (error: AxiosError<RequestError>) => void,
) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation<
    AxiosResponse,
    AxiosError<RequestError>,
    { workoutId: string; name: string },
    unknown
  >({
    mutationFn: ({ workoutId, name }) => patchWorkout(workoutId, name),
    onSuccess: () => {
      if (successToastCallback) successToastCallback();
      queryClient.invalidateQueries("GetWorkouts");
    },
    onError: (err) => {
      if (errorToastCallback) errorToastCallback(err);
    },
  });

  return {
    mutate,
  };
};

export const patchExerciseLoad = (
  workoutId: string,
  exerciseId: string,
  load: number,
) => {
  return api.patch(`/workouts/${workoutId}/exercises/${exerciseId}`, { load });
};

export const usePatchWorkoutExerciseMutation = (
  successToastCallback?: () => void,
  errorToastCallback?: (error: AxiosError<RequestError>) => void,
) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation<
    AxiosResponse,
    AxiosError<RequestError>,
    { workoutId: string; exerciseId: string; load: number },
    unknown
  >({
    mutationFn: ({ workoutId, exerciseId, load }) =>
      patchExerciseLoad(workoutId, exerciseId, load),
    onSuccess: () => {
      queryClient.invalidateQueries("GetWorkoutExercises");
      if (successToastCallback) successToastCallback();
    },
    onError: (err) => {
      if (errorToastCallback) errorToastCallback(err);
    },
  });

  return {
    mutate,
  };
};

export const deleteExerciseFromWorkout = (
  workoutId: string,
  exerciseId: string,
): Promise<AxiosResponse> => {
  return api.delete<void>(`/workouts/${workoutId}/exercises/${exerciseId}`);
};

export const useDeleteExerciseFromWorkoutMutation = (
  successToastCallback?: () => void,
  errorToastCallback?: (error: AxiosError<RequestError>) => void,
) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation<
    AxiosResponse,
    AxiosError<RequestError>,
    { workoutId: string; exerciseId: string },
    unknown
  >({
    mutationFn: ({ workoutId, exerciseId }) =>
      deleteExerciseFromWorkout(workoutId, exerciseId),
    onSuccess: () => {
      queryClient.invalidateQueries("GetWorkoutExercises");
      if (successToastCallback) successToastCallback();
    },
    onError: (err) => {
      if (errorToastCallback) errorToastCallback(err);
    },
  });

  return {
    mutate,
  };
};

export const postWorkoutData = (payload: CreateWorkoutPayload) => {
  return api.post(`/workouts`, payload);
};

export const usePostWorkoutMutation = (
  successToastCallback?: () => void,
  errorToastCallback?: (error: AxiosError<RequestError>) => void,
) => {
  const navigate = useNavigate();

  const { mutate } = useMutation<
    AxiosResponse,
    AxiosError<RequestError>,
    { data: CreateWorkoutPayload },
    unknown
  >({
    mutationFn: ({ data }) => postWorkoutData(data),
    onSuccess: () => {
      if (successToastCallback) successToastCallback();
      navigate("/workout");
    },
    onError: (err) => {
      if (errorToastCallback) errorToastCallback(err);
    },
  });

  return {
    mutate,
  };
};
