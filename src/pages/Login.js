import React,{useContext, useState} from "react";
import { Center, Input, Flex, Button, Heading, Text, useToast } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { MainStateContext } from "../MainContext";


const Login = () => {
  const {user,setUser} = useContext(MainStateContext)

  console.log(user)
  
  const toast = useToast()
  const navigate = useNavigate()


  const [loading, setLoading]=useState(false)
const [phone, setPhone]=useState("")
const [password, setPassword]=useState("")
const handleLogin=async ()=>{
  setLoading(true)
  try {
    const loginUser=await axios.post("http://localhost:8081/api/users/login",{
      phone_number: phone,
      password:password
    })
    setUser(loginUser.data)



    toast({
      title:"Login Successful!",
      status: "success",
      isClosable: true,
    })

    navigate("/dashboard")

    setLoading(false)
  } catch (error) {
    console.log(error)
    toast({
      title: error.response.data?.message,
      status: "error",
      isClosable: true,
    })
    setLoading(false)
  }
  // console.log(phone, password)
 
}

// useEffect(() => {
//   const fetchUsers=  async()=>{
//      const res=await axios.get("http://localhost:8081/api/users")
//      console.log(res.data)
//   }
//   fetchUsers()
// }, [])

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
          Login
        </Heading>
        <Input placeholder="phone number"type={"phone"} value={phone} onChange={(event)=>setPhone(event.target.value)} />
        <Input placeholder="password"type={"password"} value={password} onChange={(event)=>setPassword(event.target.value)} />

        <Button
          onClick={()=>handleLogin()}
          colorScheme={"green"}
          fontSize={"lg"}
          textTransform={"uppercase"}
          w={"70%"}
          mx={"auto"}
          disabled={loading}
        >
        
          { loading===true?" Loading . . .":"Login" }
        </Button>
        <Text fontSize="md" textAlign={"center"}>
          Have no account?{" "}
          <Link
            to={"/register"}
            style={{ color: "#38A169", textDecorationLine: "underline" }}
          >
            click here to Register
          </Link>
        </Text>
      </Flex>
    </Center>
  );
};

export default Login;
