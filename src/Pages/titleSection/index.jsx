import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { BiDesktop, BiMobile } from "react-icons/bi";
import { useBreakpointValue } from "@chakra-ui/react";

const TitleSection = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box pl={{ base: "1rem", md: "0" }} borderBottom={"1px solid #DDE5EA"}>
      <Flex justifyContent={"space-between"}>
        <Flex
          alignItems={"center"}
          justifyContent={"space-between"}
          gap={"20px"}
          w={{ base: "327px", md: "276px" }}
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
          {!isMobile && (
            <Text
              borderBottom={"3px solid #0073E6"}
              py={"10px"}
              fontWeight={"600"}
              fontSize={"14px"}
              color={"#0073E6"}
              lineHeight={"16.94px"}
            >
              My Assessment
            </Text>
          )}
        </Flex>
        {isMobile ? (
          <Box w={"40px"} h={"40px"} padding={"10px"} gap={"10px"}>
            <BiDesktop
              style={{ width: "23px", height: "24px", color: "#1C4980" }}
            />
          </Box>
        ) : (
          <Box w={"40px"} h={"40px"} padding={"10px"} gap={"10px"}>
            <BiMobile
              style={{ width: "23px", height: "24px", color: "#1C4980" }}
            />
          </Box>
        )}
      </Flex>
    </Box>
  );
};

export default TitleSection;
