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
        <ModalContent backgroundColor={"#1E1E1E"} color={"white"}>
          <ModalHeader color={"white"}>Edite ou Delete seu treino</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel color={"white"}>Nome</FormLabel>
              <Input
                onChange={onInputChange}
                defaultValue={placeholder}
                variant={"primaryInput"}
              />
            </FormControl>
          </ModalBody>
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
              mr={3}
              _hover={{ backgroundColor: "#2791e8" }}
              onClick={onClickPatch}
            >
              Salvar
            </Button>
            <Button
              variant={"primaryActionButton"}
              width={"100px"}
              mr={3}
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
