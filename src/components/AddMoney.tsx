import React, { useState } from "react";
import { AppBar, Button, Grid, TextField, Box } from "@material-ui/core";
import { addMoney } from "../state/reducers/usersReducer";
import { State, useAppDispatch } from "../state/exports";
import { useSelector } from "react-redux";

export default function Home(props: any) {
  const dispatch = useAppDispatch();
  const users = useSelector((state: State) => state.user);
  const idUser = users.findIndex(
    (o) => o.userName === localStorage.getItem("logged")
  );
  const [increment, setIncrement] = useState(0);
  const [notify, setNotify] = useState("");

  const add = () => {
    if (increment < 1) {
      setNotify("The amount cannot be less than 0");
    } else {
      const objecto = {
        id: idUser,
        amount: increment,
      };

      dispatch(addMoney(objecto));
      setNotify("The money has been add correctly.");
      setIncrement(0);
      setTimeout(() => {
        setNotify("");
      }, 2500);
    }
  };

  return (
    <div>
      <Box pl={{ xs: 1, sm: 2 }} pt={4}>
        <Grid
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <h1>Add Money</h1>

          <TextField
            id="outlined-number"
            label="Money"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            value={increment}
            onChange={(e) => setIncrement(parseInt(e.target.value))}
          />

          <Box pt={4}>
            <Button variant="contained" color="primary" onClick={add}>
              Add
            </Button>
            <p>{notify}</p>
          </Box>
        </Grid>
      </Box>
    </div>
  );
}
