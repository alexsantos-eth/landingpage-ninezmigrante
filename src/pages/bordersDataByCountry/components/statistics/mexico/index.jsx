// REACT
import React, { useState, useRef } from "react";
import { useParams } from "react-router-dom";

// CHAKRA UI COMPONENTS
import {
  Box,
  Stack,
  Text,
  Image,
  Select,
  StackDivider,
} from "@chakra-ui/react";

// COMPONENTS
import Gender from "../../../../../pages/country/components/statistics/components/gender";
import AgeRanges from "../../../../../pages/country/components/statistics/components/ageRanges";
import TravelCondition from "../../../../../pages/country/components/statistics/components/travelCondition";
import DownloadImage from "../../../../../components/downloadImage";

// ASSETS
import MapaMexico from "../../../../../assets/mexico.svg";

// HOOKS
import useFetch from "../../../../../hooks/fetch";

// UTILS
import { year } from "../../../../../utils/year";

const Mexico = () => {
  const [currentMonth, setCurrentMonth] = useState("");
  const [currentYear, setCurrentYear] = useState("");
  const [bordersData, setBordersData] = useState([]);

  const containerRef = useRef(null);

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
    <Box
      width="100%"
      ref={containerRef}
      padding={{ base: "24px 40px", md: "80px 40px" }}
    >
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
        {/* SECTION HEADING  */}
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
              REPORTADOS POR MÉXICO
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
        </Stack>

        {/* STATISTICS */}
        <Stack
          gap="40px"
          width="100%"
          bgColor="#fff"
          padding="40px 24px"
          alignItems="center"
          borderRadius="12px"
          justifyContent="space-between"
          direction={{ base: "column", md: "row" }}
        >
          {/* COUNTRY MAP */}
          <Stack>
            <Image src={MapaMexico} minWidth="240px" />
          </Stack>

          <Stack
            direction="column"
            alignItems={{ base: "center", md: "flex-start" }}
          >
            {/* TOTAL MONTH DATA */}
            <Stack direction="row" alignItems="center">
              <Text fontFamily="Oswald" fontSize="3xl" lineHeight="1">
                {currentMonth || "Mes"}
              </Text>
              <Text fontFamily="Oswald" fontSize="4xl" lineHeight="1">
                {dataPerMonth?.totalMes ?? "0"}
              </Text>
            </Stack>

            {/* GRAPHS */}
            <Stack
              gap="16px"
              padding="24px 0px"
              alignItems="flex-start"
              direction={{ base: "column", md: "row" }}
            >
              {/* GENDER COMPONENT */}
              <Gender
                period={"enero - abril"}
                year={"2020"}
                defData={{
                  female: dataPerMonth?.femenino,
                  male: dataPerMonth?.masculino,
                }}
              />

              {/* TRAVEL CONDITION COMPONENT */}
              <TravelCondition
                period={"enero - abril"}
                year={"2020"}
                defData={{
                  acd: dataPerMonth?.acompaniado,
                  noAcd: dataPerMonth?.noAcompaniado,
                }}
              />

              {/* AGE RANGES COMPONENT */}
              <AgeRanges
                disableFirstAge
                year={"2020"}
                period={"enero - abril"}
                defData={{
                  f2: dataPerMonth?.ninos,
                  f3: dataPerMonth?.adolescentes,
                }}
              />
            </Stack>
          </Stack>
        </Stack>
        <DownloadImage label="" containerRef={containerRef} />
      </Stack>
    </Box>
  );
};

export default Mexico;
