import React from 'react';

import './App.css';
import { ThemeProvider } from '@material-ui/core/styles';
import {Route, Switch} from 'react-router-dom';

import Banner from "./components/Banner";

import ogTheme from "./styles";
import FormPanel from "./components/IntakeForms/FormPanel";
import LandingPage from "./components/LandingPage/LandingPage";
import ErrorPage from "./components/ErrorPage";
import {Box} from "@material-ui/core";
import Contact from "./components/Contact/Contact";
import GetStarted from "./components/GetStarted/GetStarted";
import AppointmentRequestPanel from "./components/AppointmentRequest/AppointmentRequestPanel";

function App() {

  return (
    <ThemeProvider theme={ogTheme}>
      <main>
        <Banner/>

        <Box maxWidth={800} mx={3} mb={8} mt={4}>
          <Switch>
            <Route path="/" component={LandingPage} exact/>
            <Route path="/forms" component={FormPanel}/>
            <Route path="/request-appointment" component={AppointmentRequestPanel}/>
            <Route path="/contact" component={Contact} />
            <Route path="/get-started" component={GetStarted} />
            <Route component={ErrorPage}/>

          </Switch>
        </Box>
      </main>
    </ThemeProvider>
  )
}

export default App;
