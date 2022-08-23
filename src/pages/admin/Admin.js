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
    Square,
    Text,
  } from "@chakra-ui/react";

function Admin() {
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
      <Box>
        <Flex
          fontSize="md"
          bg="green.100"
          style={{
            flexDirection: "column",
            paddingTop: "15px",
            gap: "30px",
            width: "15%",
            paddingBottom: "23%",
          }}
        >
          <Link
            to={"/Admin"}
            style={{
              color: "black",
              paddingLeft: "30px",
              fontWeight: "inherit",
            }}
          >
            Dashboard
          </Link>
          <Link
            to={"/ChatAdmin"}
            style={
              {
              color: "black",
              paddingLeft: "30px",
              fontWeight: "inherit",
            }}
          >
            Chat
          </Link>
          <Link
            to={"/Sales"}
            style={{
              color: "black",
              paddingLeft: "30px",
              fontWeight: "inherit",
            }}
          >
           Sales
          </Link>
          <Link
            to={"/UpdateTraining"}
            style={{
              color: "black",
              paddingLeft: "30px",
              fontWeight: "inherit",
            }}
          >
             Update Training
          </Link>
          <Link
            to={"/Users"}
            style={{
              color: "black",
              paddingLeft: "30px",
              fontWeight: "inherit",
            }}
          >
            Users
          </Link>
          <Link
            to={"/Tea centers"}
            style={{
              color: "black",
              paddingLeft: "30px",
              fontWeight: "inherit",
            }}
          >
            Tea centers
          </Link>
          <Link
            to={"/"}
            style={{
              color: "black",
              paddingLeft: "30px",
              fontWeight: "inherit",
            }}
          >
            Logout
          </Link>
        </Flex>
      </Box>
      <Flex flexDirection="column">
          <Box flex="1" flexDirection="row" size="150px">
            <Text p={5} fontWeight="bold">
              Monthly records graph for KTF
            </Text>
          </Box>
          <Flex
            flexDirection="row"
           
            
          >
            <Box bg="green.500" gap="30px">
              <Text>one</Text>
            </Box>
            <Spacer/>

            <Square bg="blue.500"gap="40px">
              <Text>two</Text>
            </Square>
            <Spacer/>

            <Box bg="tomato">
              <Text>three</Text>
            </Box>
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
      
      
    </Box>
  );
}

export default Admin