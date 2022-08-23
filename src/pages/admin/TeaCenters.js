import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GiPlantsAndAnimals } from "react-icons/gi";
import {
  Box,
  Flex,
  Heading,
  Icon,
  Image,
  Spacer,
  TableContainer,
  Text,
  Th,
  Thead,
  Tr,
  Table,
  Tbody,
  Td,
  Button,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import Sidenav from "../../components/Sidenav";

import NewCenterModal from "../../components/NewCenterModal";

function TeaCenters() {
  const [Centers, setCenters] = useState([]);
  const toast = useToast();

  const [showModal, setShowModal] = useState(false);
  const [currentCenter, setCurrentCenter] = useState({});

  const fetchCenters = async () => {
    const Centers = await axios.get("http://localhost:8081/api/center");
    setCenters(Centers.data);
    console.log(Centers);
  };
  const handleDeleteCenter = async (center) => {
    if (window.confirm(`Are you sure you want to delete ${center?.name}?`)) {
      try {
        await axios.delete(
          `http://localhost:8081/api/center/delete/${center?._id}`
        );

        fetchCenters();
        toast({
          title: "center deleted!",
          status: "success",
          isClosable: true,
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      return;
    }
  };
  useEffect(() => {
    fetchCenters();
  }, []);
  return (
    <Box>
      <NewCenterModal
        currentCenter={currentCenter}
        handleFetch={fetchCenters}
        title={"Add center"}
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
        }}
      />
      {/* navbar */}
      <Flex bg="green.200" p={1}>
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
      </Flex>
      <Button
        float="right"
        m="2"
        onClick={() => {
          setShowModal(true);
          setCurrentCenter({})
        }}
      >
        Add Sale
      </Button>
      <Flex>
        {/* sidebar */}
        <Sidenav />

        <Flex flexDirection="column" p="14" flex={"1"}>
          <Heading
            color="green.900"
            fontSize="lg"
            fontWeight="extrabold"
            textDecorationLine="underline"
          >
            Kanyenyaini Tea Factory Centers
          </Heading>
          <TableContainer size="lg">
            <Table size="lg">
              <Thead>
                <Tr>
                  <Th>Name</Th>
                </Tr>
              </Thead>
              <Tbody>
                {Centers.map((center) => (
                  <Tr>
                    <Td>{center.name}</Td>
                    <Td color="white" fontWeight="bold">
                      <Button
                        bg={"blue.500"}
                        mr="4"
                        onClick={() => {
                          setCurrentCenter({ ...center });
                          setShowModal(true);
                        }}
                      >
                        Edit
                      </Button>

                      <Button
                        bg={"red.500"}
                        onClick={() => handleDeleteCenter(center)}
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

export default TeaCenters;
