"use client";
import { Button, Grid, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import Logo from "@/public/ayo-logo.svg";
import EdgeContainer from "./components/EdgeContainer";
import LandingBoard from "@/public/landing-board.svg";
import PublicIcon from "@mui/icons-material/Public";
import ComputerIcon from "@mui/icons-material/Computer";

export default function Home() {
  const theme = useTheme();
  return (
    <Grid container justifyItems={"center"} p={3}>
      <EdgeContainer size={950}>
        <Grid
          container
          alignContent={"center"}
          rowGap={5}
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

          <Grid
            container
            justifyContent={"center"}
            columnGap={4}
            sx={{
              width: "650px",
              alignSelf: "center",
              ".MuiButton-root": { textTransform: "none", borderRadius: "8px" },
            }}
          >
            <Grid container flex={1} rowGap={5} justifyContent={"end"}>
              <Typography variant="h5">
                <strong>--,---- </strong>
                Games today
              </Typography>
              <Button color="secondary" variant="contained">
                <Grid container alignItems={"center"}>
                  <PublicIcon color="primary" sx={{ fontSize: 60 }} />
                  <Grid container flex={1} pl={2}>
                    <Typography variant="h5" color="primary" textAlign={"left"}>
                      Play Online
                      <Typography color="primary">
                        Play with someone in the world
                      </Typography>
                    </Typography>
                  </Grid>
                </Grid>
              </Button>
            </Grid>
            <Grid container rowGap={5} flex={1}>
              <Typography variant="h5" textAlign={"left"}>
                <strong>$ --,---- </strong>
                Won today
              </Typography>
              <Button
                sx={{ background: "#3C3B38" }}
                color="secondary"
                variant="contained"
              >
                <Grid container alignItems={"center"}>
                  <ComputerIcon color="secondary" sx={{ fontSize: 60 }} />
                  <Grid container flex={1} pl={2}>
                    <Typography variant="h5" textAlign={"left"}>
                      Play Online
                      <Typography>Play with someone in the world</Typography>
                    </Typography>
                  </Grid>
                </Grid>
              </Button>
            </Grid>
          </Grid>

          <Grid container justifyContent={"center"} pr={2}>
            <Image
              src={LandingBoard}
              style={{
                objectFit: "contain",
                height: "450px",
                width: "100%",
              }}
              alt="ass"
            />
          </Grid>
        </Grid>
      </EdgeContainer>
    </Grid>
  );
}
