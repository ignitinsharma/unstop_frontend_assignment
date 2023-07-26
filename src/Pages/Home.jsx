import { Box, Flex, useBreakpointValue } from "@chakra-ui/react";
import AssessmentOverview from "./assessmentOverviewSection";
import MyAssessmentSection from "./myAssessment";
import MobileNavbar from "../Components/mobileNavbar";
import NavbarSection from "../Components/navbarSection";
import SideBar from "../Components/Sidebar";
const Home = () => {
  return (
    <Flex mt={"1rem"} justifyContent="space-between" pr="20px" h="100vh">
      <SideBar />
      <Box
        w={{ base: "100%", md: "90%", lg: "90%" }}
        position="absolute"
        left={{ base: "0", md: "16%", lg: "12%" }}
      >
        <MobileNavbar />
        <NavbarSection />
        <AssessmentOverview />
        <MyAssessmentSection />
      </Box>
    </Flex>
  );
};

export default Home;
