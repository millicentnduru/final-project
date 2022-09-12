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
} from "@chakra-ui/react";
import { async } from "@firebase/util";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Sidenav from "../../components/Sidenav";

const MakeSale = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");
  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get("http://localhost:8081/api/users");

      setUsers(response?.data);
    };

    fetchUser();
  }, []);

  return (
    <Box bg={"gray.100"} minHeight={"95vh"}>
      {/* navbar */}
      <Navbar />
      {/* sidebar */}

      <Flex>
        <Sidenav />

        <Flex flexDirection="column" p="14" w={"full"}>
          <Heading
            color="green.700"
            fontSize="2xl"
            fontWeight="extrabold"
            textDecorationLine="underline"
          >
            Kanyenyaini Tea Factory Sale panel
          </Heading>

          <FormControl
            w={"full"}
            bg={"white"}
            m={"2"}
            borderRadius="xl"
            p={"4"}
          >
            {/* inputs */}

            <Flex w={"60%"}>
              <FormLabel flex={"0.3"} fontSize={"lg"} textAlign={"center"}>
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
                    <option key={user?._id}>{user?.name}</option>
                  ))}
                </Select>

                <FormHelperText>We'll never share your email.</FormHelperText>
              </Box>
            </Flex>
          </FormControl>
        </Flex>
      </Flex>
    </Box>
  );
};

export default MakeSale;
