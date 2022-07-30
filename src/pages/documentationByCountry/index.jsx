import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/fetch";
import { Stack, Button, Text, Box } from "@chakra-ui/react";
import { DownloadIcon } from "@chakra-ui/icons";

const DocumentationByCountry = () => {
  const { countryID } = useParams();
  const [dataByCountry, setDataByCountry] = useState([
    { nombre: "test", descripcion: "desc" },
    { nombre: "test", descripcion: "desc" },
  ]);

  const downloadDocument = (id) => () =>
    fetch(`${import.meta.env.VITE_APP_API_URL}/uploads/recursos/${id}`)
      .then((res) => res.blob())
      .then((blob) => {
        var a = document.createElement("a");
        a.href = window.URL.createObjectURL(blob);
        a.download = `${id}.xlsx`;
        a.click();
      });

  useFetch({
    url: "/recurso/public",
    country: countryID,
    resolve: (data) => {
      setDataByCountry(
        data?.recursos?.filter(
          (source) => source?.categoria?.nombre === countryID?.toUpperCase()
        ) ?? []
      );
    },
  });

  return (
    <Box width="100%" padding="40px">
      <Stack
        spacing={4}
        width="100%"
        margin="auto"
        maxWidth="800px"
        direction="column"
      >
        {dataByCountry.map((source) => (
          <Stack
            width="100%"
            spacing={8}
            direction={{ base: "column", md: "row" }}
            key={source.id}
            alignItems="center"
            justifyContent="space-between"
          >
            <Stack direction="column" spacing={0}>
              <Text fontFamily="Oswald" fontSize="2xl">
                {source.nombre}
              </Text>
              <Text fontFamily="Montserrat Medium">{source.descripcion}</Text>
            </Stack>
            <Button
              size="lg"
              bgColor="#ccc"
              rightIcon={<DownloadIcon />}
              fontFamily="Montserrat Medium"
              onClick={downloadDocument(source.id)}
              _hover={{ bgColor: "green.700", color: "white" }}
            >
              Descargar
            </Button>
          </Stack>
        ))}
      </Stack>
    </Box>
  );
};

export default DocumentationByCountry;
