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

import { Box, Stack, Text } from "@chakra-ui/react";
import { colors } from "../../../../../../utils/theme";

import useFetch from "../../../../../../hooks/fetch";

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
};

const labels = ["0-6 años", "7-12 años", "13-17 años"];

const AgeRanges = ({ period, year, country, defData: { f1 = 0, f2 = 0 } }) => {
  const countryID = useParams().countryID || country;
  const [total, setTotal] = useState({ f1: 0, f2: 0, f3: 0 });

  useFetch({
    url: "/consultas/totalporrangoetario/country/year/quarter",
    year,
    period,
    country: countryID,
    resolve: (data) => {
      let totals = { f1: 0, f2: 0, f3: 0 };
      data?.data.forEach((stats) => {
        if (stats._id === "0-6 años") totals.f1 += stats.total;
        if (stats._id === "7-12 años") totals.f2 += stats.total;
        if (stats._id === "13-17 años") totals.f3 += stats.total;
      });
      setTotal(totals);
    },
  });

  const data = {
    labels,
    datasets: [
      {
        data: [f1 ?? total.f1, f2 ?? total.f2, total.f3],
        backgroundColor: [
          colors.yellow[700],
          colors.blue[700],
          colors.red[700],
        ],
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

        <Stack direction="column" spacing="-8px">
          <Stack direction="row" alignItems="center">
            <Box bgColor="yellow.700" width="18px" height="18px" />
            <Text fontFamily="Oswald" fontSize="md">
              Primera infancia
            </Text>
            <Text fontFamily="Oswald" fontSize="2xl">
              {f1 ?? total.f1}
            </Text>
          </Stack>

          {/* DATA ITEM */}
          <Stack direction="row" alignItems="center">
            <Box bgColor="blue.700" width="18px" height="18px" />
            <Text fontFamily="Oswald" fontSize="md">
              Niñez
            </Text>
            <Text fontFamily="Oswald" fontSize="2xl">
              {f2 ?? total.f2}
            </Text>
          </Stack>

          <Stack direction="row" alignItems="center">
            <Box bgColor="red.700" width="18px" height="18px" />
            <Text fontFamily="Oswald" fontSize="md">
              Adolescencia
            </Text>
            <Text fontFamily="Oswald" fontSize="2xl">
              {total.f3}
            </Text>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default AgeRanges;
