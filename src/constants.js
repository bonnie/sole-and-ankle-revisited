export const COLORS = {
  white: "0deg 0% 100%",
  gray: {
    100: "185deg 5% 95%",
    300: "190deg 5% 80%",
    500: "196deg 4% 60%",
    700: "220deg 5% 40%",
    900: "220deg 3% 20%",
  },
  primary: "340deg 65% 47%",
  secondary: "240deg 60% 63%",
};

const WEIGHTS = {
  normal: 500,
  medium: 600,
  bold: 800,
};

// in rem
const BREAKPOINTS = {
  mobileMax: 600 / 16,
  tabletMax: 950 / 16,
  laptopMax: 1300 / 16,
};

const QUERIES = {
  phoneAndSmaller: `(max-width: ${BREAKPOINTS.mobileMax}rem)`,
  tabletAndSmaller: `(max-width: ${BREAKPOINTS.tabletMax}rem)`,
  laptopAndSmaller: `(max-width: ${BREAKPOINTS.laptopMax}rem)`,
};

export const THEME = {
  weights: WEIGHTS,
  queries: QUERIES,
};
