import React, { useState, useRef } from "react";

import { Box, Stack, Text, Select, Image, Divider } from "@chakra-ui/react";

import MapaGuatemala from "../../../.../../../assets/MapaGuatemala.svg";
import MapaHonduras from "../../../.../../../assets/MapaHonduras.svg";

import Mexico from "../../../.../../../assets/mexico.svg";
import EEUU from "../../../.../../../assets/usa.svg";

import useFetch, { quarterId } from "../../../../hooks/fetch";
import { useParams } from "react-router-dom";
import { year } from "../../../../utils/year";
import DownloadImage from "../../../../components/downloadImage";

const Compare = () => {
  const [bordersData, setBordersData] = useState({ mx: [], usa: [] });
  const [currentPeriod, setCurrentPeriod] = useState("");
  const [currentYear, setCurrentYear] = useState(year);
  const [total, setTotal] = useState(0);

  const { countryID } = useParams();

  const containerRef = useRef();

  const handleYear = (ev) => setCurrentYear(ev.target.value);
  const handlePeriod = (ev) => setCurrentPeriod(ev.target.value);

  useFetch({
    url: "/consultas/totalporpaisanioperiodo/country/year/quarter",
    year: currentYear,
    country: countryID,
    period: currentPeriod,
    resolve: (data) => {
      const periodData = data?.data?.[0];
      setTotal(periodData?.totalRegistros ?? 0);
    },
  });

  useFetch({
    url: "/consultas/detenidosenfronteradeestadosunidos/year/estados%20unidos",
    year: currentYear,
    resolve: (data) => setBordersData((prev) => ({ ...prev, usa: data.data })),
  });

  useFetch({
    url: "/consultas/detenidosenfrontera/year/m%C3%A9xico",
    year: currentYear,
    resolve: (data) => setBordersData((prev) => ({ ...prev, mx: data.data })),
  });

  const dataPerPeriod = {
    mx:
      bordersData.mx.find(
        (item) =>
          item.periodo === quarterId[currentPeriod]?.toUpperCase() &&
          item.paisLocal?.toUpperCase() === countryID.toUpperCase()
      )?.granTotal ?? 0,
    usa:
      bordersData.usa.find(
        (item) =>
          item.periodo === quarterId[currentPeriod]?.toUpperCase() &&
          item.paisLocal?.toUpperCase() === countryID.toUpperCase()
      )?.granTotal ?? 0,
  };

  return (
    <Box width="100%" padding="40px" bgColor="#d9e8e8" ref={containerRef}>
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

          <Stack
            width="100%"
            direction="row"
            alignItems="center"
            justifyContent="center"
          >
            {/* SELECT YEAR */}
            <Select
              maxWidth="40%"
              fontSize="2xl"
              lineHeight="1.8"
              fontWeight="600"
              fontFamily="Times"
              onChange={handleYear}
              letterSpacing="1.2px"
              bgColor="rgba(255,255,255,0.5)"
              value={currentYear?.toString() || ""}
            >
              <option value="">Elegir año</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
            </Select>

            {/* SELECT PERIOD */}
            <Select
              maxWidth="40%"
              fontSize="2xl"
              lineHeight="1.8"
              fontWeight="600"
              fontFamily="Times"
              letterSpacing="1.2px"
              value={currentPeriod}
              onChange={handlePeriod}
              bgColor="rgba(255,255,255,0.5)"
            >
              <option value="">Elegir cuatrimestre</option>
              <option value="q1">Enero - Abril</option>
              <option value="q2">Mayo - Agosto</option>
              <option value="q3">Septiembre - Diciembre</option>
            </Select>
          </Stack>
        </Stack>

        <Stack
          gap="40px"
          width="100%"
          direction="row"
          alignItems="center"
          justifyContent="center"
        >
          <Stack justifyContent="center" alignItems="flex-end" maxWidth="210px">
            <Image
              height="200px"
              maxWidth={{ base: "300px", md: "240px" }}
              src={countryID === "guatemala" ? MapaGuatemala : MapaHonduras}
            />
            <Text
              lineHeight="1"
              fontSize="2xl"
              textAlign="right"
              fontFamily="Oswald"
            >
              TOTAL DE RETORNADOS A{" "}
              {countryID === "guatemala" ? "GUATEMALA" : "HONDURAS"}
            </Text>
            <Text
              fontSize="xl"
              lineHeight="1"
              fontWeight="600"
              fontFamily="Times"
            >
              Cuatrimestre {currentPeriod.substring(1)} - {currentYear || "Año"}
            </Text>
            <Text
              lineHeight="1"
              fontSize="4xl"
              textAlign="right"
              fontFamily="Oswald"
            >
              {total}
            </Text>
          </Stack>

          <Stack justifyContent="center" alignItems="center">
            <Image src={EEUU} height="120px" />
            <Text fontFamily="Oswald" fontSize="2xl" lineHeight="1">
              Estados Unidos
            </Text>
            <Text
              fontSize="xl"
              lineHeight="1"
              fontWeight="600"
              fontFamily="Times"
            >
              Cuatrimestre {currentPeriod.substring(1)} - {currentYear || "Año"}
            </Text>
            <Text lineHeight="1" fontSize="4xl" fontFamily="Oswald">
              {dataPerPeriod.usa}
            </Text>
          </Stack>

          <Stack justifyContent="center" alignItems="center" lineHeight="1">
            <Image src={Mexico} height="120px" />
            <Text fontFamily="Oswald" fontSize="2xl">
              México
            </Text>
            <Text
              fontSize="xl"
              lineHeight="1"
              fontWeight="600"
              fontFamily="Times"
            >
              Cuatrimestre {currentPeriod.substring(1)} - {currentYear || "Año"}
            </Text>
            <Text lineHeight="1" fontSize="4xl" fontFamily="Oswald">
              {dataPerPeriod.mx}
            </Text>
          </Stack>
        </Stack>
        <DownloadImage
          label="Descargar imagen de la comparacion"
          containerRef={containerRef}
        />
      </Stack>
    </Box>
  );
};

export default Compare;
