import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import TotalAssessment from "./assessmentOverviewComponents/totalAssessment";
import CandidatesSection from "./assessmentOverviewComponents/candidatesSection";
import CandidatesSource from "./assessmentOverviewComponents/candidatesSource";
import TotalPurpose from "./assessmentOverviewComponents/totalPurpose";

const AssessmentOverview = () => {
  return (
    <Box w={"1224px"} h={"155px"} gap={"16px"}>
      <Text
        w={"202px"}
        h={"25px"}
        fontSize={"18px"}
        lineHeight={"25.2px"}
        fontWeight={"500"}
        color={"#1C4980"}
        mb={"12px"}
      >
        Assessments Overview
      </Text>
      <Flex w={"1224px"} h={"114px"} border={"1px solid #DADCE0"} borderRadius={'15px'}>
        <TotalAssessment />
        <CandidatesSection />
        <CandidatesSource />
        <TotalPurpose />
      </Flex>
    </Box>
  );
};

export default AssessmentOverview;
