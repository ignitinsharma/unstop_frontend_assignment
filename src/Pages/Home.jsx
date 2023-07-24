import { Box, Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import Sidebar from "../Components/Sidebar";
import TitleSection from "./titleSection";
import { BiMobile } from "react-icons/bi";
import AssessmentOverview from "./assessmentOverviewSection";
import MyAssessmentSection from "./myAssessment";
const Home = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <Box>
      <Flex>
        <Sidebar />
        <Box
          h={{ lg: "734px", base: "auto" }}
          w={{ lg: "1264px", base: "375px" }}
        >
          <TitleSection />
          <Box
            w={{ lg: "1264px", base: "375px" }}
            h={"664px"}
            p={"20px"}
            borderRadius={"0 0 12px 12px"}
          >
            <AssessmentOverview />
            <MyAssessmentSection />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Home;
