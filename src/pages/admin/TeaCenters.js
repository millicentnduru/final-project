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
import Navbar from "../../components/Navbar";

function TeaCenters() {
  const [Centers, setCenters] = useState([]);
  const toast = useToast();

  const [showModal, setShowModal] = useState(false);
  const [currentCenter, setCurrentCenter] = useState({});

  const fetchCenters = async () => {
    const Centers = await axios.get("http://localhost:8081/api/center");
    setCenters(Centers.data);
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
    <Box bg={"gray.100"} minHeight={"95vh"}>
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

      {/* <GiPlantsAndAnimals /> */}
      <Navbar />

      <Button
        float="right"
        m="2"
        onClick={() => {
          setShowModal(true);
          setCurrentCenter({});
        }}
      >
        Add Center
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
