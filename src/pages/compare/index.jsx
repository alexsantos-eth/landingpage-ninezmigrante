import React, { useState, useRef, useEffect } from "react";

import { Box, Stack } from "@chakra-ui/react";

import SelectOptions from "./components/selectOptions";
import Statistics from "./components/statistics";
import DownloadTable from "../country/components/statistics/components/downloadTable";

const ComparePage = () => {
  const [options, setOptions] = useState({
    1: { country: "", year: "", period: "" },
    2: { country: "", year: "", period: "" },
  });
  const [screenshot, setScreenshot] = useState(false);

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

  const satisticsRef = useRef(null);

  const onChange = (id, data) => {
    setOptions((prevOptions) => ({ ...prevOptions, [id]: data }));
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <SelectOptions onChange={onChange} satisticsRef={satisticsRef} />
      {Object.values(options).every((option) =>
        Object.values(option).every((value) => value !== "")
      ) && (
        <Box bgColor="#eee" padding={{ base: "40px 24px", md: "80px 40px" }}>
          <Stack
            gap="40px"
            ref={satisticsRef}
            alignContent="center"
            justifyContent="center"
            marginBottom="60px"
            direction={{ base: "column", md: "row" }}
          >
            <Statistics data={options["1"]} />
            <Statistics data={options["2"]} />
          </Stack>
          {!screenshot && (
            <DownloadTable
              handleDownloadImage={handleDownloadImage}
              periodId={""}
            />
          )}
        </Box>
      )}
    </>
  );
};

export default ComparePage;
