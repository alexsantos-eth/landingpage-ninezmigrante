// REACT
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// CHAKRA UI COMPONENTS
import { Box, Stack, Text } from "@chakra-ui/react";

// ASSETS
import EEUU from "./components/polygons/eeuu";
import Mexico from "./components/polygons/mexico";
import Canada from "./components/polygons/canada";
import Belice from "./components/polygons/belice";
import Guatemala from "./components/polygons/guatemala";
import ElSalvador from "./components/polygons/elsalvador";

const countryImages = {
  eu: { color: "", image: <EEUU /> },
  mx: { color: "", image: <Mexico /> },
  cd: { color: "", image: <Canada /> },
  gt: { color: "", image: <Guatemala /> },
  bz: { color: "", image: <Belice /> },
  es: { color: "", image: <ElSalvador /> },
};

const ReturnCountry = ({ period, year, country }) => {
  const countryID = useParams().countryID || country;
  const [total, setTotal] = useState({
    eu: { name: "", total: 0 },
    mx: { name: "", total: 0 },
    cd: { name: "", total: 0 },
    gt: { name: "", total: 0 },
    bz: { name: "", total: 0 },
    es: { name: "", total: 0 },
  });

  useEffect(() => {
    if (period.length > 0 && year.length > 0) {
      const quads = {
        q1: "enero - abril",
        q2: "mayo - agosto",
        q3: "septiembre - diciembre",
      };
      fetch(
        `${
          import.meta.env.VITE_APP_API_URL
        }consultas/totalporpaisdeproveniencia/${countryID}/${year}/${encodeURI(
          quads[period]
        )}`
      )
        .then((res) => res.json())
        .then((data) => {
          let totals = {
            eu: { name: "", total: 0 },
            mx: { name: "", total: 0 },
            cd: { name: "", total: 0 },
            gt: { name: "", total: 0 },
            bz: { name: "", total: 0 },
            es: { name: "", total: 0 },
          };

          data?.data.forEach((stats) => {
            if (stats._id?.nombre === "Estados Unidos") {
              totals.eu.total += stats.total;
              totals.eu.name = "EE.UU.";
            }
            if (stats._id?.nombre === "México") {
              totals.mx.total += stats.total;
              totals.mx.name = stats._id?.nombre;
            }
            if (stats._id?.nombre === "Canadá") {
              totals.cd.total += stats.total;
              totals.cd.name = stats._id?.nombre;
            }
            if (stats._id?.nombre === "Guatemala") {
              totals.gt.total += stats.total;
              totals.gt.name = stats._id?.nombre;
            }
            if (stats._id?.nombre === "Belice") {
              totals.bz.total += stats.total;
              totals.bz.name = stats._id?.nombre;
            }
            if (stats._id?.nombre === "El Salvador") {
              totals.es.total += stats.total;
              totals.es.name = stats._id?.nombre;
            }
          });
          setTotal(totals);
        })
        .catch((err) => console.log(err));
    }
  }, [period, year, country]);

  return (
    <Box width="100%">
      <Stack justifyContent="center" alignItems="center" spacing="24px">
        <Text fontFamily="Oswald" fontSize="2xl">
          País de retorno
        </Text>
        {Object.entries(total)
          .sort((a, b) => b[1].total - a[1].total)
          .map((country) =>
            country[1].total > 0 ? (
              <Stack
                key={country[0]}
                gap="24px"
                direction="row"
                alignItems="center"
                justifyContent="center"
              >
                {countryImages[country[0]].image}

                <Stack
                  spacing="8px"
                  direction="column"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Text fontFamily="Oswald" fontSize="md" lineHeight="1">
                    {country[1].name}
                  </Text>
                  <Text fontFamily="Oswald" fontSize="3xl" lineHeight="1">
                    {country[1].total}
                  </Text>
                </Stack>
              </Stack>
            ) : (
              <></>
            )
          )}
      </Stack>
    </Box>
  );
};

export default ReturnCountry;
