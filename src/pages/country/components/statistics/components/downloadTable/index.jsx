import React from "react";

import { Stack, Text, Button, Image, Divider } from "@chakra-ui/react";

import { DownloadIcon } from "@chakra-ui/icons";

import folder from "../../../../../../assets/folder.png";

const DownloadTable = ({ handleDownloadImage, periodId, tableState }) => {
  // DOWNLOAD
  const downloadXLS = () =>
    fetch(`${import.meta.env.VITE_APP_API_URL}/uploads/planillav1/${periodId}`)
      .then((res) => res.blob())
      .then((blob) => {
        var a = document.createElement("a");
        a.href = window.URL.createObjectURL(blob);
        a.download = `${periodId}.xlsx`;
        a.click();
      });

  return (
    <>
      <Stack
        gap="40px"
        margin="auto"
        maxWidth="750px"
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Divider
          orientation="horizontal"
          borderColor="black"
          borderWidth="1px"
        />

        {tableState ? (
          <Stack
            gap="24px"
            alignItems="center"
            justifyContent="center"
            direction={{ base: "column", md: "row" }}
          >
            <Image src={folder} height="50px" />
            <Text fontFamily="Oswald" fontSize="2xl">
              Descargar tabla XLS del período
            </Text>
            <Button
              size="lg"
              bgColor="#ccc"
              onClick={downloadXLS}
              rightIcon={<DownloadIcon />}
              fontFamily="Montserrat Medium"
              _hover={{ bgColor: "red.700", color: "white" }}
            >
              Descargar
            </Button>
          </Stack>
        ) : (
          <></>
        )}

        <Stack
          gap="24px"
          alignItems="center"
          justifyContent="center"
          direction={{ base: "column", md: "row" }}
        >
          <Image src={folder} height="50px" />
          <Text fontFamily="Oswald" fontSize="2xl" textAlign="center">
            Descargar infografía del período
          </Text>
          <Button
            size="lg"
            bgColor="#ccc"
            onClick={handleDownloadImage}
            rightIcon={<DownloadIcon />}
            fontFamily="Montserrat Medium"
            _hover={{ bgColor: "red.700", color: "white" }}
          >
            Descargar
          </Button>
        </Stack>
      </Stack>
    </>
  );
};

export default DownloadTable;
