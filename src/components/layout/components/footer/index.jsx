// REACT
import React from "react";

// CHAKRA UI
import { Box, Divider, Stack, Text, Image } from "@chakra-ui/react";

import { Link } from "react-router-dom";

// ASSETS
import LogoCoiproden from "../../../../assets/LogoCoiproden.png";
import LogoPAMI from "../../../../assets/LogoPAMI.png";
import LogoKnh from "../../../../assets/LogoKnh.png";
import footer from "../../../../assets/footer.png";

const Footer = () => {
  return (
    <>
      <Box padding="40px 24px 0px 24px">
        {/* CONTAINER */}
        <Stack
          gap="40px"
          padding={{ base: "16px", md: "24px" }}
          direction={{ base: "column", md: "row" }}
          alignItems={{ base: "flex-start", md: "center" }}
          justifyContent={{ base: "flex-start", md: "center" }}
        >
          {/* ITEMS */}
          <Stack
            direction="column"
            spacing="16px"
            alignItems={{ base: "flex-start", md: "flex-end" }}
            justifyContent={{ base: "flex-start", md: "flex-end" }}
          >
            <Link to="/observatory">
              <Text fontFamily="Montserrat Medium" color="gray.600">
                Observatorio
              </Text>
            </Link>

            <Link to="/country/guatemala">
              <Text fontFamily="Montserrat Medium" color="gray.600">
                Guatemala
              </Text>
            </Link>

            <Link to="/country/honduras">
              <Text fontFamily="Montserrat Medium" color="gray.600">
                Honduras
              </Text>
            </Link>

            <Link to="/compare">
              <Text fontFamily="Montserrat Medium" color="gray.600">
                Comparar datos
              </Text>
            </Link>

            <Link to="/organizations">
              <Text fontFamily="Montserrat Medium" color="gray.600">
                Organizaciones
              </Text>
            </Link>

            <Link to="/documentation">
              <Text fontFamily="Montserrat Medium" color="gray.600">
                Documentación
              </Text>
            </Link>

            <Link to="/contact">
              <Text fontFamily="Montserrat Medium" color="gray.600">
                Contacto
              </Text>
            </Link>
          </Stack>

          {/* DIVIDER */}
          <Divider
            height="300px"
            borderWidth="1px"
            orientation="vertical"
            borderColor="yellow.700"
            display={{ base: "none", md: "block" }}
          />

          {/* LOGOS */}
          <Stack
            gap="40px"
            alignItems={{ base: "flex-start", md: "center" }}
            direction={{ base: "column", md: "row" }}
          >
            <Image src={LogoCoiproden} maxHeight="100px" />
            <Image src={LogoPAMI} maxWidth="100px" />
            <Image src={LogoKnh} maxHeight="100px" />
          </Stack>
        </Stack>
      </Box>
      <Stack width="100%">
        <Image src={footer} objectFit="cover" />
      </Stack>
    </>
  );
};

export default Footer;
