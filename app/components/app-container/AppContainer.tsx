"use client";
import React, { useEffect, useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import Grid from "@mui/material/Grid";
import SideNav from "../app-sidenav/AppSideNav";
import { useTheme } from "@mui/material";
import AppHeader from "../app-header/AppHeader";

export default function AppContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  // const router = useRouter();
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const theme = useTheme();
  const matchesBreakpoint = useMediaQuery(theme.breakpoints.down("md"));
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });
  });

  return (
    <Grid
      container
      direction={"column"}
      sx={{
        minHeight: "100vh",
        background: theme.palette.background.default,
      }}
    >
      <AppHeader />
      <Grid container sx={{ height: "100%", mt: "60px" }}>
        <SideNav />
        <Grid
          flex={1}
          container
          sx={{
            ml: matchesBreakpoint ? 0 : 11,
            zIndex: 0,
            height: "100%",
          }}
        >
          {children}
        </Grid>
      </Grid>
    </Grid>
  );
}
