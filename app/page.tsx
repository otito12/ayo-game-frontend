"use client";
import { Button, Grid, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import Logo from "@/public/ayo-logo.svg";
import EdgeContainer from "./components/EdgeContainer";
import LandingBoard from "@/public/landing-board.svg";

export default function Home() {
  const theme = useTheme();
  return (
    <Grid container justifyItems={"center"} sx={{}}>
      <EdgeContainer size={950}>
        <Grid
          container
          alignContent={"center"}
          rowGap={2}
          justifyContent={"center"}
        >
          <Grid container alignItems={"center"} justifyContent={"center"}>
            <Typography variant="h3">Play</Typography>
            <Image
              src={Logo}
              style={{
                paddingLeft: "15px",
                paddingRight: "15px",
                width: "80px",
                paddingTop: "5px",
                objectFit: "contain",
              }}
              alt="ass"
            />
            <Typography variant="h3">Online on the #1 site!</Typography>
          </Grid>

          <Grid container justifyContent={"center"} columnGap={3}>
            <Grid item>
              <Typography>
                <strong>--,---- </strong>
                Games today
              </Typography>
            </Grid>

            <Grid item>
              <Typography>
                <strong>$ --,---- </strong>
                Won today
              </Typography>
            </Grid>
          </Grid>

          <Grid container justifyContent={"center"} columnGap={3}>
            <Grid item>
              <Button>
                <Grid item></Grid>
                <Grid container flex={1}>
                  <Typography>Play Online</Typography>
                  <Typography>Play with someone in the world</Typography>
                </Grid>
              </Button>
            </Grid>

            <Grid item>
              <Button>
                <Grid item></Grid>
                <Grid container flex={1}>
                  <Typography>Play Online</Typography>
                  <Typography>Play with someone in the world</Typography>
                </Grid>
              </Button>
            </Grid>
          </Grid>

          <Grid container>
            <Image
              src={LandingBoard}
              style={{
                objectFit: "contain",
                height: "550px",
              }}
              alt="ass"
            />
          </Grid>
        </Grid>
      </EdgeContainer>
    </Grid>
  );
}
