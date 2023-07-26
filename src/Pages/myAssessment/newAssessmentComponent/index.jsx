import { Box, Text, useDisclosure } from "@chakra-ui/react";
import AddItem from "../newAssessmentDrawer";

const NewAssessment = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      w={"388px"}
      h={"209px)"}
      padding={"30px"}
      gap="12px"
      border={"1px solid #DADCE0"}
      borderRadius={"12px"}
      bg={"#F6F8FA"}
      cursor={"pointer"}
      onClick={onOpen}
    >
      <Box w={"150px"} m="auto" h={"102px"} gap={"10px"}>
        <Box w={"70px"} m={"auto"} h={"70px"} gap={"10px"} padding={"10px"}>
          <AddItem isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
        </Box>
        <Text
          w={"150px"}
          h={"22px"}
          fontSize={"18px"}
          lineHeight={"21.78px"}
          fontWeight={"500"}
          color={"#1C4980"}
        >
          New Assessment
        </Text>
      </Box>
      <Text
        m={"auto"}
        textAlign={"center"}
        w={"328px"}
        h={"30px"}
        fontSize={"12px"}
        lineHeight={"14.52px"}
        fontWeight={"500"}
        color={"#1C4980"}
      >
        From here you can add questions of multiple types like MCQs, subjective
        (text or paragraph)!{" "}
      </Text>
    </Box>
  );
};

export default NewAssessment;
