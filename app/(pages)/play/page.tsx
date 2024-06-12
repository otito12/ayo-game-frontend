import { Grid, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import LandingBoard from "@/public/board.png";
import PageContainer from "../../_components/PageContainer";
import LaunchPanel from "./_components/LaunchPanel";
import MatchTable from "./_components/matchtable/MatchTable";

export default function page() {
  return (
    <Grid
      container
      direction={"column"}
      justifyItems={"center"}
      alignItems={"center"}
    >
      <PageContainer size={950} alignContent={"start"}>
        <Typography variant="h4" fontWeight={"bold"} sx={{}}>
          Play
        </Typography>
        <Grid container columnGap={2} rowGap={2}>
          <Grid
            container
            display={{ xs: "none", md: "flex" }}
            flex={1}
            alignItems={"center"}
          >
            <Image
              src={LandingBoard}
              style={{
                objectFit: "contain",
                maxHeight: "330px",
                width: "100%",
              }}
              alt="ass"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <LaunchPanel />
          </Grid>
        </Grid>
        <MatchTable />
      </PageContainer>
    </Grid>
  );
}
