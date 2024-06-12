"use client";
import "./MatchTable.css";
import { Grid, IconButton, Typography, useTheme } from "@mui/material";
import { DataGrid, GridToolbarContainer } from "@mui/x-data-grid";
import React from "react";
import { useState } from "react";
import LoadingSpinner from "@/app/_components/LoadingSpinner";
import matchTableColumns from "./MatchTableColumns";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export default function MatchTable({
  maxHeight,
  maxWidth,
}: {
  maxHeight?: string;
  maxWidth?: string;
}) {
  const theme = useTheme();

  const [data, setData] = useState([]);
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
        minHeight: "300px",
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
          initialState={{
            columns: {
              orderedFields: [
                "first_name",
                "last_name",
                "email_address",
                "instagram_handle",
                "phone_number",
                "intake_method",
              ],
              columnVisibilityModel: {
                id: false,
                signup_date: false,
                recommender_first_name: false,
                recommender_last_name: false,
                sign_up_promo_code: false,
                date_of_birth: false,
                intake: false,
              },
            },
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
            "& .MuiDataGrid-row:hover": {
              cursor: "pointer !important",
              backgroundColor: "#F6F8FA80",
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
