import React, { useState, useEffect } from "react";

import { Stack, Text } from "@chakra-ui/react";

import Gender from "../../../country/components/statistics/components/gender";
import AgeRanges from "../../../country/components/statistics/components/ageRanges";
import TravelCondition from "../../../country/components/statistics/components/travelCondition";
import ReturnPath from "../../../country/components/statistics/components/returnPath";
import ReturnCountry from "../../../country/components/statistics/components/returnCountry";
import HeatMap from "../../../country/components/statistics/components/heatMap";

const quarters = {
  q1: "Primer cuatrimestre",
  q2: "Segundo cuatrimestre",
  q3: "Tercer cuatrimestre",
};

const Statistics = ({ data }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (data.period.length > 0 && data.year.length > 0) {
      const quads = {
        q1: "enero - abril",
        q2: "mayo - agosto",
        q3: "septiembre - diciembre",
      };
      fetch(
        `${import.meta.env.VITE_APP_API_URL}consultas/totalporpaisanioperiodo/${
          data.country
        }/${data.year}/${encodeURI(quads[data.period])}`
      )
        .then((res) => res.json())
        .then((data) => {
          const periodData = data?.data?.[0];
          setTotal(periodData?.totalRegistros ?? 0);
        })
        .catch((err) => console.log(err));
    }
  }, [data.period, data.year, data.country]);

  return (
    <Stack spacing="40px">
      <Stack
        spacing="16px"
        alignItems="center"
        justifyContent="center"
        direction={{ base: "column", md: "column" }}
      >
        <Text
          lineHeight="1"
          fontFamily="Oswald"
          textAlign="center"
          fontSize={{ base: "4xl", md: "6xl" }}
        >
          {data.country === "guatemala" && "GUATEMALA"}
          {data.country === "honduras" && "HONDURAS"}
        </Text>
        <Text
          lineHeight="1"
          fontSize="2xl"
          textAlign="center"
          fontFamily="Oswald"
        >
          Total de niñez migrante retornanda
        </Text>
        <Text
          fontSize="xl"
          lineHeight="1"
          fontWeight="600"
          fontFamily="Times"
          textAlign={{ base: "center", md: "left" }}
        >
          {`${quarters[data.period] ?? ""} ${data.year ?? ""}`}
        </Text>
        <Text
          fontFamily="Oswald"
          fontSize={{ base: "6xl", md: "7xl" }}
          lineHeight="1"
        >
          {total}
        </Text>
      </Stack>
      <Gender {...data} />
      <TravelCondition {...data} />
      <AgeRanges {...data} />
      <ReturnPath {...data} />
      <ReturnCountry {...data} />
      <HeatMap {...data} />
    </Stack>
  );
};

export default Statistics;
