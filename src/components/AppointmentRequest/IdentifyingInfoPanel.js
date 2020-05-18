import React, {useState} from "react";
import {Box} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import FormSection from "../IntakeForms/FormSection";
import CheckBoxControl from "../IntakeForms/FormFields/CheckBoxControl";
import SubmitButton from "../IntakeForms/FormFields/SubmitButton";
import FormInstruction from "../IntakeForms/FormFields/FormInstruction";
import Button from "@material-ui/core/Button";
import RadioControl from "../IntakeForms/FormFields/RadioControl";
import Field from "../IntakeForms/FormFields/Field";
import DateField from "../IntakeForms/FormFields/DateField";
import {API_URL} from "../../constants";

const axios = require('axios');

function IdentifyingInfoPanel(props) {

  const [state, setState] = useState({});

  const handleChange = (event) => {
    const newState = {...state, [event.target.name]: event.target.value};
    setState(newState);

    props.form.onChange({target: {
      name: 'patientInformation',
      value: newState
    }});
  };

  const form = {
    valid: props.form.valid,
    onChange: handleChange
  };

  return (
    <Box>
      <FormSection label="Personal Information">
          <FormInstruction>Please enter your legal name as it appears on your insurance card.</FormInstruction>

          <Field label="First Name"
                 name="firstName"
                 form={form}
                 required/>

          <Field label="MI"
                 name="MI"
                 form={form}
                 width={45}/>

          <Field label="Last Name"
                 name="lastName"
                 form={form}
                 required/>

          <DateField label="Date of Birth"
                     name="DOB"
                     form={form}
                     disableFuture
                     views={["year", "month", "date"]}
                     openTo="year"
                     required/>

          <Field label="Email"
                 name="email"
                 form={form}
                 width={300}
                 required/>

      </FormSection>
    </Box>
  )
}

export default IdentifyingInfoPanel;