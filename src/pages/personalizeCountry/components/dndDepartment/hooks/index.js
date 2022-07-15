import { useEffect } from "react";
import { updateSection } from "../tools";

export const useSvgPaths = (countryID, depDataList) => {
  useEffect(() => {
    const svg = document.querySelectorAll(".depSVG");
    if (svg) {
      svg.forEach((el) => {
        const bbox = el.getBBox();
        const viewBox = [bbox.x, bbox.y, bbox.width, bbox.height].join(" ");
        el.setAttribute("viewBox", viewBox);
      });
    }
  }, [countryID, depDataList]);
};

export const usePeriodReload = ({
  period,
  countryID,
  setDepList,
  depDataList,
  setDepDataList,
}) => {
  useEffect(() => {
    depDataList.forEach((data, index) => {
      if (data.name?.length) {
        updateSection({
          id: index,
          dep: data.id,
          period,
          countryID,
          setDepDataList,
          setDepList,
        });
      }
    });
  }, [period]);
};
