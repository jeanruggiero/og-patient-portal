import React from 'react';
import {Toolbar, AppBar, Typography } from "@material-ui/core";


function Banner() {
  return(
    <AppBar position='static'>
      <Toolbar>
        <Typography variant="h1">
          Drs. Fabian, Fanelli & Dougherty
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Banner;