// REACT
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// CHAKRA UI COMPONENTS
import { Box, Stack, Text, Image, Tooltip } from "@chakra-ui/react";

// ASSETS
import Male from "../../../../../../assets/male.png";
import Femenine from "../../../../../../assets/femenine.png";

import useFetch from "../../../../../../hooks/fetch";

const Gender = ({
  period,
  year,
  country,
  defData: { female = undefined, male = undefined },
}) => {
  const countryID = useParams().countryID || country;
  const [total, setTotal] = useState({ male: male ?? 0, female: female ?? 0 });

  useFetch({
    url: "/consultas/totalporgenero/country?anio=selectedYear&periodRange",
    year,
    periodStart: period[0],
    periodEnd: period[1],
    country: countryID,
    disableFetch: female !== undefined || male !== undefined,
    resolve: (data) => {
      let totals = { male: 0, female: 0 };
      data?.data?.forEach((stats) => {
        const id = stats._id?.toLowerCase();
        if (id === "femenino" || id === "f") totals.female += stats.total;
        if (id === "masculino" || id === "m") totals.male += stats.total;
      });
      setTotal(totals);
    },
  });

  return (
    <Box width="100%">
      <Stack justifyContent="center" alignItems="center" spacing="16px">
        <Text fontFamily="Oswald" fontSize="2xl">
          Sexo
        </Text>
        <Stack
          gap="16px"
          direction="row"
          alignItems="center"
          justifyContent="center"
        >
          <Tooltip
            color="white"
            fontSize="xl"
            lineHeight="1"
            fontWeight="500"
            padding="2px 8px"
            label="Femenino"
            bgColor="blue.700"
            fontFamily="Oswald"
          >
            <Image src={Femenine} height="50px" />
          </Tooltip>
          <Text fontFamily="Oswald" fontSize="4xl" color="green.700">
            {female ?? total.female}
          </Text>
        </Stack>
        <Stack
          gap="16px"
          direction="row"
          alignItems="center"
          justifyContent="center"
        >
          <Tooltip
            color="white"
            fontSize="xl"
            lineHeight="1"
            fontWeight="500"
            padding="2px 8px"
            label="Masculino"
            bgColor="blue.700"
            fontFamily="Oswald"
          >
            <Image src={Male} height="50px" />
          </Tooltip>
          <Text fontFamily="Oswald" fontSize="4xl" color="yellow.700">
            {male ?? total.male}
          </Text>
        </Stack>
      </Stack>
    </Box>
  );
};

Gender.defaultProps = {
  defData: { female: undefined, male: undefined },
};

export default Gender;
