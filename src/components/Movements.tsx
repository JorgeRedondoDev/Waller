import React from "react";
import {
  DataGrid,
  GridColDef,
  GridValueGetterParams,
} from "@material-ui/data-grid";

const columns: GridColDef[] = [
  {
    field: "actual",
    headerName: "Money",
    width: 200,
  },
  {
    field: "income",
    headerName: "Movements",
    width: 200,
  },
];

export default function Movements(props: any) {
  return (
    <div style={{ height: 400, width: 400 }}>
      <DataGrid rows={props.data} columns={columns} pageSize={10} />
    </div>
  );
}
