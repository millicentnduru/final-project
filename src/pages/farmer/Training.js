import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { GiPlantsAndAnimals } from "react-icons/gi";
import {
  Box,
  Flex,
  Heading,
  Icon,
  Image,
  Spacer,
  Text,
} from "@chakra-ui/react";
import FarmerSide from "../../components/FarmerSide";
import Navbar from "../../components/Navbar";

function Training() {
  const [file, setFile] = useState([]);
  const fetchFiles = () => {
    axios
      .get("http://localhost:8081/api/file")
      .then((response) => {
        setFile(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchFiles();
  }, []);
  // console.log(file)
  return (
    <Box>
      {/* navbar */}
      <Navbar />
      {/* sidebar */}
      <FarmerSide />
      <Flex>
        {file?.map((data) => {
          console.log(data);
          return (
            <Box>
              <Box>
                {JSON.stringify(data?.productImage)}
                {
                  <Image
                    src={`http://localhost:8081/images/file_1661256183431.jpg`}
                    alt="photoo"
                    height={"100px"}
                    width={"100px"}
                  />
                }
                {data.message}
              </Box>
            </Box>
          );
        })}
      </Flex>
    </Box>
  );
}

export default Training;
