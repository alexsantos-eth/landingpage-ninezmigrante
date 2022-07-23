import React from "react";

import { useParams } from "react-router-dom";

import { Box, Stack, Text, Image, Select } from "@chakra-ui/react";

import MexicoSVG from "../../../../../assets/mexico.svg";

import { year as currentYear } from "../../../../../utils/year";

const Mexico = () => {
  const { countryID } = useParams();
  return (
    <Box width="100%" padding="40px">
      <Stack
        gap="40px"
        width="100%"
        margin="auto"
        direction="row"
        maxWidth="800px"
        alignItems="center"
        justifyContent="center"
      >
        <Stack>
          <Image src={MexicoSVG} height="160px" />
        </Stack>

        <Stack>
          <Text fontFamily="Oswald" fontSize="2xl" lineHeight="1">
            {currentYear}
          </Text>
          <Text fontFamily="Oswald" fontSize="4xl" lineHeight="1">
            REPORTADOS POR MÉXICO
          </Text>

          {/* SELECT YEAR */}
          <Select
            value="default"
            fontSize="2xl"
            lineHeight="1.8"
            fontWeight="600"
            fontFamily="Times"
            letterSpacing="1.2px"
            bgColor="rgba(255,255,255,0.5)"
          >
            <option value="default">Elegir año</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </Select>

          {/* SELECT MONTH */}
          <Select
            value="default"
            fontSize="2xl"
            lineHeight="1.8"
            fontWeight="600"
            fontFamily="Times"
            letterSpacing="1.2px"
            bgColor="rgba(255,255,255,0.5)"
          >
            <option value="default">Elegir mes</option>
            <option value="ene">Enero</option>
            <option value="feb">Febrero</option>
            <option value="mar">Marzo</option>
          </Select>

          <Stack padding="8px" bgColor="#fff" borderRadius="10px">
            <Text fontFamily="Oswald" fontSize="2xl" lineHeight="1">
              Julio 1 500
            </Text>

            {/* GRAPHS */}
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Text>Género</Text>
              <Text>Condición de viaje</Text>
              <Text>Rango etario</Text>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Mexico;
