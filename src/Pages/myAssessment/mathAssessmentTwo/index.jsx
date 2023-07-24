import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Icon,
  Input,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { PiBagBold } from "react-icons/pi";
import { MdCalendarMonth } from "react-icons/md";
import { BiLinkAlt } from "react-icons/bi";

const MathAssessmentTwo = () => {
  const BoxArray = [
    {
      text: "LP",
      color: "#E9407A",
    },
    {
      text: "LP",
      color: "#6548EE",
    },
  ];
  return (
    <Box
      w={"388px"}
      h={"209px)"}
      padding={"30px"}
      gap="16px"
      border={"1px solid #DADCE0"}
      borderRadius={"12px"}
      p={"16px"}
    >
      <Box w={"356px"} m="auto" h={"109px"} gap={"10px"}>
        <Flex justifyContent={"space-between"}>
          <Box w={"50px"} h={"50px"} borderRadius={"12px"} bg={"#EBE8FD"}>
            <PiBagBold
              style={{
                position: "relative",
                width: "21.05px",
                height: "20px",
                top: "15px",
                left: "14px",
                color: "#6548EE",
              }}
            />
          </Box>
          <Box w={"30px"} h={"30px"} gap={"10px"}>
            <BsThreeDotsVertical
              style={{
                position: "relative",
                width: "18px",
                height: "20.83px",
                top: "2.5px",
                left: "12.5px",
              }}
            />
          </Box>
        </Flex>
        <Box py={"10px"} w={"155px"} h={"49px"} gap={"2px"}>
          <Text
            fontSize={"18px"}
            lineHeight={"25.2px"}
            fontWeight={"500"}
            color={"#1C4980"}
          >
            Math Assessment
          </Text>
          <Flex w={"137px"} h={"22px"} gap={"10px"} alignItems={"center"}>
            <Text
              fontSize={"14px"}
              h="20px"
              lineHeight={"19.6px"}
              fontWeight={"600"}
              color={"#1C4980"}
              pr={"5px"}
              borderRight={"1px solid #DADCE0"}
            >
              Job
            </Text>
            <Flex>
              <MdCalendarMonth
                style={{
                  width: "15.67px",
                  height: "14.83px",
                  top: "0.58px",
                  left: "1.17px",
                  color: "#1C4980",
                }}
              />
              <Text
                fontSize={"12px"}
                lineHeight={"14.52px"}
                color={"#8DA4BF"}
                pl={"5px"}
              >
                20 Apr 2023
              </Text>
            </Flex>
          </Flex>
        </Box>
      </Box>
      {/* For border */}
      <Box w={"356px"} my="10px" border={"1px dotted #DADCE0"}></Box>
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        w={"356px"}
        h="36px"
      >
        <Flex
          w={"123px"}
          justifyContent={"space-between"}
          h="36px"
          gap={"14px"}
        >
          <Box>
            <Text
              w={"19px"}
              h={"20px"}
              fontWeight={"600"}
              lineHeight={"19.6px"}
              color={"#1C4980"}
              fontSize={"14px"}
            >
              00
            </Text>
            <Text
              w={"50px"}
              h={"17px"}
              fontWeight={"500"}
              fontSize={"12px"}
              lineHeight={"16.8px"}
              color={"#1C4980"}
            >
              Duration
            </Text>
          </Box>
          <Box w="50px" h={"36px"}>
            <Text
              w={"19px"}
              h={"20px"}
              fontWeight={"600"}
              lineHeight={"19.6px"}
              color={"#1C4980"}
              fontSize={"14px"}
            >
              00
            </Text>
            <Text
              w={"59px"}
              h={"17px"}
              fontWeight={"500"}
              fontSize={"12px"}
              lineHeight={"16.8px"}
              color={"#1C4980"}
            >
              Questions
            </Text>
          </Box>
        </Flex>

        {/* Share section */}
        <Flex w={"117px"} h="30px" gap={"10px"}>
          <Box
            w={"fit-content"}
            h="30px"
            borderRadius={"50px"}
            border={"1px solid #1C4980"}
            p={"2px 8px 2px 6px"}
            display="flex"
            alignItems="center"
          >
            <BiLinkAlt
              style={{
                color: "#1C4980",
              }}
            />
            <span
              style={{
                marginLeft: "4px",
                color: "#1C4980",
                fontSize: "14px",
                fontWeight: "500",
                lineHeight: "19.6px",
              }}
            >
              Share
            </span>
          </Box>
          <Box display="flex" alignItems="center">
            {BoxArray.map((item) => (
              <Box
                w={"30px"}
                h={"30px"}
                borderRadius={"30px"}
                p={"5px 6px"}
                gap={"10px"}
                bg={item.color}
                marginRight="-15px"
                zIndex={1}
              >
                <Text
                  w={"18px"}
                  h={"17px"}
                  fontSize={"14px"}
                  fontWeight={"700"}
                  lineHeight={"16.94px"}
                  textAlign={"center"}
                  color={"white"}
                  pt={"1px"}
                >
                  {item.text}
                </Text>
              </Box>
            ))}
            {/* <Box
              w={"30px"}
              h={"30px"}
              borderRadius={"30px"}
              p={"5px 6px"}
              gap={"10px"}
              bg={"pink.500"}
              zIndex={0}
            >
              <Text
                w={"18px"}
                h={"17px"}
                fontSize={"14px"}
                fontWeight={"700"}
                lineHeight={"16.94px"}
                textAlign={"center"}
                color={"white"}
                pt={"1px"}
              >
                LP
              </Text>
            </Box> */}
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default MathAssessmentTwo;
