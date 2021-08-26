import React from "react";
import {
  DataGrid,
  GridColDef,
  GridValueGetterParams,
} from "@material-ui/data-grid";

const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "nº",
    flex: 1,
  },
  {
    field: "actual",
    headerName: "Money",
    sortable: false,
    flex: 1,
  },
  {
    field: "income",
    headerName: "Moves",
    sortable: false,
    flex: 1,
  },
];

export default function Movements(props: any) {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid rows={props.data} columns={columns} />
    </div>
  );
}
