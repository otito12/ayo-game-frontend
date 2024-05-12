import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  typography: {
    fontSize: 12,
  },
  palette: {
    mode: "light",
    background: {
      default: "#302E2B",
      paper: "#3C3B38",
    },
    primary: {
      main: "#262522",
    },
    secondary: {
      main: "#f50057",
    },
    success: {
      main: "#23b92a",
    },
    text: {
      primary: "rgba(255,255,255,0.87)",
      secondary: "rgba(255,255,255,0.54)",
    },
  },
});

// Texts: #161032
