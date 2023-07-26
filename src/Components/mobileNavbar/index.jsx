import React from "react";
import { Box, Flex, Text, useDisclosure } from "@chakra-ui/react";
import LaptopIcon from "@mui/icons-material/Laptop";
import MobileDrawer from "../mobileDrawer";
// import MyDrawer from "./Drawer";

const MobileNavbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      w={{ lg: "1224px", base: "375px" }}
      p="10px"
      display={{ base: "flex", md: "none", lg: "none" }}
      alignItems={"center"}
      bgColor="white"
      justifyContent={"space-between"}
    >
      <Flex alignItems={"center"}>
        <MobileDrawer isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
        <Text fontSize={"18px"} fontWeight={"500"} textAlign={"left"} ml="10px">
          Assessment
        </Text>
      </Flex>
      <Box>
        <LaptopIcon />
      </Box>
    </Flex>
  );
};

export default MobileNavbar;
