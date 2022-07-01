import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Stack, Text, Image } from "@chakra-ui/react";

// ASSETS
import Male from "../../../../../../../../../../assets/male.png";
import Femenine from "../../../../../../../../../../assets/femenine.png";

const quads = {
  q1: "enero - abril",
  q2: "mayo - agosto",
  q3: "septiembre - diciembre",
};

const ModalContent = ({ period, year, dep, country }) => {
  const countryID = useParams().countryID || country;
  const [total, setTotal] = useState(0);
  const [genders, setGenders] = useState({ female: 0, male: 0 });

  useEffect(() => {
    if (period.length > 0 && year.length > 0 && dep.length > 0) {
      fetch(
        `${
          import.meta.env.VITE_APP_API_URL
        }consultas/totalgeneropordepartamento/${year}/${encodeURI(
          quads[period]
        )}/${countryID}/${encodeURI(dep)}`
      )
        .then((res) => res.json())
        .then((data) => {
          let depGenderTotals = { male: 0, female: 0 };
          data?.data.forEach((stats) => {
            if (stats._id === "Femenino") {
              depGenderTotals.female += stats.total;
            }
            if (stats._id === "Masculino") {
              depGenderTotals.male += stats.total;
            }
          });
          setGenders(depGenderTotals);
        })
        .catch((err) => console.log(err));
    }
  }, [period, year, dep, countryID]);

  useEffect(() => {
    if (period.length > 0 && year.length > 0) {
      fetch(
        `${
          import.meta.env.VITE_APP_API_URL
        }consultas/totalpordepartamento/${year}/${encodeURI(
          quads[period]
        )}/${countryID}/${encodeURI(dep)}`
      )
        .then((res) => res.json())
        .then((data) => {
          let total = 0;
          data?.data.forEach((stats) => (total += stats.total));
          setTotal(total);
        })
        .catch((err) => console.log(err));
    }
  }, [period, year, dep, countryID]);

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
          Género
        </Text>

        <Stack direction="column" spacing="0px">
          <Stack
            gap="8px"
            direction="row"
            alignItems="center"
            justifyContent="center"
          >
            <Image src={Femenine} height="32px" />
            <Text fontFamily="Oswald" fontSize="3xl" color="red.500">
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
