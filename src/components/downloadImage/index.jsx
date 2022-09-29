import React, { useState, useEffect } from "react";

import { Stack, Text, Button, Image } from "@chakra-ui/react";
import { DownloadIcon } from "@chakra-ui/icons";
import folder from "../../assets/folder.png";
import LoadSplash from "../loadSplash";

const DownloadImage = ({ label, containerRef, onSS = (screenshot) => {} }) => {
  // STATE
  const [screenshot, setScreenshot] = useState(false);
  const [loading, setLoading] = useState(false);
  const [blur, setBlur] = useState(false);
  const handleDownloadImage = async () => setScreenshot(true);

  // TAKE SCREEN SHOOT
  useEffect(() => {
    onSS(screenshot);
    if (screenshot) {
      const take = async () => {
        setBlur(true);
        const element = containerRef.current;
        const html2canvas = (await import("html2canvas")).default;
        const canvas = await html2canvas(element);
        const data = canvas.toDataURL("image/jpeg");

        setLoading(true);

        const jsPDF = (await import("jspdf")).default;
        const pdf = new jsPDF({
          format: [canvas.width, canvas.height],
        });
        const imgProps = pdf.getImageProperties(data);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

        pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight, undefined, "FAST");
        await pdf.save("download.pdf", { returnPromise: true });
        setLoading(false);
        setScreenshot(false);
        setBlur(false);
      };
      take();
    }
  }, [screenshot]);

  return (
    <>
      {!screenshot ? (
        <Stack
          gap="24px"
          alignItems="center"
          justifyContent="center"
          direction={{ base: "column", md: "row" }}
        >
          {label.length > 0 && (
            <>
              <Image src={folder} height="50px" />
              <Text fontFamily="Oswald" fontSize="2xl" textAlign="center">
                {label}
              </Text>
            </>
          )}
          <Button
            size="lg"
            bgColor="#ccc"
            onClick={handleDownloadImage}
            rightIcon={<DownloadIcon />}
            fontFamily="Montserrat Medium"
            _hover={{ bgColor: "green.700", color: "white" }}
          >
            Descargar
          </Button>
        </Stack>
      ) : (
        <></>
      )}
      <LoadSplash
        title="Generando infografía..."
        description="Espera un momento, se esta creando el documento para descargar."
        setBlur={blur}
        open={loading}
      />
    </>
  );
};

export default DownloadImage;
