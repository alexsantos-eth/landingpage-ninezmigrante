import React from "react";

import { useParams } from "react-router-dom";

import { Box, Stack, Text, Select, Image } from "@chakra-ui/react";

import Guatemala from "../../../.../../../assets/MapaGuatemala.svg";
import Honduras from "../../../.../../../assets/MapaHonduras.svg";
import Mexico from "../../../.../../../assets/mexico.svg";
import EEUU from "../../../.../../../assets/usa.svg";

const Compare = () => {
  const { countryID } = useParams();
  return (
    <Box width="100%" padding="40px" bgColor="#d9e8e8">
      <Stack
        gap="40px"
        width="100%"
        margin="auto"
        direction="column"
        maxWidth="800px"
        alignItems="center"
        justifyContent="center"
      >
        <Stack justifyContent="center" alignItems="center" gap="8px">
          <Text fontFamily="Oswald" fontSize="4xl" lineHeight="1">
            COMPARAR DETENIDOS EN FRONTERA CON RETORNADOS
          </Text>

          {/* SELECT YEAR */}
          <Select
            width="300px"
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

          {/* SELECT PERIOD */}
          <Select
            width="300px"
            value="default"
            fontSize="2xl"
            lineHeight="1.8"
            fontWeight="600"
            fontFamily="Times"
            letterSpacing="1.2px"
            bgColor="rgba(255,255,255,0.5)"
          >
            <option value="default">Elegir cuatrimestre</option>
            <option value="q1">Enero - Abril</option>
            <option value="q2">Mayo - Agosto</option>
            <option value="q3">Septiembre - Diciembre</option>
          </Select>
        </Stack>

        <Stack gap="40px" direction="row">
          <Stack justifyContent="center" alignItems="flex-end">
            <Image src={Guatemala} height="200px" />
            <Text>TOTAL DE RETORNADOS A GUATEMALA</Text>
            <Text>Cuatrimestre 1 - 2022</Text>
            <Text>1 200</Text>
          </Stack>

          <Stack justifyContent="center" alignItems="center">
            <Image src={EEUU} height="120px" />
            <Text>Estados Unidos</Text>
            <Text>Cuatrimestre 1 - 2022</Text>
            <Text>1 200</Text>
          </Stack>

          <Stack justifyContent="center" alignItems="center">
            <Image src={Mexico} height="120px" />
            <Text>México</Text>
            <Text>Cuatrimestre 1 - 2022</Text>
            <Text>1 200</Text>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Compare;
