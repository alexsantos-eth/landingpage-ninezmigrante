import { extendTheme } from "@chakra-ui/react";

export const colors = {
  blue: {
    500: "#CAD7D8",
    700: "#3384A9",
  },
  heat: {
    100: "#507986",
    200: "#78a1ae",
    300: "#9eb7c0",
    400: "#d4d6d4",
    500: "#b4b1b0",
    600: "#c6a79c",
    700: "#bc8976",
    800: "#b36951",
    900: "#a84a2d",
  },
  heatMin: {
    100: "#395760",
  },
  red: {
    500: "#CA7450",
    700: "#75b841",
  },
  yellow: {
    500: "#e2af1d",
    700: "#e2af1d",
  },
};

export const theme = extendTheme({ colors });
