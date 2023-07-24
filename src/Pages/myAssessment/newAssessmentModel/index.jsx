import React from "react";
import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  VStack,
  Input,
  FormLabel,
  Select,
  Text,
  Flex,
  useBreakpointValue,
} from "@chakra-ui/react";
import { RxCross2 } from "react-icons/rx";
const skillsList = [
  "Ui/UX and Designe",
  "No of Question",
  "Web Development",
  "Ui/UX and Designe",
  "Web Development",
];

const NewAssessmentModal = ({ isOpen, onClose }) => {
  const modalWidth = useBreakpointValue({ base: "375px", md: "591px" });

  const renderHeader = () => {
    return (
      <Text
        color="#1C4980"
        fontSize="20px"
        lineHeight="24.2px"
        textAlign="center"
      >
        Create New Assessment
      </Text>
    );
  };

  const renderModalFooter = () => {
    return (
      <Box>
        <Button bg={"#0073E6"} w={"full"} colorScheme="green">
          Save
        </Button>
      </Box>
    );
  };

  const renderFooter = () => {
    if (modalWidth === "375px") {
      // For small screens, return the regular footer (no Chakra UI ModalFooter)
      return renderModalFooter();
    } else {
      // For larger screens, use the Chakra UI ModalFooter
      return <ModalFooter>{renderModalFooter()}</ModalFooter>;
    }
  };

  return (
    <Modal
      isCentered
      onClose={onClose}
      isOpen={isOpen}
      motionPreset="slideInBottom"
      size="xl"
    >
      <ModalOverlay />
      <ModalContent
        w="591px"
        h="616px"
        border="1px"
        borderColor="gray.200"
        padding="20px 30px"
        bg="white"
      >
        <ModalHeader color="#1C4980" fontSize="20px" lineHeight="24.2px">
          Create New Assessment
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing="20px" align="center">
            <Box w="531px" h="79px" gap="10px" textAlign="center">
              <FormLabel gap={"10px"}>
                <Text fontWeight={"500"} fontSize={"16px"} color={"#1C4980"}>
                  Assessment Name
                </Text>
                <Input placeholder="Type here" />
              </FormLabel>
              <FormLabel mt={"10px"}>
                <Text fontWeight={"500"} fontSize={"16px"} color={"#1C4980"}>
                  Purpose of the test is
                </Text>
                <Select placeholder="Select">
                  <option value="Beginner">Learning</option>
                  <option value="Intermediate">Just for pratice</option>
                  <option value="Advanced">For prepration</option>
                </Select>
              </FormLabel>
              <FormLabel mt={"10px"}>
                <Text fontWeight={"500"} fontSize={"16px"} color={"#1C4980"}>
                  Description
                </Text>
                <Select placeholder="Select">
                  <option value="Beginner">Study</option>
                  <option value="Intermediate">Study</option>
                  <option value="Advanced">Study</option>
                </Select>
              </FormLabel>
              <FormLabel mt={"10px"}>
                <Text fontWeight={"500"} fontSize={"16px"} color={"#1C4980"}>
                  Skills
                </Text>
                <Box
                  w={"531px"}
                  h={"102px"}
                  padding={"16px"}
                  gap={"10px"}
                  border={"1px solid #DADCE0"}
                  borderRadius={"8px 8px 0 0"}
                >
                  <Box
                    display={"grid"}
                    gridTemplateColumns={"repeat(3,1fr)"}
                    gap={"10px"}
                  >
                    {skillsList.map((skill, index) => (
                      <Flex
                        key={index}
                        w={"fit-content"}
                        h="30px"
                        borderRadius={"22px"}
                        align="center"
                        p={"6px 8px 6px 10px"}
                        gap={"2px"}
                        bg={"#DDEDFF"}
                      >
                        <Text fontSize={"12px"} fontWeight={"500"} mr={2}>
                          {skill}
                        </Text>
                        <RxCross2 />
                      </Flex>
                    ))}
                  </Box>
                </Box>
              </FormLabel>
              <FormLabel mt={"10px"}>
                <Text fontWeight={"500"} fontSize={"16px"} color={"#1C4980"}>
                  Duration of Assessment
                </Text>
                <Box display="flex" alignItems="center">
                  <Input placeholder="Hours" w="80px" />
                  <Box px="8px">:</Box>
                  <Input placeholder="Minutes" w="80px" />
                  <Box px="8px">:</Box>
                  <Input placeholder="Seconds" w="80px" />
                </Box>
              </FormLabel>
            </Box>
          </VStack>
        </ModalBody>
        <ModalFooter>
          <Button bg={"#0073E6"} w={"full"} colorScheme="green">
            Save
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default NewAssessmentModal;
