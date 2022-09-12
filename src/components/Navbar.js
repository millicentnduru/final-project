import {
  Box,
  Center,
  Flex,
  Heading,
  Icon,
  Image,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { GiPlantsAndAnimals } from "react-icons/gi";
import { Link } from "react-router-dom";
import { MainStateContext } from "../MainContext";

const Navbar = () => {
  const { user } = useContext(MainStateContext);
  return (
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
          to={"/AdminProfile"}
          style={{
            color: "blue",
            // textDecorationLine: "underline",
          }}
        >
          <Center flexDir={"column"}>
            <Image
              borderRadius="full"
              boxSize="50px"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4oz0KdCvHj_hvY5exy-qFr06SPFjyA4ZoPg&usqp=CAU"
              alt=""
            />
            <Text color="black" fontWeight={"medium"}>
              {user?.name}
            </Text>
          </Center>
        </Link>
      </Flex>
    </Box>
  );
};

export default Navbar;
