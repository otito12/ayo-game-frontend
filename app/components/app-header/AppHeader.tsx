import { Button, Grid, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import Logo from "@/public/ayo-logo.svg";
import React from "react";

export default function AppHeader() {
  const theme = useTheme();
  return (
    <Grid
      container
      pl={1}
      pr={1}
      sx={{
        background: theme.palette.background.paper,
        height: "60px",
      }}
      alignContent={"center"}
    >
      <Image
        src={Logo}
        style={{
          paddingLeft: "2px",
          width: "65px",
          paddingTop: "5px",
          objectFit: "contain",
        }}
        alt="ass"
      />

      <Grid
        container
        flex={1}
        justifyContent={"end"}
        alignItems={"center"}
        columnGap={2}
      >
        <Button sx={{ textTransform: "none" }}>
          <Typography>Sign In</Typography>
        </Button>
        <Button
          variant="contained"
          color="secondary"
          sx={{ textTransform: "none" }}
        >
          <Typography color={"secondary.contrastText"}>Register</Typography>
        </Button>
      </Grid>
    </Grid>
  );
}
