// REACT
import React from "react";

// CHAKRA UI COMONENTS
import { Box, Stack, Text, Select } from "@chakra-ui/react";

const Header = ({ returns, handleChange }) => {
  return (
    <Box width="100%" padding="40px">
      {/* CONTAINER */}
      <Stack
        margin="auto"
        maxWidth="800px"
        direction="row"
        alignItems={{ base: "flex-start", md: "center" }}
        justifyContent={{ base: "flex-start", md: "center" }}
      >
        {/* NUMBER */}
        <Stack>
          <Text
            lineHeight="1"
            fontFamily="Oswald"
            fontSize={{ base: "4em", md: "8em" }}
          >
            3
          </Text>
        </Stack>

        {/* TITLE AND SELECTS */}
        <Stack spacing="16px">
          <Text
            fontFamily="Oswald"
            fontSize={{ base: "2xl", md: "4xl" }}
            lineHeight={{ base: "1.4", md: "1" }}
          >
            DEPARTAMENTOS CON MÁS O MENOS RETORNADOS
          </Text>

          <Stack
            alignItems="center"
            justifyContent="space-between"
            direction={{ base: "column", md: "row" }}
          >
            {/* SELECT YEAR */}
            <Select
              name="year"
              onChange={handleChange}
              value={returns.year || "default"}
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
              name="period"
              onChange={handleChange}
              value={returns.period || "default"}
              fontSize="2xl"
              lineHeight="1.8"
              fontWeight="600"
              fontFamily="Times"
              letterSpacing="1.2px"
              bgColor="rgba(255,255,255,0.5)"
            >
              <option value="default">Elegir período</option>
              <option value="q1">Enero - Abril</option>
              <option value="q2">Mayo - Agosto</option>
              <option value="q3">Septiembre - Diciembre</option>
            </Select>

            {/* SELECT LIST */}
            <Select
              name="list"
              onChange={handleChange}
              value={returns.list || "default"}
              fontSize="2xl"
              lineHeight="1.8"
              fontWeight="600"
              fontFamily="Times"
              letterSpacing="1.2px"
              bgColor="rgba(255,255,255,0.5)"
            >
              <option value="default">Elegir lista</option>
              <option value="asc">Más retornados</option>
              <option value="desc">Menos retornados</option>
            </Select>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Header;
