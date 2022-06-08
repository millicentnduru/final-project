import { Box, Flex, Heading, Icon, } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { GiPlantsAndAnimals } from "react-icons/gi";


function Dashboard() {
  return (
    <Box bg="green.400" p={4}>
     {/* <GiPlantsAndAnimals /> */}
     <Flex gap={2} alignItems="center">
    <Icon w={8} h={8} color="White"as={GiPlantsAndAnimals } />
    <Heading color="white" fontSize="md" >KANYENYAINI TEA FACTORY</Heading>
    </Flex>

    </Box>
    
  )
}

export default Dashboard