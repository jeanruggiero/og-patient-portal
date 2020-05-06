import React from 'react';

import './App.css';
import { ThemeProvider } from '@material-ui/core/styles'

import Banner from "./components/Banner";

import ogTheme from "./styles";
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
