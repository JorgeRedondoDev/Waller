import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { State, useAppDispatch } from "../state/exports";
import { addUser, Users } from "../state/reducers/usersReducer";
import Header from "../components/Header";

import {
  FormControl,
  InputLabel,
  Input,
  Grid,
  Box,
  Button,
  Container,
} from "@material-ui/core";

const BoxInput = (props: any) => (
  <Box pt={4}>
    <FormControl>
      <InputLabel htmlFor={props.type}> {props.type} </InputLabel>
      <Input
        type={props.type}
        id={props.type}
        name={props.type}
        onChange={props.handleChange}
      />
    </FormControl>
  </Box>
);

export default function Register() {
  const users = useSelector((state: State) => state.user);
  const dispatch = useAppDispatch();
  const history = useHistory();

  const [user, setUser] = useState<Users>({
    id: users.length,
    userName: "",
    password: "",
    wallet: 0,
    transcactions: [
      {
        actual: 0,
        income: 0,
      },
    ],
  });

  const handleChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) =>
    setUser((prev: any) => {
      (prev as any)[name] = value;
      const newValue = { ...prev };
      return newValue;
    });

  const handleSubmit = (e: React.FormEvent) => {
    const finded = users.find((o) => o.userName === user.userName);
    if (finded != undefined || user.userName === "") {
      console.log(finded);
    } else {
      dispatch(addUser(user));
      history.push("/");
    }
  };

  return (
    <div>
      <Header />
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <BoxInput type={"userName"} handleChange={handleChange} />
        <BoxInput
          type={"password"}
          value={"password"}
          handleChange={handleChange}
        />
        <Box pt={3}>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Register
          </Button>
        </Box>
      </Grid>
    </div>
  );
}
