import React from "react";
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

const useStyles = makeStyles(() => ({
  checkbox: {
    marginRight: -5,
    marginTop: -1,
    marginBottom: -1
  }
}));

function FamilyOptions(props) {

  const classes = useStyles();

  const handleChange = (event) => {
    if (props.onChange) {
      props.onChange(event);
    }
  };

  const fields = [];
  for (const label of ["Mother", "Father", "Sibling"]) {
    fields.push(
      <FormControlLabel control={
        <Checkbox className={classes.checkbox} name={label} onChange={handleChange} />
      } label={label} />
    )
  }

  return (
    <FormControl component="fieldset" name={props.name}>
      <FormGroup row>
        {fields}
      </FormGroup>
    </FormControl>
  )
}


function FamilyMedicalHistoryForm(props) {

  const options = ["Amblyopia (Lazy Eye)", "Blindness", "Cataracts", "Color Blindness", "Glaucoma",
    "Macular Degeneration", "Retinal Detachment", "Strabismus (Eye Turn)", "Arthritis",
    "Cancer", "Diabetes", "Heart Disease", "High Blood Pressure", "Kidney Disease",
    "Lupus", "Stroke", "Thyroid Disease"];

  let fields = [];

  for (const [index, option] of options.entries()) {
    fields.push(
      <Box display="flex" alignItems="center" bgcolor={index % 2 ? null : "grey.200"}>
        <Box mx={1.5} width="130px" display="flex" justifyContent="flex-end">
          <FormLabel>{option}</FormLabel>
        </Box>
        <FamilyOptions name={option}/>
      </Box>
    )
  }

  return (
    <Box>
      <IntakeFormHeader subheader="Family Medical History"/>
      <FormDescription/>

      <FormSection label="Family Medical History">

        <Box mb={2}>
          <Box mb={1.5}>
            <FormLabel>
              Do you have a history of any of the following in your immediate family?
            </FormLabel>
          </Box>

          {fields}
        </Box>

      </FormSection>
    </Box>
  )
}

export default FamilyMedicalHistoryForm;