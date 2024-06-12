import Button, { ButtonProps } from "@mui/material/Button";
import React from "react";

interface AyoButton extends ButtonProps {
  label: string;
  icon?: React.ReactNode;
}

export default function AyoButton(props: AyoButton) {
  const { label, variant, color, icon, ...rest } = props;
  return (
    <Button
      disableElevation
      disableRipple
      variant={variant ?? "contained"}
      color={color ?? "primary"}
      {...rest}
      sx={{
        texTtransform: "none",
        columnGap: "5px",
      }}
    >
      {icon}
      {label}
    </Button>
  );
}
