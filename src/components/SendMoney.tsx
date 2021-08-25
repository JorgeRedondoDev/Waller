import React, { useState } from "react";
import { AppBar, Button, TextField, Grid, Box } from "@material-ui/core";
import { useSelector } from "react-redux";
import { State } from "../state/exports";
import { sendMoney } from "../state/reducers/usersReducer";
import { useAppDispatch } from "../state/exports";

export default function Home(props: any) {
  const dispatch = useAppDispatch();
  const users = useSelector((state: State) => state.user);

  const [userToSend, setUserToSend] = useState("");
  const [moneyToSend, setMoneyToSend] = useState(0);
  const [notify, setNotify] = useState("");

  const findYourself = users.findIndex(
    (o) => o.userName === localStorage.getItem("logged")
  );
  const findTheOther = users.findIndex((o) => o.userName === userToSend);

  function cheacker() {
    const findedUser = users.some((o) => o.userName === userToSend);

    if (
      !findedUser ||
      moneyToSend < 1 ||
      userToSend == localStorage.getItem("logged")
    ) {
      return false;
    }
    return true;
  }

  const sendTheMoney = () => {
    if (cheacker()) {
      const objecto = {
        to: findTheOther,
        from: findYourself,
        amount: moneyToSend,
      };

      dispatch(sendMoney(objecto));
      setNotify("The money has been transferred correctly.");
      setUserToSend("");
      setMoneyToSend(0);
      setTimeout(() => {
        setNotify("");
      }, 2500);
    } else {
      setNotify("There has been an error, please check what you have sent.");
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
          <h1>Send Money</h1>{" "}
          <TextField
            id="outlined-number"
            label="Sent to"
            type="text"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            onChange={(e) => setUserToSend(e.target.value)}
            value={userToSend}
          />
          <Box pt={4}>
            <TextField
              id="outlined-number"
              label="Money"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              onChange={(e) => setMoneyToSend(parseInt(e.target.value))}
              value={moneyToSend}
            />
          </Box>
          <Box pt={4}>
            <Button variant="contained" color="primary" onClick={sendTheMoney}>
              Send
            </Button>
          </Box>
          <p>{notify}</p>
        </Grid>
      </Box>
    </div>
  );
}
