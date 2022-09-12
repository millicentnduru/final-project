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
  Spinner,
  Tbody,
  Th,
  Thead,
  Tr,
  Td,
  TableContainer,
  Table,
  Textarea,
} from "@chakra-ui/react";
import { async } from "@firebase/util";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import AgentSideNav from "../../components/AgentSideNav";
import Navbar from "../../components/Navbar";
import Sidenav from "../../components/Sidenav";
import { MainStateContext } from "../../MainContext";

const AgentSales = () => {
  const [sales, setSales] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedUser, setSelectedUser] = useState("");
  const [weight, setWeight] = useState("");
  const [comment, setComment] = useState("");

  const { user } = useContext(MainStateContext);
  useEffect(() => {
    setLoading(true);
    const fetchCurrentAgentSales = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8081/api/sale/sales/${user?._id}`
        );

        setLoading(false);
        setSales(response?.data);
      } catch (error) {
        setLoading(false);
        console.log("FETCH AGENT SALES ERROR: ", error);
      }
    };

    fetchCurrentAgentSales();
  }, []);

  return (
    <Box bg={"gray.100"} minHeight={"95vh"}>
      {/* navbar */}
      <Navbar />
      {/* sidebar */}

      <Flex h={"full"}>
        <AgentSideNav />

        <Flex flexDirection="column" p="14" w={"full"} flex={"1"}>
          <Heading
            color="green.700"
            fontSize="2xl"
            fontWeight="extrabold"
            textDecorationLine="underline"
          >
            Sales made by agent
          </Heading>

          {loading ? (
            <Box
              textAlign={"center"}
              alignItems={"center"}
              justifyContent={"center"}
              m={"auto"}
            >
              <Spinner color={"green.400"} size={"xl"} />
            </Box>
          ) : (
            <TableContainer size="lg">
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
          )}
        </Flex>
      </Flex>
    </Box>
  );
};

export default AgentSales;
