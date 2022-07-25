import React, { useState } from "react";

import { Box, Stack, Text, Select, Image } from "@chakra-ui/react";

import Guatemala from "../../../.../../../assets/MapaGuatemala.svg";
import Mexico from "../../../.../../../assets/mexico.svg";
import EEUU from "../../../.../../../assets/usa.svg";
import useFetch, { quarterId } from "../../../../hooks/fetch";
import { useParams } from "react-router-dom";
import { year } from "../../../../utils/year";

const Compare = () => {
  const [bordersData, setBordersData] = useState({ mx: [], usa: [] });
  const [currentPeriod, setCurrentPeriod] = useState("");
  const [currentYear, setCurrentYear] = useState(year);
  const [total, setTotal] = useState(0);

  const { countryID } = useParams();

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

        <Stack gap="40px" direction="row">
          <Stack justifyContent="center" alignItems="flex-end">
            <Image src={Guatemala} height="200px" />
            <Text>TOTAL DE RETORNADOS A GUATEMALA</Text>
            <Text>
              Cuatrimestre {currentPeriod.substring(1)} - {currentYear || "Año"}
            </Text>
            <Text>{total}</Text>
          </Stack>

          <Stack justifyContent="center" alignItems="center">
            <Image src={EEUU} height="120px" />
            <Text>Estados Unidos</Text>
            <Text>
              Cuatrimestre {currentPeriod.substring(1)} - {currentYear || "Año"}
            </Text>
            <Text>{dataPerPeriod.usa}</Text>
          </Stack>

          <Stack justifyContent="center" alignItems="center">
            <Image src={Mexico} height="120px" />
            <Text>México</Text>
            <Text>
              Cuatrimestre {currentPeriod.substring(1)} - {currentYear || "Año"}
            </Text>
            <Text>{dataPerPeriod.mx}</Text>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Compare;
