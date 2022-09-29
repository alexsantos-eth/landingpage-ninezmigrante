// REACT
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// CHAKRA UI COMPONENTS
import { Box, Stack, Text, Image } from "@chakra-ui/react";

// ASSETS
import EEUU from "./components/polygons/eeuu";
import Mexico from "./components/polygons/mexico";
import Guatemala from "./components/polygons/guatemala";
import ElSalvador from "./components/polygons/elsalvador";
import AmericaMap from "./components/polygons/america";

import useFetch from "../../../../../../hooks/fetch";
import { colors } from "../../../../../../utils/theme";

const countryImages = {
  eu: { Image: EEUU },
  mx: { Image: Mexico },
  nextCountryG: { Image: Guatemala },
  nextCountryH: { Image: ElSalvador },
  others: { Image: AmericaMap },
};

const defaultTotals = {
  eu: { name: "", total: 0 },
  mx: { name: "", total: 0 },
  nextCountryG: { name: "", total: 0 },
  nextCountryH: { name: "", total: 0 },
  others: { name: "", total: 0 },
};

const ReturnCountry = ({ period, year, country }) => {
  const countryID = useParams().countryID || country;
  const [total, setTotal] = useState(() => ({ ...defaultTotals }));

  useFetch({
    url: "/consultas/totalporpaisdeproveniencia/country?anio=year&periodRange",
    year,
    periodStart: period[0],
    periodEnd: period[1],
    country: countryID,
    resolve: (data) => {
      let totals = {
        eu: { name: "", total: 0 },
        mx: { name: "", total: 0 },
        nextCountryG: { name: "", total: 0 },
        nextCountryH: { name: "", total: 0 },
        others: { name: "Otros", total: 0 },
      };

      data?.data?.forEach((stats) => {
        if (stats._id?.nombre === "Estados Unidos") {
          totals.eu.total = stats.total;
          totals.eu.name = "EE.UU.";
        } else if (stats._id?.nombre === "México") {
          totals.mx.total = stats.total;
          totals.mx.name = stats._id?.nombre;
        } else if (
          (countryID === "guatemala" && stats._id?.nombre === "Honduras") ||
          (countryID === "honduras" && stats._id?.nombre === "Guatemala")
        ) {
          totals[`nextCountry${stats._id?.nombre.charAt(0)}`].name =
            stats._id?.nombre;
          totals[`nextCountry${stats._id?.nombre.charAt(0)}`].total =
            stats.total;
        } else totals.others.total = stats.total;
      });

      setTotal(totals);
    },
  });

  return (
    <Box width="100%">
      <Stack justifyContent="center" alignItems="center" marginBottom="24px">
        <Text fontFamily="Oswald" fontSize="2xl">
          País de retorno
        </Text>
      </Stack>

      <Stack
        spacing="24px"
        justifyContent="center"
        direction={{ base: "column", md: "row" }}
        alignItems={{ base: "center", md: "flex-end" }}
      >
        {Object.entries(total)
          .sort((a, b) => b[1].total - a[1].total)
          .map((country, index) => {
            const Map = countryImages[country[0]].Image;

            return country[1].total > 0 ? (
              <Stack
                gap="24px"
                direction="column"
                key={`${country[0]}-${index}`}
                alignItems="center"
                justifyContent="center"
              >
                {<Map color={colors.heat[countryID][900 - index * 100]} />}

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
            ) : null;
          })}
      </Stack>
    </Box>
  );
};

export default ReturnCountry;
