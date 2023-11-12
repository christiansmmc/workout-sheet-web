import { Spinner } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  useDeleteWorkoutMutation,
  useGetWorkoutsQuery,
  usePatchWorkoutMutation,
} from "../api/workout.ts";
import ErrorAlert from "../components/alert/error";
import StopwatchCard from "../components/card/stopwatchCard";
import WorkoutCard from "../components/card/workoutCard";
import CustomContainer from "../components/customContainer";
import WorkoutModal from "../components/modal/workoutModal";
import { removeToken } from "../utils/authUtils.ts";

const WorkoutPage = () => {
  const [modalStates, setModalStates] = useState<boolean[]>([]);
  const [newWorkoutName, setNewWorkoutName] = useState<string>("");

  const {
    isLoading: isGetWorkoutsLoading,
    isSuccess: isGetWorkoutsSuccess,
    isError: isGetWorkoutsError,
    error: getWorkoutsError,
    data: getWorkoutsData,
  } = useGetWorkoutsQuery();
  const {
    mutate: deleteWorkoutMutate,
    isLoading: isDeleteWorkoutLoading,
    isError: isDeleteWorkoutError,
    isSuccess: isDeleteWorkoutSuccess,
    error: deleteWorkoutError,
  } = useDeleteWorkoutMutation();
  const {
    mutate: patchWorkoutMutate,
    isLoading: isPatchWorkoutLoading,
    isError: isPatchWorkoutError,
    isSuccess: isPatchWorkoutSuccess,
    error: patchWorkoutError,
  } = usePatchWorkoutMutation();

  const navigate = useNavigate();
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

  return (
    <CustomContainer>
      <>
        {isGetWorkoutsLoading ? (
          <Spinner size="md" />
        ) : isGetWorkoutsError ? (
          <ErrorAlert
            errorMessage={
              getWorkoutsError?.response
                ? getWorkoutsError?.response.data.message
                : getWorkoutsError?.message
            }
          />
        ) : (
          isGetWorkoutsSuccess &&
          getWorkoutsData
            ?.sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0))
            .map((workout, index) => {
              return (
                <>
                  <WorkoutCard
                    text={workout.name}
                    key={workout.id}
                    onClick={() => enterWorkout(workout.id)}
                    onClickOption={() => openModal(index)}
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
                    onClickPatch={() => {
                      patchWorkout(workout.id, workout.name, index);
                    }}
                  />
                </>
              );
            })
        )}

        <StopwatchCard useLogoutIcon={true} backOnClick={logout} />
      </>
    </CustomContainer>
  );
};

export default WorkoutPage;
