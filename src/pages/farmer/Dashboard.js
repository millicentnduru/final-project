import {
  Box,
  Flex,
  Heading,
  Icon,
  Image,
  Spacer,
  Square,
  Text,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState, useMemo } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { GiPlantsAndAnimals } from "react-icons/gi";
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
  const fetchData = async () => {
    await axios
      .get("http://localhost:8081/api/sale")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  // END
  useEffect(() => {
    fetchData();
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

      // console.log(arrayOfProducts);

      const totalMonth = arrayOfProducts.reduce(function (acc, obj) {
        return acc + parseInt(obj.produce_amount);
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
          </Box>
          <Flex>
            <Bar data={data} style={{ width: "840px", height: "300px" }} />
          </Flex>
          <Box flex="15px" flexDirection="row" bg="green.50" width="380%">
            <Text pt={5} fontWeight="medium">
              <Spacer />
              Recent activities during the month
            </Text>
            <Flex as="ins">
              <Spacer />
              <Text p={2}>No</Text>
              <Spacer />
              <Text p={2}>Date</Text>
              <Spacer />
              <Text p={2}>Produce</Text>
              <Spacer />
            </Flex>
            <Flex>
              <Spacer />
              <Text p={2}>1</Text>
              <Spacer />
              <Text p={2}>03/04/2022</Text>
              <Spacer />
              <Text p={2}>37kg</Text>
              <Spacer />
            </Flex>
            <Flex>
              <Spacer />
              <Text p={2}>2</Text>
              <Spacer />
              <Text p={2}>07/05/2022</Text>
              <Spacer />
              <Text p={2}>52kg</Text>
              <Spacer />
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Dashboard;
