import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import IntakeFormHeader from "./IntakeFormHeader";
import Typography from "@material-ui/core/Typography";
import Box from '@material-ui/core/Box'
import Button from "@material-ui/core/Button";

import DateField from "./FormFields/DateField";
import Field from "./FormFields/Field";


function IntakeFormIdentifyingInfo(props) {

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [mi, setMi] = useState();
  const [dob, setDob] = useState();
  const [email, setEmail] = useState();

  const handleSubmit = () => {

    const url = "http://127.0.0.1:8000/patients/id?" +
      "lastName=" + lastName +
      "&firstName=" + firstName +
      "&dob=" + dob +
      "&email=" + email;

    fetch(url,
      {mode: 'cors'})
      .then((response) => response.text())
      .then((text) => props.onSubmit(text));
  };

  return (
    <Container>
      <IntakeFormHeader subheader="Getting Started"/>
      <Box maxWidth={800}>
        <Typography>
          <Box mb={1}>
            Thank you for choosing Optometric Group for your eyecare needs. We are delighted to have you as a patient and appreciate the confidence you have placed in us. Please complete the following information before arriving for your appointment to help us enhance the safety of our community and comply with CDC regulations. If you have questions, please don’t hesitate to contact Westside Family Vision Center at 408-264-1555 or Saratoga Vision Center at (408) 370-7303.
          </Box>
        </Typography>

        <Box mb={3}>
          <Typography color="error" elementtype="span">
            COVID-19 Update:
          </Typography>

          <Typography elementtype="span">
            Please contact Westside Family Vision Center at 408-264-1555 or Saratoga Vision Center at (408) 370-7303 prior to requesting an appointment if any of the following apply to you:
            <ul>
              <li>
                You are currently experiencing any of the following symptoms: cough, fever, or any other viral symptoms
              </li>
              <li>
                You have traveled outside of Santa Clara County in the past two weeks
              </li>
              <li>
                You have been in contact with someone who has traveled outside of Santa Clara County in the past two weeks
              </li>
            </ul>
            
          </Typography>
        </Box>

        <Box>
          <Box mb={2}>
            <Typography>
              Please enter your legal first and last name as it appears on your insurance card.
            </Typography>
          </Box>

          <Field label="First Name" onChange={setFirstName} required/>
          <Field label="MI" onChange={setMi} width={45}/>
          <Field label="Last Name" onChange={setLastName} required/>
          <DateField label="Date of Birth" onChange={setDob} required/>
          <Field label="Email" onChange={setEmail} width={300} required/>
        </Box>

        <Button variant="contained" color="primary" style={{float: "right"}} onClick={handleSubmit}>
          Continue
        </Button>
      </Box>


    </Container>
    )

}

export default IntakeFormIdentifyingInfo;