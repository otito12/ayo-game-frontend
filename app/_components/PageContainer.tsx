import Grid, { GridProps } from "@mui/material/Grid";
import React from "react";
import "./PageContainer.css";

interface PageContainerProps extends GridProps {
  size?: number | string;
}

export default function PageContainer(props: PageContainerProps) {
  const { size, children, ...rest } = props;
  return (
    <Grid container justifyContent={"center"} sx={{ height: "100%" }}>
      <Grid
        container
        className="page-container"
        maxWidth={`${size ?? 1330}px`}
        {...rest}
      >
        {children}
      </Grid>
    </Grid>
  );
}
