import React, {useState} from "react";
import IntakeFormHeader from "./IntakeFormHeader";
import FormSection from "./FormSection";
import RadioControl from "./FormFields/RadioControl";
import Field from "./FormFields/Field";
import Box from "@material-ui/core/Box";
import FormDescription from "./FormDescription";
import DateField from "./FormFields/DateField";
import FormInstruction from "./FormFields/FormInstruction";
import SubmitButton from "./FormFields/SubmitButton";
import MedicalBenefitsReleaseCheckbox from "./FormFields/MedicalBenefitsReleaseCheckbox";

const axios = require('axios');

function PatientInformationForm(props) {

  const [state, setState] = useState({});
  const [formValid, setFormValid] = useState(true);

  console.log(state);

  const handleChange = (event) => {
    setState({...state, [event.target.name]: event.target.value});
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!event.currentTarget.form.checkValidity() || !state["medicalBenefitsRelease"]) {
      setFormValid(false);
      return;
    }

    console.log("form valid");

    const url = "http://127.0.0.1:8000/patients/" + props.patientId + "/";

    axios.post(url, state, {
        xsrfHeaderName: 'X-CSRFToken',
        xsrfCookieName: 'csrftoken',
        withCredentials: true
      }
    ).then(function (response) {
      console.log(response);
    })
  };

  const form = {
    valid: formValid,
    onChange: handleChange
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

          <Field label="First Name"
                 name="primaryInsuredFirstName"
                 form={form}
                 required />

          <Field label="Last Name"
                 name="primaryInsuredLastName"
                 form={form}
                 required />

          <DateField label="Date of Birth"
                     name="primaryInsuredDOB"
                     form={form}
                     required/>

          <RadioControl options={["Male", "Female"]}
                        label="Gender"
                        name="primaryInsuredGender"
                        form={form}
                        required />
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
                   name="addressStreet"
                   form={form}
                   width={250}
                   required/>

            <Field label="City"
                   name="addressCity"
                   form={form}
                   required/>

            <Field label="State"
                   name="addressState"
                   form={form}
                   width={50}
                   required/>

            <Field label="Zip"
                   name="addressZip"
                   form={form}
                   width={90}
                   required/>
          </Box>

          <Box>
            <Field label="Cell Phone"
                   name="cellPhone"
                   form={form}
                   width={130}
                   required/>

            <Field label="Home Phone"
                   name="homePhone"
                   form={form}
                   width={130}/>

            <Field label="Work Phone"
                   name="workPhone"
                   form={form}
                   width={130}/>

          </Box>
        </FormSection>

        <FormSection label="Personal Information">
          <Field label="Preferred Name"
                 name="preferredName"
                 form={form} />

          <Field label="Spouse or Parent(s) Name"
                 name="spouseParentName"
                 form={form}
                 width={200}/>

          <Field label="Person Responsible for Account"
                 name="personResponsible"
                 form={form}
                 width={200}/>

          <RadioControl label="Gender"
                        name="gender"
                        options={["Male", "Female", "Other"]}
                        form={form} />

          <RadioControl label="Employment Status"
                        name="employmentStatus"
                        options={["Employed", "Unemployed", "Full Time Student", "Part Time Student"]}
                        form={form}/>

          <RadioControl label="Marital Status"
                        name="maritalStatus"
                        options={["Single", "Married", "Other"]}
                        form={form} />

          <RadioControl label="Race"
                        name="race"
                        options={["American Indian or Alaska Native", "Asian", "Black or African American", "Hispanic or Latino", "Native Hawaiian or Pacific Islander", "White", "Other"]}
                        form={form} />

          <RadioControl label="Ethnicity"
                        name="ethnicity"
                        options={["Hispanic or Latino", "Not Hispanic or Latino"]}
                        form={form} />

          <RadioControl label="Preferred Language"
                        name="preferredLanguage"
                        options={["English", "Spanish", "Other"]}
                        form={form} />
        </FormSection>

        <FormSection label="Emergency Contact Information">
          <Field label="Emergency Contact Name"
                 name="emergencyContactName"
                 width={250}
                 form={form}/>

          <Field label="Emergency Phone"
                 name="emergencyPhone"
                 width={140}
                 form={form} />
        </FormSection>

        <FormSection label="Insurance Information">
          <Field label="Insurance Company"
                 name="insuranceCompany"
                 width={300}
                 form={form}
                 required/>

          <FormInstruction>Address of insurance company:</FormInstruction>

          <Field label="Street Address"
                 name="insuranceCompanyStreetAddress"
                 width={250}
                 form={form}
                 required />

          <Field label="City"
                 name="insuranceCompanyCity"
                 form={form}
                 required />

          <Field label="State"
                 name="insuranceCompanyState"
                 width={50}
                 form={form}
                 required />

          <Field label="Zip"
                 name="insuranceCompanyZip"
                 width={90}
                 form={form}
                 required />

          <RadioControl label="Patient's relationship to insured individual"
                        name="relationshipToInsured"
                        options={["Self", "Spouse", "Child", "Other"]}
                        form={form}
                        required />

          {insuredFields}

          <Field label="Insurance ID Number"
                 name="InsuranceIdNumber"
                 form={form}
                 width={180}
                 required />

          <Field label="Group Number"
                 name="insuranceGroupNumber"
                 form={form}
                 width={100} />

          <Field label="Insured Individual's Employer"
                 name="insuredEmployer"
                 form={form}
                 width={250}
                 required/>

          <MedicalBenefitsReleaseCheckbox form={form} />
        </FormSection>

        <SubmitButton onClick={handleSubmit}/>

      </form>
    </Box>
  )
}

export default PatientInformationForm;