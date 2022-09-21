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

const GraphFooter = ({ countryID }) => {
  return (
    <Stack direction="row" justifyContent="center" mb={10}>
      <Stack
        pr={4}
        direction="column"
        alignItems="center"
        justifyContent="center"
        borderRight="1px solid #333"
      >
        <Stack
          mb={2}
          direction="row"
          alignItems="center"
          justifyContent={["space-between", "center"]}
        >
          <Link to="/">
            <Image src={LogoNinezMigrante} w="80px" />
          </Link>
          <Stack direction="column" spacing="0px">
            <Stack>
              <Text lineHeight={1} fontFamily="Oswald" fontSize="1.2em">
                NiñezMigrante.org
              </Text>
            </Stack>

            <Stack
              direction="row"
              alignItems="center"
              display={{ base: "none", md: "flex" }}
            >
              <Icon as={ViewIcon} boxSize="3em" />
              <Text
                fontSize="2.5em"
                lineHeight={1}
                fontWeight="400"
                fontFamily="Oswald"
              >
                MOBINIM
              </Text>
            </Stack>
          </Stack>
        </Stack>
        <Text
          maxW={260}
          fontSize="1em"
          fontWeight="600"
          fontFamily="Times"
          textAlign="center"
          lineHeight={1.2}
          display={{ base: "none", md: "block" }}
        >
          Monitoreo binacional de niñez migrante retornada Guatemala-Honduras
        </Text>
      </Stack>
      <Stack
        pl={4}
        direction="column"
        alignItems="center"
        marginBottom="40px"
        justifyContent="center"
      >
        {countryID === "guatemala" ? (
          <>
            <Text
              lineHeight={1}
              textAlign="center"
              fontFamily="Oswald"
              fontSize={{ base: "xl", md: "md" }}
              maxWidth={{ base: "300px", md: "800px" }}
            >
              Fuente: Departamento de Centros de Atención Migratoria.
            </Text>
            <Text
              lineHeight={1}
              textAlign="center"
              fontFamily="Oswald"
              fontSize={{ base: "xl", md: "md" }}
              maxWidth={{ base: "300px", md: "800px" }}
            >
              Elaborado por: el Departamento de Estadística y Archivos.
              Instituto Guatemalteco de Migración -IGM-
            </Text>
          </>
        ) : (
          <Text
            lineHeight={1}
            textAlign="center"
            fontFamily="Oswald"
            fontSize={{ base: "xl", md: "md" }}
            maxWidth={{ base: "300px", md: "800px" }}
          >
            Fuente: Dirección de Niñez, Adolescencia y Familia (DINAF)
          </Text>
        )}

        <Stack
          gap="0px"
          alignItems={{ base: "flex-start", md: "center" }}
          direction={{ base: "column", md: "row" }}
        >
          <a href="https://redcoiproden.org/" target="_blank">
            <Image src={LogoProyectoBinacional} maxHeight="100px" />
          </a>
          <a href="https://redcoiproden.org/" target="_blank">
            <Image src={LogoCoiproden} maxHeight="80px" />
          </a>
          <a href="https://pami-guatemala.org/" target="_blank">
            <Image src={LogoPAMI} maxHeight="80px" />
          </a>
          <a href="https://www.kindernothilfe.org/" target="_blank">
            <Image src={LogoKnh} maxHeight="80px" />
          </a>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default GraphFooter;
