import React, { useState, useEffect } from "react";

import { Stack, Select, Image, Text } from "@chakra-ui/react";

import LogoNinezMigrante from "../../../../../../assets/LogoNinezMigrante.png";
import MapaGuatemala from "../../../../../../assets/MapaGuatemala.svg";
import MapaHonduras from "../../../../../../assets/MapaHonduras.svg";

const countryImages = {
  default: {
    src: LogoNinezMigrante,
    height: "200px",
  },
  guatemala: {
    src: MapaGuatemala,
    height: "240px",
  },
  honduras: {
    src: MapaHonduras,
    height: "100%",
  },
};

const Options = ({ id, onChange, satisticsRef }) => {
  const [data, setData] = useState({ country: "", period: "", year: "" });

  const handleChange = (ev) => {
    setData((prevData) => ({ ...prevData, [ev.target.name]: ev.target.value }));
  };

  const handlePeriodChange = (ev) => {
    setData((prevData) => ({ ...prevData, period: ev.target.value }));
    if (id === "2") {
      scrollInto();
    }
  };

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

  useEffect(() => {
    onChange(id, data);
  }, [id, data]);

  return (
    <Stack
      spacing="16px"
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Text fontFamily="Montserrat Medium" fontSize="2xl">
        Data {id}
      </Text>
      {/* SELECT COUNTRY */}
      <Select
        name="country"
        fontSize="2xl"
        lineHeight="1.8"
        fontWeight="600"
        fontFamily="Times"
        letterSpacing="1.2px"
        onChange={handleChange}
        bgColor="rgba(255,255,255,0.5)"
      >
        <option value="default">Elegir país</option>
        <option value="guatemala">Guatemala</option>
        <option value="honduras">Honduras</option>
      </Select>

      {/* SELECT YEAR */}
      <Select
        name="year"
        fontSize="2xl"
        lineHeight="1.8"
        fontWeight="600"
        fontFamily="Times"
        letterSpacing="1.2px"
        onChange={handleChange}
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
        fontSize="2xl"
        lineHeight="1.8"
        fontWeight="600"
        fontFamily="Times"
        letterSpacing="1.2px"
        onChange={handlePeriodChange}
        bgColor="rgba(255,255,255,0.5)"
      >
        <option value="default">Elegir cuatrimestre</option>
        <option value="q1">Enero - Abril</option>
        <option value="q2">Mayo - Agosto</option>
        <option value="q3">Septiembre - Diciembre</option>
      </Select>

      {/* MAP IMAGE */}
      <Stack
        width="300px"
        height="300px"
        alignItems="center"
        justifyContent="center"
      >
        <Image
          src={
            data.country.length > 0
              ? countryImages[data.country || "default"].src
              : LogoNinezMigrante
          }
          width="100%"
          marginTop="24px"
          objectFit="contain"
          height={countryImages[data.country || "default"].height}
        />
      </Stack>
    </Stack>
  );
};

export default Options;
