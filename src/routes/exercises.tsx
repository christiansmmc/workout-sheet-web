import {
  useDeleteExerciseFromWorkoutMutation,
  useGetExercisesFromWorkoutQuery,
  usePatchWorkoutExerciseMutation,
  usePostNewWorkoutExerciseMutation,
} from "../api/workout.ts";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Spinner, useToast } from "@chakra-ui/react";
import HeaderContainer from "../components/containers/stopwatchContainer";
import ExerciseCard from "../components/card/exerciseCard";
import { isNumber } from "../utils/stringUtils.ts";
import { useState } from "react";
import ExerciseModal from "../components/modal/exerciseModal";
import { isAuthenticated } from "../utils/authUtils.ts";
import CardContainer from "../components/containers/cardContainer";
import Container from "../components/containers/pageContainer";
import ExerciseListModal from "../components/modal/exerciseListModal";
import { useGetExercisesQuery } from "../api/exercise.ts";
import BottomContainer from "../components/containers/bottomContainer";

const WorkoutPage = () => {
  const [modalStates, setModalStates] = useState<boolean[]>([]);
  const [isAddExerciseModalOpen, setIsAddExerciseModalOpen] =
    useState<boolean>(false);

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

  const { data: getAllExercisesData } = useGetExercisesQuery((error) => {
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

  const { mutate: postNewWorkoutExerciseMutate } =
    usePostNewWorkoutExerciseMutation(
      () => {
        showToast("success", "Exercício adicionado com sucesso");
      },
      (error) => {
        showToast(
          "error",
          "Erro ao tentar adicionar exercício",
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

  const openAddExerciseModal = () => {
    setIsAddExerciseModalOpen(true);
  };

  const closeAddExerciseModal = () => {
    setIsAddExerciseModalOpen(false);
  };

  const deleteWorkout = (
    workoutId: string,
    exerciseId: string,
    modelIndex: number,
  ) => {
    deleteWorkoutExerciseMutate({ workoutId, exerciseId });
    closeModal(modelIndex);
  };

  const addExerciseToWorkout = (exerciseId: string) => {
    postNewWorkoutExerciseMutate({ workoutId, exerciseId, data: { load: 0 } });
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
    <Container>
      <>
        <HeaderContainer backOnClick={() => navigate("/workout")} />
        <CardContainer bottomHeight={"150px"}>
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
        <BottomContainer>
          <Button
            style={{ marginBottom: "15px" }}
            variant={"PrimaryActionButtonNewUi"}
            width={"250px"}
            onClick={openAddExerciseModal}
          >
            Adicionar exercício
          </Button>
        </BottomContainer>
        <ExerciseListModal
          isOpen={isAddExerciseModalOpen}
          onClose={closeAddExerciseModal}
          onSelectExercise={(exerciseId: string) =>
            addExerciseToWorkout(exerciseId)
          }
          exerciseList={
            getAllExercisesData && getExercisesFromWorkoutData
              ? getAllExercisesData.filter(
                  (it) =>
                    !getExercisesFromWorkoutData.workoutExercises
                      .map((workoutExercise) => workoutExercise.exercise)
                      .map((exercise) => exercise.id)
                      .includes(it.id),
                )
              : []
          }
        />
      </>
    </Container>
  );
};
export default WorkoutPage;
