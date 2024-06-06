import React from "react";
import { useParams } from "react-router-dom";

import { Box, Stack, Text, Image } from "@chakra-ui/react";

import MapaGuatemala from "../../../../assets/MapaGuatemala.svg";
import MapaHonduras from "../../../../assets/MapaHonduras.svg";
import getCountryContent from "../../../../utils/country";

const Header = () => {
  const { countryID } = useParams();

  return (
    <Box
      height="100%"
      bgColor="blue.500"
      padding={{ base: "40px 24px", md: "80px 40px" }}
    >
      {/* CONTAINER */}
      <Stack
        width="100%"
        height="100%"
        margin="auto"
        maxWidth="800px"
        alignItems="center"
        justifyContent="center"
        gap={{ base: "16px", md: "8px" }}
        direction={{ base: "column", md: "row" }}
      >
        {/* COUNTRY MAP */}
        <Image
          height="200px"
          maxWidth={{ base: "300px", md: "280px" }}
          src={getCountryContent({
            countryID,
            content: { guatemala: MapaGuatemala, honduras: MapaHonduras },
          })}
        />
        <Stack
          direction="column"
          spacing="8px"
          alignItems={{ base: "center", md: "flex-start" }}
          justifyContent="center"
        >
          {/* TITLE */}
          <Text
            lineHeight="1"
            color="gray.700"
            fontFamily="Oswald"
            fontSize={{ base: "4xl", md: "5em" }}
          >
            {getCountryContent({ countryID, capitalize: true }).toUpperCase()}
          </Text>
          <Text
            lineHeight="1"
            color="gray.700"
            fontFamily="Times"
            fontSize={{ base: "xl", md: "3xl" }}
            textAlign={{ base: "center", md: "left" }}
          >
            Niñez y adolescencia migrante detenida en fronteras de Estados
            Unidos y México
          </Text>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Header;
