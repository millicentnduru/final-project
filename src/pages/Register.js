import {
  Center,
  Input,
  Flex,
  Button,
  Heading,
  Text,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MainStateContext } from "../MainContext";

const Register=()=> {
  const {user,setUser} = useContext(MainStateContext)

  console.log(user)
  const toast = useToast();
  const navigate = useNavigate()


  const [name, setName] = useState("");
  const [loading, setLoading]=useState(false)
  const [center, setCenter] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleSubmit =async () => {
    setLoading(true)
   
    if(password!==confirm){
      toast({
        title:"Passwords do not match!",
        status: "error",
        isClosable: true,
      })
      
      return
    }
    try {
      
       const registerUser= await axios.post("http://localhost:8081/api/users/register",{
        name:name,phone_number:phone,email:email,password:password,tea_center:"62d7b1956cce3496d5db1951"
      })
      setUser(registerUser.data)

      toast({
        title:"Registration Successful",
        status: "success",
        isClosable: true,
      })
      navigate("/dashboard")

      setLoading(false)

    } catch (error) {
      toast({
        title:error.response.data?.message,
        status: "error",
        isClosable: true,
      })
      setLoading(false)
    }

    
  };

  return (
    <Center bg="#38A169" h={"100vh"}>
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
          colorScheme={"green"}
          fontSize={"lg"}
          textTransform={"uppercase"}
          w={"70%"}
          mx={"auto"}
          disabled={loading}
        >
          Register
        </Button>
        <Text fontSize="md" textAlign={"center"}>
          Already regitered?{" "}
          <Link
            to={"/login"}
            style={{ color: "#38A169", textDecorationLine: "underline" }}
          >
            click here to login
          </Link>
        </Text>
      </Flex>
    </Center>
  );
}

export default Register;
