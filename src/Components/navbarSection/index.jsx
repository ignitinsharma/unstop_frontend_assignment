import {
  Box,
  Flex,
  Text,
  useBreakpointValue,
  useMediaQuery,
} from "@chakra-ui/react";
import SmartphoneIcon from "@mui/icons-material/Smartphone";

const NavbarSection = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  const firstTextToShow = isMobile ? "Unstop Assessments" : "My Assessment";
  const secondTextToShowAssessment = isMobile
    ? "My Assessments"
    : "Assessments";
  return (
    <Flex
      w={{ lg: "1224px", base: "375px" }}
      h="70px"
      bgColor="white"
      justifyContent={"space-between"}
      gap={"10px"}
      borderBottom={"2px solid #E3E5E8"}
      borderTopRadius={{ base: "0px", md: "15px", lg: "15px" }}
      alignItems={"center"}
    >
      <Flex
        pl={{ base: "10px", lg: "0" }}
        justifyContent={{ base: "space-between", lg: "flex-start" }}
        alignItems={"center"}
        w={{ base: "100%" }}
      >
        <Box
          fontSize={{ base: "19px", md: "20px" }}
          fontWeight={{ base: "500", md: "bold" }}
          p={{ base: "20px 14px", md: "5px 20px 5px 1px" }}
          alignItems={"center"}
          font-family="Inter"
          borderRight={{ base: "none", md: "2px solid #E3E5E8" }}
          borderBottom={{ base: "3px solid #0073E6", md: "none" }}
        >
          <Text
            color={{
              base: "#0073E6",
              md: "#1C4980",
            }}
            margin={"auto"}
            fontWeight={{ base: "500", lg: "600" }}
            fontSize={{ base: "14px", lg: "20px" }}
            lineHeight={"28px"}
          >
            {secondTextToShowAssessment}
          </Text>
        </Box>
        <Box
          fontSize={{ base: "19px", md: "16px" }}
          fontWeight={{ base: "500", md: "bold" }}
          font-family="Inter"
          p={{ base: "2px 12px", md: "5px 20px" }}
          alignContent={"center"}
          color={"#0073E6"}
        >
          <Text
            borderBottom={{ base: "", lg: "3px solid #0073E6" }}
            py={"10px"}
            fontWeight={{ base: "500", lg: "600" }}
            fontSize={"14px"}
            lineHeight={"16.94px"}
            color={{
              base: "#3E6493",
              md: "#0073E6",
            }}
            margin={"auto"}
          >
            {firstTextToShow}
          </Text>
        </Box>
      </Flex>
      <Box
        display={{ base: "none", md: "block", lg: "block" }}
        w={"40px"}
        h={"40px"}
        padding={"10px"}
        gap={"10px"}
      >
        {" "}
        <SmartphoneIcon
          sx={{ width: "23px", height: "24px", color: "#1C4980" }}
        />
      </Box>
    </Flex>
  );
};
export default NavbarSection;
