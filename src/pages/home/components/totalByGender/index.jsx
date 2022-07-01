// REACT
import React, { useEffect, useState } from "react";

// CHAKRA UI COMPONENTS
import { Box, Stack, Image, Text } from "@chakra-ui/react";

// ASSETS
import Male from "../../../../assets/male.png";
import Femenine from "../../../../assets/femenine.png";

// UTILS
import { year } from "../../../../utils/year";

const TotalByGender = () => {
  const [total, setTotal] = useState({ female: 0, male: 0 });

  useEffect(() => {
    fetch(`${import.meta.env.VITE_APP_API_URL}consultas/totalnnaporanioactual`)
      .then((res) => res.json())
      .then((data) => {
        let totals = { female: 0, male: 0 };
        data?.data.forEach((stats) => {
          if (stats._id === "Femenino") totals.female += stats.total;
          if (stats._id === "Masculino") totals.male += stats.total;
        });
        setTotal(totals);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Box width="100%">
      {/* CONTAINER */}
      <Stack
        width="100%"
        spacing="0px"
        direction="row"
        alignItems="center"
        justifyContent="center"
      >
        {/* TITLE */}
        <Box
          bgColor="white"
          padding="4px 16px"
          position="absolute"
          marginTop={{ base: "-180px", md: "-240px" }}
        >
          <Text
            textAlign="center"
            fontFamily="Oswald"
            fontSize={{ base: "3xl", md: "4xl" }}
          >
            Total de niñez migrante retornada {year}
          </Text>
        </Box>

        {/* GIRLS SECTION */}
        <Stack
          gap="16px"
          width="50%"
          direction="row"
          alignItems="center"
          bgColor="yellow.500"
          justifyContent="flex-end"
          padding={{
            base: "160px 40px 80px 40px",
            md: "220px 40px 120px 40px",
          }}
        >
          <Image
            src={Femenine}
            height="120px"
            display={{ base: "none", md: "block" }}
          />
          <Stack direction="column" spacing="-16px">
            <Text
              color="red.700"
              fontFamily="Oswald"
              fontSize={{ base: "4xl", md: "5xl" }}
            >
              NIÑAS
            </Text>
            <Text
              color="red.700"
              fontFamily="Oswald"
              fontSize={{ base: "5xl", md: "7xl" }}
            >
              {total.female}
            </Text>
          </Stack>
        </Stack>

        {/* BOYS SECTION */}
        <Stack
          gap="16px"
          width="50%"
          direction="row"
          bgColor="#EAD0C1"
          alignItems="center"
          justifyContent="flex-start"
          padding={{
            base: "160px 40px 80px 40px",
            md: "220px 40px 120px 40px",
          }}
        >
          <Stack direction="column" spacing="-16px">
            <Text
              color="yellow.700"
              fontFamily="Oswald"
              fontSize={{ base: "4xl", md: "5xl" }}
            >
              NIÑOS
            </Text>
            <Text
              color="yellow.700"
              fontFamily="Oswald"
              fontSize={{ base: "5xl", md: "7xl" }}
            >
              {total.male}
            </Text>
          </Stack>
          <Image
            src={Male}
            height="100px"
            display={{ base: "none", md: "block" }}
          />
        </Stack>
      </Stack>
    </Box>
  );
};

export default TotalByGender;
