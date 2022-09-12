import {
  Box,
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
} from "@chakra-ui/react";
import { async } from "@firebase/util";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import AgentSideNav from "../../components/AgentSideNav";
import Navbar from "../../components/Navbar";
import Sidenav from "../../components/Sidenav";
import { MainStateContext } from "../../MainContext";

const AgentMakeSale = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedUser, setSelectedUser] = useState("");
  const [weight, setWeight] = useState("");
  const [comment, setComment] = useState("");
  const { user } = useContext(MainStateContext);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get("http://localhost:8081/api/users");

      setUsers(response?.data);
    };

    fetchUser();
  }, []);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await axios.post("http://localhost:8081/api/sale/create", {
        weight,
        comment,
        user: selectedUser,
        agent: user?._id,
      });

      setWeight("");
      setComment("");
      setSelectedUser("");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <Box bg={"gray.100"} minHeight={"95vh"}>
      {/* navbar */}
      <Navbar />
      {/* sidebar */}

      <Flex>
        <AgentSideNav />

        <Flex flexDirection="column" p="14" w={"full"}>
          <Heading
            color="green.700"
            fontSize="2xl"
            fontWeight="extrabold"
            textDecorationLine="underline"
          >
            Agent Sales panel
          </Heading>

          <FormControl
            w={"full"}
            bg={"white"}
            m={"2"}
            borderRadius="xl"
            p={"4"}
            display={"flex"}
            flexDir={"column"}
            gap={"4"}
          >
            {/* inputs */}

            <Flex w={"60%"}>
              <FormLabel
                requiredIndicator
                flex={"0.3"}
                fontSize={"lg"}
                textAlign={"center"}
              >
                User:
              </FormLabel>
              <Box flex={"1"}>
                <Select
                  defaultValue={selectedUser}
                  onChange={(event) => {
                    setSelectedUser(event?.target.value);
                  }}
                  placeholder="--Select user to add sale--"
                >
                  {users?.map((user) => (
                    <option value={user?._id} key={user?._id}>
                      {user?.name}
                    </option>
                  ))}
                </Select>

                {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
              </Box>
            </Flex>

            <Flex w={"60%"}>
              <FormLabel flex={"0.3"} fontSize={"lg"} textAlign={"center"}>
                Weight:
              </FormLabel>
              <Box flex={"1"}>
                <Input
                  type={"number"}
                  value={weight}
                  onChange={(e) => setWeight(e?.target.value)}
                />

                {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
              </Box>
            </Flex>
            <Flex w={"60%"}>
              <FormLabel flex={"0.3"} fontSize={"lg"} textAlign={"center"}>
                Comment:
              </FormLabel>
              <Box flex={"1"}>
                <Textarea
                  placeholder="enter comment"
                  value={comment}
                  onChange={(e) => setComment(e?.target.value)}
                />

                {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
              </Box>
            </Flex>
            <Button
              bg={"green.500"}
              w={"50%"}
              p={"2.5"}
              mx={"auto"}
              color={"white"}
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? "Loading . . . ." : "ADD SALE"}
            </Button>
          </FormControl>
        </Flex>
      </Flex>
    </Box>
  );
};

export default AgentMakeSale;
