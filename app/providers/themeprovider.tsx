"use client";
import { lightTheme } from "../themes/lightmode";
import { ThemeProvider } from "@mui/material/styles";
import { SnackbarProvider, VariantType, useSnackbar } from "notistack";

export default function Themer({ children }: { children: React.ReactNode }) {
  return (
    <SnackbarProvider maxSnack={3} autoHideDuration={2500}>
      <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>
    </SnackbarProvider>
  );
}
