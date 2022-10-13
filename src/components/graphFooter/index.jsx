import React from "react";

import { Image, Stack, Text, Box, Link, Icon, Heading } from "@chakra-ui/react";

// ICONS
import { ViewIcon } from "@chakra-ui/icons";

// ASSETS
import LogoProyectoBinacional from "../../assets/LogoProyectoBinacional.png";
import LogoNinezMigrante from "../../assets/LogoNinezMigrante.png";
import LogoCoiproden from "../../assets/LogoCoiproden.png";
import LogoPAMI from "../../assets/LogoPAMI.png";
import LogoKnh from "../../assets/LogoKnh.png";

const GraphFooter = () => {
  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="center"
      mt={10}
      paddingRight="100px"
      paddingLeft="100px"
    >
      <Stack direction={{ base: "column", md: "row" }} justifyContent="center">
        <Stack
          pr={4}
          direction="column"
          alignItems="center"
          justifyContent="center"
          borderRight="1px solid #333"
          minWidth="300px"
        >
          <Text
            width="100%"
            lineHeight={1}
            fontFamily="Montserrat"
            fontSize="0.8em"
            fontWeight="600"
            mb={2}
          >
            Esta información ha sido procesada por:
          </Text>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent={["space-between", "center"]}
          >
            <Link to="/">
              <Image
                src={LogoNinezMigrante}
                w="80px"
                minW={"80px"}
                mb={"-25px"}
              />
            </Link>

            <Stack direction="column" spacing="0px">
              <Text lineHeight={1} fontFamily="Oswald" fontSize="1em">
                NiñezMigrante.org
              </Text>

              <Stack direction="row" alignItems="center">
                <Box mb={"-25px"}>
                  <Icon as={ViewIcon} boxSize="2.5em" style={{ margin: 0 }} />
                </Box>
                <Text
                  fontSize="2.1em"
                  lineHeight={1}
                  fontWeight="400"
                  fontFamily="Oswald"
                  display={"inline"}
                >
                  MOBINIM
                </Text>
              </Stack>
            </Stack>
          </Stack>
          <Text
            paddingTop={6}
            maxW={260}
            fontSize="1em"
            fontWeight="600"
            fontFamily="Times"
            textAlign="center"
            lineHeight={1.2}
          >
            Monitoreo binacional de niñez migrante retornada Guatemala-Honduras
          </Text>
        </Stack>
        <Stack
          pl={4}
          direction="column"
          alignItems="center"
          justifyContent="center"
          marginBottom="40px"
        >
          <Stack
            gap="10px"
            alignItems={"center"}
            direction={{ base: "column", md: "row" }}
          >
            <a href="https://www.kindernothilfe.org/" target="_blank">
              <Image src={LogoKnh} minWidth="250px" />
            </a>
            <a href="https://redcoiproden.org/" target="_blank">
              <Image src={LogoProyectoBinacional} minWidth="350px" />
            </a>
            <a href="https://redcoiproden.org/" target="_blank">
              <Image src={LogoCoiproden} minWidth="200px" />
            </a>
            <a href="https://pami-guatemala.org/" target="_blank">
              <Image src={LogoPAMI} minWidth="80px" />
            </a>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default GraphFooter;
