export const devices = {
  onlyMobile: "(max-width:767px)",
  mobile: "(max-width:1023px)", // Till i-pad
  onlyIPad: "(min-width: 768px) and (max-width: 1023px)",
  desktop: "(min-width:1024px)", // i-pad pro and above
  onlyDesktop: "(min-width:1025px)",
};

export const darkTheme = {
  colors: {
    backgroundPrimary: "#07172b", //deep blue
    backgroundAccent: "#243b58", //light blue
    backgroundSecondary: "#074c4c", //green
    backgroundSecondaryDim: "#074c4c75",
    backgroundWhite: "#cbe3f9",
    backgroundDimBlue: "#4d6b976b",
    textPrimary: "#5ebbe8", //blue, TODO:try yellow #fda403, #72f8ff
    textWhite: "#fff",
    textBlack: "#000",
    textGray: "#9c9da9",
    florescentBlue: "#00f3ff",
  },
  font: {
    em_4: "0.4em",
    em_6: "0.6em",
    em_8: "0.8em",
    em_10: "1em",
    em_12: "1.2em",
    em_14: "1.4em",
    em_20: "2em",
    em_25: "2.5em",
    em_30: "3em",
    em_36: "3.6em",
    em_40: "4em",
    em_50: "5em",
  },
};

export const lightTheme = {
  colors: {
    backgroundPrimary: "",
    backgroundAccent: "",
    backgroundSecondary: "",
    backgroundSecondaryDim: "74c4c75",
    backgroundWhite: "",
    textPrimary: "",
    textWhite: "#fff",
    textBlack: "#000",
  },
  font: {
    em_4: "0.4em",
    em_6: "0.6em",
    em_8: "0.8em",
    em_10: "1em",
    em_12: "1.2em",
    em_14: "1.4em",
    em_20: "2em",
    em_25: "2.5em",
    em_30: "3em",
    em_40: "4em",
    em_50: "5em",
  },
};
