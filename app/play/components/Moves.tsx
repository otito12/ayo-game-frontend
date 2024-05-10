import { ThreeP } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";
import React from "react";

export default function Moves({ moves }: { moves: any }) {
  const indexCord = [
    "1 1",
    "1 2",
    "1 3",
    "1 4",
    "1 5",
    "1 6",
    "2 1",
    "2 2",
    "2 3",
    "2 4",
    "2 5",
    "2 6",
  ];

  return (
    <Grid container>
      {moves.map((move: any, index: number) => (
        <Grid container>
          <Typography>{`Player ${move.player} : ${
            indexCord[move.start_index]
          }`}</Typography>
        </Grid>
      ))}
    </Grid>
  );
}
