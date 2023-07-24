import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { BsViewStacked } from "react-icons/bs";

const TotalAssessment = () => {
  return (
    <Box
      w={"162px"}
      h={"114px"}
      p={"16px 20px"}
      gap={"16px"}
      borderRight={"1px solid #DADCE0"}
    >
      <Text
        w={"121px"}
        h={"20px"}
        fontSize={"14px"}
        lineHeight={"19.6px"}
        fontWeight={"600"}
        color={"#1C4980"}
      >
        Total Assessment
      </Text>
      <Flex
        w={"77px"}
        h={"40px"}
        gap={"10px"}
        alignItems={"center"}
        pt={"20px"}
      >
        <Box w={"40px"} h={"40px"} bg={"#EBE8FD"} borderRadius={"8px"}>
          <Box
            w={"20px"}
            h={"20px"}
            top={"10px"}
            left={"10px"}
            position={"relative"}
          >
            <BsViewStacked
              style={{
                position: "relative",
                width: "15.83px",
                height: "15px",
                top: "2.5px",
                left: "1.67px",
                color: "#6548EE",
                zIndex:0
              }}
            />
          </Box>
        </Box>
        <Text
          w={"27px"}
          h={"28px"}
          fontWeight={"700"}
          lineHeight={"28px"}
          fontSize={"20px"}
          color={"#1C4980"}
        >
          34
        </Text>
      </Flex>
    </Box>
  );
};

export default TotalAssessment;
