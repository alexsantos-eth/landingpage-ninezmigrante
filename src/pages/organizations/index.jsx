// REACT
import React, { useEffect } from "react";

// CHAKRA UI COMPONENTS
import { Box, Stack, Text, Heading } from "@chakra-ui/react";

const OrganizationsPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <Box padding={{ base: "40px 24px", md: "80px 40px" }} bgColor="blue.500">
      <Stack
        spacing="40px"
        margin="0 auto"
        maxWidth="800px"
        alignItems="flex-start"
        justifyContent="center"
      >
        <Heading fontFamily="Montserrat Medium">Organizaciones</Heading>

        <Text fontFamily="Montserrat Medium">
          <span style={{ fontWeight: "bold", fontFamily: "Montserrat Medium" }}>
            La Coordinadora de Instituciones Privadas Pro las Niñas, Niños,
            Adolescentes, Jóvenes y sus Derechos (COIPRODEN)
          </span>
          , es una Organización no gubernamental, de carácter social, sin fines
          de lucro, surge en el año 1989, con Personería Jurídica 252-97, y
          conformada por organizaciones que trabajan para el bienestar de la
          niñez, adolescencia y juventud de Honduras. Para el desarrollo de las
          actividades la Red COIPRODEN, cuenta con tres Áreas Temáticas:
          Discapacidad, Hogares y Residencias y Niñez Vulnerable
        </Text>

        <Text fontFamily="Montserrat Medium">
          <span style={{ fontWeight: "bold", fontFamily: "Montserrat Medium" }}>
            PROGRAMA DE ATENCIÓN, MOVILIZACIÓN E INCIDENCIA POR LA NIÑEZ Y
            ADOLESCENCIA -PAMI-{" "}
          </span>
          es una organización de sociedad civil que trabaja en Guatemala
          promoviendo los derechos de niñas, niños y adolescentes. Su misión la
          ha planteado en términos de “Acompañar la formación y ejercicio
          ciudadano de la niñez, adolescencia y juventud, en la transformación
          de su realidad para una vida digna”. A través de tres componentes de
          trabajo: Ciudadanía, Vida Digna e Inclusión; impulsa una agenda de
          derechos en áreas geográficas locales, nacionales y binacionales. Para
          ello tiene representatividad y gestión política en redes de sociedad
          civil y espacios de toma de decisión. Actualmente desarrolla su labor
          en 9 departamentos del país (39 municipios) y, con el proyecto
          Fortalecimiento de los Sistemas de Protección y Garantía de Derechos
          de la Niñez y Adolescencia Migrante, también impulsa los derechos de
          la niñez migrante de ambos países.
        </Text>

        <Text fontFamily="Montserrat Medium">
          <span style={{ fontWeight: "bold", fontFamily: "Montserrat Medium" }}>
            KNH y BMZ{" "}
          </span>
          es una organización de sociedad civil que trabaja en Guatemala
          promoviendo los derechos de niñas, niños y adolescentes. Su misión la
          ha planteado en términos de “Acompañar la formación y ejercicio
          ciudadano de la niñez, adolescencia y juventud, en la transformación
          de su realidad para una vida digna”. A través de tres componentes de
          trabajo: Ciudadanía, Vida Digna e Inclusión; impulsa una agenda de
          derechos en áreas geográficas locales, nacionales y binacionales. Para
          ello tiene representatividad y gestión política en redes de sociedad
          civil y espacios de toma de decisión. Actualmente desarrolla su labor
          en 9 departamentos del país (39 municipios) y, con el proyecto
          Fortalecimiento de los Sistemas de Protección y Garantía de Derechos
          de la Niñez y Adolescencia Migrante, también impulsa los derechos de
          la niñez migrante de ambos países.
        </Text>
      </Stack>
    </Box>
  );
};

export default OrganizationsPage;
