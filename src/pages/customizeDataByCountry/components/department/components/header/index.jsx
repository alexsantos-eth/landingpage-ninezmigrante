// REACT
import React from "react";

// CHAKRA UI COMONENTS
import { Box, Stack, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box width="100%" padding="40px">
      {/* CONTAINER */}
      <Stack
        margin="auto"
        maxWidth="800px"
        direction="row"
        alignItems="flex-start"
        justifyContent="flex-start"
      >
        {/* NUMBER */}
        <Stack>
          <Text fontFamily="Oswald" fontSize="8em" lineHeight="1">
            2
          </Text>
        </Stack>

        {/* TITLE AND INSTRUCTIONS */}
        <Stack spacing="0px">
          <Text fontFamily="Oswald" fontSize="4xl">
            COMPARACIÓN POR DEPARTAMENTO
          </Text>
          <Text fontFamily="Arial" fontSize="sm">
            <span style={{ fontWeight: "bold" }}>Instrucciones: </span> Elija el
            período y luego arrastre al lienzo los 3 departamentos que desea
            comparar. Luego de mostrar su gráfico de comparación personalizada,
            puede guardar la imagen en su dispositivo haciendo clic en el botón
            “descargar imagen”.
          </Text>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Header;
