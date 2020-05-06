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
import ErrorScreen from "./ErrorScreen";

const axios = require('axios');

function IntakeFormIdentifyingInfo(props) {

  const [state, setState] = useState({});
  const [formValid, setFormValid] = useState(true);

  const handleSubmit = (event) => {

    event.preventDefault();

    if (!event.currentTarget.form.checkValidity()) {
      setFormValid(false);
      return;
    }

    // let params = [];
    // Object.keys(state).forEach(field => {
    //   params.push(field + "=" + state[field]);
    // });

    // const url = "http://127.0.0.1:8000/patients/id?" + params.join("&");
    //
    // console.log(url);
    //
    // fetch(url,
    //   {mode: 'cors'})
    //   .then((response) => response.text())
    //   .then((text) => props.onSubmit(text));

    const url = "http://127.0.0.1:8000/patients/id";

    axios.get(url, {
        params: state
      })
      .then(function (response) {
        props.onSubmit(response.data);
      })
      .catch(function (error) {
        console.log(error);
        return <ErrorScreen/>;
      })
  };

  const handleChange = (event) => {
    setState({...state, [event.target.name]: event.target.value});
  };

  return (
    <Container>
      <IntakeFormHeader subheader="Getting Started"/>
      <FormDescription/>
      <CovidUpdate/>

      <form onSubmit={handleSubmit}>
        <FormSection label="Personal Information">
            <FormInstruction>Please enter your legal name as it appears on your insurance card.</FormInstruction>

            <Field label="First Name" name="firstName" onChange={handleChange}
                   error={!formValid && !state['firstName']} required/>

            <Field label="MI" name="MI" onChange={handleChange} width={45}/>

            <Field label="Last Name" name="lastName" onChange={handleChange}
                   error={!formValid && !state['lastName']} required/>

            <DateField label="Date of Birth" name="DOB" onChange={handleChange}
                       error={!formValid && !state['DOB']} required/>

            <Field label="Email" name="email" onChange={handleChange} width={300}
                   error={!formValid && !state['email']} required/>

        </FormSection>

        <SubmitButton onClick={handleSubmit} />
      </form>
    </Container>
  )
}

export default IntakeFormIdentifyingInfo;