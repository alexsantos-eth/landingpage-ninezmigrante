// REACT
import React, { useState, useRef } from "react";
import { useParams } from "react-router-dom";

// CHAKRA UI COMPONENTS
import { Box, Stack, Text, Select, Image, Divider } from "@chakra-ui/react";

// COMPONENTS
import DownloadImage from "../../../../components/downloadImage";
import MonthPicker from "../../../../components/monthPicker";
import YearSelect from "../../../../components/yearSelect";

// ASSETS
import MapaHonduras from "../../../.../../../assets/MapaHonduras.svg";
import MapaMexico from "../../../../assets/MapaMexico.png";
import MapaEEUU from "../../../../assets/MapaEEUU.png";
import MapaGuatemala from "../../../../assets/MapaGuatemala.png";

// HOOKS
import useFetch, { monthNames } from "../../../../hooks/fetch";

// UTILS
import { year } from "../../../../utils/year";

const Compare = () => {
  const [bordersData, setBordersData] = useState({ mx: [], usa: [] });
  const [currentPeriod, setCurrentPeriod] = useState([1, 1]);
  const [currentYear, setCurrentYear] = useState(year);
  const [total, setTotal] = useState(0);

  const { countryID } = useParams();

  const containerRef = useRef();

  const handleYear = (ev) => setCurrentYear(ev.target.value);

  useFetch({
    url: "/consultas/totalporpaisanioperiodo/country?anio=year&periodRange",
    year: currentYear,
    country: countryID,
    periodStart: currentPeriod[0],
    periodEnd: currentPeriod[1],
    resolve: (data) => {
      const total = data?.data?.reduce(
        (acc, item) => acc + (item?.total ?? 0),
        0
      );
      setTotal(total);
    },
  });

  useFetch({
    url: "/consultas/detenidosenfronteradeestadosunidos/year/estados%20unidos",
    year: currentYear,
    resolve: (data) => {
      setBordersData((prev) => ({ ...prev, usa: data.data }));
    },
  });

  useFetch({
    url: "/consultas/detenidosenfrontera/year/m%C3%A9xico",
    year: currentYear,
    resolve: (data) => setBordersData((prev) => ({ ...prev, mx: data.data })),
  });

  const dataPerPeriod = {
    mx: bordersData.mx
      .filter((item) => {
        const monthIndex = monthNames.indexOf(item.mes);
        return (
          monthIndex >= currentPeriod[0] &&
          monthIndex <= currentPeriod[1] &&
          item.paisLocal?.toUpperCase() === countryID.toUpperCase()
        );
      })
      .reduce((acc, item) => acc + item.totalMes, 0),
    usa: bordersData.usa
      .filter((item) => {
        const monthIndex = monthNames.indexOf(item.mes);
        return (
          monthIndex >= currentPeriod[0] &&
          monthIndex <= currentPeriod[1] &&
          item.paisLocal?.toUpperCase() === countryID.toUpperCase()
        );
      })
      .reduce((acc, item) => acc + item.totalMes, 0),
  };

  return (
    <Box width="100%" bgColor="#d9e8e8" padding="40px 40px 80px 40px">
      <Stack
        width="100%"
        margin="auto"
        spacing="40px"
        maxWidth="800px"
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Divider
          width="100%"
          borderWidth="1px"
          borderColor="black"
          orientation="horizontal"
          display={{ base: "none", md: "block" }}
        />

        <Stack justifyContent="center" alignItems="center" gap="8px">
          <Text
            lineHeight="1"
            fontSize="4xl"
            textAlign="center"
            fontFamily="Oswald"
          >
            COMPARAR DETENIDOS EN FRONTERA CON RETORNADOS
          </Text>

          <Stack
            width="100%"
            alignItems="center"
            justifyContent="center"
            direction={{ base: "column", md: "row" }}
          >
            {/* SELECT YEAR */}
            <YearSelect currentYear={currentYear} handleYear={handleYear} />

            {/* SELECT PERIOD */}
            <MonthPicker onAccept={setCurrentPeriod} />
          </Stack>
        </Stack>

        <Box padding="40px" ref={containerRef}>
          <Stack
            gap="24px"
            width="100%"
            justifyContent="center"
            direction={{ base: "column", md: "row" }}
            alignItems={{ base: "center", md: "flex-end" }}
          >
            <Stack
              maxWidth="210px"
              justifyContent="center"
              alignItems={{ base: "center", md: "flex-end" }}
            >
              <Image
                height="200px"
                maxWidth={{ base: "300px", md: "240px" }}
                src={countryID === "guatemala" ? MapaGuatemala : MapaHonduras}
              />
              <Text
                fontSize="2xl"
                lineHeight="1"
                fontFamily="Oswald"
                textAlign={{ base: "center", md: "right" }}
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
                {currentYear || "Año"}
              </Text>
              <Text
                lineHeight="1"
                textAlign="right"
                fontFamily="Oswald"
                fontSize={{ base: "4xl", md: "6xl" }}
              >
                {total}
              </Text>
            </Stack>

            {/* DIVIDER */}
            <Divider
              height="400px"
              borderWidth="1px"
              orientation="vertical"
              borderColor="#000"
              display={{ base: "none", md: "block" }}
            />

            <Stack
              justifyContent="center"
              alignItems="center"
              maxWidth="300px"
              spacing="16px"
            >
              <Text textAlign="center">
                * Sólo se reportan niños, niñas y adolescentes NO ACOMPAÑADOS
              </Text>
              <Image src={MapaEEUU} height="120px" />
              <Text fontFamily="Oswald" fontSize="2xl" lineHeight="1">
                Estados Unidos
              </Text>
              <Text
                fontSize="xl"
                lineHeight="1"
                fontWeight="600"
                fontFamily="Times"
              >
                {currentYear || "Año"}
              </Text>
              <Text
                lineHeight="1"
                fontFamily="Oswald"
                fontSize={{ base: "4xl", md: "6xl" }}
              >
                {dataPerPeriod.usa}
              </Text>
            </Stack>

            <Stack justifyContent="center" alignItems="center" lineHeight="1">
              <Image src={MapaMexico} height="120px" />
              <Text fontFamily="Oswald" fontSize="2xl">
                México
              </Text>
              <Text
                fontSize="xl"
                lineHeight="1"
                fontWeight="600"
                fontFamily="Times"
              >
                {currentYear || "Año"}
              </Text>
              <Text
                lineHeight="1"
                fontFamily="Oswald"
                fontSize={{ base: "4xl", md: "6xl" }}
              >
                {dataPerPeriod.mx}
              </Text>
            </Stack>
          </Stack>
          <Stack
            width="100%"
            margin="auto"
            direction="column"
            alignItems="center"
            marginBottom="40px"
            paddingTop="40px"
            justifyContent="center"
            maxWidth={{ base: "300px", md: "800px" }}
          >
            <Text
              textAlign="center"
              fontFamily="Oswald"
              fontSize={{ base: "xl", md: "2xl" }}
              maxWidth={{ base: "300px", md: "800px" }}
            >
              Fuente:
              http://www.politicamigratoria.gob.mx/es/PoliticaMigratoria/Boletines_Estadisticos
            </Text>

            <Text
              textAlign="center"
              fontFamily="Montserrat Medium"
              fontSize={{ base: "xs", md: "sm" }}
            >
              Esta información ha sido procesada por: MOBINM, monitoreo
              binacional de niñez migrante Guatemala-Honduras, en el marco del
              Proyecto Binacional Honduras-Guatemala a favor de los derechos de
              la niñez y adolescencia migrante. Implementado por: PAMI y
              COIPRODEN, con fondos de KNH y BMZ.
            </Text>
          </Stack>
          <DownloadImage
            label="Descargar imagen de la comparación"
            containerRef={containerRef}
          />
        </Box>
      </Stack>
    </Box>
  );
};

export default Compare;
