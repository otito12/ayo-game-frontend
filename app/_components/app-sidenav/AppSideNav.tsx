"use client";
import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import AppSideNavButton from "./AppSideNavButton";
import { navOptions } from "./AppSideNavOptions";
import { usePathname } from "next/navigation";

export default function AppSideNav() {
  const path = usePathname();
  const theme = useTheme();
  const matchesBreakpoint = useMediaQuery(theme.breakpoints.down("md"));
  const [selectedIndex, setSelectedIndex] = useState(path);

  useEffect(() => {
    setSelectedIndex(path);
  }, [path]);

  return (
    <Grid
      sx={{
        height: "100%",
        width: "85px",
        position: "fixed",
        background: theme.palette.background.paper,
        p: 1,
        zIndex: 100,
      }}
      justifyContent={"center"}
      display={matchesBreakpoint ? "none" : "flex"}
    >
      <Typography>
        {navOptions.map((menuItem: any, index: number) => (
          <AppSideNavButton
            key={index}
            menuItem={menuItem}
            selectedIndex={selectedIndex}
          />
        ))}
      </Typography>
    </Grid>
  );
}
