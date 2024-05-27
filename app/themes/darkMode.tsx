import { createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
  typography: {
    fontSize: 12,
    allVariants: {
      color: "rgba(255,255,255,0.87)",
    },
  },
  palette: {
    mode: "dark",
    background: {
      default: "#302E2B",
      paper: "#262522",
    },
    primary: {
      main: "#262522",
    },
    secondary: {
      main: "#FFD600",
      contrastText: "rgba(0, 0, 0, 0.87)",
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
