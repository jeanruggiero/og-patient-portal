import React, {useState} from "react";
import {Box} from "@material-ui/core";
import IntakeFormHeader from "./IntakeFormHeader";
import FormDescription from "./FormDescription";
import FormSection from "./FormSection";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";
import FormLabel from "@material-ui/core/FormLabel";
import {makeStyles} from "@material-ui/core/styles";
import SubmitButton from "./FormFields/SubmitButton";
import FormInstruction from "./FormFields/FormInstruction";
import CheckBoxControl from "./FormFields/CheckBoxControl";

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

  const handleChange = (event) => {
    setState({...state, [event.target.name]: event.target.value});
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const url = "http://127.0.0.1:8000/intake/" + props.formId + "/";

    axios.put(url,
      {
        familyMedicalHistory: state
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

    props.onSubmit();
  };

  let fields = [];

  for (const [index, option] of options.entries()) {
    fields.push(
      <Box display="flex"
           alignItems="center"
           bgcolor={index % 2 ? null : "grey.200"}
           py={0.5}
      >

        <Box mx={1.5} width="130px" display="flex" justifyContent="flex-end">
          <FormLabel>{option}</FormLabel>
        </Box>
        <Box mb={-2}>
          <CheckBoxControl name={option}
                           options={["Mother", "Father", "Sibling"]}
                           form={{onChange: handleChange}}
                           row
          />
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