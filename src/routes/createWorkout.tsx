import { Button, Input, useToast } from "@chakra-ui/react";
import { useState } from "react";
import ExerciseCard from "../components/card/exerciseCard";
import { useGetExercisesQuery } from "../api/exercise.ts";
import ExerciseListModal from "../components/modal/exerciseListModal";
import { usePostWorkoutMutation } from "../api/workout.ts";
import { CreateWorkoutPayload } from "../interfaces/workout.ts";
import { useNavigate } from "react-router-dom";
import { isAuthenticated } from "../utils/authUtils.ts";
import HeaderContainer from "../components/containers/stopwatchContainer";
import BottomContainer from "../components/containers/bottomContainer";
import Container from "../components/containers/pageContainer";
import CardContainer from "../components/containers/cardContainer";

const CreateWorkout = () => {
  interface Exercise {
    id: string;
    name: string;
    bodyPart: string;
    load: number;
  }

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [workoutName, setWorkoutName] = useState<string>("");
  const [exercises, setExercises] = useState<Exercise[]>([]);

  const toast = useToast();
  const navigate = useNavigate();

  if (!isAuthenticated()) {
    navigate("/login");
  }

  const { data } = useGetExercisesQuery((error) => {
    showToast(
      "error",
      "Erro ao tentar buscar exercícios",
      error?.response ? error?.response.data.message : error?.message,
    );
  });

  const { mutate } = usePostWorkoutMutation(
    () => {
      showToast("success", "Treino criado com sucesso");
    },
    (error) => {
      showToast(
        "error",
        "Erro ao tentar criar treino",
        error?.response ? error?.response.data.message : error?.message,
      );
    },
  );

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

  const updateLoad = (exerciseIndex: number, newLoad: string) => {
    const updatedExercises = [...exercises];
    updatedExercises[exerciseIndex].load = parseFloat(newLoad);
    setExercises(updatedExercises);
  };

  const removeExercise = (exerciseIndex: number) => {
    const updatedExercises = [...exercises];
    updatedExercises.splice(exerciseIndex, 1);
    setExercises(updatedExercises);
  };

  const addExercise = (
    exerciseId: string,
    exerciseName: string,
    exerciseBodyPart: string,
  ) => {
    setExercises([
      ...exercises,
      {
        id: exerciseId,
        name: exerciseName,
        bodyPart: exerciseBodyPart,
        load: 0,
      },
    ]);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const createWorkout = () => {
    const data: CreateWorkoutPayload = {
      name: workoutName,
      workoutExercises: [],
    };

    exercises.forEach((exercise) => {
      data.workoutExercises.push({
        load: exercise.load,
        exerciseId: exercise.id,
      });
    });

    mutate({ data });
  };

  return (
    <Container>
      <>
        <HeaderContainer backOnClick={() => navigate("/workout")} />
        <CardContainer bottomHeight={"270px"}>
          <>
            {exercises.map((exercise, index) => {
              return (
                <>
                  <ExerciseCard
                    key={index}
                    exerciseName={exercise.name}
                    exerciseLoad={exercise.load}
                    exerciseBodyPart={exercise.bodyPart}
                    onBlur={(e) => updateLoad(index, e.target.value)}
                    onClickIcon={() => removeExercise(index)}
                  />
                </>
              );
            })}
          </>
        </CardContainer>
        <BottomContainer>
          <>
            <Input
              variant={"primaryInput2"}
              placeholder={"Nome do treino"}
              type={"text"}
              name={workoutName}
              value={workoutName}
              onChange={(e) => setWorkoutName(e.target.value)}
              width={"250px"}
            />
            <Button
              variant={"PrimaryActionButtonNewUi"}
              width={"250px"}
              onClick={openModal}
            >
              Adicionar exercício
            </Button>
            <Button
              style={{ marginBottom: "15px" }}
              variant={"PrimaryActionButtonNewUi"}
              width={"250px"}
              onClick={createWorkout}
            >
              Criar treino
            </Button>
          </>
        </BottomContainer>
        <ExerciseListModal
          isOpen={isModalOpen}
          onClose={closeModal}
          onSelectExercise={(
            exerciseId: string,
            exerciseName: string,
            exerciseBodyPart: string,
          ) => addExercise(exerciseId, exerciseName, exerciseBodyPart)}
          exerciseList={
            data
              ? data.filter(
                  (it) => !exercises.map((value) => value.id).includes(it.id),
                )
              : []
          }
        />
      </>
    </Container>
  );
};

export default CreateWorkout;
