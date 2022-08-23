import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { GiPlantsAndAnimals } from "react-icons/gi";
import {
  Box,
  Flex,
  Heading,
  Icon,
  Image,
  Spacer,
  Text,
  Center,
  Input,
  Button,
} from "@chakra-ui/react";
import Sidenav from "../../components/Sidenav";



function UpdateTraining() {
  const [file, setFile] = useState("");
  const [message, setMessage] = useState("");
  const onChange = (e) => {
    setFile(e.target.files[0]);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("message", message);
   
    try {
      await axios.post("http://localhost:8081/uploadImage", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      
    } catch (error) {
      console.log(error);
    }
  };
  console.log(file)
  console.log(message)
  return (
    <Box>
      {/* navbar */}
      <Box bg="green.200" p={1}>
        {/* <GiPlantsAndAnimals /> */}
        <Flex gap={2} alignItems="center">
          <Icon
            w={8}
            h={8}
            color="green.900"
            style={{ marginLeft: "25px" }}
            as={GiPlantsAndAnimals}
          />
          <Heading color="green.900" fontSize="lg" fontWeight="extrabold">
            KANYENYAINI TEA FACTORY
          </Heading>
          <Spacer />
          <Link
            to={"/Profile"}
            style={{ color: "blue", textDecorationLine: "underline" }}
          >
            <Image
              style={{ marginRight: "40px" }}
              borderRadius="full"
              boxSize="50px"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4oz0KdCvHj_hvY5exy-qFr06SPFjyA4ZoPg&usqp=CAU"
              alt=""
            />
            <Text color="White">Profile</Text>
          </Link>
        </Flex>
      </Box>
      {/* sidebar */}
     
      <Flex 
             >
              <Sidenav /> 
      
        <Flex flexDirection="column">
          <Flex
            bg={"green"}
            w={"100%"}
            padding={5}
            gap={6}
            direction={"row"}
            borderRadius={"md"}
          >
            <form
        className=" p-10 rounded flex  flex-col shadow-xl bg-slate-200"
        action="submit"
        onSubmit={onSubmit}
      >
       
        <Box className="flex gap-10 mb-10 ">
          <label className="uppercase my-auto">message:</label>
          <textarea
            className=" w-[280px] p-3 border-b-2 bg-gray-100 ml-10 "
            required
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </Box>
        <Box className="flex ">
          <label className="my-auto uppercase">image:</label>
          <Box className="bg-gray-500 rounded w-[60%] ml-20">
            <input
              className="p-2 opacity-5 cursor-pointer"
              type="file"
              required
              onChange={onChange}
            />
          </Box>
        </Box>
        <button
          type="submit"
          className="p-3 bg-gray-300 rounded w-[150px] mx-auto mt-4 "
        >
          send
        </button>
      </form>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}

export default UpdateTraining;
