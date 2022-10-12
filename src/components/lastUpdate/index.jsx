import React from "react";
import { Stack, Text, Divider } from "@chakra-ui/react";

const LastDate = ({ updateDate, isScreenShotTime, sources = <></> }) => {
  return (
    <Stack
      direction="column"
      margin="auto"
      maxWidth="800px"
      mt={10}
      mb={10}
      style={{
        padding: isScreenShotTime ? "0px 0 20px 0" : "5px",
        borderBottom: "2px solid #222",
        borderTop: "2px solid #222",
      }}
    >
      {sources}
      <Text
        fontFamily="Oswald"
        fontSize="1.4em"
        textAlign="center"
      >{`Fecha de última actualización: ${updateDate}`}</Text>
    </Stack>
  );
};

export default LastDate;
