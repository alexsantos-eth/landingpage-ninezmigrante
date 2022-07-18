// REACT
import React, { useState } from "react";

// REACT ROUTER DOM
import { useParams } from "react-router-dom";

// CHAKRA UI COMONENTS
import { Box, Stack, Text } from "@chakra-ui/react";

// HOOKS
import useSortedDepartments from "./hooks";

import ModalContentGT from "../../../../../../components/departments/components/gt";
import ModalContentHN from "../../../../../../components/departments/components/gt";
import { colors } from "../../../../../../utils/theme";
import { year as currentYear } from "../../../../../../utils/year";

const Statistics = ({ returns }) => {
  const { countryID } = useParams();
  const [data, setData] = useState([]);
  const { period, year, list } = returns;
  useSortedDepartments(setData, countryID, period, year, list);

  return (
    <Box width="100%" padding="0px 40px">
      {/* CONTAINER */}
      <Stack
        margin="auto"
        spacing="40px"
        maxWidth="800px"
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        {/* TITLE AND SELECTED DATA */}
        <Stack
          spacing="16px"
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Text
            fontSize="2xl"
            fontFamily="Oswald"
            lineHeight={{ base: "1.5", md: "1" }}
            textAlign={{ base: "center", md: "left" }}
          >
            {`DEPARTAMENTOS CON ${
              list === "desc" ? "MENOS" : "MÁS"
            } RETORNADOS - ${
              countryID === "guatemala" ? "GUATEMALA" : "HONDURAS"
            }`}
          </Text>
          <Text
            fontSize="2xl"
            lineHeight="1"
            fontWeight="600"
            fontFamily="Times"
          >
            {`Cuatrimestre ${period?.substring(1) ?? ""} - ${
              year ?? currentYear
            }`}
          </Text>
        </Stack>

        {/* DEPARTMENTS */}
        <Stack
          gap="16px"
          justifyContent="center"
          alignItems={{ base: "flex-start", md: "center" }}
          direction={{ base: "column", md: "row" }}
        >
          {/* DEPARMENT BOX */}
          {data.map((department, index) => (
            <Stack
              key={index}
              direction="row"
              alignItems="center"
              justifyContent="center"
            >
              <Stack width="40px">
                {countryID === "guatemala" ? (
                  <ModalContentGT
                    disableHeat
                    id={department.id}
                    customColor={[colors.heat[900 - index * 100]]}
                  />
                ) : (
                  <ModalContentHN
                    disableHeat
                    id={department.id}
                    customColor={[colors.heat[900 - index * 100]]}
                  />
                )}
              </Stack>

              <Stack direction="column">
                <Text fontFamily="Oswald" fontSize="xl" lineHeight="1">
                  {department?._id.replace("Department", "")}
                </Text>
                <Text fontFamily="Oswald" fontSize="2xl" lineHeight="1">
                  {department?.total}
                </Text>
              </Stack>
            </Stack>
          ))}
        </Stack>

        <Stack>{/* DOWLOAD TABLE */}</Stack>
      </Stack>
    </Box>
  );
};

export default Statistics;
