import { Box, Flex, Text } from "@chakra-ui/react";
import { IoMdLink } from "react-icons/io";

const TotalPurpose = () => {
  return (
    <Box w={"162px"} h={"114px"} p={"16px 20px"} gap={"16px"}>
      <Text
        w={"94px"}
        h={"20px"}
        fontSize={"14px"}
        lineHeight={"19.6px"}
        fontWeight={"600"}
        color={"#1C4980"}
      >
        Total Purpose{" "}
      </Text>
      <Flex
        w={"77px"}
        h={"40px"}
        gap={"10px"}
        alignItems={"center"}
        pt={"20px"}
      >
        <Box w={"40px"} h={"40px"} bg={"#E5F1FC"} borderRadius={"8px"}>
          <Box w={"20px"} h={"20px"} top={"10px"} left={"10px"}>
            <IoMdLink
              style={{
                position: "relative",
                width: "17.01px",
                height: "18.67px",
                top: "10.66px",
                left: "11.5px",
                color: "#0073E6",
              }}
            />
          </Box>
        </Box>
        <Text
          w={"20px"}
          h={"28px"}
          fontWeight={"700"}
          lineHeight={"28px"}
          fontSize={"20px"}
          color={"#1C4980"}
        >
          11
        </Text>
      </Flex>
    </Box>
  );
};

export default TotalPurpose;
