import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import IntakeFormHeader from "./IntakeFormHeader";

import DateField from "./FormFields/DateField";
import Field from "./FormFields/Field";
import FormDescription from "./FormDescription";
import FormSection from "./FormSection";
import CovidUpdate from "./CovidUpdate";
import FormInstruction from "./FormFields/FormInstruction";
import SubmitButton from "./FormFields/SubmitButton";

import { API_URL } from "../../constants";
import Box from "@material-ui/core/Box";

const axios = require('axios');

function IntakeFormIdentifyingInfo(props) {

  const [state, setState] = useState({});
  const [formValid, setFormValid] = useState(true);

  console.log(state);

  const handleSubmit = (event) => {

    event.preventDefault();

    if (!event.currentTarget.form.checkValidity()) {
      setFormValid(false);
      return;
    }

    axios.get(API_URL + "patients/id", {
        params: state
      })
      .then(function (response) {
        props.onSubmit(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

  };

  const handleChange = (event) => {
    setState({...state, [event.target.name]: event.target.value});
  };

  const form = {
    onChange: handleChange,
    valid: formValid
  };

  return (
    <Box>
      <IntakeFormHeader subheader="Getting Started"/>
      <FormDescription office={props.office} />

      <form onSubmit={handleSubmit}>
        <FormSection label="Personal Information">
            <FormInstruction>Please enter your legal name as it appears on your insurance card.</FormInstruction>

            <Field label="First Name"
                   name="firstName"
                   form={form}
                   required/>

            <Field label="MI"
                   name="mi"
                   form={form}
                   width={45}/>

            <Field label="Last Name"
                   name="lastName"
                   form={form}
                   required/>

            <DateField label="Date of Birth"
                       name="dob"
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

        <SubmitButton onClick={handleSubmit} form={form} />
      </form>
    </Box>
  )
}

export default IntakeFormIdentifyingInfo;