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
        <ModalContent backgroundColor={"#161616"} color={"white"}>
          <ModalHeader color={"white"}>
            Tem certeza que deseja retirar o exercício deste treino ?
          </ModalHeader>
          <ModalCloseButton />
          <ModalFooter>
            <Button
              variant={"PrimaryActionButtonNewUi"}
              width={"100px"}
              mr={20}
              onClick={onClickDelete}
            >
              Deletar
            </Button>
            <Button
              variant={"PrimaryActionButtonNewUi"}
              width={"100px"}
              mr={7}
              onClick={onClose}
              backgroundColor={"#5A5A5A"}
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
