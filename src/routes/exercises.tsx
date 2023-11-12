import CustomContainer from "../components/customContainer";
import {
  useGetExercisesFromWorkoutQuery,
  usePatchWorkoutExerciseMutation,
} from "../api/workout.ts";
import { useNavigate, useParams } from "react-router-dom";
import { Spinner } from "@chakra-ui/react";
import ErrorAlert from "../components/alert/error";
import StopwatchCard from "../components/card/stopwatchCard";
import ExerciseCard from "../components/card/exerciseCard";
import { isNumber } from "../utils/stringUtils.ts";

const WorkoutPage = () => {
  type WorkoutIdParam = {
    workoutId: string;
  };

  const { workoutId } = useParams<keyof WorkoutIdParam>() as WorkoutIdParam;
  const {
    isLoading: getExercisesFromWorkoutIsLoading,
    isSuccess: getExercisesFromWorkoutIsSuccess,
    isError: getExercisesFromWorkoutIsError,
    error: getExercisesFromWorkoutError,
    data: getExercisesFromWorkoutData,
  } = useGetExercisesFromWorkoutQuery(workoutId);
  const {
    mutate: patchWorkoutExerciseMutate,
    isLoading: patchWorkoutExerciseIsLoading,
    isSuccess: patchWorkoutExerciseIsSuccess,
    isError: patchWorkoutExerciseIsError,
    error: patchWorkoutExerciseError,
  } = usePatchWorkoutExerciseMutation();

  const navigate = useNavigate();

  const patchExerciseLoad = (
    exerciseId: string,
    oldLoad: number,
    newLoad: string,
  ) => {
    if (!isNumber(newLoad)) return;
    if (oldLoad == Number(newLoad)) return;
    console.log("AQUI");
    patchWorkoutExerciseMutate({
      workoutId,
      exerciseId,
      load: Number(newLoad),
    });
  };

  return (
    <CustomContainer>
      <>
        {getExercisesFromWorkoutIsLoading ? (
          <Spinner size="md" />
        ) : getExercisesFromWorkoutIsError ? (
          <ErrorAlert
            errorMessage={
              getExercisesFromWorkoutError?.response
                ? getExercisesFromWorkoutError?.response.data.message
                : getExercisesFromWorkoutError?.message
            }
          />
        ) : (
          getExercisesFromWorkoutIsSuccess &&
          getExercisesFromWorkoutData?.workoutExercises
            .sort((a, b) => {
              const bodyPartComparison = a.exercise.bodyPart.localeCompare(
                b.exercise.bodyPart,
              );

              return bodyPartComparison === 0
                ? a.exercise.name.localeCompare(b.exercise.name)
                : bodyPartComparison;
            })
            .map((workoutExercise) => (
              <ExerciseCard
                exerciseName={workoutExercise.exercise.name}
                exerciseLoad={workoutExercise.load}
                exerciseBodyPart={workoutExercise.exercise.bodyPart}
                onBlur={(e) => {
                  patchExerciseLoad(
                    workoutExercise.exercise.id,
                    workoutExercise.load,
                    e.target.value,
                  );
                }}
              />
            ))
        )}

        <StopwatchCard backOnClick={() => navigate("/workout")} />
      </>
    </CustomContainer>
  );
};

export default WorkoutPage;
