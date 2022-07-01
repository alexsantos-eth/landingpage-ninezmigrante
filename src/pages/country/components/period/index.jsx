import React from "react";
import { useParams } from "react-router-dom";

import { Box, Stack, Text, Select, Image } from "@chakra-ui/react";

import MapaGuatemala from "../../../../assets/MapaGuatemala.svg";
import MapaHonduras from "../../../../assets/MapaHonduras.svg";

const Period = ({ period, setPeriod, year, setYear, satisticsRef }) => {
  const { countryID } = useParams();

  const scrollInto = () => {
    if (satisticsRef.current) {
      const navbar = document.getElementById("menu").clientHeight;
      const y =
        satisticsRef.current.getBoundingClientRect().top + window.scrollY;
      window.scroll({
        top: y - navbar,
        behavior: "smooth",
      });
    }
  };

  // PERIOD
  const handlePeriod = (ev) => {
    setPeriod(ev.target.value);
    scrollInto();
  };

  // YEAR
  const handleYear = (ev) => {
    setYear(ev.target.value);
  };

  return (
    <Box
      height="80vh"
      bgColor="blue.500"
      padding={{ base: "40px 24px", md: "80px 40px" }}
    >
      {/* CONTAINER */}
      <Stack
        height="100%"
        alignItems="center"
        justifyContent="center"
        gap={{ base: "24px", md: "40px" }}
        direction={{ base: "column", md: "row" }}
      >
        <Stack direction="column">
          {/* TITLE */}
          <Text
            color="red.700"
            fontFamily="Oswald"
            fontSize={{ base: "4xl", md: "6xl" }}
          >
            {countryID === "guatemala" ? "Guatemala" : "Honduras"}
          </Text>

          {/* SELECT PERIOD */}
          <Select
            value={year || "default"}
            fontSize="2xl"
            lineHeight="1.8"
            fontWeight="600"
            fontFamily="Times"
            letterSpacing="1.2px"
            onChange={handleYear}
            bgColor="rgba(255,255,255,0.5)"
          >
            <option value="default">Elegir año</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </Select>

          {/* SELECT PERIOD */}
          <Select
            value={period || "default"}
            fontSize="2xl"
            lineHeight="1.8"
            fontWeight="600"
            fontFamily="Times"
            letterSpacing="1.2px"
            onChange={handlePeriod}
            bgColor="rgba(255,255,255,0.5)"
          >
            <option value="default">Elegir cuatrimestre</option>
            <option value="q1">Enero - Abril</option>
            <option value="q2">Mayo - Agosto</option>
            <option value="q3">Septiembre - Diciembre</option>
          </Select>
        </Stack>

        {/* COUNTRY MAP */}
        <Image
          height="400px"
          maxWidth={{ base: "300px", md: "400px" }}
          src={countryID === "guatemala" ? MapaGuatemala : MapaHonduras}
        />
      </Stack>
    </Box>
  );
};

export default Period;
