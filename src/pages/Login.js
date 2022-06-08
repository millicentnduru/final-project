import React,{useState} from "react";
import { Center, Input, Flex, Button, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";


const Login = () => {

const [phone, setPhone]=useState("")
const [password, setPassword]=useState("")
const handleLogin=()=>{
  console.log(phone, password)
}

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
          Login
        </Heading>
        <Input placeholder="phone number"type={"phone"} value={phone} onChange={(event)=>setPhone(event.target.value)} />
        <Input placeholder="password"type={"password"} value={password} onChange={(event)=>setPassword(event.target.value)} />

        <Button
          onClick={()=>handleLogin()}
          colorScheme={"blue"}
          fontSize={"lg"}
          textTransform={"uppercase"}
          w={"70%"}
          mx={"auto"}
        >
          Login 
        </Button>
        <Text fontSize="md" textAlign={"center"}>
          Have no account?{" "}
          <Link
            to={"/register"}
            style={{ color: "blue", textDecorationLine: "underline" }}
          >
            click here to Register
          </Link>
        </Text>
      </Flex>
    </Center>
  );
};

export default Login;
