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
      <Grid container sx={{ zIndex: 100 }}>
        <AppHeader />
      </Grid>
      <Grid item flex={1} sx={{ height: "100%" }}>
        <Grid
          container
          sx={{
            zIndex: 0,
            position: "fixed",
            overflow: "scroll",
            height: "100%",
          }}
        >
          <Grid
            flex={1}
            container
            sx={{
              ml: matchesBreakpoint ? 0 : 11,
            }}
          >
            {children}
          </Grid>
        </Grid>
        <Grid container sx={{ zIndex: 100 }}>
          <SideNav />
        </Grid>
      </Grid>
    </Grid>
  );
}
