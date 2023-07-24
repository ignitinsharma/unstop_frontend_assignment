import { Box, Text, useBreakpointValue } from "@chakra-ui/react";
import NewAssessment from "./newAssessmentComponent";
import MathAssessment from "./mathAssessment";
import MathAssessmentTwo from "./mathAssessmentTwo";

const MyAssessmentSection = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <Box
      w={{ lg: "1224px", base: "375px" }}
      h={{ lg: "445px", base: "auto" }}
      gap={"16px"}
    >
      <Box
        w={{ lg: "1224px", base: "375px" }}
        h={{ lg: "40px", base: "auto" }}
        pt={"20px"}
      >
        {isMobile ? null : (
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
        )}
      </Box>

      {/* New assignment section */}
      <Box
        mt={"1rem"}
        w={{ md: "1224px", base: "375px" }}
        h={"209px)"}
        gap={"30px"}
        display={"grid"}
        gridTemplateColumns={{ md: "repeat(3,1fr)", base: '"repeat(1,1fr)"' }}
      >
        <NewAssessment />
        <MathAssessment />
        <MathAssessmentTwo />
      </Box>
    </Box>
  );
};

export default MyAssessmentSection;
