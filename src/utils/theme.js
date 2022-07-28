import { extendTheme } from "@chakra-ui/react";

export const colors = {
  blue: {
    500: "#CAD7D8",
    700: "#3384A9",
  },
  heat: {
    guatemala: {
      100: "#6b8695",
      200: "#96afbc",
      300: "#bac6ce",
      400: "#afc5ae",
      500: "#cedec4",
      600: "#c9dbb6",
      700: "#b6d196",
      800: "#9bc265",
      900: "#92bd57",
    },
    honduras: {
      100: "#507986",
      200: "#78a1ae",
      300: "#9eb7c0",
      400: "#d4d6d4",
      500: "#b4b1b0",
      600: "#e2d8af",
      700: "#e2cf8b",
      800: "#dec466",
      900: "#ddb841",
    },
  },
  heatMin: {
    100: "#395760",
  },
  green: {
    500: "#85c355",
    700: "#75b841",
  },
  yellow: {
    500: "#e2af1d",
    700: "#e2af1d",
  },
};

export const theme = extendTheme({ colors });
