import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { GetExerciseResponse } from "../../../interfaces/exercise.ts";
import ExerciseCard from "../../card/listExerciseCard";

interface ExerciseListModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectExercise: (
    exerciseId: string,
    exerciseName: string,
    exerciseBodyPart: string,
  ) => void;
  exerciseList: GetExerciseResponse[];
}

const ExerciseListModal = ({
  isOpen,
  onClose,
  onSelectExercise,
  exerciseList,
}: ExerciseListModalProps) => {
  const handleExerciseClick = (
    exerciseId: string,
    exerciseName: string,
    exerciseBodyPart: string,
  ) => {
    onSelectExercise(exerciseId, exerciseName, exerciseBodyPart);
    onClose();
  };

  return (
    <>
      <Modal
        scrollBehavior={"inside"}
        isCentered={true}
        isOpen={isOpen}
        onClose={onClose}
        size={"lg"}
      >
        <ModalOverlay />
        <ModalContent backgroundColor={"#1E1E1E"} color={"white"}>
          <ModalHeader textAlign={"center"} color={"white"}>
            Selecione o exercício
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            {exerciseList.map((exercise, index) => {
              return (
                <ExerciseCard
                  key={index}
                  exerciseName={exercise.name}
                  exerciseBodyPart={exercise.bodyPart}
                  onClick={() =>
                    handleExerciseClick(
                      exercise.id,
                      exercise.name,
                      exercise.bodyPart,
                    )
                  }
                />
              );
            })}
          </ModalBody>
          <ModalFooter>
            <Button
              variant={"primaryActionButton"}
              width={"100px"}
              mr={3}
              _hover={{ backgroundColor: "#5A5A5A" }}
              onClick={onClose}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ExerciseListModal;
