import React from "react";
import { Stack, Text, Divider } from "@chakra-ui/react";

const LastDate = ({ updateDate }) => {
  return (
    <Stack direction="column" margin="auto" maxWidth="800px" mt={10} mb={10}>
      <Divider
        data-html2canvas-ignore="true"
        orientation="horizontal"
        borderColor="black"
        borderWidth="1px"
      />

      <Text
        fontFamily="Oswald"
        fontSize="1.2em"
        textAlign="center"
      >{`Fecha de ultima actualización: ${updateDate}`}</Text>

      <Divider
        data-html2canvas-ignore="true"
        orientation="horizontal"
        borderColor="black"
        borderWidth="1px"
      />
    </Stack>
  );
};

export default LastDate;
