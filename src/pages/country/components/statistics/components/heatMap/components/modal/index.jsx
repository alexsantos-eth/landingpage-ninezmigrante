// REACT
import React, { useState, useEffect, useRef } from "react";

import { useParams } from "react-router-dom";

// CHAKRA UI COMPONENTS
import {
  Text,
  Modal,
  Stack,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Box,
} from "@chakra-ui/react";

//UTILS
import depName from "./utils";
import useFetch from "../../../../../../../../hooks/fetch";

// COMPONENTS
import ModalMapContent from "./components/modalMapContent";
import ModelContent from "./components/modalContent";
import DownloadTable from "../../../../components/downloadTable";

const MapModal = ({ modalDep, onCloseModal, year, period, country }) => {
  const countryID = useParams().countryID || country;
  const [depTotals, setDepTotals] = useState({});
  const [screenshot, setScreenshot] = useState(false);

  useFetch({
    url: "/consultas/totalpormunicipio/country/department?anio=selectedYear&periodRange",
    year,
    periodStart: period[0],
    periodEnd: period[1],
    department: depName[modalDep],
    country: countryID,
    resolve: (data) => {
      let depLocalTotals = {};
      data?.data?.forEach((stats) => {
        depLocalTotals[stats._id] = stats.total;
      });
      setDepTotals(depLocalTotals);
    },
  });

  const onCloseChange = () => {
    setDepTotals({});
    onCloseModal();
  };

  const handleDownloadImage = async () => setScreenshot(true);

  useEffect(() => {
    if (screenshot) {
      const take = async () => {
        const element = satisticsRef.current;
        window.scrollTo(0, 0);
        const html2canvas = (await import("html2canvas")).default;

        const canvas = await html2canvas(element);

        const data = canvas.toDataURL("image/png");
        const link = document.createElement("a");

        if (typeof link.download === "string") {
          link.href = data;
          link.download = "infografia.png";

          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        } else {
          window.open(data);
        }

        setScreenshot(false);
      };
      take();
    }
  }, [screenshot]);

  const satisticsRef = useRef(null);

  return (
    <Modal
      size="2xl"
      isCentered
      isOpen={modalDep.length !== 0}
      onClose={onCloseChange}
    >
      <ModalOverlay backdropFilter="blur(4px)" bgColor="rgba(0, 0, 0, 0.5)" />
      <ModalContent
        maxHeight="calc(100vh - 50px)"
        overflowY="auto"
        margin="24px"
        ref={satisticsRef}
        padding="24px 12px 32px 12px"
        bgColor="rgba(255, 255, 255, 0.9)"
      >
        <ModalHeader fontFamily="Oswald" fontWeight="500" fontSize="4xl">
          {depName[modalDep]}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack
            width="100%"
            spacing={"32px"}
            alignItems="center"
            justifyContent="space-between"
            marginBottom="40px"
            direction={{ base: "column", md: "row" }}
          >
            <Stack
              alignItems="center"
              justifyContent="center"
              width={{ base: "100%", md: "50%" }}
            >
              <ModalMapContent modalDep={modalDep} country={country} />
            </Stack>
            <Stack
              spacing="24px"
              alignItems="center"
              justifyContent="center"
              width={{ base: "100%", md: "50%" }}
            >
              <ModelContent
                year={year}
                period={period}
                country={country}
                dep={depName[modalDep]}
              />
              <Stack
                width="100%"
                direction="column"
                alignItems="center"
                justifyContent="space-between"
                maxHeight={{ base: "100px", md: "100%" }}
                padding={{ base: "0px 16px 0px 0px", md: "0px" }}
              >
                {depTotals &&
                  Object.keys(depTotals).length > 0 &&
                  Object.keys(depTotals)
                    .sort((a, b) => a.localeCompare(b))
                    .map((dep) => (
                      <Stack
                        key={dep}
                        width="100%"
                        height="100%"
                        direction="row"
                        alignItems="center"
                        justifyContent="space-between"
                      >
                        <Text fontFamily="Montserrat Medium">{dep}:</Text>
                        <Text fontFamily="Montserrat Medium">
                          {depTotals[dep]}
                        </Text>
                      </Stack>
                    ))}
              </Stack>
            </Stack>
          </Stack>
          {!screenshot && (
            <DownloadTable
              satisticsRef={satisticsRef}
              handleDownloadImage={handleDownloadImage}
              periodId={""}
            />
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default MapModal;
