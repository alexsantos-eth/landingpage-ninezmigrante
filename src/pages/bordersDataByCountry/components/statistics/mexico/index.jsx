import React, { useState } from "react";

import { Box, Stack, Text, Image, Select } from "@chakra-ui/react";

import MexicoSVG from "../../../../../assets/mexico.svg";
import useFetch from "../../../../../hooks/fetch";

import Gender from "../../../../../pages/country/components/statistics/components/gender";
import AgeRanges from "../../../../../pages/country/components/statistics/components/ageRanges";
import TravelCondition from "../../../../../pages/country/components/statistics/components/travelCondition";
import { useParams } from "react-router-dom";

const Mexico = () => {
  const [currentMonth, setCurrentMonth] = useState("");
  const [currentYear, setCurrentYear] = useState("");
  const [bordersData, setBordersData] = useState([]);

  const { countryID } = useParams();

  const handleMonth = (ev) => setCurrentMonth(ev.target.value);
  const handleYear = (ev) => setCurrentYear(ev.target.value);

  // OBTENER DATOS
  useFetch({
    url: "/consultas/detenidosenfrontera/year/m%C3%A9xico",
    year: currentYear,
    resolve: (data) => setBordersData(data.data),
  });

  const dataPerMonth =
    bordersData?.find(
      (item) =>
        item.mes === currentMonth?.toUpperCase() &&
        item.paisLocal?.toUpperCase() === countryID.toUpperCase()
    ) ?? {};

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
          <Image src={MexicoSVG} width="360px" />
        </Stack>

        <Stack>
          <Text fontFamily="Oswald" fontSize="2xl" lineHeight="1">
            {currentYear || "Año"}
          </Text>
          <Text fontFamily="Oswald" fontSize="4xl" lineHeight="1">
            REPORTADOS POR MÉXICO
          </Text>

          <Stack direction="row">
            {/* SELECT YEAR */}
            <Select
              fontSize="2xl"
              lineHeight="1.8"
              fontWeight="600"
              fontFamily="Times"
              letterSpacing="1.2px"
              onChange={handleYear}
              bgColor="rgba(255,255,255,0.5)"
              value={currentYear?.toString() || "default"}
            >
              <option value="default">Elegir año</option>
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
              value={currentMonth || "default"}
            >
              <option value="default">Elegir mes</option>
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

          <Stack
            width="100%"
            padding="24px"
            bgColor="#fff"
            maxWidth="380px"
            borderRadius="12px"
          >
            <Text
              fontSize="3xl"
              lineHeight="1"
              fontFamily="Oswald"
              marginBottom="24px"
            >
              {currentMonth || "Mes"} {dataPerMonth?.totalMes ?? "0"}
            </Text>

            {/* GRAPHS */}
            <Stack
              gap="24px"
              margin="auto"
              direction="column"
              alignItems="center"
              justifyContent="space-between"
              marginBottom={{ base: "40px", md: "60px" }}
            >
              <Gender
                period={"enero - abril"}
                year={"2020"}
                defData={{
                  female: dataPerMonth?.femenino,
                  male: dataPerMonth?.masculino,
                }}
              />
              <TravelCondition
                period={"enero - abril"}
                year={"2020"}
                defData={{
                  acd: dataPerMonth?.acompaniado,
                  noAcd: dataPerMonth?.noAcompaniado,
                }}
              />
              <AgeRanges
                disableFirstAge
                period={"enero - abril"}
                year={"2020"}
                defData={{
                  f2: dataPerMonth?.ninos,
                  f3: dataPerMonth?.adolescentes,
                }}
              />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Mexico;
