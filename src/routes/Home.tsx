import React from "react";
import Header from "../components/Header";

import AddMoney from "../components/AddMoney";
import SendMoney from "../components/SendMoney";
import { Typography, Container, Grid, Box, Paper } from "@material-ui/core";

export default function Home() {
  const isLogged = localStorage.getItem("logged");
  return (
    <>
      <Header />
      {isLogged ? (
        <Container>
          <Grid
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="flex-start"
          >
            <AddMoney />
            <SendMoney />
          </Grid>
        </Container>
      ) : (
        <Container>
          <Grid
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            <Box justifyContent="center" pt={4}>
              <Typography variant="h4" gutterBottom>
                You need to be logged in to be able to trade.
              </Typography>
            </Box>
          </Grid>
        </Container>
      )}
    </>
  );
}
