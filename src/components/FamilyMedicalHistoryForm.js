import React, {useState} from "react";
import {Box} from "@material-ui/core";
import IntakeFormHeader from "./IntakeFormHeader";
import FormDescription from "./FormDescription";
import FormSection from "./FormSection";
import FormLabel from "@material-ui/core/FormLabel";
import {makeStyles} from "@material-ui/core/styles";
import SubmitButton from "./FormFields/SubmitButton";
import FormInstruction from "./FormFields/FormInstruction";
import CheckBoxControl from "./FormFields/CheckBoxControl";

import { API_URL } from "../constants";
import Field from "./FormFields/Field";

const useStyles = makeStyles(() => ({
  checkbox: {
    marginRight: -5,
    marginTop: -1,
    marginBottom: -1
  }
}));

const axios = require('axios');

function FamilyMedicalHistoryForm(props) {

  const options = ["Amblyopia (Lazy Eye)", "Blindness", "Cataracts", "Color Blindness", "Glaucoma",
    "Macular Degeneration", "Retinal Detachment", "Strabismus (Eye Turn)", "Arthritis",
    "Cancer", "Diabetes", "Heart Disease", "High Blood Pressure", "Kidney Disease",
    "Lupus", "Stroke", "Thyroid Disease"];

  const [state, setState] = useState({});

  console.log(state);

  const handleChange = (event) => {
    setState({...state, [event.target.name]: event.target.value});
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const now = new Date();
    const d = now.getFullYear() + '-' + (now.getMonth() < 9 ? '0' : '') + (now.getMonth() + 1) +
      '-' + (now.getDate() < 10 ? '0' : '') + now.getDate();

    axios.put(API_URL + "intake/" + props.formId + "/",
      {
        familyMedicalHistory: state,
        dateSubmitted: d
      },
      {
        xsrfHeaderName: 'X-CSRFToken',
        xsrfCookieName: 'csrftoken',
        withCredentials: true
      }
    ).then(function (response) {
      console.log(response);
      props.onSubmit();
    });
  };

  const form = {onChange: handleChange};

  let fields = [];

  for (const [index, option] of options.entries()) {
    fields.push(
      <Box bgcolor={index % 2 ? null : "grey.200"}>
        <Box display="flex"
             flexShrink={0}
             py={0.5}>

          <Box mx={1.5} mt={0.3} width="160px" flexShrink={0}>
            <FormLabel>{option}</FormLabel>
          </Box>
          <Box mb={-2} display="block">
            <CheckBoxControl name={option}
                             options={["Mother", "Father", "Sibling"]}
                             form={form}
                             row
            />

            {(state[option] && (state[option].length !== 0)) &&
              <Box mb={1}>

                {(state[option] && (option === "Cataracts" || option === "Glaucoma"
                  || option === "Macular Degeneration")) &&
                  <Box display="inline">
                    <Field label="Age of Onset"
                           name={option + "AgeOfOnset"}
                           form={form}
                           width={90}
                    />

                    <Field label="Severity"
                           name={option + "Severity"}
                           form={form}
                           width={120}
                    />
                  </Box>
                }

                <Field label="Details"
                       name={option + "Details"}
                       form={form}
                       width={320}
                />
              </Box>
            }

          </Box>

        </Box>

      </Box>
    )
  }

  return (
    <Box>
      <IntakeFormHeader subheader="Family Medical History"/>
      <FormDescription/>

      <form>
        <FormSection label="Family Medical History">
          <FormInstruction>
            Do you have a history of any of the following in your immediate family?
          </FormInstruction>

          <Box mb={3}>
            {fields}
          </Box>

        </FormSection>

        <SubmitButton onClick={handleSubmit} />
      </form>
    </Box>
  )
}

export default FamilyMedicalHistoryForm;