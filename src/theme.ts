import { DefaultTheme } from "styled-components";

export const darkTheme: DefaultTheme = {
  color: {
    accent: "#3882e5",
    border: "rgba(0, 0, 0, 0.1)",
    bg: "white",
    text: "rgba(0, 0, 0, 0.8)",
    board: "whitesmoke",
    header: "#3882e5",
    input: "rgba(255,255,255,0.4)",
  },
};

export const lightTheme: DefaultTheme = {
  color: {
    accent: "#3882e5",
    border: "rgba(0, 0, 0, 0.3)",
    bg: "white",
    text: "rgba(0, 0, 0, 0.8)",
    board: "white",
    header: "white",
    input: "rgba(243, 249, 255)",
  },
};
