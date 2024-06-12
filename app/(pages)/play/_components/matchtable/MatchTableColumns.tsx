import React from "react";
import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import dayjs from "dayjs";

export default [
  {
    field: "first_name",
    headerName: "Name",
    disableColumnMenu: true,
    sortable: false,
    flex: 1,
    minWidth: 150,
    renderCell: (params: GridRenderCellParams<any>) => (
      <>{params.row.first_name + " " + params.row.last_name}</>
    ),
  },

  {
    field: "instagram_handle",
    headerName: "Handle",
    sortable: false,
    flex: 1,
    disableColumnMenu: true,
    minWidth: 140,
  },

  {
    field: "phone",
    headerName: "Phone",
    sortable: false,
    flex: 1,
    disableColumnMenu: true,
    minWidth: 140,
  },

  // {
  //   field: "email",
  //   headerName: "Email",
  //   sortable: false,
  //   flex: 1,
  //   disableColumnMenu: true,
  //   minWidth: 140,
  // },
  {
    field: "intake_method",
    headerName: "Intake",
    sortable: false,
    flex: 1,
    disableColumnMenu: true,
    minWidth: 140,
  },

  {
    field: "subscribed",
    headerName: "Sign Up Date",
    sortable: false,
    flex: 1,
    disableColumnMenu: true,
    minWidth: 140,
    renderCell: (params: GridRenderCellParams<any>) => (
      <>{dayjs(params.row.signup_date).format("MMM D, YYYY H:mm a")}</>
    ),
  },
] as GridColDef[];
