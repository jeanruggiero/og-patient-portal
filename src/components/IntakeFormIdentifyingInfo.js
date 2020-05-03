import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import IntakeFormHeader from "./IntakeFormHeader";
import Typography from "@material-ui/core/Typography";
import Box from '@material-ui/core/Box'
import Button from "@material-ui/core/Button";

import DateField from "./FormFields/DateField";
import Field from "./FormFields/Field";


function IntakeFormIdentifyingInfo() {

  const [firstName, setFirstName] = useState(null);

  return (
    <Container>
      <IntakeFormHeader subheader="Getting Started"/>
      <Box maxWidth={800}>
        <Typography>
          <Box mb={1}>
            Thank you for choosing Optometric Group for your eyecare needs. We are delighted to have you as a patient and appreciate the confidence you have placed in us. Please complete the following information before arriving for your appointment to help us enhance the safety of our community and comply with CDC regulations. If you have questions, please don’t hesitate to contact Westside Family Vision Center at 408-264-1555 or Saratoga Vision Center at (408) 370-7303.
          </Box>
        </Typography>

        <Box mb={4}>
          <Typography color="error" elementtype="span">
            COVID-19 Update:
          </Typography>

          <Typography elementtype="span">
            Please contact Westside Family Vision Center at 408-264-1555 or Saratoga Vision Center at (408) 370-7303 prior to requesting an appointment if any of the following apply to you:

            - You are currently experiencing any of the following symptoms: cough, fever, or any other viral symptoms
            - You have traveled outside of Santa Clara County in the past two weeks
            - You have been in contact with someone who has traveled outside of Santa Clara County in the past two weeks
          </Typography>
        </Box>

        <Box>
          <Field label="First Name" required/>
          <Field label="MI" width={45}/>
          <Field label="Last Name" required/>
          <DateField label="Date of Birth" required/>
          <Field label="Email" width={300} required/>
        </Box>

        <Button variant="contained" color="primary" style={{float: "right"}}>
          Continue
        </Button>
      </Box>


    </Container>
    )

}

export default IntakeFormIdentifyingInfo;