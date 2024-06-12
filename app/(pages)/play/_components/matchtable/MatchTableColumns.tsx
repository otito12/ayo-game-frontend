import React from "react";
import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import Logo from "@/public/usericon.png";
import dayjs from "dayjs";

export default [
  {
    field: "oponent",
    headerName: "Oponent",
    disableColumnMenu: true,
    sortable: false,
    flex: 1,
    minWidth: 150,
    renderCell: (params: GridRenderCellParams<any>) => (
      <Grid
        container
        alignItems={"center"}
        justifyContent={"left"}
        columnGap={1}
        height={"100%"}
      >
        <Image
          src={Logo}
          style={{
            width: "20px",
            height: "20px",
            objectFit: "contain",
          }}
          alt="user_icon"
        />
        <Typography>User Name</Typography>
      </Grid>
    ),
  },

  {
    field: "tournament",
    headerName: "Tournament",
    sortable: false,
    flex: 1,
    disableColumnMenu: true,
    minWidth: 140,
  },

  {
    field: "start",
    headerName: "Start",
    sortable: false,
    flex: 1,
    disableColumnMenu: true,
    minWidth: 140,
    valueFormatter: (params: GridRenderCellParams<any>) =>
      dayjs(params.value).format("dddd, MMM D • hh:mm A"),
  },
] as GridColDef[];

export const matchRows = [
  {
    players: [
      { id: "0", firtname: "John", lastname: "Smith" },
      { id: "1", firtname: "Terry", lastname: "Jones" },
    ],
    start: dayjs().toDate(),
    tournament: "First Ayo Tournament",
  },
  {
    players: [
      { id: "0", firtname: "John", lastname: "Smith" },
      { id: "1", firtname: "Terry", lastname: "Jones" },
    ],
    start: dayjs().toDate(),
    tournament: "First Ayo Tournament",
  },
  {
    players: [
      { id: "0", firtname: "John", lastname: "Smith" },
      { id: "1", firtname: "Terry", lastname: "Jones" },
    ],
    start: dayjs().toDate(),
    tournament: "First Ayo Tournament",
  },
  {
    players: [
      { id: "0", firtname: "John", lastname: "Smith" },
      { id: "1", firtname: "Terry", lastname: "Jones" },
    ],
    start: dayjs().toDate(),
    tournament: "First Ayo Tournament",
  },
];
