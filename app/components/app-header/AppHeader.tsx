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
      }}
    >
      <Image
        src={Logo}
        style={{
          width: "60px",
          paddingTop: "5px",
          objectFit: "contain",
        }}
        alt="ass"
      />
      <Grid container flex={1}></Grid>
      <Button>
        <Typography>Sign In</Typography>
      </Button>
      <Button variant="contained" color="secondary">
        <Typography>Register</Typography>
      </Button>
    </Grid>
  );
}
