import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Grid,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import AddIcon from "@mui/icons-material/Add";
import { RxCross2 } from "react-icons/rx";
import React, { useRef } from "react";
import { skillsList } from "./Data";
function AddItem({ isOpen, onOpen, onClose }) {
  const btnRef = useRef();

  return (
    <>
      <Button
        ref={btnRef}
        colorScheme="white"
        onClick={onOpen}
        borderRadius="72px"
        w="65px"
        h="65px"
        bgColor="white"
      >
        <AddIcon fontSize="large" style={{ color: "#0073E6" }} />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="bottom"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent
          w={{ lg: "591px", base: "375px" }}
          borderTopRadius={"20px"}
          m="auto"
        >
          <DrawerCloseButton />
          <DrawerHeader borderBottom={"1px solid #E3E5E8"} color="#1C4980">
            Create new assessment
          </DrawerHeader>
          <DrawerBody>
            <Grid
              color="#1C4980"
              fontSize={"18px"}
              fontWeight={"500"}
              textAlign={"left"}
              gap="20px"
            >
              <Box mt="10px">
                <Text>Name of assessment</Text>
                <Input placeholder="Type Here" mt="5px" />
              </Box>
              <Box>
                <Text>Purpose of the test is</Text>
                <Select placeholder="Select" w={{ lg: "531px", base: "345px" }}>
                  <option value="Beginner">Learning</option>
                  <option value="Intermediate">Just for pratice</option>
                  <option value="Advanced">For prepration</option>
                </Select>
              </Box>
              <Box>
                <Text>Description</Text>
                <Select w={{ lg: "531px", base: "345px" }} placeholder="Select">
                  <option value="Beginner">Study</option>
                  <option value="Intermediate">Study</option>
                  <option value="Advanced">Study</option>
                </Select>
              </Box>
              <Box>
                <Text>Skills</Text>
                <Grid
                  display={"grid"}
                  w={{ lg: "531px", base: "345px" }}
                  gridTemplateColumns={{
                    lg: "repeat(3,1fr)",
                    base: "repeat(2,1fr)",
                  }}
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
                </Grid>
                <Input mt="-1px" placeholder="Type Here" />
              </Box>
              <Box mt="10px">
                <Text>Duration of assessment</Text>
                <Input placeholder="Type Here" type="time" mt="5px" />
              </Box>
            </Grid>
          </DrawerBody>

          <Button
            bgColor="#0073E6"
            color="white"
            m="auto"
            display={"block"}
            w="92%"
            mt="20px"
            mb="20px"
          >
            Next
          </Button>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default AddItem;
