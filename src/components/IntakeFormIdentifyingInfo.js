import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import IntakeFormHeader from "./IntakeFormHeader";
import Typography from "@material-ui/core/Typography";
import Box from '@material-ui/core/Box'
import Button from "@material-ui/core/Button";

import DateField from "./FormFields/DateField";
import Field from "./FormFields/Field";
import FormDescription from "./FormDescription";
import FormSection from "./FormSection";
import CovidUpdate from "./CovidUpdate";
import FormLabel from "@material-ui/core/FormLabel";
import FormInstruction from "./FormFields/FormInstruction";
import SubmitButton from "./FormFields/SubmitButton";


function IntakeFormIdentifyingInfo(props) {

  const [state, setState] = useState({});

  const handleSubmit = (event) => {

    event.preventDefault();

    if (!event.currentTarget.form.reportValidity()) {
      return;
    }


    let params = [];
    Object.keys(state).forEach(field => {
      params.push(field + "=" + state[field]);
    });

    console.log(params);

      // "lastName=" + state.lastName +
      // "&firstName=" + firstName +
      // "&dob=" + dob +
      // "&email=" + email;
    const url = "http://127.0.0.1:8000/patients/id?" + params.join("&");
    console.log(url);
    // if (mi) {
    //   url += "&MI=" + mi;
    // }

    //
    // fetch(url,
    //   {mode: 'cors'})
    //   .then((response) => response.text())
    //   .then((text) => props.onSubmit(text));
  };

  const handleChange = (event) => {
    console.log(event);
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

            <Field label="First Name" name="firstName" onChange={handleChange} required/>
            <Field label="MI" name="MI" onChange={handleChange} width={45}/>
            <Field label="Last Name" name="lastName" onChange={handleChange} required/>
            <DateField label="Date of Birth" name="dob" onChange={handleChange} required/>
            <Field label="Email" name="email" onChange={handleChange} width={300} required/>

        </FormSection>

        <SubmitButton onClick={handleSubmit}/>
      </form>
    </Container>
  )
}

export default IntakeFormIdentifyingInfo;