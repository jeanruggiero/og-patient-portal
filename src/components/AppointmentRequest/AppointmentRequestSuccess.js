import React from "react";
import {Box} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Icon from "@material-ui/core/Icon";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import { Link as RouterLink } from 'react-router-dom';

function AppointmentRequestSuccess() {
  return (
    <Box>
      <Box mb={2}>
        <Grid container direction="row" alignItems="center">
          <Grid item>
            <Box p={2}>
              <Icon fontSize="inherit" style={{color: "green", fontSize: "40pt"}}>check_circle_outline</Icon>
            </Box>
          </Grid>

          <Grid item>
            <Box maxWidth={300}>

              <Typography variant="h3">
                Appointment Request Successful!
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box pl={3}>
        <Typography gutterBottom>
          We have received your request. We'll be in touch with you shortly to schedule your appointment.
        </Typography>

        <Typography>
          Here's what to expect when you come in for your appointment:

          <ul>
            <li>
              To minimize contact, please fill out your <Link underline="None" component={RouterLink} to="/forms">Intake Forms</Link> online prior to arriving at our office.
            </li>
            <li>
              Please bring any glasses and contact lenses (packaging) you're using with you to your appointment.
            </li>
            <li>
              Safety protocol requires you to call when you arrive, before entering the office, and to wear a mask while in the office.
            </li>
          </ul>
        </Typography>
      </Box>
    </Box>


  )
}

export default AppointmentRequestSuccess;