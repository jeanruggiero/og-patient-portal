import React, {useState} from "react";
import {Box} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import FormSection from "../IntakeForms/FormSection";
import YesNoField from "../IntakeForms/FormFields/YesNoField";
import SubmitButton from "../IntakeForms/FormFields/SubmitButton";
import FormInstruction from "../IntakeForms/FormFields/FormInstruction";

function CovidScreening(props) {

  const [state, setState] = useState({});
  const [formValid, setFormValid] = useState(true);

  const handleChange = (event) => {
    setState({...state, [event.target.name]: event.target.value})
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!event.currentTarget.form.checkValidity()) {
      setFormValid(false);
      return;
    }

    console.log(state);

    for (let [key, val] of Object.entries(state)) {
      if (state[key]) {
        props.onSubmit(true);
        return;
      }
    }

    props.onSubmit(false);
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
                      name="symptoms"
                      required
                      form={form}
          />

          <YesNoField label="Have you been in physical contact with anyone showing a cough, fever, or other viral symptoms in the past two weeks?"
                      name="contactSymptoms"
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

