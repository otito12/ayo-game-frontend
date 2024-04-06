"use client";
import { Button, Grid } from "@mui/material";
import React, { useState } from "react";

export default function Cell({
  worldHeight,
  worldWidth,
  index,
  setSelected,
  selected,
  count,
  hintHighlighted,
}: {
  worldHeight: string;
  worldWidth: string;
  index: number;
  setSelected: Function;
  selected: number;
  count: number;
  hintHighlighted: number;
}) {
  return (
    <div
      style={{
        height: `${Number(worldHeight?.slice(0, -2)) / 2}px`,
        width: `${Number(worldWidth?.slice(0, -2)) / 6}px`,
        // border: "1px solid black",
      }}
    >
      <Grid
        container
        sx={{
          height: "100%",
          background:
            selected == index
              ? "#fff6e0"
              : hintHighlighted == 1
              ? "#ebebeb"
              : hintHighlighted == 2
              ? "#ebebeb"
              : hintHighlighted == 3
              ? "#dedede"
              : hintHighlighted == 4
              ? "#d1c099"
              : "white",
          border: "1px solid",
          cursor: "pointer",
        }}
        onClick={() => {
          // if (index > 5) {
          //   if (selected == index) {
          //     setSelected(-1);
          //   } else {
          //     setSelected(index);
          //   }
          // }
          if (selected == index) {
            setSelected(-1);
          } else {
            setSelected(index);
          }
        }}
        alignItems={"center"}
        justifyContent={"center"}
      >
        {index}
        <br />
        {count}
        {selected == index && (
          <Grid container justifyContent={"center"}>
            <Button>Accept Move</Button>
          </Grid>
        )}
      </Grid>
    </div>
  );
}
