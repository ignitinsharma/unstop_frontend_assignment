import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { BiMobile } from "react-icons/bi";

const TitleSection = () => {
  return (
    <Box pl={"1rem"} borderBottom={"1px solid #DDE5EA"}>
      <Flex justifyContent={"space-between"}>
        <Flex
          alignItems={"center"}
          justifyContent={"space-between"}
          // gap={"20px"}
          w={"276px"}
          h={"70px"}
        >
          <Text
            fontWeight={"600"}
            fontSize={"20px"}
            lineHeight={"28px"}
            color={"#1C4980"}
          >
            Assessment
          </Text>
          <Text
            w={"116px"}
            // h={"70px"}
            borderBottom={"3px solid #0073E6"}
            py={"10px"}
            fontWeight={"600"}
            fontSize={"14px"}
            color={"#0073E6"}
            lineHeight={"16.94px"}
          >
            My Assessment
          </Text>
          {/* </Box> */}
        </Flex>
        <Box w={"40px"} h={"40px"} padding={"10px"} gap={"10px"}>
          <BiMobile
            style={{
              width: "23px",
              height: "24px",
              color: "#1C4980",
            }}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default TitleSection;
