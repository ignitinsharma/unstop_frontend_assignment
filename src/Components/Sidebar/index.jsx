import { Box, Button, Grid, Image, Text } from "@chakra-ui/react";
import React from "react";
import assessment from "../../assets/assessment.svg";
import dashboard from "../../assets/dashboard.svg";
import Mylibrary from "../../assets/mylibrary.svg";
import Roundstatus from "../../assets/roundstatus.svg";

const SideBar = () => {
  return (
    <Box
      position="fixed"
      w={{ base: "15%", md: "15%", lg: "10%" }}
      display={{ base: "none", md: "block", lg: "block" }}
      h="100vh"
      zIndex="10"
      top="0"
      bgColor="white"
    >
      <Grid gap="6px" p="10px 20px" fontSize={"13px"} fontWeight={"500"}>
        <Box p="10px" textAlign={"center"}>
          <Image
            src={dashboard}
            alt="dashboard"
            margin={"auto"}
            width="15px"
            height="15px"
          />
          <Text
            py={"5px"}
            fontWeight={"500"}
            fontSize={"12px"}
            color={"#1C4980"}
          >
            Dashboard
          </Text>
        </Box>

        <Box
          textAlign={"center"}
          p="10px"
          h={"70px"}
          width={"90px"}
          borderRadius={"8px"}
          bgColor="#E5F1FC"
          border="2px solid #4096EC"
          color={"#4096EC"}
          margin={"auto"}
        >
          <Image
            src={assessment}
            alt="assessment"
            margin={"auto"}
            width="14.34px"
            height="15.84px"
          />
          <Text
            py={"5px"}
            w={"71px"}
            fontSize={"12px"}
            fontWeight={"500"}
            color={"#0073E6"}
          >
            Assessment
          </Text>
        </Box>

        <Box p="10px" textAlign={"center"}>
          <Image
            src={Mylibrary}
            alt="Mylibrary"
            margin={"auto"}
            width="16.57pxpx"
            height="15.22px"
          />
          <Text
            py={"5px"}
            fontSize={"12px"}
            fontWeight={"500"}
            color={"#1C4980"}
          >
            My Library
          </Text>
        </Box>

        <Box p="10px" borderTop={"1px dotted #E3E5E8"} mt="10px">
          <Button
            fontSize={"10px"}
            w="46px"
            h="18px"
            textAlign={"center"}
            border-radius="22px"
            alignItems={"center"}
            display={"block"}
            fontWeight={"500"}
            p="0px 4px"
            m={"auto"}
            border="1px solid #D63500"
            background="#FBEBEA"
            color="#D63500"
          >
            Admin
          </Button>
        </Box>

        <Box textAlign={"center"}>
          <Image
            src={Roundstatus}
            alt="Roundstatus"
            margin={"auto"}
            width="14px"
            height="15.5px"
          />
          <Text
            pt={"5px"}
            fontSize={"12px"}
            fontWeight={"500"}
            color={"#1C4980"}
          >
            Round
          </Text>
          <Text fontSize={"12px"} fontWeight={"500"} color={"#1C4980"}>
            Status
          </Text>
        </Box>
      </Grid>
    </Box>
  );
};

export default SideBar;
