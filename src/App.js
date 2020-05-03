import React from 'react';

import { AppBar } from '@material-ui/core';
import Typography from '@material-ui/core/Typography'


import logo from './logo.svg';
import './App.css';
import Container from "@material-ui/core/Container";
import { ThemeProvider } from '@material-ui/core/styles'

import Banner from "./components/Banner";

import ogTheme from "./styles";
import IntakeFormHeader from "./components/IntakeFormHeader";
import IntakeFormIdentifyingInfo from "./components/IntakeFormIdentifyingInfo";
import FormPanel from "./components/FormPanel";

function App() {

  return (
    <ThemeProvider theme={ogTheme}>
      <Banner/>
      <FormPanel/>
    </ThemeProvider>



  )
}

export default App;
