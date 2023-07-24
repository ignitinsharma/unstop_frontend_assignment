import { Box, Button, Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import React, { useState } from "react";
import TotalAssessment from "./assessmentOverviewComponents/totalAssessment";
import CandidatesSection from "./assessmentOverviewComponents/candidatesSection";
import CandidatesSource from "./assessmentOverviewComponents/candidatesSource";
import TotalPurpose from "./assessmentOverviewComponents/totalPurpose";
import { BiSearchAlt2, BiSolidBarChartAlt2 } from "react-icons/bi";
import { MdFilterAlt } from "react-icons/md";

const AssessmentOverview = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const [showContent, setShowContent] = useState(false);

  const handleButtonClick = () => {
    setShowContent((prevShowContent) => !prevShowContent);
  };

  const marginBottomValue = showContent ? { base: "20rem" } : 0;

  return (
    <Box
      w={{ md: "1224px", base: "375px" }}
      mb={marginBottomValue}
      h={"155px"}
      gap={"16px"}
    >
      <Flex justifyContent="space-between" alignItems="center">
        {isMobile ? null : (
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
        )}

        {isMobile && (
          <Flex
            w={"375px"}
            alignItems="center"
            justifyContent={"space-between"}
          >
            <Text
              w={"202px"}
              h={"25px"}
              fontSize={"18px"}
              lineHeight={"25.2px"}
              fontWeight={"500"}
              color={"#1C4980"}
              mb={"12px"}
            >
              My Assessment
            </Text>
            <Flex alignItems={"center"} w={"128px"} h={"40px"} gap={"4px"}>
              <Box
                w={"40px"}
                h={"40px"}
                borderRadius={"50px"}
                padding={"4px"}
                gap={"10px"}
              >
                <BiSearchAlt2
                  style={{
                    width: "16.03px",
                    height: "16.03px",
                    top: "2.75px",
                    left: "2.75px",
                    color: "#1C4980",
                  }}
                />
              </Box>
              <Box
                w={"40px"}
                h={"40px"}
                borderRadius={"50px"}
                padding={"4px"}
                gap={"10px"}
              >
                <MdFilterAlt
                  style={{
                    width: "16.03px",
                    height: "16.03px",
                    top: "2.75px",
                    left: "2.75px",
                    color: "#1C4980",
                  }}
                />
              </Box>
              <Box
                w={"40px"}
                h={"40px"}
                borderRadius={"50px"}
                padding={"4px"}
                gap={"10px"}
              >
                <BiSolidBarChartAlt2
                  style={{
                    width: "16.03px",
                    height: "16.03px",
                    top: "2.75px",
                    left: "2.75px",
                    color: "#1C4980",
                  }}
                  onClick={handleButtonClick}
                  ml="1rem"
                />
              </Box>
            </Flex>
          </Flex>
        )}
      </Flex>
      {isMobile && showContent && (
        <Flex
          mb={"10rem"}
          w={{ md: "1224px", base: "375px" }}
          h={"114px"}
          border={"1px solid #DADCE0"}
          borderRadius={"15px"}
          display={{ base: "block", md: "flex" }}
        >
          <TotalAssessment />
          <CandidatesSection />
          <CandidatesSource />
          <TotalPurpose />
        </Flex>
      )}
      {!isMobile && (
        <Flex
          mb={"10rem"}
          // w={"1224px"}
          w={{ md: "1224px", base: "375px" }}
          h={"114px"}
          border={"1px solid #DADCE0"}
          borderRadius={"15px"}
        >
          <TotalAssessment />
          <CandidatesSection />
          <CandidatesSource />
          <TotalPurpose />
        </Flex>
      )}
    </Box>
  );
};

export default AssessmentOverview;
