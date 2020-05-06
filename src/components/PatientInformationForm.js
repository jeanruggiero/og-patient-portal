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
import FormInstruction from "./FormFields/FormInstruction";
import FormControl from "@material-ui/core/FormControl";
import SubmitButton from "./FormFields/SubmitButton";
import MedicalBenefitsReleaseCheckbox from "./FormFields/MedicalBenefitsReleaseCheckbox";

function PatientInformationForm(props) {

  const [state, setState] = useState({
    relationshipToInsured: null,
  });


  console.log(state);

  const handleChange = (event) => {
    setState({...state, [event.target.name]: event.target.value});
  };

  const handleSubmit = () => {

  };

  let insuredFields = null;

  switch (state.relationshipToInsured) {
    case undefined:
    case null:
    case "self":
      break;
    default:
      insuredFields = (
        <Box>

          <FormInstruction>Primary insured individual's information:</FormInstruction>

          <Field label="First Name" name="primaryInsuredFirstName" onChange={handleChange} required/>
          <Field label="Last Name" name="primaryInsuredLastName" onChange={handleChange}  required/>
          <DateField label="Date of Birth" name="primaryInsuredDOB" onChange={handleChange}  required/>
          <RadioControl options={["Male", "Female"]} display="inline" name="primaryInsuredGender" onChange={handleChange}  column required/>
        </Box>
      )
  }

  return (
    <Box>
      <IntakeFormHeader subheader="Patient Information"/>
      <FormDescription/>

      <form>
        <FormSection label="Contact Information">
          <Box>
            <Field label="Street Address"
                   name="streetAddress"
                   onChange={handleChange}
                   width={250}
                   required/>

            <Field label="City"
                   name="city"
                   onChange={handleChange}
                   required/>

            <Field label="State"
                   name="state"
                   onChange={handleChange}
                   width={50}
                   required/>

            <Field label="Zip"
                   name="zip"
                   onChange={handleChange}
                   width={90}
                   required/>
          </Box>

          <Box>
            <Field label="Cell Phone"
                   name="cellPhone"
                   onChange={handleChange}
                   width={130}
                   required/>

            <Field label="Home Phone" name="homePhone" onChange={handleChange} width={130}/>
            <Field label="Work Phone" name="workPhone" onChange={handleChange} width={130}/>
          </Box>
        </FormSection>

        <FormSection label="Personal Information">
          <Field label="Preferred Name" name="preferredName" onChange={handleChange} />
          <Field label="Spouse or Parent(s) Name" name="spouseParentName" onChange={handleChange} width={200}/>
          <Field label="Person Responsible for Account" name="personResponsible" onChange={handleChange} width={200}/>

          <RadioControl label="Gender"
                        name="gender"
                        options={["Male", "Female", "Other"]}
                        onChange={handleChange} />

          <RadioControl label="Employment Status"
                        name="employmentStatus"
                        options={["Employed", "Unemployed", "Full Time Student", "Part Time Student"]}
                        onChange={handleChange}/>

          <RadioControl label="Marital Status"
                        name="maritalStatus"
                        options={["Single", "Married", "Other"]}
                        onChange={handleChange} />

          <RadioControl label="Race"
                        name="race"
                        options={["American Indian or Alaska Native", "Asian", "Black or African American", "Hispanic or Latino", "Native Hawaiian or Pacific Islander", "White", "Other"]}
                        onChange={handleChange} />
          <RadioControl label="Ethnicity"
                        name="ethnicity"
                        options={["Hispanic or Latino", "Not Hispanic or Latino"]}
                        onChange={handleChange} />

          <RadioControl label="Preferred Language"
                        name="preferredLanguage"
                        options={["English", "Spanish", "Other"]}
                        onChange={handleChange} />
        </FormSection>

        <FormSection label="Emergency Contact Information">
          <Field label="Emergency Contact Name"
                 name="emergencyContactName"
                 width={250}
                 onChange={handleChange}/>

          <Field label="Emergency Phone"
                 name="emergencyPhone"
                 width={140}
                 onChange={handleChange} />
        </FormSection>

        <FormSection label="Insurance Information">
          <Field label="Insurance Company"
                 name="insuranceCompany"
                 width={300}
                 onChange={handleChange}
                 required/>

          <FormInstruction>Address of insurance company:</FormInstruction>

          <Field label="Street Address"
                 name="insuranceCompanyStreetAddress"
                 width={250}
                 onChange={handleChange}
                 required />

          <Field label="City"
                 name="insuranceCompanyCity"
                 onChange={handleChange}
                 required />

          <Field label="State"
                 name="insuranceCompanyState"
                 width={50}
                 onChange={handleChange}
                 required />

          <Field label="Zip"
                 name="insuranceCompanyZip"
                 width={90}
                 onChange={handleChange}
                 required />

          <RadioControl label="Patient's relationship to insured individual"
                        name="relationshipToInsured"
                        value={state.relationshipToInsured}
                        options={["Self", "Spouse", "Child", "Other"]}
                        onChange={handleChange}
                        required />

          {insuredFields}

          <Field label="Insurance ID Number" width={180} required/>
          <Field label="Group Number" width={100}/>
          <Field label="Insured Individual's Employer" width={250} required/>

          <MedicalBenefitsReleaseCheckbox onChange={handleChange} />
        </FormSection>

        <SubmitButton onClick={handleSubmit}/>
      </form>
    </Box>
  )
}

export default PatientInformationForm;