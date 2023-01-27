import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    marineBlue: "#02295a",
    purplishBlue: "#473dff",
    pastelBlue: "#adbeff",
    lightBlue: "#bfe2fd",
    strawberryRed: "#ed3548",
    coolGray: "	#9699ab",
    lightGray: "#d6d9e6",
    magnolia: "#f0f6ff",
    alabaster: "#fafbff",
    white: "#ffffff",
  },
  breakpoints: {
    mobile: "768px",
  },
};

const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
