




import React, {useState} from "react";
import {Box} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import FormSection from "../IntakeForms/FormSection";
import YesNoField from "../IntakeForms/FormFields/YesNoField";
import SubmitButton from "../IntakeForms/FormFields/SubmitButton";
import FormInstruction from "../IntakeForms/FormFields/FormInstruction";
import {API_URL} from "../../constants";

const axios = require('axios');

function CovidScreening(props) {

  const [state, setState] = useState({});
  const [formValid, setFormValid] = useState(true);

  console.log(state);

  const handleChange = (event) => {
    setState({...state, [event.target.name]: event.target.value})
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!event.currentTarget.form.checkValidity()) {
      setFormValid(false);
      return;
    }

    axios.put(API_URL + "intake/" + props.formId + "/", state)
      .then(function (response) {
        console.log(response);
        props.onSubmit();
      });
  };

  const form = {
    onChange: handleChange,
    valid: formValid
  };

  return (
    <Box>
      <Box mb={2}>
        <Typography variant="h2" gutterBottom>
          Request an Appointment
        </Typography>

        <Typography>
          State and federal regulations require us to ask the following questions to anyone requesting an appointment.
        </Typography>
      </Box>

      <form>
        <FormSection label="COVID-19 Screening">
          <YesNoField label="Are currently experiencing a cough, fever, or any other viral symptoms?"
                      name="covidSymptoms"
                      required
                      form={form}
          />

          <YesNoField label="Have you been in physical contact with anyone showing a cough, fever, or other viral symptoms in the past two weeks?"
                      name="covidContactSymptoms"
                      required
                      form={form}
          />

        </FormSection>

        <Box display="flex" justifyContent="flex-end">
          <FormInstruction>
            By clicking "CONTINUE", I hereby agree that the information provided above is accurate.
          </FormInstruction>
        </Box>

        <SubmitButton onClick={handleSubmit} form={form} />
      </form>
    </Box>
  )

}

export default CovidScreening;