import { Grid } from "@mui/material";
import React from "react";
import Board from "./components/Board";
import EdgeContainer from "../components/EdgeContainer";

export default function page() {
  return (
    <Grid container>
      <Board />
    </Grid>
  );
}
