import React from 'react'
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
import FarmerSide from '../../components/FarmerSide';

function Training() {
  return (
    <Box>
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
      <FarmerSide/>

      
    </Box>
  
  )
}

export default Training