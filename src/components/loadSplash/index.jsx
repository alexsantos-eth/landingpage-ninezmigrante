import React from "react";
import { Box, Text, Spinner, Stack } from "@chakra-ui/react";

const LoadSplash = ({ title, description, open }) => {
  return (
    <Box
      style={{
        top: -10,
        left: 0,
        zIndex: 1000,
        width: "100vw",
        height: "101vh",
        display: "flex",
        position: "fixed",
        alignItems: "center",
        opacity: open ? 1 : 0,
        justifyContent: "center",
        backdropFilter: "blur(5px)",
        transition: "opacity 0.5s ease",
        backgroundColor: "rgba(0,0,0,0.5)",
        pointerEvents: open ? "all" : "none",
      }}
    >
      <Stack
        p={10}
        maxW={400}
        bgColor="#fff"
        borderRadius={12}
        direction="column"
        alignItems="center"
      >
        <Box mb={5}>
          <Text fontSize="1.5em" fontFamily="Oswald">
            {title}
          </Text>
          <Text fontSize="1em" fontFamily="Montserrat" lineHeight={1.2}>
            {description}
          </Text>
        </Box>
        <Spinner size="lg" />
      </Stack>
    </Box>
  );
};

export default LoadSplash;
