"use client";
import { Grid, Typography } from "@mui/material";
import React from "react";
import "./LaunchPanel.css";
import Image from "next/image";
import Logo from "@/public/ayo-logo.svg";

export default function LaunchPanel() {
  return (
    <Grid
      container
      className="launch-panel"
      direction="column"
      sx={{
        background: "#262522",
        height: "330px",
        borderRadius: "6px",
      }}
    >
      <Grid
        container
        alignItems={"center"}
        justifyContent={"center"}
        sx={{
          background: "#3C3B38",
          p: 0.5,
          borderTopLeftRadius: "6px",
          borderTopRightRadius: "6px",
        }}
      >
        <Typography variant="h6">Play</Typography>
        <Image
          src={Logo}
          style={{
            paddingLeft: "5px",
            paddingRight: "5px",
            width: "40px",
            paddingTop: "5px",
            objectFit: "contain",
          }}
          alt="ass"
        />
      </Grid>
      <Grid container direction="column"></Grid>
    </Grid>
  );
}
