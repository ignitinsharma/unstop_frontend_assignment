import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { LuLayoutDashboard } from "react-icons/lu";
import { PiNotePencilDuotone } from "react-icons/pi";
import { MdOutlineLibraryAddCheck } from "react-icons/md";

const LinkItems = [
  { name: "Dashboard", icon: LuLayoutDashboard, path: "/" },
  { name: "Assessment", icon: PiNotePencilDuotone, path: "/top-tracks" },
  { name: "My Library", icon: MdOutlineLibraryAddCheck, path: "/favorites" },
];

const Sidebar = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box minH="992px" color="white">
      <SidebarContent
        onClose={onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="xs"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 40 }} p="4">
        {children}
      </Box>
    </Box>
  );
};

const SidebarContent = ({ onClose, ...rest }) => {
  const location = useLocation();
  return (
    <Box
      backgroundColor="#ffffff"
      color="white"
      w={{ base: "full", md: "150px" }}
      pos="fixed"
      h="fit-content"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <CloseButton
          display={{ base: "flex", md: "none" }}
          onClick={onClose}
          color={location.pathname === "/" ? "#0073E6" : "white"}
        />
      </Flex>

      {LinkItems.map((item, index) => (
        <NavLink
          key={index}
          to={item.path}
          style={{
            opacity: "1",
            textDecoration: "none",
            color: location.pathname === item.path ? "#0073E6" : "black",
          }}
        >
          <Box w={"full"} px={8} py={2} mt={1} fontSize="20px">
            <Box
              margin={"auto"}
              borderRadius="10px"
              padding="5px"
              border={
                location.pathname === item.path
                  ? "2px solid #0073E6"
                  : "2px solid white"
              }
              bg={
                location.pathname === item.path
                  ? "rgba(0, 115, 230, 0.2)"
                  : "transparent"
              }
            >
              <Icon
                margin={"auto"}
                as={item.icon}
                style={{
                  width: "15px",
                  height: "15px",
                  opacity: "1",
                  py: "1rem",
                  textDecoration: "none",
                  color: location.pathname === item.path ? "#0073E6" : "black",
                }}
                mr={3}
              />

              <Box>
                <Text fontSize={"12px"}>{item.name}</Text>
              </Box>
            </Box>
          </Box>
        </NavLink>
      ))}
    </Box>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Box
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 12 }}
      height="20"
      alignItems="center"
      pos="sticky"
      top={0}
      justifyContent="flex-start"
      {...rest}
    >
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />
    </Box>
  );
};

export default Sidebar;
