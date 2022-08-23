import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GiPlantsAndAnimals } from "react-icons/gi";

import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Image,
  Spacer,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import Sidenav from "../../components/Sidenav";
import NewItemModal from "../../components/NewItemModal";
function Users() {
  const [users, setUsers] = useState([]);
const toast = useToast()


  const [showModal, setShowModal] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  const fetchUsers = async () => {
    const users = await axios.get("http://localhost:8081/api/users");
    setUsers(users.data);
    console.log(users);
  };
  const handleDeleteUser = async(user) => {
    if (window.confirm(`Are you sure you want to delete ${user?.name}?`)) {
      try {
        await axios.delete(`http://localhost:8081/api/users/delete/${user?._id}`);

        fetchUsers()
        toast({
          title:"user deleted!",
          status: "success",
          isClosable: true,
        })
      } catch (error) {
        console.log(error)
      }
    } else {
      return;
    }
  };
  
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <Box>
      <NewItemModal
        currentUser={currentUser}
        handleFetch={fetchUsers}
        title={"Add user"}
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
        }}
      />
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
      <Button
        float="right"
        m="2"
        onClick={() => {
          setShowModal(true);
          setCurrentUser({})

        }}
      >
        Add User
      </Button>
      <Flex>
        <Sidenav />

        <Flex flexDirection="column" p="14">
          <Heading
            color="green.700"
            fontSize="2xl"
            fontWeight="extrabold"
            textDecorationLine="underline"
          >
            Kanyenyaini Tea Factory users
          </Heading>

          <TableContainer size="lg">
            <Table size="lg">
              <Thead>
                <Tr>
                  <Th>Name</Th>
                  <Th>Phone Number</Th>
                  <Th>Tea Center</Th>
                  <Th>Email</Th>
                  <Th>Actions</Th>
                </Tr>
              </Thead>
              <Tbody>
                {users.map((user) => (
                  <Tr>
                    <Td>{user?.name}</Td>
                    <Td>{user?.phone_number}</Td>
                    <Td>{user?.tea_center?.name}</Td>
                    <Td>{user?.email}</Td>
                    <Td color="white" fontWeight="bold">
                      <Button bg={"blue.500"} mr="4"
                      onClick={() => {
                        setCurrentUser({ ...user });
                        setShowModal(true);
                      }}
                      >
                        Edit
                      </Button>

                      <Button
                        bg={"red.500"}
                        onClick={() => handleDeleteUser(user)}
                      >
                        Delete
                      </Button>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Users;
