// REACT
import React, { useEffect } from "react";

// CHAKRA UI COMPONENTS
import { Box, Stack } from "@chakra-ui/react";

import Slider from "./components/slider";

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
        <Slider />
      </Stack>
    </Box>
  );
};

export default OrganizationsPage;
