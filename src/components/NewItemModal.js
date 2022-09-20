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
import React, { useEffect, useState } from "react";

function NewItemModal({ isOpen, onClose, handleFetch, title, currentUser }) {
  const toast = useToast();

  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [center, setCenter] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
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
    () => (currentUser?._id ? true : false),
    [currentUser]
  );

  React.useEffect(() => {
    console.log(currentUser);
    if (currentUser?._id) {
      setName(currentUser?.name);
      setCenter(currentUser?.tea_center);
      setPhone(currentUser?.phone_number);
      setEmail(currentUser?.email);
      setRole(currentUser?.role);
    } else {
      setName("");
    }
  }, [currentUser]);

  const validateField = () => {
    if (name === "") {
      toast({
        title: "Name is required!",
        status: "error",
        isClosable: true,
      });
      return false;
    } else if (phone === "") {
      toast({
        title: "Phone Number is required!",
        status: "error",
        isClosable: true,
      });
      return false;
    } else if (center === "") {
      toast({
        title: " please select tea Center!",
        status: "error",
        isClosable: true,
      });
      return false;
    } else if (email === "") {
      toast({
        title: "Email is required!",
        status: "error",
        isClosable: true,
      });
      return false;
    } else if (!isUpdateMode && password === "") {
      toast({
        title: "Password is required!",
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
      if (isUpdateMode) {
        const newUser = await axios.put(
          `http://localhost:8081/api/users/update/${currentUser?._id}`,
          {
            name: name,
            email: email,
            phone_number: phone,
            tea_center: center._id,
          }
        );
        console.log(newUser.data);

        toast({
          title: "user Updated!",
          status: "success",
          isClosable: true,
        });
      } else {
        const newUser = await axios.post(
          "http://localhost:8081/api/users/register",
          {
            name: name,
            phone_number: phone,
            password: password,
            email: email,
            tea_center: center._id,
            role: role,
          }
        );

        console.log(newUser.data);
        toast({
          title: "user added!",
          status: "success",
          isClosable: true,
        });
      }

      setLoading(false);
      setName("");
      setEmail("");
      setPassword("");
      setPhone("");
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
            placeholder="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          {/* <Input
          placeholder="tea center"
          value={center}
          onChange={(event) => setCenter(event.target.value)}
        /> */}
          <Select
            defaultValue={role}
            onChange={(event) => {
              setRole(event.target.value);
            }}
            placeholder={
              isUpdateMode && center?._id ? center?.name : "--Select Role--"
            }
          >
            {["admin", "farmer", "agent"].map((center) => (
              <option value={center}>{center}</option>
            ))}
          </Select>

          <Select
            defaultValue={center}
            onChange={(event) => {
              setCenter({ ...center, _id: event.target.value });
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
            placeholder="email@example.com"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <Input
            placeholder="phone number"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
          {!isUpdateMode && (
            <Input
              placeholder="password"
              type={"password"}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          )}
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
            {loading === true ? " AddingUser . . ." : "Add"}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default NewItemModal;
