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
        mt: 0.5,
        textTransform: "none",
        color:
          selectedIndex?.match(menuItem.link) &&
          `${theme.palette.primary.contrastText} !important`,
        ":hover": {
          background: selectedIndex?.match(menuItem.link) && `#ffffff20`,
        },
      }}
      onClick={() => router.push(menuItem.link)}
    >
      <Grid container justifyContent={"center"}>
        <Grid
          container
          justifyContent={"center"}
          alignContent={"center"}
          sx={{
            background: theme.palette.secondary.main,
            height: "30px",
            width: "30px",
            borderRadius: "5px",
            m: 1,
          }}
        >
          <menuItem.icon />
        </Grid>
        <Typography sx={{ fontSize: 14 }}>{menuItem.label}</Typography>
      </Grid>
    </Button>
  );
}
