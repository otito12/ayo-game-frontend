"use client";
import { Grid, Typography, useTheme } from "@mui/material";

export default function Home() {
  const theme = useTheme();
  return (
    <Grid>
      <Typography>Main landing page</Typography>
    </Grid>
  );
}
