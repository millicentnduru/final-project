import React from "react";
import { Link } from "react-router-dom";

import {
  Box,
  Flex,
  Heading,
  Icon,
  Image,
  Spacer,
  Text,
  Container,
} from "@chakra-ui/react";

import { GiPlantsAndAnimals } from "react-icons/gi";

function ChatAdmin() {
  return (
    <Box>
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
      <Flex>
        <Flex
          fontSize="md"
          bg="green.100"
          style={{
            flexDirection: "column",
            paddingTop: "15px",
            gap: "30px",
            width: "15%",
            paddingBottom: "27%",
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
            style={{
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
            to={"/TeaCenters"}
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
        <Flex
          bg={"green.50"}
          w={"100%"}
          padding={5}
          gap={6}
          direction={"column"}
        >
          <Flex flexDirection={"row"}>
            <Image
              style={{ marginRight: "20px" }}
              borderRadius="full"
              boxSize="50px"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4oz0KdCvHj_hvY5exy-qFr06SPFjyA4ZoPg&usqp=CAU"
              alt=""
            />
            <Text color="black" pt="3">
              Mark Maina
            </Text>
          </Flex>
          <Flex flexDirection={"column"}>
            <Container
              fontSize="2xl"
              bg={"white"}
              p="8"
              borderRadius={"md"}
              border="1px"
              fontWeight={"light"}
            >
              This is my message
            </Container>
          </Flex>

          <Flex flexDirection={"row"} pl="5">
            <Image
              style={{ marginRight: "20px" }}
              borderRadius="full"
              boxSize="40px"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4oz0KdCvHj_hvY5exy-qFr06SPFjyA4ZoPg&usqp=CAU"
              alt=""
            />
            <Text color="black" pt="3">
              Nduru Millicent(Admin)
            </Text>
          </Flex>
          <Flex flexDirection={"column"}>
            <Container
              fontSize="2xl"
              bg={"white"}
              p="8"
              fontWeight={"light"}
              borderRadius={"md"}
              border="1px"
            >
              This is my reply
            </Container>
          </Flex>
          <Flex flexDirection={"column"}>
            <Image
              style={{ marginRight: "20px" }}
              borderRadius="full"
              boxSize="0px"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4oz0KdCvHj_hvY5exy-qFr06SPFjyA4ZoPg&usqp=CAU"
              alt=""
            />

            <Container
              fontSize="2xl"
              bg={"white"}
              fontWeight={"light"}
              p="5"
              borderRadius={"md"}
              border="1px"
            >
              Write a message
            </Container>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}

export default ChatAdmin;
