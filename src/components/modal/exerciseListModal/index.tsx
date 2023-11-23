import {
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
import PrimaryActionButtonNewUi from "../../button/primaryActionButtonNewUi/primaryActionButton.tsx";

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
        <ModalContent backgroundColor={"#161616"} color={"white"}>
          <ModalHeader textAlign={"center"} color={"white"}>
            Selecione o exercício
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
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
          <ModalFooter borderTop={"1px solid #323232"}>
            <PrimaryActionButtonNewUi onClick={onClose} text="Cancelar" />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ExerciseListModal;
