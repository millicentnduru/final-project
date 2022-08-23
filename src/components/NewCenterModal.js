import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";

function NewCenterModal({
  isOpen,
  onClose,
  handleFetch,
  title,
  currentCenter,
}) {
  const toast = useToast();

  const [name, setName] = useState(currentCenter?.name);
  const [loading, setLoading] = useState(false);

  const isUpdateMode = React.useMemo(
    () => (currentCenter?._id ? true : false),
    [currentCenter]
  );

  React.useEffect(() => {
    if (currentCenter?._id) {
      setName(currentCenter?.name);
    }else{
      setName("")
    }
  }, [currentCenter]);

  const validateField = () => {
    if (name === "") {
      toast({
        title: "Name is required!",
        status: "error",
        isClosable: true,
      });
      return false;
    } else {
      return true;
    }
  };
  const handleSubmit = async () => {
    try {
      const isValid = validateField();
      if (!isValid) return;

      setLoading(true);
      if(isUpdateMode){
        const newCenter = await axios.put(
          `http://localhost:8081/api/center/update/${currentCenter?._id}`,
          {
            name: name,
          }
        );
        console.log(newCenter.data);

        toast({
        title: "center Updated!",
        status: "success",
        isClosable: true,
      });
      }else{

        const newCenter = await axios.post(
          "http://localhost:8081/api/center/create",
          {
            name: name,
          }
        );
        console.log(newCenter.data);
        toast({
          title: "center added!",
          status: "success",
          isClosable: true,
        });
      }

      
      
      setLoading(false);
      setName("");
      handleFetch();

      onClose();
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />

      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody display="flex" flexDir={"column"} gap="4">
          <Input
            placeholder="full name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          {/* <Input
          placeholder="tea center"
          value={center}
          onChange={(event) => setCenter(event.target.value)}
        /> */}
          {/* <Select onChange={(event)=>{setCenter(event.target.value)}} placeholder='--Select center--'>
  {  centers.map((center)=>(<option value={center._id}>{center.name}</option>

  )) }
  
</Select> */}
        </ModalBody>

        <ModalFooter>
          <Button
            variant="solid"
            mx="auto"
            w="80%"
            onClick={handleSubmit}
            disabled={loading}
            bg={"green.400"}
            color="white"
          >
            {loading === true
              ? " AddingCenter . . ."
              : currentCenter?._id
              ? "Update"
              : "Add"}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default NewCenterModal;
// CRUD operations