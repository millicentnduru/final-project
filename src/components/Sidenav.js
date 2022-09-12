import React from "react";
import { Link } from "react-router-dom";
import { Flex } from "@chakra-ui/react";

function Sidenav() {
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
        to={"/Admin"}
        style={{
          color: "black",
          paddingLeft: "30px",
          fontWeight: "inherit",
        }}
      >
        Dashboard
      </Link>

      {/* <Link
        to={"/admin_sale"}
        style={{
          color: "black",
          paddingLeft: "30px",
          fontWeight: "inherit",
        }}
      >
        Add Sale
      </Link> */}

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
        to={"/centers"}
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
  );
}

export default Sidenav;
