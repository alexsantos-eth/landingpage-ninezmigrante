// REACT
import React, { useState, useEffect } from "react";

// CHAKRA UI COMPONENTS
import { Box, Stack, Image, Text, Tooltip } from "@chakra-ui/react";

// COMPONETS
import Group from "../../../../assets/group.png";
import Guatemala from "../../../../assets/guatemala.png";
import Honduras from "../../../../assets/honduras.png";

// UTILS
import { year } from "../../../../utils/year";

const TotalReturns = () => {
  const [total, setTotal] = useState({ gt: 0, hn: 0 });

  useEffect(() => {
    fetch(`${import.meta.env.VITE_APP_API_URL}consultas/totalnnaporpaisyanio`)
      .then((res) => res.json())
      .then((data) => {
        let totals = { gt: 0, hn: 0 };
        data?.data.forEach((stats) => {
          if (stats._id?.pais === "Guatemala") totals.gt += stats.total;
          if (stats._id?.pais === "Honduras") totals.hn += stats.total;
        });
        setTotal(totals);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Box bg="red.500" p={{ base: "40px 24px", md: "80px 40px" }}>
      {/* CONTAINER */}
      <Stack
        alignItems="center"
        justifyContent="center"
        gap={{ base: "0px", md: "40px" }}
        padding={{ base: "16px", md: "24px" }}
        direction={{ base: "column", md: "row" }}
      >
        {/* DESKTOP IMAGE */}
        <Image
          w="160px"
          h="160px"
          src={Group}
          display={{ base: "none", md: "block" }}
        />
        {/* DATA */}
        <Stack
          direction="column"
          justifyContent="center"
          gap={{ base: "24px", md: "0px" }}
          alignItems={{ base: "center", md: "flex-start" }}
        >
          {/* TITLE */}
          <Text
            color="white"
            textAlign="center"
            fontFamily="Oswald"
            fontSize={{ base: "3xl", md: "4xl" }}
          >
            Total de niñez migrante retornada {year}
          </Text>

          {/* MOBILE IMAGE */}
          <Image
            w="150px"
            h="150px"
            src={Group}
            display={{ base: "block", md: "none" }}
          />

          {/* GLOBAL DATA */}
          <Text
            color="white"
            fontFamily="Oswald"
            fontSize={{ base: "5xl", md: "6xl" }}
          >
            {total.gt + total.hn}
          </Text>

          {/* DATA PER COUNTRY */}
          <Stack
            direction={{ base: "column", md: "row" }}
            spacing="0px"
            width="100%"
          >
            {/* GUATEMALA */}
            <Stack
              height="100px"
              direction="row"
              padding="16px 24px"
              alignItems="center"
              border="1px solid white"
              width={{ base: "100%", md: "200px" }}
              spacing={{ base: "40px", md: "16px" }}
              justifyContent={{ base: "center", md: "space-between" }}
            >
              <Tooltip
                color="black"
                fontSize="xl"
                lineHeight="1"
                fontWeight="500"
                padding="2px 8px"
                label="Guatemala"
                bgColor="blue.500"
                fontFamily="Oswald"
              >
                <Image src={Guatemala} height="70px" />
              </Tooltip>
              <Text
                color="white"
                fontFamily="Oswald"
                fontSize={{ base: "3xl", md: "4xl" }}
              >
                {total.gt}
              </Text>
            </Stack>

            {/* HONDURAS */}
            <Stack
              height="100px"
              direction="row"
              padding="16px 24px"
              alignItems="center"
              border="1px solid white"
              width={{ base: "100%", md: "200px" }}
              spacing={{ base: "40px", md: "16px" }}
              justifyContent={{ base: "center", md: "space-between" }}
            >
              <Tooltip
                color="black"
                fontSize="xl"
                lineHeight="1"
                fontWeight="500"
                label="Honduras"
                padding="2px 8px"
                bgColor="blue.500"
                fontFamily="Oswald"
              >
                <Image src={Honduras} width={{ base: "90px", md: "100px" }} />
              </Tooltip>
              <Text
                color="white"
                fontFamily="Oswald"
                fontSize={{ base: "3xl", md: "4xl" }}
              >
                {total.hn}
              </Text>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default TotalReturns;