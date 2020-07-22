import React from "react";
import {Box} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Icon from "@material-ui/core/Icon";
import Grid from "@material-ui/core/Grid";

function IntakeFormSubmitSuccess() {
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
                Intake Forms Submitted Successfully!
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box pl={3}>
        <Typography>
          What to expect:

          <ul>
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

export default IntakeFormSubmitSuccess;