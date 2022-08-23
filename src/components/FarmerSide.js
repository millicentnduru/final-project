import React from "react";
import { Link } from "react-router-dom";
import { Flex } from "@chakra-ui/react";


function FarmerSide() {
  return (
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
      to={"/Dashboard"}
      style={{
        color: "black",
        paddingLeft: "30px",
        fontWeight: "inherit",
      }}
    >
      Dashboard
    </Link>
    <Link
      to={"/ChatFarmer"}
      style={{
        color: "black",
        paddingLeft: "30px",
        fontWeight: "inherit",
      }}
    >
      Chat
    </Link>
    <Link
      to={"/Training"}
      style={{
        color: "black",
        paddingLeft: "30px",
        fontWeight: "inherit",
      }}
    >
      Training
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
  );
}

export default FarmerSide;
