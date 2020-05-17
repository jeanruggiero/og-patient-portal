import React from 'react';
import {Toolbar, AppBar, Typography } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import { Link } from "react-router-dom";

function Banner() {
  return(
    <AppBar position='static'>
      <Toolbar>
        <Typography variant="h1">
          Drs. Fabian, Fanelli & Dougherty
        </Typography>

        <div style={{flexGrow: 1}} />
        <IconButton
              edge="end"
              aria-label="return to home page"
              color="inherit"
              component={Link}
              to="/"
            >
              <Icon>home</Icon>
            </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Banner;