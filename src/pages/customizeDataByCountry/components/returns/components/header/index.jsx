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
        alignItems="center"
        justifyContent="center"
      >
        {/* NUMBER */}
        <Stack>
          <Text fontFamily="Oswald" fontSize="8em" lineHeight="1">
            3
          </Text>
        </Stack>

        {/* TITLE AND INSTRUCTIONS */}
        <Stack spacing="0px">
          <Text fontFamily="Oswald" fontSize="4xl">
            DEPARTAMENTOS CON MÁS O MENOS CANTIDAD DE RETORNADOS
          </Text>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Header;
