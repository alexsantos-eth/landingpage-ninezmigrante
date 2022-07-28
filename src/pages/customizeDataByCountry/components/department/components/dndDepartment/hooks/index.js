import { useEffect } from "react";
import { updateSection } from "../tools";

export const usePeriodReload = ({
  period,
  countryID,
  setDepList,
  depDataList,
  setDepDataList,
  currentYear,
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
          currentYear,
        });
      }
    });
  }, [period, currentYear]);
};