import React, { useState } from "react";

import { useParams } from "react-router-dom";

import { Box, Stack, Text, Image, Select } from "@chakra-ui/react";

import MexicoSVG from "../../../../../assets/mexico.svg";
import useFetch from "../../../../../hooks/fetch";

import { year } from "../../../../../utils/year";
import { useEffect } from "react";

import Gender from "../../../../../pages/country/components/statistics/components/gender";
import AgeRanges from "../../../../../pages/country/components/statistics/components/ageRanges";
import TravelCondition from "../../../../../pages/country/components/statistics/components/travelCondition";

const defDataPerMonth = { totalMes: 0 };

const Mexico = () => {
  const [bordersData, setBordersData] = useState([]);
  const [dataPerMonth, setDataPerMonth] = useState(defDataPerMonth);
  const [currentMonth, setCurrentMonth] = useState("");
  const [currentYear, setCurrentYear] = useState(year);

  const handleMonth = (ev) => setCurrentMonth(ev.target.value);
  const handleYear = (ev) => setCurrentYear(ev.target.value);

  // OBTENER DATOS
  useFetch({
    url: "/consultas/detenidosenfrontera/year/m%C3%A9xico",
    year: currentYear,
    resolve: (data) => setBordersData(data.data),
  });

  useEffect(() => {
    const data = bordersData?.filter((item) => item.mes === currentMonth);
    setDataPerMonth(data[0] ?? defDataPerMonth);
  }, [currentMonth, currentYear, bordersData]);

  console.log(dataPerMonth);

  return (
    <Box width="100%" padding="40px">
      <Stack
        gap="40px"
        width="100%"
        margin="auto"
        direction="row"
        maxWidth="1200px"
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

          <Stack padding="8px" bgColor="#fff" borderRadius="10px">
            <Text fontFamily="Oswald" fontSize="3xl" lineHeight="1">
              {currentMonth} {dataPerMonth?.totalMes}
            </Text>

            {/* GRAPHS */}
            <Stack
              p={8}
              spacing={2}
              gap="40px"
              margin="auto"
              justifyContent="space-between"
              direction={{ base: "column", md: "row" }}
              marginBottom={{ base: "40px", md: "60px" }}
              alignItems={{ base: "center", md: "flex-start" }}
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
                period={"enero - abril"}
                year={"2020"}
                defData={{
                  f1: dataPerMonth?.ninos,
                  f2: dataPerMonth?.adolescentes,
                  f3: 0,
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
