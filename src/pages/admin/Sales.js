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
import NewSaleModal from "../../components/NewSaleModal";

function Sales() {
  const [sales, setSales] = useState([]);
  const toast = useToast()

  const [showModal, setShowModal] = useState(false);
  const [currentSale, setCurrentSale] = useState({});

  const fetchSales = async () => {
    const sales = await axios.get("http://localhost:8081/api/sale");
    setSales(sales.data);
    console.log(sales);
  };
  const handleDeleteSale = async (sale) => {
    if (window.confirm(`Are you sure you want to delete ${sale?.month}?`)) {
      try {
        await axios.delete(
          `http://localhost:8081/api/sale/delete/${sale?._id}`
        );

        fetchSales();
        toast({
          title: "sale deleted!",
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
    fetchSales();
  }, []);

  return (
    <Box>
      <NewSaleModal
      currentSale={currentSale}
      handleFetch={fetchSales}
        title={"Add sale"}
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
          setCurrentSale({})
        }}
      >
        Add Sale
      </Button>
      <Flex>
        <Sidenav />

        <Flex flexDirection="column" p="14">
          <Heading
            color="green.900"
            fontSize="2xl"
            fontWeight="extrabold"
            textDecorationLine="underline"
          >
            Sales
          </Heading>
          
          <TableContainer size="lg">
            <Table size="lg">
              <Thead>
                <Tr>
                  <Th>Month</Th>
                  <Th>Tea Center</Th>
                  <Th>produce amount</Th>
                  <Th>Date Updated</Th>
                </Tr>
              </Thead>
              <Tbody>
                {sales.map((sale) => (
                  <Tr>
                    <Td>{sale?.month}</Td>
                    <Td>{sale?.tea_center?.name}</Td>
                    <Td>{sale?.produce_amount}</Td>
                    <Td>{sale?.time}</Td>
                    
                    
                    <Td color="white" fontWeight="bold">
                      <Button bg={"blue.500"} mr="4"
                      onClick={() => {
                        setCurrentSale({ ...sale });
                        setShowModal(true);
                      }}
                      >
                        Edit
                      </Button>

                      <Button
                        bg={"red.500"}
                        onClick={() => handleDeleteSale(sale)}
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

export default Sales;
