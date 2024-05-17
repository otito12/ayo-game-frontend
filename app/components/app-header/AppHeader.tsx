import { Button, Grid, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import Logo from "@/public/ayo-logo.svg";
import React from "react";
import { useRouter } from "next/navigation";

export default function AppHeader() {
  const theme = useTheme();
  const router = useRouter();
  return (
    <Grid
      container
      pl={1}
      pr={1}
      sx={{
        background: theme.palette.background.paper,
        height: "60px",
        position: "fixed",
        zIndex: 100,
      }}
      alignContent={"center"}
    >
      <Button disableRipple sx={{ p: 0 }} onClick={() => router.push("/")}>
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
      </Button>

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
