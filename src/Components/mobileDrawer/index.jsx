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
  Image,
  Text,
} from "@chakra-ui/react";
import SegmentIcon from "@mui/icons-material/Segment";
import assessment from "../../assets/assessment.svg";
import dashboard from "../../assets/dashboard.svg";
import mylibrary from "../../assets/mylibrary.svg";
import roundstatus from "../../assets/roundstatus.svg";
import { useRef } from "react";

const MobileDrawer = ({ isOpen, onOpen, onClose }) => {
  const btnRef = useRef();

  return (
    <>
      <Box ref={btnRef} colorScheme="teal" onClick={onOpen}>
        <SegmentIcon
          sx={{
            transform: "scaleX(-1)",
            fontSize: "40px",
            borderRadius: "50%",
            bgcolor: "#F2F8FE",
            padding: "5px",
          }}
        />
      </Box>
      <Drawer
        bgColor={"#F2F8FE"}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
        size={"xs"}
      >
        <DrawerOverlay />
        <DrawerContent bgColor={"#F2F8FE"}>
          <DrawerCloseButton />
          <DrawerHeader color={"#1C4980"} fontSize={"14px"} fontWeight={"500"}>
            Menu
          </DrawerHeader>

          <DrawerBody>
            <Grid gap="10px" p="5px" fontSize={"13px"} fontWeight={"500"}>
              <Flex p="10px" gap="10px" alignItems="center">
                <Box>
                  {" "}
                  <Image
                    src={dashboard}
                    alt="dashboard"
                    margin={"auto"}
                    width="15px"
                    height="15px"
                  />
                </Box>

                <Text fontSize={"14px "} fontWeight={"500"} color={"#1C4980"}>
                  Dashboard
                </Text>
              </Flex>
              <Flex
                p="10px"
                gap="10px"
                borderRadius={"10px"}
                bgColor="#E5F1FC"
                border="2px solid #4096EC"
                color={"#4096EC"}
                alignItems={"center"}
              >
                <Box>
                  <Image
                    src={assessment}
                    alt="assessment"
                    margin={"auto"}
                    width="15.84px"
                    height="14.83px"
                  />
                </Box>

                <Text fontSize={"14px"} fontWeight={"600"} color={"#0073E6"}>
                  Assessment
                </Text>
              </Flex>

              <Flex p="10px" gap="10px" alignItems="center">
                <Box>
                  <Image
                    src={mylibrary}
                    alt="Mylibrary"
                    margin={"auto"}
                    width="16.57px"
                    height="16.57px"
                  />
                </Box>

                <Text fontSize={"14px "} fontWeight={"500"} color={"#1C4980"}>
                  My Library
                </Text>
              </Flex>
              <Flex
                justifyContent={"space-between"}
                alignItems={"center"}
                borderTop={"1px dashed #E3E5E8"}
              >
                <Flex p="10px" gap="10px">
                  <Image
                    src={roundstatus}
                    alt="Roundstatus"
                    margin={"auto"}
                    width="14px"
                    height="15.5px"
                  />
                  <Text fontSize={"14px "} fontWeight={"500"} color={"#1C4980"}>
                    Round Status
                  </Text>
                </Flex>
                <Box>
                  <Button
                    fontSize={"10px"}
                    w="44px"
                    h="18px"
                    textAlign={"center"}
                    alignItems={"center"}
                    borderRadius={"7px"}
                    border={"1px solid #DF623A"}
                    display={"block"}
                    fontWeight={"500"}
                    color="#DF623A"
                    p="0px 4px"
                    bgColor={"#FBEBEA"}
                    m={"auto"}
                  >
                    Admin
                  </Button>
                </Box>
              </Flex>
            </Grid>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MobileDrawer;
