// REACT
import React from "react";

// ROUTER
import { Link } from "react-router-dom";

// CHAKRA UI
import {
  Box,
  Button,
  Stack,
  HStack,
  Image,
  Heading,
  Text,
  Icon,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";

// ICONS
import { ChevronRightIcon, ChevronDownIcon } from "@chakra-ui/icons";

// COMPONENTS
import MobileNavbar from "./components/mobileNavbar";

// ASSETS
import LogoNinezMigrante from "../../../../assets/LogoNinezMigrante.png";

const Navbar = () => {
  return (
    <Box
      top="0"
      id="menu"
      zIndex="1"
      width="100%"
      position="sticky"
      boxShadow="2px 2px 8px rgba(0, 0, 0, 0.1)"
    >
      {/* HEADER */}
      <Stack
        width="100%"
        as="header"
        direction="row"
        bgColor="blue.700"
        alignItems="center"
        justifyContent={["space-between", "center"]}
        padding={{ base: "16px 24px", md: "24px 40px", lg: "24px 214px" }}
      >
        {/* LOGO */}
        <Link to="/">
          <Image src={LogoNinezMigrante} w={{ base: "64px", md: "124px" }} />
        </Link>

        {/* TITLE AND SUBTITLE */}
        <Stack spacing="16px">
          <Heading
            as="h1"
            size={{ base: "xl", md: "4xl" }}
            color="white"
            fontWeight="400"
            fontFamily="Oswald"
          >
            NiñezMigrante.org
          </Heading>
          <Heading
            as="h2"
            color="white"
            fontWeight="600"
            fontFamily="Times"
            size={{ md: "sm", lg: "md" }}
            display={{ base: "none", md: "block" }}
          >
            Observatorio binacional de niñez migrante retornada -
            Guatemala-Honduras
          </Heading>
        </Stack>

        {/* MOBILE MENU ICON */}
        <MobileNavbar />
      </Stack>

      {/* NAVBAR */}
      <Stack
        as="nav"
        direction="row"
        bgColor="blue.500"
        alignItems="center"
        justifyContent="center"
        display={{ base: "none", md: "flex" }}
        spacing={{ md: "40px", lg: "60px" }}
        padding={{ md: "16px 40px", lg: "16px 60px" }}
      >
        {/* NAVBAR ITEM */}
        <Link to="/observatory">
          <HStack spacing="4px" _hover={{ cursor: "pointer" }}>
            <Icon as={ChevronRightIcon} color="gray.600" />
            <Text fontFamily="Montserrat Medium" color="gray.600">
              Observatorio
            </Text>
          </HStack>
        </Link>

        {/* NAVBAR ITEM */}
        <HStack spacing="4px" _hover={{ cursor: "pointer" }}>
          <Icon as={ChevronRightIcon} color="gray.600" />
          <Menu>
            <MenuButton
              as={Button}
              padding="0px"
              bgColor="transparent"
              _hover={{ bg: "transparent" }}
              _active={{ bg: "transparent" }}
            >
              <Text
                color="gray.600"
                fontWeight="normal"
                fontFamily="Montserrat Medium"
              >
                Datos
              </Text>
            </MenuButton>
            <MenuList bgColor="gray.100" border="none">
              <Link to="/country/guatemala">
                <MenuItem
                  color="gray.600"
                  fontFamily="Montserrat Medium"
                  _hover={{ bgColor: "blue.700", color: "white" }}
                >
                  Guatemala
                </MenuItem>
              </Link>
              <Link to="/country/honduras">
                <MenuItem
                  color="gray.600"
                  fontFamily="Montserrat Medium"
                  _hover={{ bgColor: "blue.700", color: "white" }}
                >
                  Honduras
                </MenuItem>
              </Link>
              <Link to="/compare">
                <MenuItem
                  color="gray.600"
                  fontFamily="Montserrat Medium"
                  _hover={{ bgColor: "blue.700", color: "white" }}
                >
                  Comparar
                </MenuItem>
              </Link>
            </MenuList>
          </Menu>
        </HStack>

        {/* NAVBAR ITEM */}
        <Link to="/organizations">
          <HStack spacing="4px" _hover={{ cursor: "pointer" }}>
            <Icon as={ChevronRightIcon} color="gray.600" />
            <Text fontFamily="Montserrat Medium" color="gray.600">
              Organizaciones
            </Text>
          </HStack>
        </Link>

        {/* NAVBAR ITEM */}
        <Link to="/documentation">
          <HStack spacing="4px" _hover={{ cursor: "pointer" }}>
            <Icon as={ChevronRightIcon} color="gray.600" />
            <Text fontFamily="Montserrat Medium" color="gray.600">
              Documentación
            </Text>
          </HStack>
        </Link>

        {/* NAVBAR ITEM */}
        <Link to="/contact">
          <HStack spacing="4px" _hover={{ cursor: "pointer" }}>
            <Icon as={ChevronRightIcon} color="gray.600" />
            <Text fontFamily="Montserrat Medium" color="gray.600">
              Contacto
            </Text>
          </HStack>
        </Link>
      </Stack>
    </Box>
  );
};

export default Navbar;