import React, {useState} from "react";
import FormInstruction from "./FormInstruction";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import FormControlLabel from "@material-ui/core/FormControlLabel/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox/Checkbox";
import FormControl from "@material-ui/core/FormControl";

function MedicalBenefitsReleaseCheckbox(props) {

  const [value, setValue] = useState(false);

  let error = false;
  if (props.form && !props.form.valid && !value) {
    error = true;
  }


  const handleChange = (event) => {
    setValue(event.target.checked);

    if (props.form.onChange) {
      props.form.onChange({
        target: {
          name: "medicalBenefitsRelease",
          value: event.target.checked
        }
      });
    }
  };

  return (
    <FormControl component="fieldset"
                 onChange={handleChange}
                 error={error}
                 required>

      <FormInstruction>Assignment of Medical Benefits and Release Information</FormInstruction>

      <Typography>
        I understand that I am financially responsible for all charges whether or not paid by insurance. I understand that if insurance eligibility cannot be verified or the proper forms are not obtained, I will be responsible for all charges incurred for services received from this office. I hereby authorize the doctors to release all information necessary to secure payment. I furthermore understand that should collection efforts or legal action be required ro secure payment on my account I will be responsible for these additional fees as well. I request payment of insurance benefits be made directly to WFVC/SVC on my behalf for any services and materials furnished. This assignment shall remain in effect until revoked by me in writing.
      </Typography>

      <Box mb={1.5}>
        <FormControlLabel control={<Checkbox checked={value} required />}
                          label="I have read and agree with the Assignment of Medical Benefits and Release Information"/>
      </Box>
    </FormControl>
  )
}

export default MedicalBenefitsReleaseCheckbox;