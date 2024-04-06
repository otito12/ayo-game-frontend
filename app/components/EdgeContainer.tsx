import Grid from "@mui/material/Grid";
import React from "react";

export default function EdgeContainer({
  children,
  size = 1330,
}: {
  children: React.ReactNode;
  size?: number | string;
}) {
  return (
    <Grid container justifyContent={"center"} sx={{ height: "100%" }}>
      <Grid container maxWidth={`${size}px`} sx={{ height: "100%" }}>
        {children}
      </Grid>
    </Grid>
  );
}
