import { Container, Text, Image, Center, Flex } from "@chakra-ui/react";
import React from "react";

function Chat() {
  return (
    <Center bg="#38A169" h={"100vh"}>
      <Flex
        bg={"green.100"}
        w={"40%"}
        padding={5}
        gap={6}
        direction={"column"}
        borderRadius={"md"}
      >
        <Flex flexDirection={"row"}>
          <Image
            style={{ marginRight: "20px" }}
            borderRadius="full"
            boxSize="50px"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4oz0KdCvHj_hvY5exy-qFr06SPFjyA4ZoPg&usqp=CAU"
            alt=""
          />
          <Text color="black" pt="4">
            Mark Maina
          </Text>
        </Flex>
        <Flex flexDirection={"column"}>
          <Container fontSize="xs" bg={"white"} p="8" borderRadius={"md"}>
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
          <Container fontSize="xs" bg={"white"} p="8" borderRadius={"md"}>
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

          <Container fontSize="xs" bg={"white"} p="5" borderRadius={"md"}>
            Write a message
          </Container>
        </Flex>
      </Flex>
    </Center>
  );
}

export default Chat;
