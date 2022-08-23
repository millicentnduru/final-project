import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
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

function Home() {
  useEffect(() => {
    const fetchBackend = async () => {
      const r = await axios.get("http://localhost:8081/api/users");
      console.log(r.data);
    };
    fetchBackend();
  }, []);
  return (
    <Box>
      <Box bg="green.400" p={5}>
        {/* <GiPlantsAndAnimals /> */}
        <Flex gap={2} alignItems="center">
          <Icon
            w={8}
            h={8}
            color="green.900"
            style={{ marginLeft: "25px" }}
            as={GiPlantsAndAnimals}
          />
          <Heading color="green.900" fontSize="lg">
            KANYENYAINI TEA FACTORY
          </Heading>
          <Spacer />
          <Flex style={{ gap: "35px", paddingRight: "30%" }}>
            <Link to={"/"} style={{ color: "white", fontSize: "20px" }}>
              Home
            </Link>
            <Link to={"/"} style={{ color: "white", fontSize: "20px" }}>
              About us
            </Link>
            <Link to={"/"} style={{ color: "white", fontSize: "20px" }}>
              Contact us
            </Link>
          </Flex>
          <Link
            to={"/login"}
            style={{
              color: "white",
              textDecorationLine: "underline",
              fontSize: "20px",
            }}
          >
            Login
          </Link>
        </Flex>
      </Box>

      {/* about page */}

      <Heading
        color="green.900"
        fontSize="md"
        paddingTop="50px"
        paddingBottom="30px"
      >
        ABOUT KANYENYAINI TEA FACTORY
      </Heading>
      <Flex
        style={{
          flexDirection: "row"
        }}
      >
        <Text>
          (Tea production in Kenya, n.d.)Tea is a major cash crop grown in
          Kenya. The Kenyan Tea have been the leading major foreign exchange
          earner in the country. The type of tea grown in Kenya is green tea,
          black tea, yellow tea and white tea. About 60 percent of Kenyan tea
          farmers depend on their product as a source of income. This implies
          that the progress in reducing poverty depends on the performance of
          the tea sector. Tea is mainly grown in several districts which include
          Kericho, Bomet, Nandi, Kiambu, Thika, Maragua, Murang’a, Sotik, Kisii,
          Nyamira, Nyambene, Meru, Nyeri, Kerinyaga, Embu, Kakamega, Nakuru and
          Trans-nzoia. Tea was first introduced in Kenya in 1903 by GWL Caine
          and was planted in Limuru. Since then, Kenya has become a major
          producer of black tea. currently, Kenya is ranked second after China
          in tea exports. Along sides being the top foreign exchange earners,
          Kenyan tea have also attracted tourists. The most tea growing regions
          labor is manual especially by the small-scale farmers. The tea
          plucking machines are usually used by the multinationals. Kenya’s tea
          regions are endowed with ideal climate, tropical, volcanic red soils,
          well distributed rainfall ranging between 1200mm to 1400mm per annum
          and long sunny days. the most Kenya’s tea-growing regions are found in
          the Kenyan highlands.
        </Text>
        

        <Box>
          <Image 
            src="https://www.kenyanews.go.ke/wp-content/uploads/2020/07/DSC_0104.JPG-Tea-e1594804831416.jpg"
            alt=""
          />
        </Box>
      </Flex>

      {/* footer page */}
      <Box paddingTop="150px">
        <Flex bg="green.400" paddingTop="30px" paddingBottom="30px">
          <Box style={{ paddingLeft: "150px" }}>
            <Heading color="green.900" fontSize="lg">
              Contact us
            </Heading>
            <Text color="white" fontSize="lg">
              Email
            </Text>
            <Text color="white" fontSize="lg">
              Phone number
            </Text>
          </Box>
          <Spacer />
          <Box style={{ paddingRight: "150px" }}>
            <Heading color="green.900" fontSize="lg">
              Where to find us
            </Heading>
            <Text color="white" fontSize="lg">
              Facebook
            </Text>
            <Text color="white" fontSize="lg">
              Twiter
            </Text>
            <Text color="white" fontSize="lg">
              Instagram
            </Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default Home;
