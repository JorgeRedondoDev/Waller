import React, { useState, useEffect } from "react";
import { AppBar, Button, Toolbar, Container, Box } from "@material-ui/core";
import { useHistory, Link } from "react-router-dom";

export default function Home(props: any) {
  const history = useHistory();
  const isLogged = localStorage.getItem("logged");

  const ButtonLink = (props: any) => (
    <Button color="inherit">
      <Link to={props.link} style={{ textDecoration: "none", color: "white" }}>
        {props.link}
      </Link>
    </Button>
  );

  function logout() {
    localStorage.removeItem("logged");
    history.push("/");
  }
  return (
    <Container>
      <AppBar position="relative">
        <Toolbar>
          <Box display="flex" flexGrow={1}>
            <Button variant="contained">
              <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                home
              </Link>
            </Button>
          </Box>

          {/*  */}
          {isLogged ? (
            <>
              <Button
                onClick={logout}
                style={{ textDecoration: "none", color: "white" }}
              >
                Logout
              </Button>
              <ButtonLink link="wallet" />
            </>
          ) : (
            <>
              <ButtonLink link="register" />
              <ButtonLink link="login" />
            </>
          )}
        </Toolbar>
      </AppBar>
    </Container>
  );
}
