import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import React from "react";

interface WorkoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  placeholder: string;
  onClickDelete: () => void;
  onClickPatch: () => void;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const WorkoutModal = ({
  isOpen,
  onClose,
  placeholder,
  onClickDelete,
  onClickPatch,
  onInputChange,
}: WorkoutModalProps) => {
  return (
    <>
      <Modal isCentered={true} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent backgroundColor={"#161616"} color={"white"}>
          <ModalHeader color={"white"}>Edite ou Delete seu treino</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel color={"white"}>Nome</FormLabel>
              <Input
                onChange={onInputChange}
                defaultValue={placeholder}
                variant={"primaryInput2"}
              />
            </FormControl>
          </ModalBody>
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
              mr={3}
              backgroundColor={"#2791e8"}
              onClick={onClickPatch}
            >
              Salvar
            </Button>
            <Button
              variant={"PrimaryActionButtonNewUi"}
              width={"100px"}
              mr={3}
              backgroundColor={"#5A5A5A"}
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
