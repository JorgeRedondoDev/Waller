import React from "react";
import { useSelector } from "react-redux";
import { State } from "../state/exports";
import Header from "../components/Header";
import Balance from "../components/Balance";
import Movements from "../components/Movements";
import { Container, Typography, Grid, Box } from "@material-ui/core";

export default function Wallet() {
  const users = useSelector((state: State) => state.user);
  const finded = users.find(
    (o) => o.userName === localStorage.getItem("logged")
  );

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
            <Typography variant="h4" gutterBottom>
              Welcome {finded?.userName}
            </Typography>
          </Box>
          <Box pt={3} pb={3}>
            <Typography variant="h5" gutterBottom>
              Your balance: {finded?.wallet}
            </Typography>
          </Box>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <Balance data={finded?.transcactions} />
          <Movements data={finded?.transcactions} />
        </Grid>
      </Container>
    </>
  );
}
