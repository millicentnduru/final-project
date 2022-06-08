import {
  Box,
  Center,
  Square,
  Input,
  Flex,
  Button,
  Heading,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [center, setCenter] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleSubmit = () => {
    console.log(name, center, phone, password, confirm);
  };

  return (
    <Center bg="blue.300" h={"100vh"}>
      <Flex
        bg={"white"}
        w={"40%"}
        padding={5}
        gap={6}
        direction={"column"}
        borderRadius={"md"}
      >
        <Heading textAlign={"center"} as="h6" size="lg">
          Register
        </Heading>
        <Input
          placeholder="full name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <Input
          placeholder="tea center"
          value={center}
          onChange={(event) => setCenter(event.target.value)}
        />
        <Input
          placeholder="phone number"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
        <Input
          placeholder="password"
          type={"password"}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <Input
          placeholder="confirm password"
          type={"password"}
          value={confirm}
          onChange={(event) => setConfirm(event.target.value)}
        />
        <Button
          onClick={() => handleSubmit()}
          colorScheme={"blue"}
          fontSize={"lg"}
          textTransform={"uppercase"}
          w={"70%"}
          mx={"auto"}
        >
          Register
        </Button>
        <Text fontSize="md" textAlign={"center"}>
          Already regitered?{" "}
          <Link
            to={"/login"}
            style={{ color: "blue", textDecorationLine: "underline" }}
          >
            click here to login
          </Link>
        </Text>
      </Flex>
    </Center>
  );
}

export default Register;
