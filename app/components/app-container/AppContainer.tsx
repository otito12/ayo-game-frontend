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
      }}
    >
      <AppHeader />
      <Grid
        container
        direction={"column"}
        flex={1}
        sx={{ height: "100%", mt: "60px" }}
      >
        <SideNav />
        <Grid
          container
          flex={1}
          sx={{
            ml: matchesBreakpoint ? 0 : 11,
            zIndex: 0,
          }}
        >
          {children}
        </Grid>
      </Grid>
    </Grid>
  );
}
