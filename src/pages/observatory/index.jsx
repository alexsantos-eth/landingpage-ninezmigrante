// REACT
import React, { useEffect } from "react";

// CHAKRA UI COMPONENTS
import { Box, Stack, Text, Heading } from "@chakra-ui/react";

const ObservatoryPage = () => {
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
        <Heading fontFamily="Montserrat Medium">
          Observatorio de derechos de la Niñez Migrante
        </Heading>

        <Text fontFamily="Montserrat Medium">
          <span style={{ fontWeight: "bold", fontFamily: "Montserrat Medium" }}>
            Objetivo:{" "}
          </span>
          Ser un espacio binacional referente de la situación de los derechos de
          la niñez migrante de Honduras y Guatemala basada en un sistema de
          indicadores confiable y preciso y con un enfoque sistémico. Ser un
          espacio binacional referente de la situación de los derechos de la
          niñez migrante de Honduras y Guatemala basada en un sistema de
          indicadores confiable y preciso y con un enfoque sistémico.
        </Text>

        <Text fontFamily="Montserrat Medium">
          <span style={{ fontWeight: "bold", fontFamily: "Montserrat Medium" }}>
            Antecedentes:
            <br />
            <br />
          </span>
          El observatorio de la Niñez Migrante surge en el marco de la
          implementación del Proyecto “Fortalecimiento de los Sistemas de
          Protección y Garantía de Derechos de la Niñez y Adolescencia Migrante
          en Guatemala y Honduras", ejecutada por el Programa de Atención,
          Movilización e Incidencia por la Niñez y Adolescencia –PAMI- en
          Guatemala, y la Coordinadora de Instituciones Privadas Pro Las Niñas,
          Niños, Adolescentes, Jóvenes y sus Derechos –COIPRODEN- en Honduras,
          que es financiado por el Ministerio Federal de Cooperación Económica y
          Desarrollo-BMZ- y por KinderNotHilfe -KNH- Alemania.
          <br />
          <br />
          La Red{" "}
          <span style={{ fontWeight: "bold", fontFamily: "Montserrat Medium" }}>
            COIPRODEN{" "}
          </span>
          representa a 26 ONG en Honduras a través de las cuales y con las que
          se ejecutan proyectos conjuntos. La base de la cooperación es la
          aplicación de la Convención de la ONU sobre los Derechos del Niño en
          Honduras. Trabaja intensamente a nivel macro y lleva a cabo
          actividades de presión en las grandes ciudades y a nivel del Estado
          nacional, mientras que las organizaciones miembros llegan a las
          comunidades con un trabajo directo con los grupos objetivo. COIPRODEN
          actúa así, como una referencia, tanto para las Organizaciones de la
          Sociedad Civil -OSC- como para las instituciones estatales, los niños
          y sus derechos.
        </Text>

        <Text fontFamily="Montserrat Medium">
          <span style={{ fontWeight: "bold", fontFamily: "Montserrat Medium" }}>
            PAMI{" "}
          </span>
          es una organización de sociedad civil que trabaja en Guatemala
          promoviendo los derechos de niñas, niños y adolescentes. Su misión la
          ha planteado en términos de “Acompañar la formación y ejercicio
          ciudadano de la niñez, adolescencia y juventud, en la transformación
          de su realidad para una vida digna”. A través de tres componentes de
          trabajo: Ciudadanía, Vida Digna e Inclusión, impulsa una agenda de
          derechos en áreas geográficas locales, nacionales y binacionales. Para
          ello tiene representatividad y gestión política en redes de sociedad
          civil y espacios de toma de decisión. Actualmente desarrolla su labor
          en 9 departamentos del país (39 municipios) y, con el proyecto
          mencionado, también impulsa los derechos de la niñez migrante
          hondureña y guatemalteca.
        </Text>

        <Text fontFamily="Montserrat Medium">
          <span style={{ fontWeight: "bold", fontFamily: "Montserrat Medium" }}>
            KNH y BMZ{" "}
          </span>
          integran la cooperación alemana dedicada a apoyar niños, niñas y
          jóvenes en extrema pobreza y en situación de riesgo, sus familias y
          comunidades a las que pertenecen. Ha acompañado a PAMI y COIPRODEN por
          más de una década en diferentes proyectos, entre ellos el Proyecto
          Binacional a favor de la niñez migrante.
        </Text>
      </Stack>
    </Box>
  );
};

export default ObservatoryPage;
