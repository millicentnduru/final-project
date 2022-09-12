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
import Navbar from "../../components/Navbar";

function Sales() {
  const [sales, setSales] = useState([]);
  const toast = useToast();

  const [showModal, setShowModal] = useState(false);
  const [currentSale, setCurrentSale] = useState({});

  const fetchSales = async () => {
    const sales = await axios.get("http://localhost:8081/api/sale");
    setSales(sales.data);
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
    <Box bg={"gray.100"} minHeight={"95vh"}>
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

      <Navbar />

      {/* sidebar */}
      {/* <Button
        float="right"
        m="2"
        onClick={() => {
          setShowModal(true);
          setCurrentSale({});
        }}
      >
        Add Sale
      </Button> */}
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
          <TableContainer>
            <Table size="lg">
              <Thead>
                <Tr>
                  <Th>Date</Th>
                  <Th>User</Th>
                  <Th>Weight</Th>
                  <Th>Comment</Th>
                </Tr>
              </Thead>
              <Tbody>
                {sales.map((sale) => (
                  <Tr>
                    <Td>{new Date(sale?.createdAt).toLocaleString(1, 11)}</Td>
                    <Td>{sale?.user?.name}</Td>
                    <Td>{sale?.weight}</Td>
                    <Td>{sale?.comment}</Td>
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
