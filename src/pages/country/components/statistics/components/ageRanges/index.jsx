import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Legend,
  Tooltip,
} from "chart.js";
ChartJS.register(CategoryScale, LinearScale, BarElement, Legend, Tooltip);
import { useParams } from "react-router-dom";

import { Bar } from "react-chartjs-2";
import { colors } from "../../../../../../utils/theme";

import { Box, Grid, GridItem, Stack, Text } from "@chakra-ui/react";
import useFetch from "../../../../../../hooks/fetch";

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
};

const AgeRanges = ({
  period,
  year,
  country,
  disableFirstAge = false,
  defData: { f1 = undefined, f2 = undefined, f3 = undefined },
}) => {
  let labels = ["P. INF", "NIÑEZ", "ADOL", "NR"];
  let chartColors = [
    colors.yellow[700],
    colors.blue[700],
    colors.green[700],
    colors.gray[500],
  ];
  let agesLabels = [
    "Primera infancia",
    "Niñez",
    "Adolescencia",
    "No registrado",
  ];

  const countryID = useParams().countryID || country;
  const [total, setTotal] = useState({ f1: f1 ?? 0, f2: f2 ?? 0, f3: f3 ?? 0 });

  useFetch({
    url: "/consultas/totalporrangoetario/country?anio=selectedYear&periodRange",
    year,
    periodStart: period[0],
    periodEnd: period[1],
    country: countryID,
    disableFetch: f1 !== undefined || f2 !== undefined || f3 !== undefined,
    resolve: (data) => {
      let totals = { f1: 0, f2: 0, f3: 0 };
      data?.data?.forEach((stats) => {
        if (stats._id === "0-6 años") totals.f1 += stats.total;
        if (stats._id === "7-12 años") totals.f2 += stats.total;
        if (stats._id === "13-17 años") totals.f3 += stats.total;
      });
      setTotal(totals);
    },
  });

  let totals = [f1 ?? total.f1, f2 ?? total.f2, f3 ?? total.f3];
  if (disableFirstAge) {
    chartColors = chartColors.slice(1);
    agesLabels = agesLabels.slice(1);
    totals = totals.slice(1);
  }

  const data = {
    labels: disableFirstAge ? labels.slice(1) : labels,
    datasets: [
      {
        data: totals,
        backgroundColor: chartColors,
      },
    ],
  };

  return (
    <Box width="100%">
      <Stack justifyContent="center" alignItems="center">
        <Text fontFamily="Oswald" fontSize="2xl">
          Rangos etarios
        </Text>
        <Box width="300px">
          <Bar options={options} data={data} />
        </Box>

        <Grid
          templateColumns="1fr 1fr"
          templateRows="1fr 1fr"
          columnGap={2}
          rowGap={0}
        >
          {chartColors.map((color, index) => (
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              key={`age_${color}`}
              minWidth={160}
            >
              <Stack direction="row" alignItems="center">
                <Box bgColor={color} width="18px" height="18px" />
                <Text fontFamily="Oswald" fontSize="md">
                  {agesLabels[index]}
                </Text>
              </Stack>
              <Text fontFamily="Oswald" fontSize="2xl">
                {totals[index] || 0}
              </Text>
            </Stack>
          ))}
        </Grid>
      </Stack>
    </Box>
  );
};

AgeRanges.defaultProps = {
  disableFirstAge: false,
  defData: { f1: undefined, f2: undefined, f3: undefined },
};

export default AgeRanges;
