import React from "react";
import {Box} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import LandingPageCard from "./LandingPageCard";

const useStyles = makeStyles({
  card: {
    minWidth: 250,
    maxWidth: 400,
  }
});


function LandingPage() {

  const classes = useStyles();

  return (
    <Box>
      <Typography variant="h2" gutterBottom>
        Westside Family and Saratoga Vision Centers
      </Typography>

      <Typography gutterBottom>
        Thank you for choosing us for your eyecare needs. We are delighted to have you as a patient!
      </Typography>

      <Typography>
        We are taking steps to keep you safe during the COVID-19 pandemic. During this challenging time, we are moving the patient intake process online to minimize physical contact in our offices.
      </Typography>


      <Box pt={2} display="flex" flexDirection="row" flexWrap="wrap">
        <LandingPageCard title="Get Started"
                         description="Not sure where to start? Click here and we'll walk you through the scheduling and intake process."
                         destination="/get-started"
        />

        <LandingPageCard title="Intake Forms"
                         description="Fill out your intake forms before arriving at the office to help us comply with social distancing regulations."
                         destination="/forms"
        />

        <LandingPageCard title="Request an Appointment"
                         description="Request an appointment online and we'll call you to confirm."
                         destination="/request-appointment"
        />

        <LandingPageCard title="Contact Us"
                         description="We're here to help. Click here for our locations and contact information."
                         destination="/contact"
        />

      </Box>
    </Box>
  )
}

export default LandingPage;