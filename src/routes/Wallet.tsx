import React from "react";
import { useSelector } from "react-redux";
import { State } from "../state/exports";
import Header from "../components/Header";
import Balance from "../components/Balance";
import { Container, Typography, Grid, Box } from "@material-ui/core";

export default function Wallet() {
  const users = useSelector((state: State) => state.user);
  const finded = users.find(
    (o) => o.userName === localStorage.getItem("logged")
  );
  console.log(users);

  return (
    <>
      <Header />
      <Container>
        <Grid
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="center"
        >
          <Box pt={3}>
            <Typography variant="h3" gutterBottom>
              Welcome {finded?.userName}
            </Typography>
          </Box>
          <Box pt={3} pb={3}>
            <Typography variant="h5" gutterBottom>
              Your balance: {finded?.wallet}
            </Typography>
          </Box>
        </Grid>
        <Balance data={finded?.transcactions} />
      </Container>
    </>
  );
}
