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
        <Box border={"1px solid red"} h="734px" w={"1264px"}>
          <TitleSection />
          <Box
            w={"1264px"}
            h={"664px"}
            p={"20px"}
            borderRadius={"0 0 12px 12px"}
            border={"1px solid black"}
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
