import React, {useState} from "react";
import IntakeFormHeader from "./IntakeFormHeader";
import FormSection from "./FormSection";
import RadioControl from "./FormFields/RadioControl";
import Field from "./FormFields/Field";
import FormLabel from "@material-ui/core/FormLabel";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Box from "@material-ui/core/Box";
import FormDescription from "./FormDescription";
import Button from "@material-ui/core/Button";
import DateField from "./FormFields/DateField";

function PatientInformationForm() {

  const [state, setState] = useState({
    release: false,
    relationshipToInsured: null,
  });

  const [insuredFields, setInsuredFields] = useState();

  const handleChange = (event) => {
    setState({...state, [event.target.name]: event.target.checked});
  };

  const handleSubmit = () => {

  };

  const handleInsuredChange = (event) => {
    console.log("insured changed");
    console.log(event.target.value);

    switch (event.target.value) {
      case null:
      case "self":
        setInsuredFields(null);
        break;
      default:
        setInsuredFields(
          <Box>
            <Box mb={1.5}>
              <FormLabel style={{fontWeight: 500}}>Primary insured individual's information</FormLabel>
            </Box>
            <Box>
              <Field label="First Name" required/>
              <Field label="Last Name" required/>
              <DateField label="Date of Birth" required/>
              <RadioControl options={["Male", "Female"]} display="inline" column required/>
            </Box>
          </Box>
        )
    }
  };

  return (
    <Box maxWidth={800} mx={3} mb={8}>
      <IntakeFormHeader subheader="Patient Information"/>
      <FormDescription/>

      <FormSection label="Contact Information">
        <Box>
          <Field label="Street Address" width={250} required/>
          <Field label="City" required/>
          <Field label="State" width={50} required/>
          <Field label="Zip" width={90} required/>
        </Box>

        <Box>
          <Field label="Cell Phone" width={130} required/>
          <Field label="Home Phone" width={130}/>
          <Field label="Work Phone" width={130}/>
        </Box>
      </FormSection>

      <FormSection label="Personal Information">
        <Field label="Preferred Name" />
        <Field label="Spouse or Parent(s) Name" width={200} />
        <Field label="Person Responsible for Account" width={200} />

        <RadioControl label="Gender" options={["Male", "Female", "Other"]}/>
        <RadioControl label="Employment Status" options={["Employed", "Unemployed", "Full Time Student", "Part Time Student"]}/>
        <RadioControl label="Marital Status" options={["Single", "Married", "Other"]} />
        <RadioControl label="Race" options={["American Indian or Alaska Native", "Asian", "Black or African American", "Hispanic or Latino", "Native Hawaiian or Pacific Islander", "White", "Other"]} />
        <RadioControl label="Ethnicity" options={["Hispanic or Latino", "Not Hispanic or Latino"]} />
        <RadioControl label="Preferred Language" options={["English", "Spanish", "Other"]} />
      </FormSection>

      <FormSection label="Emergency Contact Information">
        <Field label="Emergency Contact Name" width={250} />
        <Field label="Emergency Phone" width={140} />
      </FormSection>

      <FormSection label="Insurance Information">
        <Field label="Insurance Company" width={300} required />

        <Box mb={1.5} mt={0}>
          <FormLabel style={{fontWeight: 500}}>Address of insurance company:</FormLabel>
        </Box>
        <Field label="Street Address" width={250} required/>
        <Field label="City" required/>
        <Field label="State" width={50} required/>
        <Field label="Zip" width={90} required/>

        <RadioControl label="Patient's relationship to Insured" value={state.relationshipToInsured} options={["Self", "Spouse", "Child", "Other"]} required onChange={handleInsuredChange} />

        {insuredFields}

        {/*// TODO: add insured's info if relationship is not self*/}

        <Field label="Insurance ID Number" width={180} required />
        <Field label="Group Number" width={100} />
        <Field label="Insured Individual's Employer" width={250} required />

        <Box mb={0.5} mt={0}>
          <FormLabel style={{fontWeight: 500}} required>Assignment of Medical Benefits and Release Information</FormLabel>
        </Box>
        <Typography>
          I understand that I am financially responsible for all charges whether or not paid by insurance. I understand that if insurance eligibility cannot be verified or the proper forms are not obtained, I will be responsible for all charges incurred for services received from this office. I hereby authorize the doctors to release all information necessary to secure payment. I furthermore understand that should collection efforts or legal action be required ro secure payment on my account I will be responsible for these additional fees as well. I request payment of insurance benefits be made directly to WFVC/SVC on my behalf for any services and materials furnished. This assignment shall remain in effect until revoked by me in writing.
        </Typography>

        <Box mb={1.5}>
          <FormControlLabel control={<Checkbox checked={state.release} onChange={handleChange} name="release"/>}
                            label="I have read and agree with the Assignment of Medical Benefits and Release Information"/>
        </Box>

      </FormSection>

      <Button variant="contained" color="primary" style={{float: "right"}} onClick={handleSubmit}>
        Continue
      </Button>
    </Box>
  )
}

export default PatientInformationForm;