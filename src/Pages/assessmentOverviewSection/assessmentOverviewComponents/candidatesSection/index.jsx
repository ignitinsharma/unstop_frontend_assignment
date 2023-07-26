import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { MdOutlinePeople } from "react-icons/md";

const CandidatesSection = () => {
  return (
    <Box
      w={{ lg: "369px", base: "345px" }}
      h={{ lg: "114px", base: "auto" }}
      p={"16px 20px"}
      gap={"16px"}
      borderRight={"1px solid #DADCE0"}
    >
      <Text
        w={"78px"}
        h={"20px"}
        fontSize={"14px"}
        lineHeight={"19.6px"}
        fontWeight={"600"}
        color={"#1C4980"}
      >
        Candidates
      </Text>
      <Flex
        // border={"1px solid black"}
        w={"277px"}
        justifyContent={"space-between"}
        h={"46px"}
        gap={"20px"}
        alignItems={"center"}
        pt={"20px"}
      >
        <Flex w={"40px"} h={"40px"} bg={"#EBE8FD"} borderRadius={"8px"}>
          <Box
            w={"20px"}
            h={"20px"}
            top={"10px"}
            left={"10px"}
            position={"relative"}
          >
            <MdOutlinePeople
              style={{
                position: "relative",
                width: "18.64px",
                height: "18.64px",
                color: "#6548EE",
              }}
            />
          </Box>
        </Flex>
        <Box w={"91px"} h="46px" gap={"1px"}>
          <Flex w={"88px"} h={"28px"} gap={"4px"} alignItems={"center"}>
            <Text
              w="60px"
              h={"28px"}
              fontWeight={"700"}
              fontSize={"20px"}
              lineHeight={"28px"}
              color={"#1C4980"}
            >
              11,145
            </Text>
            <Text
              w="24px"
              h={"17px"}
              fontWeight={"500"}
              fontSize={"12px"}
              lineHeight={"16.8px"}
              color={"#05C165"}
            >
              +89
            </Text>
          </Flex>
          <Text
            w={"91px"}
            h={"17px"}
            fontWeight={"500"}
            fontSize={"12px"}
            lineHeight={"16.8px"}
            color={"#1C4980"}
          >
            Total Candidate
          </Text>
        </Box>
        <Box w={"91px"} h="46px" gap={"1px"}>
          <Flex w={"88px"} h={"28px"} gap={"4px"} alignItems={"center"}>
            <Text
              w="60px"
              h={"28px"}
              fontWeight={"700"}
              fontSize={"20px"}
              lineHeight={"28px"}
              color={"#1C4980"}
            >
              1,14
            </Text>
            <Text
              w="24px"
              h={"17px"}
              fontWeight={"500"}
              fontSize={"12px"}
              lineHeight={"16.8px"}
              color={"#05C165"}
            >
              +89
            </Text>
          </Flex>
          <Text
            w={"91px"}
            h={"17px"}
            fontWeight={"500"}
            fontSize={"12px"}
            lineHeight={"16.8px"}
            color={"#1C4980"}
          >
            Who Attamped
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default CandidatesSection;
