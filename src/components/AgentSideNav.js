import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";
import { MainStateContext } from "../MainContext";

function AgentSideNav() {
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
        to={"/agent/sales"}
        style={{
          color: "black",
          paddingLeft: "30px",
          fontWeight: "inherit",
        }}
      >
        Sales
      </Link>

      <Link
        to={"/agent/make_sale"}
        style={{
          color: "black",
          paddingLeft: "30px",
          fontWeight: "inherit",
        }}
      >
        Add Sale
      </Link>

      <Box
        pl={"30px"}
        cursor={"pointer"}
        style={{
          color: "black",
          fontWeight: "inherit",
        }}
        onClick={() => {
          setUser(null);
        }}
      >
        Logout
      </Box>
    </Flex>
  );
}

export default AgentSideNav;
