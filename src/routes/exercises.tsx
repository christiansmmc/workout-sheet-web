import CustomContainer from "../components/containers/customContainer";
import {
  useDeleteExerciseFromWorkoutMutation,
  useGetExercisesFromWorkoutQuery,
  usePatchWorkoutExerciseMutation,
} from "../api/workout.ts";
import { useNavigate, useParams } from "react-router-dom";
import { Spinner, useToast } from "@chakra-ui/react";
import HeaderContainer from "../components/containers/stopwatchContainer";
import ExerciseCard from "../components/card/exerciseCard";
import { isNumber } from "../utils/stringUtils.ts";
import { useState } from "react";
import ExerciseModal from "../components/modal/exerciseModal";
import { isAuthenticated } from "../utils/authUtils.ts";
import CardContainer from "../components/containers/cardContainer";

const WorkoutPage = () => {
  const [modalStates, setModalStates] = useState<boolean[]>([]);

  type WorkoutIdParam = {
    workoutId: string;
  };

  const toast = useToast();
  const navigate = useNavigate();
  const { workoutId } = useParams<keyof WorkoutIdParam>() as WorkoutIdParam;

  if (!isAuthenticated()) {
    navigate("/login");
  }

  const {
    isLoading: getExercisesFromWorkoutIsLoading,
    isSuccess: getExercisesFromWorkoutIsSuccess,
    isFetching: getExercisesFromWorkoutIsFetching,
    data: getExercisesFromWorkoutData,
  } = useGetExercisesFromWorkoutQuery(workoutId, (error) => {
    showToast(
      "error",
      "Erro ao tentar buscar exercícios",
      error?.response ? error?.response.data.message : error?.message,
    );
  });

  const { mutate: patchWorkoutExerciseMutate } =
    usePatchWorkoutExerciseMutation(
      () => {
        showToast("success", "Exercício atualizado com sucesso");
      },
      (error) => {
        showToast(
          "error",
          "Erro ao tentar atualizar exercício",
          error?.response ? error?.response.data.message : error?.message,
        );
      },
    );

  const { mutate: deleteWorkoutExerciseMutate } =
    useDeleteExerciseFromWorkoutMutation(
      () => {
        showToast("success", "Exercício removido com sucesso");
      },
      (error) => {
        showToast(
          "error",
          "Erro ao tentar remover exercício",
          error?.response ? error?.response.data.message : error?.message,
        );
      },
    );

  const patchExerciseLoad = (
    exerciseId: string,
    oldLoad: number,
    newLoad: string,
  ) => {
    if (!isNumber(newLoad)) return;
    if (oldLoad == Number(newLoad)) return;

    patchWorkoutExerciseMutate({
      workoutId,
      exerciseId,
      load: Number(newLoad),
    });
  };

  const openModal = (index: number) => {
    const newModalStates = [...modalStates];
    newModalStates[index] = true;
    setModalStates(newModalStates);
  };

  const closeModal = (index: number) => {
    const newModalStates = [...modalStates];
    newModalStates[index] = false;
    setModalStates(newModalStates);
  };

  const deleteWorkout = (
    workoutId: string,
    exerciseId: string,
    modelIndex: number,
  ) => {
    deleteWorkoutExerciseMutate({ workoutId, exerciseId });
    closeModal(modelIndex);
  };

  const showToast = (
    status: "info" | "warning" | "success" | "error" | "loading" | undefined,
    title?: string,
    description?: string,
  ) => {
    toast({
      title: title,
      description: description,
      status: status,
      duration: 1500,
      isClosable: true,
      position: "top",
    });
  };

  return (
    <CustomContainer>
      <>
        <CardContainer>
          <>
            {getExercisesFromWorkoutIsLoading ||
            getExercisesFromWorkoutIsFetching ? (
              <Spinner size="md" />
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
                .map((workoutExercise, index) => (
                  <>
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
                      onClickIcon={() => openModal(index)}
                    />
                    <ExerciseModal
                      isOpen={modalStates[index] || false}
                      onClose={() => closeModal(index)}
                      onClickDelete={() =>
                        deleteWorkout(
                          workoutId,
                          workoutExercise.exercise.id,
                          index,
                        )
                      }
                    />
                  </>
                ))
            )}
          </>
        </CardContainer>
        <HeaderContainer backOnClick={() => navigate("/workout")} />
      </>
    </CustomContainer>
  );
};
export default WorkoutPage;
