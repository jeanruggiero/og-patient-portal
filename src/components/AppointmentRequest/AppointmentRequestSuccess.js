import React from "react";
import {Box} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Icon from "@material-ui/core/Icon";
import Grid from "@material-ui/core/Grid";

function AppointmentRequestSuccess() {
  return (
    <Box>
      <Box mb={2}>
        <Typography variant="h2" gutterBottom>
          Appointment Request Successful
        </Typography>

        <Grid container direction="row" alignItems="center">
          <Grid item>
            <Box p={2}>
              <Icon fontSize="inherit" style={{color: "green", fontSize: "40pt"}}>check_circle_outline</Icon>
            </Box>
          </Grid>

          <Grid item>
            <Box maxWidth={300}>
              <Typography>
                We have received your request. We'll be in touch with you shortly to schedule your appointment.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default AppointmentRequestSuccess;