import React, { useState } from "react";
import { useSelector } from "react-redux";
import { State } from "../state/exports";
import { useHistory } from "react-router-dom";
import Header from "../components/Header";

import {
  FormControl,
  InputLabel,
  Input,
  Grid,
  Box,
  Button,
  Typography,
} from "@material-ui/core";

const BoxInput = (props: any) => (
  <Box pt={4}>
    <FormControl>
      <InputLabel htmlFor={props.type}> {props.type} </InputLabel>
      <Input
        type={props.type}
        id={props.type}
        onChange={(event) => {
          props.setValue(event.target.value);
        }}
      />
    </FormControl>
  </Box>
);

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const users = useSelector((state: State) => state.user);

  function searchUsername() {
    const finded = users.find((o) => o.userName === username);
    if (finded != null && finded.password === password) {
      localStorage.setItem("logged", username);
      history.push("/");
    }
  }

  return (
    <div>
      <Header />
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Box pt={3}>
          <Typography variant="h3" gutterBottom>
            Login
          </Typography>
        </Box>
        <BoxInput type={"username"} setValue={setUsername} />
        <BoxInput type={"password"} setValue={setPassword} />
        <Box pt={3}>
          <Button variant="contained" color="primary" onClick={searchUsername}>
            Login
          </Button>
        </Box>
      </Grid>
    </div>
  );
}
