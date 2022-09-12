import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { GiPlantsAndAnimals } from "react-icons/gi";
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Icon,
  Image,
  Input,
  Spacer,
  Text,
  Textarea,
} from "@chakra-ui/react";
import Sidenav from "../../components/Sidenav";
import Navbar from "../../components/Navbar";

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
  console.log(file);
  console.log(message);
  return (
    <Box bg={"gray.100"} minHeight={"95vh"}>
      {/* navbar */}
      <Navbar />
      {/* sidebar */}

      <Flex>
        <Sidenav />

        <Center flexDirection="column" padding="28">
          <Flex
            bg={"green.300"}
            w={"110%"}
            padding={"14"}
            direction={"row"}
            borderRadius={"md"}
          >
            <form
              // padding="14"
              // className=" p-10 rounded flex  flex-col shadow-xl bg-slate-200"
              action="submit"
              onSubmit={onSubmit}
            >
              <Flex className="flex gap-10 mb-10 ">
                <Text paddingTop="10" paddingRight="10" color="black">
                  Message:
                </Text>
                <Textarea
                  padding={"14"}
                  borderRadius={"md"}
                  bg="green.100"
                  // className=" w-[280px] p-5 border-b-2  "
                  required
                  onChange={(e) => setMessage(e.target.value)}
                ></Textarea>
              </Flex>
              <Flex paddingTop="10">
                {/* <Text  paddingTop="3" color="black">File:</Text> */}
                <Box w="60%" ml="14">
                  <Input
                    cursor="pointer"
                    // className="p-2 opacity-5 cursor-pointer"
                    type="file"
                    required
                    onChange={onChange}
                  />
                </Box>
              </Flex>
              <Button
                p="3"
                bg="white"
                w="100px"
                mt={"4"}
                color="black"
                float={"right"}
                type="submit"
              >
                send
              </Button>
            </form>
          </Flex>
        </Center>
      </Flex>
    </Box>
  );
}

export default UpdateTraining;
