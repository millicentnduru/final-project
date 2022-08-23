import React , { useEffect, useState } from 'react';
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
  Select,
 
  useToast,
} from "@chakra-ui/react";
import axios from "axios";


function NewSaleModal({ isOpen, onClose, handleFetch, title, currentSale }) {


  const toast = useToast();

  const [month, setMonth] = useState("");
  const [loading, setLoading] = useState(false);
  const [center, setCenter] = useState("");
  const [produce, setProduce] = useState("");
  const [centers, setCenters] = useState([]);

  
  useEffect(() => {
    const fetchCenters = async () => {
      const centers = await axios.get("http://localhost:8081/api/center");
      setCenters(centers.data);
      console.log(centers.data);
    };
    fetchCenters();
  }, []);

  

  const isUpdateMode = React.useMemo(
    () => (currentSale?._id ? true : false),
    [currentSale]
  );
  React.useEffect(() => {
    console.log(currentSale);
    if (currentSale?._id) {
      setMonth(currentSale?.month);
      setProduce(currentSale?.produce_amount);
      setCenter(currentSale?.tea_center);
      
      
    } else {
      setMonth("");
      setProduce("");
    }
  }, [currentSale]);

  const validateField = () => {
    if (month === "") {
      toast({
        title: "Month is required!",
        status: "error",
        isClosable: true,
      });
      return false;
    } else if (produce === "") {
      toast({
        title: " produce amount is required!",
        status: "error",
        isClosable: true,
      });
      return false;
    }
      else if (center === "") {
        toast({
          title: " please select tea Center!",
          status: "error",
          isClosable: true,
        });
        return false;
      
    }else {
      return true;
    }
  }; 
  const handleSubmit = async () => {
    try {
      const isValid = validateField();
      if (!isValid) return;

      setLoading(true);
      if (isUpdateMode) {
        const newSale = await axios.put(
          `http://localhost:8081/api/sale/update/${currentSale?._id}`,
          {
            month: month,
            produce_amount: produce,
            tea_center: center._id,
            
          }
        );
        console.log(newSale.data);
        toast({
          title: "sale Updated!",
          status: "success",
          isClosable: true,
        });
      } else {
        const newSale = await axios.post(
          "http://localhost:8081/api/sale/create",
          {
            month: month,
            produce_amount: produce,
            tea_center: center._id,
          }
        );
        
        console.log(newSale.data);
        toast({
          title: "sale added!",
          status: "success",
          isClosable: true,
        });
      }
      setLoading(false);
      setMonth("");
      setProduce("");
    
      
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
            placeholder="month"
            value={month}
            onChange={(event) => setMonth(event.target.value)}
          />
           <Select
            defaultValue={center}
            onChange={(event) => {
              setCenter({...center,_id:event.target.value});
            }}
            placeholder={
              isUpdateMode && center?._id ? center?.name : "--Select center--"
            }
          >
            {centers.map((center) => (
              <option value={center._id}>{center.name}</option>
            ))}
          </Select>
        
          
          <Input
            placeholder="produce Amount"
            value={produce}
            onChange={(event) => setProduce(event.target.value)}
          />
         
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
            {loading === true ? " AddingSale . . ." : "Add"}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
export default NewSaleModal;