import {
  Button,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

interface WorkoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onClickDelete: () => void;
}

const WorkoutModal = ({
  isOpen,
  onClose,
  onClickDelete,
}: WorkoutModalProps) => {
  return (
    <>
      <Modal isCentered={true} isOpen={isOpen} onClose={onClose} size={"sm"}>
        <ModalOverlay />
        <ModalContent backgroundColor={"#1E1E1E"} color={"white"}>
          <ModalHeader color={"white"}>
            Tem certeza que deseja retirar o exercício deste treino ?
          </ModalHeader>
          <ModalCloseButton />
          <ModalFooter>
            <Button
              variant={"primaryActionButton"}
              width={"100px"}
              mr={20}
              _hover={{ backgroundColor: "red" }}
              onClick={onClickDelete}
            >
              Deletar
            </Button>
            <Button
              variant={"primaryActionButton"}
              width={"100px"}
              mr={7}
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

export default WorkoutModal;
