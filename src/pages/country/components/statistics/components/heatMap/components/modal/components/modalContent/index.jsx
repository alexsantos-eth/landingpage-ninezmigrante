import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Stack, Text, Image } from "@chakra-ui/react";

// ASSETS
import Male from "../../../../../../../../../../assets/male.png";
import Femenine from "../../../../../../../../../../assets/femenine.png";

import useFetch from "../../../../../../../../../../hooks/fetch";

const ModalContent = ({ period, year, dep, country }) => {
  const countryID = useParams().countryID || country;
  const [total, setTotal] = useState(0);
  const [genders, setGenders] = useState({ female: 0, male: 0 });

  useFetch({
    url: "/consultas/totalgeneropordepartamento/year/quarter/country/department",
    year,
    period,
    department: dep,
    country: countryID,
    resolve: (data) => {
      let depGenderTotals = { male: 0, female: 0 };
      data?.data.forEach((stats) => {
        if (stats._id === "Femenino") depGenderTotals.female += stats.total;
        if (stats._id === "Masculino") depGenderTotals.male += stats.total;
      });
      setGenders(depGenderTotals);
    },
  });

  useFetch({
    url: "/consultas/totalpordepartamento/year/quarter/country/department",
    year,
    period,
    department: dep,
    country: countryID,
    resolve: (data) => {
      let total = 0;
      data?.data.forEach((stats) => (total += stats.total));
      setTotal(total);
    },
  });

  return (
    <Stack
      width="100%"
      spacing="16px"
      direction="column"
      justifyContent="center"
    >
      <Stack alignItems="center" justifyContent="space-between" direction="row">
        <Text fontFamily="Oswald" fontSize="2xl">
          Total
        </Text>
        <Text fontFamily="Oswald" fontSize="5xl">
          {total}
        </Text>
      </Stack>

      <Stack alignItems="center" justifyContent="space-between" direction="row">
        <Text fontFamily="Oswald" fontSize="2xl">
          Sexo
        </Text>

        <Stack direction="column" spacing="0px">
          <Stack
            gap="8px"
            direction="row"
            alignItems="center"
            justifyContent="center"
          >
            <Image src={Femenine} height="32px" />
            <Text fontFamily="Oswald" fontSize="3xl" color="red.700">
              {genders.female}
            </Text>
          </Stack>
          <Stack
            gap="8px"
            direction="row"
            alignItems="center"
            justifyContent="center"
          >
            <Image src={Male} height="32px" />
            <Text color="yellow.700" fontFamily="Oswald" fontSize="3xl">
              {genders.male}
            </Text>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ModalContent;
