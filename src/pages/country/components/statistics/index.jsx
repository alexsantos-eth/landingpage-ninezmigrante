import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Box, Stack, Text } from "@chakra-ui/react";

import Gender from "./components/gender";
import HeatMap from "./components/heatMap";
import AgeRanges from "./components/ageRanges";
import ReturnPath from "./components/returnPath";
import ReturnCountry from "./components/returnCountry";
import TravelCondition from "./components/travelCondition";
import DownloadTable from "./components/downloadTable";

const quarters = {
  q1: "Primer cuatrimestre",
  q2: "Segundo cuatrimestre",
  q3: "Tercer cuatrimestre",
};

const Statistics = ({ period, year, satisticsRef }) => {
  const { countryID } = useParams();
  const [total, setTotal] = useState(0);
  const [screenshot, setScreenshot] = useState(false);
  const [periodId, setPeriodId] = useState("");

  const handleDownloadImage = async () => setScreenshot(true);

  useEffect(() => {
    if (screenshot) {
      const take = async () => {
        const element = satisticsRef.current;
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

  useEffect(() => {
    if (period.length > 0 && year.length > 0) {
      const quads = {
        q1: "enero - abril",
        q2: "mayo - agosto",
        q3: "septiembre - diciembre",
      };
      fetch(
        `${
          import.meta.env.VITE_APP_API_URL
        }consultas/totalporpaisanioperiodo/${countryID}/${year}/${encodeURI(
          quads[period]
        )}`
      )
        .then((res) => res.json())
        .then((data) => {
          const periodData = data?.data?.[0];
          setPeriodId(periodData?._id ?? "");
          setTotal(periodData?.totalRegistros ?? 0);
        })
        .catch((err) => console.log(err));
    }
  }, [period, year]);

  return (
    <>
      <Box
        ref={satisticsRef}
        padding={{ base: "40px 24px", md: "80px 40px" }}
        bgColor="#eee"
      >
        <Stack
          margin="auto"
          maxWidth="750px"
          alignItems="center"
          justifyContent="space-between"
          gap={{ base: "24px", md: "40px" }}
          direction={{ base: "column", md: "row" }}
          marginBottom={{ base: "40px", md: "80px" }}
        >
          <Stack direction="column" spacing="16px">
            <Text
              lineHeight="1"
              fontFamily="Oswald"
              fontSize={{ base: "4xl", md: "6xl" }}
              textAlign={{ base: "center", md: "left" }}
            >
              {countryID === "guatemala" ? "GUATEMALA" : "HONDURAS"}
            </Text>
            <Text
              lineHeight="1"
              fontFamily="Oswald"
              fontSize={{ base: "2xl", md: "4xl" }}
              textAlign={{ base: "center", md: "left" }}
            >
              Total de niñez migrante retornanda
            </Text>
            <Text
              lineHeight="1"
              fontWeight="600"
              fontFamily="Times"
              fontSize={{ base: "xl", md: "2xl" }}
              textAlign={{ base: "center", md: "left" }}
            >
              {`${quarters[period] ?? ""} ${year ?? ""}`}
            </Text>
          </Stack>
          <Text
            fontFamily="Oswald"
            fontSize={{ base: "7xl", md: "8xl" }}
            lineHeight="1"
          >
            {total}
          </Text>
        </Stack>
        <Stack
          gap="40px"
          margin="auto"
          maxWidth="750px"
          justifyContent="space-between"
          direction={{ base: "column", md: "row" }}
          marginBottom={{ base: "40px", md: "60px" }}
          alignItems={{ base: "center", md: "flex-start" }}
        >
          <Gender period={period} year={year} />
          <TravelCondition period={period} year={year} />
          <AgeRanges period={period} year={year} />
        </Stack>
        <Stack
          margin="auto"
          maxWidth="750px"
          justifyContent="space-between"
          gap={{ base: "40px", md: "40px" }}
          direction={{ base: "column", md: "row" }}
          marginBottom={{ base: "40px", md: "60px" }}
          alignItems={{ base: "center", md: "flex-start" }}
        >
          <Stack spacing={{ base: "40px", md: "60px" }} direction="column">
            <ReturnPath period={period} year={year} />
            <ReturnCountry period={period} year={year} />
          </Stack>

          <HeatMap period={period} year={year} />
        </Stack>

        <Stack justifyContent="center" alignItems="center" marginBottom="40px">
          <Text fontFamily="Oswald" fontSize="2xl">
            {countryID === "guatemala"
              ? "Fuentes: SBS y/o IGM"
              : "Fuente: DINAF"}
          </Text>
        </Stack>

        {!screenshot && (
          <DownloadTable
            handleDownloadImage={handleDownloadImage}
            periodId={periodId}
            tableState
          />
        )}
      </Box>
    </>
  );
};

export default Statistics;
