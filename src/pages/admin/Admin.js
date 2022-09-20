import React, { useEffect, useState, useMemo } from "react";

import { Chart, registerables } from "chart.js";
import axios from "axios";

import { Box, Flex, Text } from "@chakra-ui/react";
import Sidenav from "../../components/Sidenav";
import { Bar } from "react-chartjs-2";
import Navbar from "../../components/Navbar";

function Admin() {
  const [chartMonths, setChatMonths] = useState([]);
  const [chartData, setChartData] = useState("");
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
      .get("http://localhost:8081/api/sale")
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
    if (Data.length > 0) {
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

      months.forEach((item) => {
        const key = Object.keys(item)[0];
        const monthOfDate = MONTHS[new Date(key).getMonth()];
        mArr.push(monthOfDate);
        // console.log("Key is", item);
        const arrayOfProducts = Object.values(item)[0];

        const totalMonth = arrayOfProducts.reduce(function (acc, obj) {
          return acc + parseInt(obj.weight);
        }, 0);
        monthlyTotals.push(totalMonth);
      });
      setChatMonths(mArr);
      // console.log(chartMonths);
      // console.log(monthlyTotals);
      setChartData(monthlyTotals);
    }
  }, [Data]);

  const data = {
    labels: chartMonths,
    datasets: [
      {
        label: " Monthly Records for KanyenyainiTea Factory",
        data: chartData,
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
  // end

  return (
    <Box bg={"gray.100"} minHeight={"95vh"}>
      {/* navbar */}
      <Navbar />
      {/* sidebar */}
      <Flex bg="white">
        <Sidenav />
        <Flex flexDirection="column">
          <Box flex="1" flexDirection="row" size="150px">
            <Text p={5} fontWeight="bold">
              Monthly Records for KanyenyainiTea Factory
            </Text>
            <Flex>
              <Bar data={data} style={{ width: "840px", height: "300px" }} />
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Admin;
