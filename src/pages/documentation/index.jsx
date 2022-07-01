import React, { useEffect } from "react";

import { Box, Stack, Text } from "@chakra-ui/react";

const DocumentationPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <Box padding={{ base: "40px 24px", md: "80px 40px" }} bgColor="blue.500">
      <Stack
        gap="40px"
        alignItems="center"
        justifyContent="center"
        direction={{ base: "column", md: "row" }}
      >
        <Stack justifyContent="center" alignItems="center" maxWidth="340px">
          <Text textAlign="center" fontFamily="Montserrat Medium">
            Decreto Número 44-16 El Congreso de La Republica de Guatemala
          </Text>
          <iframe src="/codigo.pdf" height="400px" width="340px"></iframe>
        </Stack>

        <Stack justifyContent="center" alignItems="center" maxWidth="340px">
          <Text textAlign="center" fontFamily="Montserrat Medium">
            Protocolo Nacional de Atención y Protección Integral de la Niñez
          </Text>
          <iframe
            height="400px"
            width="340px"
            src="/protocolo_marzo.pdf"
          ></iframe>
        </Stack>

        <Stack justifyContent="center" alignItems="center" maxWidth="340px">
          <Text textAlign="center" fontFamily="Montserrat Medium">
            Protocola Nacional para la Recepción y Atención de Niñez y
            Adolescencia
          </Text>
          <iframe
            height="400px"
            src="/protocolo_nacional.pdf"
            width="340px"
          ></iframe>
        </Stack>
      </Stack>
    </Box>
  );
};

export default DocumentationPage;
