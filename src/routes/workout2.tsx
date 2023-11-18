import { Button, Spinner, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  useDeleteWorkoutMutation,
  useGetWorkoutsQuery,
  usePatchWorkoutMutation,
} from "../api/workout.ts";
import HeaderContainer from "../components/containers/stopwatchContainer";
import CustomContainer from "../components/containers/customContainer";
import WorkoutModal from "../components/modal/workoutModal";
import { isAuthenticated, removeToken } from "../utils/authUtils.ts";
import BottomContainer from "../components/containers/bottomContainer";
import WorkoutCard2 from "../components/card/workoutCard2";
import CardContainer from "../components/containers/cardContainer";

const WorkoutPage2 = () => {
  const [modalStates, setModalStates] = useState<boolean[]>([]);
  const [newWorkoutName, setNewWorkoutName] = useState<string>("");

  const toast = useToast();
  const navigate = useNavigate();

  if (!isAuthenticated()) {
    navigate("/login");
  }

  const {
    isLoading: isGetWorkoutsLoading,
    isSuccess: isGetWorkoutsSuccess,
    isError: isGetWorkoutsError,
    error: getWorkoutsError,
    data: getWorkoutsData,
  } = useGetWorkoutsQuery();

  const { mutate: deleteWorkoutMutate } = useDeleteWorkoutMutation(
    () => {
      showToast("success", "Treino deletado com sucesso");
    },
    (error) => {
      showToast(
        "error",
        "Erro ao tentar deletar treino",
        error?.response ? error?.response.data.message : error?.message,
      );
    },
  );

  const { mutate: patchWorkoutMutate } = usePatchWorkoutMutation(
    () => {
      showToast("success", "Treino atualizado com sucesso");
    },
    (error) => {
      showToast(
        "error",
        "Erro ao tentar atualizar treino",
        error?.response ? error?.response.data.message : error?.message,
      );
    },
  );

  const enterWorkout = (workoutId: string) => {
    navigate(`/workout/${workoutId}`);
  };

  const logout = () => {
    navigate("/");
    removeToken();
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

  const deleteWorkout = (workoutId: string, modelIndex: number) => {
    deleteWorkoutMutate(workoutId);
    closeModal(modelIndex);
  };

  const patchWorkout = async (
    workoutId: string,
    oldName: string,
    modelIndex: number,
  ) => {
    if (oldName == newWorkoutName) return;
    if (newWorkoutName == "") return;

    patchWorkoutMutate({ workoutId: workoutId, name: newWorkoutName });
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
    <>
      <CustomContainer>
        <>
          <CardContainer>
            <>
              {isGetWorkoutsLoading ? (
                <Spinner size="md" />
              ) : (
                isGetWorkoutsSuccess &&
                getWorkoutsData
                  ?.sort((a, b) =>
                    a.name < b.name ? -1 : a.name > b.name ? 1 : 0,
                  )
                  .map((workout, index) => {
                    return (
                      <>
                        <WorkoutCard2
                          text={workout.name}
                          key={workout.id}
                          enterButtonOnClick={() => enterWorkout(workout.id)}
                          editButtonOnClick={() => openModal(index)}
                        />
                        <WorkoutModal
                          key={index}
                          placeholder={workout.name}
                          isOpen={modalStates[index] || false}
                          onClose={() => closeModal(index)}
                          onInputChange={(e) => {
                            setNewWorkoutName(e.target.value);
                          }}
                          onClickDelete={() => deleteWorkout(workout.id, index)}
                          onClickPatch={() =>
                            patchWorkout(workout.id, workout.name, index)
                          }
                        />
                      </>
                    );
                  })
              )}
            </>
          </CardContainer>
          <HeaderContainer useLogoutIcon={true} backOnClick={logout} />
          <BottomContainer>
            <Button
              style={{ marginBottom: "15px" }}
              variant={"PrimaryActionButtonNewUi"}
              width={"250px"}
              _hover={{ backgroundColor: "#5A5A5A" }}
              onClick={() => navigate("/create-workout")}
            >
              Adicionar treino
            </Button>
          </BottomContainer>
        </>
      </CustomContainer>
    </>
  );
};

export default WorkoutPage2;
