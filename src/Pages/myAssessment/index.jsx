import { Box, Text } from "@chakra-ui/react";
import NewAssessment from "./newAssessmentComponent";
import MathAssessment from "./mathAssessment";

const MyAssessmentSection = () => {
  return (
    <Box w={"1224px"} h={"445px"} gap={"16px"}>
      <Box w={"1224px"} h={"40px"} pt={"20px"}>
        <Text
          w="137px"
          h={"25px"}
          fontSize={"18px"}
          lineHeight={"25.2px"}
          fontWeight={"500"}
          color={"#1C4980"}
        >
          My Assessment
        </Text>
      </Box>

      {/* New assignment section */}
      <Box
        mt={"1rem"}
        w={"1224px"}
        h={"209px)"}
        gap={"30px"}
        display={"grid"}
        gridTemplateColumns={"repeat(3,1fr)"}
      >
        <NewAssessment />
        <MathAssessment />
        <MathAssessment />
      </Box>
    </Box>
  );
};

export default MyAssessmentSection;
