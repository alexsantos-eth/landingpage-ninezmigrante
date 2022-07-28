// REACT
import React, { useState, useRef } from "react";
import { useParams } from "react-router-dom";

// CHAKRA UI COMPONENTS
import { Box, Stack, Text, Image, Select, border } from "@chakra-ui/react";

// COMPONENTS
import DownloadImage from "../../../../../components/downloadImage";

// ASSETS
import MapaEEUU from "../../../../../assets/usa.svg";

// HOOKS
import useFetch from "../../../../../hooks/fetch";

// UTILS
import { year } from "../../../../../utils/year";

const excludeFields = [
  "_id",
  "mes",
  "anio",
  "organizacion",
  "pais",
  "totalMes",
  "paisLocal",
  "periodo",
  "granTotal",
  "createdAt",
  "updatedAt",
];

const EEUU = () => {
  const [currentMonth, setCurrentMonth] = useState("");
  const [bordersData, setBordersData] = useState([]);
  const [currentYear, setCurrentYear] = useState("");

  const { countryID } = useParams();
  const containerRef = useRef(null);

  const handleMonth = (ev) => setCurrentMonth(ev.target.value);
  const handleYear = (ev) => setCurrentYear(ev.target.value);

  useFetch({
    url: "/consultas/detenidosenfronteradeestadosunidos/year/estados%20unidos",
    year: currentYear,
    resolve: (data) => setBordersData(data.data),
  });

  const dataPerMonth =
    bordersData?.find(
      (item) =>
        item.mes === currentMonth?.toUpperCase() &&
        item.paisLocal?.toUpperCase() === countryID.toUpperCase()
    ) ?? {};

  const dataPerDeps = Object.entries(dataPerMonth).filter(
    ([key]) => !excludeFields.includes(key)
  );

  return (
    <Box width="100%" padding="40px" ref={containerRef}>
      {/* CONTAINER */}
      <Stack
        gap="24px"
        width="100%"
        margin="auto"
        maxWidth="1000px"
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        {/* SECTION HEADING */}
        <Stack
          width="100%"
          alignItems="center"
          direction={{ base: "column", md: "row" }}
          justifyContent={{ base: "center", md: "space-between" }}
        >
          {/* YEAR AND TITLE */}
          <Stack width={{ base: "100%", md: "50%" }}>
            <Text fontFamily="Oswald" fontSize="2xl" lineHeight="1">
              {currentYear || year}
            </Text>
            <Text
              fontSize="4xl"
              fontFamily="Oswald"
              lineHeight={{ base: "1.2", md: "1" }}
            >
              REPORTADOS POR EE.UU.
            </Text>
            <Text fontFamily="Oswald" fontSize="2xl" lineHeight="1">
              Sólo NO ACOMPAÑADOS
            </Text>
          </Stack>

          {/* YEAR AND PERIOD SELECTS */}
          <Stack
            width={{ base: "100%", md: "50%" }}
            direction={{ base: "column", md: "row" }}
          >
            {/* SELECT YEAR */}
            <Select
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

            {/* SELECT MONTH */}
            <Select
              fontSize="2xl"
              lineHeight="1.8"
              fontWeight="600"
              fontFamily="Times"
              letterSpacing="1.2px"
              onChange={handleMonth}
              bgColor="rgba(255,255,255,0.5)"
              value={currentMonth || ""}
            >
              <option value="">Elegir mes</option>
              <option value="ENERO">Enero</option>
              <option value="FEBRERO">Febrero</option>
              <option value="MARZO">Marzo</option>
              <option value="ABRIL">Abril</option>
              <option value="MAYO">Mayo</option>
              <option value="JUNIO">Junio</option>
              <option value="JULIO">Julio</option>
              <option value="AGOSTO">Agosto</option>
              <option value="SEPTIEMBRE">Septiembre</option>
              <option value="OCTUBRE">Octubre</option>
              <option value="NOVIEMBRE">Noviembre</option>
              <option value="DICIEMBRE">Diciembre</option>
            </Select>
          </Stack>
        </Stack>

        {/* STATISTICS */}
        <Stack
          gap="40px"
          width="100%"
          bgColor="#fff"
          padding="40px 24px"
          borderRadius="12px"
          alignItems="flex-start"
          justifyContent="space-between"
          direction={{ base: "column", md: "row" }}
        >
          {/* COUNTRY MAP */}
          <Stack>
            <Image src={MapaEEUU} minWidth="240px" />
          </Stack>

          {/* TOTAL MONTH DATA */}
          <Stack>
            <Text fontFamily="Oswald" fontSize="3xl" lineHeight="1">
              {currentMonth || "Mes"}
            </Text>
            <Text fontFamily="Oswald" fontSize="6xl" lineHeight="1">
              {dataPerMonth?.totalMes ?? "0"}
            </Text>
          </Stack>

          {/* DATA BY BORDERS */}
          <Stack>
            {dataPerDeps.map(([key, value]) => (
              <Stack
                key={`${key}-${value}`}
                gap="120px"
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <Text fontFamily="Montserrat Medium" fontSize="xl">
                  {key}
                </Text>
                <Text fontFamily="Montserrat Medium" fontSize="xl">
                  {value}
                </Text>
              </Stack>
            ))}
          </Stack>
        </Stack>

        {/* SOURCES */}
        <Stack
          width="100%"
          margin="auto"
          direction="column"
          alignItems="center"
          marginBottom="40px"
          justifyContent="center"
          maxWidth={{ base: "300px", md: "800px" }}
        >
          <Text
            textAlign="center"
            fontFamily="Oswald"
            fontSize={{ base: "xl", md: "2xl" }}
            maxWidth={{ base: "300px", md: "800px" }}
          >
            Fuente: https://www.cbp.gov/newsroom/stats/nationwide-encounters
          </Text>

          <Text
            textAlign="center"
            fontFamily="Montserrat Medium"
            fontSize={{ base: "xs", md: "sm" }}
          >
            Esta información ha sido procesada por: MOBINM, monitoreo binacional
            de niñez migrante Guatemala-Honduras, en el marco del Proyecto
            Binacional Honduras-Guatemala a favor de los derechos de la niñez y
            adolescencia migrante. Implementado por: PAMI y COIPRODEN, con
            fondos de KNH y BMZ.
          </Text>
        </Stack>
        <DownloadImage label="" containerRef={containerRef} />
      </Stack>
    </Box>
  );
};

export default EEUU;
