"use client";
import "./MatchTable.css";
import { Grid, IconButton, Typography, useTheme } from "@mui/material";
import { DataGrid, GridToolbarContainer } from "@mui/x-data-grid";
import React from "react";
import { useState } from "react";
import LoadingSpinner from "@/app/_components/LoadingSpinner";
import matchTableColumns, { matchRows } from "./MatchTableColumns";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import dayjs from "dayjs";

export default function MatchTable({
  maxHeight,
  maxWidth,
}: {
  maxHeight?: string;
  maxWidth?: string;
}) {
  const theme = useTheme();

  const [data, setData] = useState<Match[]>(matchRows);
  const [isLoading, setLoading] = useState(false);

  const CustomToolbar = () => {
    return (
      <GridToolbarContainer
        sx={{
          p: 1,
          pr: 2,
          pl: 2,
          borderBottom: "1px solid #FFFFFF20",
          justifyContent: "space-between",
        }}
        // alignContent="center"
      >
        <Typography>Upcoming Matches</Typography>
        <IconButton disableRipple>
          <ChevronRightIcon />
        </IconButton>
      </GridToolbarContainer>
    );
  };

  return (
    <Grid
      container
      className="match-table-container"
      sx={{
        maxHeight: `${maxHeight ? maxHeight : "850px"}`,
        minHeight: "250px",
        maxWidth: `${maxWidth ? maxWidth : "none"}`,
        ".MuiDataGrid-footerContainer": {
          justifyContent: "left",
        },
      }}
    >
      {isLoading ? (
        <LoadingSpinner size={50} loadingText={"Loading matches..."} />
      ) : (
        <DataGrid
          rows={data ? data : []}
          columns={matchTableColumns}
          loading={isLoading}
          hideFooter
          columnHeaderHeight={0}
          slots={{
            toolbar: CustomToolbar,
          }}
          className="match-table"
          sx={{
            fontSize: "13px !important",
            border: "none",
            background: "#262522",
            ".MuiDataGrid-cell": {
              borderBottom: "none",
            },
            ".MuiDataGrid-columnHeader:focus-within": {
              outline: "none !important",
            },
            ".MuiDataGrid-columnSeparator": {
              display: "none !important",
            },
            ".MuiDataGrid-footerContainer": {
              borderTop: "none",
              borderBottom: "none",
            },
            "&.MuiDataGrid-root .MuiDataGrid-cell:focus-within": {
              outline: "none !important",
            },
            ".MuiDataGrid-overlay": {
              backgroundColor: `#262522 !important`,
            },
            ".MuiDataGrid-columnHeader": {
              borderTop: "none",
              borderBottom: "none",
              backgroundColor: `#3C3B38 !important`,
            },
            "& .MuiDataGrid-row": {
              ":nth-child(odd)": {
                backgroundColor: "#2A2926",
              },
            },
            "& .MuiDataGrid-row:hover": {
              cursor: "pointer !important",
              backgroundColor: "#F6F8FA10",
              borderRadius: "2px",
            },
          }}
          getRowId={() => Math.floor(Math.random() * 100000000)}
          disableRowSelectionOnClick
        />
      )}
    </Grid>
  );
}
