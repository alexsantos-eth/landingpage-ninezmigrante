import React, { useState } from "react";

import { Box, Stack, Text, Image, Select, border } from "@chakra-ui/react";

import MexicoSVG from "../../../../../assets/usa.svg";

import useFetch from "../../../../../hooks/fetch";
import { useParams } from "react-router-dom";
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
];

const EEUU = () => {
  const [currentMonth, setCurrentMonth] = useState("");
  const [bordersData, setBordersData] = useState([]);
  const [currentYear, setCurrentYear] = useState("");

  const { countryID } = useParams();

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
    <Box width="100%" padding="40px">
      <Stack
        gap="24px"
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
            {currentYear || year}
          </Text>
          <Text fontFamily="Oswald" fontSize="4xl" lineHeight="1">
            REPORTADOS POR EE.UU.
          </Text>
          <Text fontFamily="Oswald" fontSize="2xl" lineHeight="1">
            Sólo NO ACOMPAÑADOS
          </Text>

          {/* SELECT YEAR */}
          <Stack direction="row">
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

          <Stack
            width="100%"
            padding="24px"
            bgColor="#fff"
            direction="row"
            justifyContent="space-between"
            maxWidth="380px"
            borderRadius="12px"
          >
            <Stack>
              <Text fontFamily="Oswald" fontSize="3xl" lineHeight="1">
                {currentMonth || "Mes"}
              </Text>
              <Text fontFamily="Oswald" fontSize="4xl" lineHeight="1">
                {dataPerMonth?.totalMes ?? "0"}
              </Text>
            </Stack>

            <Stack>
              {dataPerDeps.map(([key, value]) => (
                <Stack
                  key={`${key}-${value}`}
                  gap="40px"
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Text fontFamily="Montserrat Medium">{key}</Text>
                  <Text fontFamily="Montserrat Medium">{value}</Text>
                </Stack>
              ))}
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default EEUU;
