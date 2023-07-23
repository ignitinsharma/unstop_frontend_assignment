import { Box, Flex, Image, Text } from "@chakra-ui/react";
import web_browser from "../../../../assets/web_browser.jpg";

const CandidatesSource = () => {
  return (
    <Box
      w={"499px"}
      h={"114px"}
      p={"16px 20px"}
      gap={"16px"}
      borderRight={"1px solid #DADCE0"}
    >
      <Text
        w={"129px"}
        h={"20px"}
        fontSize={"14px"}
        lineHeight={"19.6px"}
        fontWeight={"600"}
        color={"#1C4980"}
      >
        Candidates Source
      </Text>
      <Flex
        w={"373px"}
        justifyContent={"space-between"}
        h={"46px"}
        gap={"20px"}
        alignItems={"center"}
        pt={"20px"}
      >
        <Flex
          w={"40px"}
          h={"40px"}
          bg={"#FCE8EF"}
          borderRadius={"8px"}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box w={"20px"} h={"20px"}>
            <Image src={web_browser} />
          </Box>

          {/* Number section  */}
        </Flex>

        {/* Email */}
        <Box w={"94px"} h="46px" gap={"1px"}>
          <Flex w={"88px"} h={"28px"} gap={"4px"} alignItems={"center"}>
            <Text
              w="66px"
              h={"28px"}
              fontWeight={"700"}
              fontSize={"20px"}
              lineHeight={"28px"}
              color={"#1C4980"}
            >
              11,000
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
            E-mail
          </Text>
        </Box>

        {/* Social share */}
        <Box w={"71px"} h="46px" gap={"1px"}>
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

        {/* Unique link */}
        <Box w={"68px"} h="46px" gap={"1px"}>
          <Flex w={"88px"} h={"28px"} gap={"4px"} alignItems={"center"}>
            <Text
              w="66px"
              h={"28px"}
              fontWeight={"700"}
              fontSize={"20px"}
              lineHeight={"28px"}
              color={"#1C4980"}
            >
              145
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
            Unique Link
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default CandidatesSource;
