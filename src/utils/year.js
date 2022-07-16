export const year = new Date().getFullYear();
export const getCurrentQuarter = () => {
  const month = new Date().getMonth();
  if (month >= 0 && month <= 3) {
    return 1;
  } else if (month > 3 && month <= 7) {
    return 2;
  } else if (month > 7) {
    return 3;
  } else {
    return 3;
  }
};
