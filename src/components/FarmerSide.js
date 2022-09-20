import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Box, Button, Flex } from "@chakra-ui/react";
import { MainStateContext } from "../MainContext";

function FarmerSide() {
  const { setUser } = useContext(MainStateContext);
  return (
    <Flex
      fontSize="md"
      bg="green.100"
      minHeight={"88vh"}
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
          fontWeight: "inherit",
          paddingLeft: "30px",
        }}
        onClick={() => {
          setUser(null);
        }}
      >
        Logout
      </Link>
    </Flex>
  );
}

export default FarmerSide;
