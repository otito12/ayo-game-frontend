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
        ".NavButtonIcon": {
          background: selectedIndex?.match(menuItem.link)
            ? theme.palette.secondary.main
            : "#5A5A5A",
          height: "40px",
          width: "40px",
          borderRadius: "8px",
          m: 1,
          transition: "all 0.2s",
        },
        ".MuiTypography-root": {
          fontSize: 12,
          color: selectedIndex?.match(menuItem.link)
            ? theme.palette.primary.contrastText
            : "#8D8D8D",
        },
        ":hover": {
          ".NavButtonIcon": {
            background: selectedIndex?.match(menuItem.link)
              ? theme.palette.secondary.main
              : "#ffffff85",
            height: "45px",
            width: "45px",
          },
          ".MuiTypography-root": {
            color: selectedIndex?.match(menuItem.link)
              ? theme.palette.primary.contrastText
              : "#ffffff95",
          },
        },
      }}
      onClick={() => router.push(menuItem.link)}
    >
      <Grid
        container
        justifyContent={"center"}
        sx={{
          height: "80px",
        }}
      >
        <Grid
          container
          className="NavButtonIcon"
          justifyContent={"center"}
          alignContent={"center"}
        >
          <menuItem.icon />
        </Grid>
        <Grid container justifyContent={"center"}>
          <Typography>{menuItem.label}</Typography>
        </Grid>
      </Grid>
    </Button>
  );
}
