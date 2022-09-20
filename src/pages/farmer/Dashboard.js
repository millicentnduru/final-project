import {
  Box,
  Flex,
  Spacer,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { MainStateContext } from "../../MainContext";
import FarmerSide from "../../components/FarmerSide";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import axios from "axios";
import Navbar from "../../components/Navbar";

function Dashboard() {
  const { user } = useContext(MainStateContext);
  const navigate = useNavigate();
  const [chartMonths, setChatMonths] = useState([]);
  const [chartDart, setChartData] = useState("");
  const [Data, setData] = useState([]);

  Chart.register(...registerables);
  // console.log(Data);
  const MONTHS = useMemo(
    () => [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    []
  );
  // fetch
  const fetchData = () => {
    axios
      .get(`http://localhost:8081/api/sale/farmer_sales/${user?._id}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  // END
  useEffect(() => {
    const months = Object.entries(
      Data.reduce((b, a) => {
        let m = a.updatedAt.split("T")[0].substr(0, 7) + "-01";
        if (b.hasOwnProperty(m)) b[m].push(a);
        else b[m] = [a];
        return b;
      }, {})
    )
      .sort((a, b) => a[0].localeCompare(b[0]))
      .map((e) => ({ [e[0]]: e[1] }));

    let mArr = [];
    let monthlyTotals = [];

    console.log("MONTHS", months);
    months.forEach((item) => {
      const key = Object.keys(item)[0];
      const monthOfDate = MONTHS[new Date(key).getMonth()];
      mArr.push(monthOfDate);
      // console.log("Key is", item);
      const arrayOfProducts = Object.values(item)[0];

      // console.log(arrayOfProducts);

      const totalMonth = arrayOfProducts.reduce(function (acc, obj) {
        return acc + parseInt(obj.weight);
      }, 0);
      monthlyTotals.push(totalMonth);
    });
    setChatMonths(mArr);
    // console.log(chartMonths);
    // console.log(monthlyTotals);
    setChartData(monthlyTotals);
  }, [Data]);
  // console.log(Data);
  const data = {
    labels: chartMonths,
    datasets: [
      {
        label: " Monthly Records for your produce",
        data: chartDart,
        backgroundColor: [
          "blue",
          "green",
          "yellow",
          "orange",
          "grey",
          "indigo",
          "purple",
          "brown",
          "red",
          "violet",
          "pink",
          "green",
          ,
        ],
      },
    ],
  };

  const HandleBar = React.useCallback(() => (
    <Bar data={data} style={{ width: "840px", height: "300px" }} />
  ));
  // end

  return (
    <Box>
      <Navbar />
      <Flex>
        <FarmerSide />

        <Flex flexDirection="column">
          <Box flex="1" flexDirection="row" size="150px">
            <Text p={5} fontWeight="bold">
              Monthly records graph for your produce
            </Text>

            {HandleBar()}
          </Box>
          <Flex>
            <TableContainer size="lg">
              <Table size="lg">
                <Thead>
                  <Tr>
                    <Th>Date</Th>
                    <Th>Weight</Th>
                    <Th>Comment</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {Data.slice(0, 5).map((sale) => (
                    <Tr>
                      <Td>{new Date(sale?.createdAt).toLocaleString(1, 11)}</Td>
                      <Td>{sale?.weight}</Td>
                      <Td>{sale?.comment}</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Dashboard;
