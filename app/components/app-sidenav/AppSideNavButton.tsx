import { Button, Grid, Typography, colors, useTheme } from "@mui/material";
import { redirect, useRouter } from "next/navigation";
import React from "react";

export default function AppSideNavButton({
  menuItem,
  selectedIndex,
}: {
  menuItem: any;
  selectedIndex: any;
}) {
  const theme = useTheme();
  const router = useRouter();
  return (
    <Button
      fullWidth
      key={menuItem.label}
      disableRipple
      sx={{
        textTransform: "none",
      }}
      onClick={() => router.push(menuItem.link)}
    >
      <Grid container justifyContent={"center"}>
        <Grid
          container
          justifyContent={"center"}
          alignContent={"center"}
          sx={{
            background: selectedIndex?.match(menuItem.link)
              ? theme.palette.secondary.main
              : "#5A5A5A",
            height: "40px",
            width: "40px",
            borderRadius: "8px",
            m: 1,
          }}
        >
          <menuItem.icon />
        </Grid>
        <Grid container justifyContent={"center"}>
          <Typography
            sx={{
              fontSize: 12,
              color: selectedIndex?.match(menuItem.link)
                ? theme.palette.primary.contrastText
                : "#8D8D8D",
            }}
          >
            {menuItem.label}
          </Typography>
        </Grid>
      </Grid>
    </Button>
  );
}
