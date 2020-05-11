import React, { useState } from "react";
import IntakeFormIdentifyingInfo from "./IntakeFormIdentifyingInfo";
import Typography from "@material-ui/core/Typography";
import HipaaForm from "./HipaaForm";
import PatientInformationForm from "./PatientInformationForm";
import {Box} from "@material-ui/core";
import MedicalInformationForm from "./MedicalInformationForm";
import FamilyMedicalHistoryForm from "./FamilyMedicalHistoryForm";
import ErrorScreen from "./ErrorScreen";
import { API_URL } from "../constants";

const axios = require('axios');

function FormPanel() {

  //const [gettingStartedSubmitted, setGettingStartedSubmitted] = useState(false);
  //const [hipaaSubmitted, setHipaaSubmitted] = useState(false);


  const [patientId, setPatientId] = useState();
  const [formId, setFormId] = useState();
  const [currentForm, setCurrentForm] = useState("identifyingInfo");

  const onIdentifyingInfoSubmit = (id) => {
    setPatientId(id);

    // axios.get(API_URL + "intake", {
    //   params: {
    //     patientId: id
    //   }
    // }).then (function (response) {
    //   console.log(response);
    //   setFormId(response.data);
    //   setCurrentForm("hipaa");
    // });

    setFormId('1');
    setCurrentForm("hipaa");
  };

  const onHipaaSubmit = () => {
    setCurrentForm("patientInformation");
  };

  const onPatientInformationSubmit = () => {
    setCurrentForm("medicalInfo");
  };

  const onMedicalInfoSubmit = () => {
    setCurrentForm("familyHistory");
  };

  const onFamilyHistorySubmit = () => {
    setCurrentForm("success");
  };

  let form = null;

  switch (currentForm) {
    case "identifyingInfo":
      form = <IntakeFormIdentifyingInfo onSubmit={onIdentifyingInfoSubmit} />;
      break;
    case "hipaa":
      form = <HipaaForm formId={formId}
                        onSubmit={onHipaaSubmit}
      />;
      break;
    case "patientInformation":
      form = <PatientInformationForm formId={formId}
                                     onSubmit={onPatientInformationSubmit}
      />;
      break;
    case "medicalInfo":
      form = <MedicalInformationForm formId={formId}
                                     onSubmit={onMedicalInfoSubmit}
      />;
      break;
    case "familyHistory":
      form = <FamilyMedicalHistoryForm formId={formId}
                                       onSubmit={onFamilyHistorySubmit}
      />;
      break;
    case "success":
      form = <h3>Submit successful!</h3>;
      break;
    default:
      form = <ErrorScreen/>;
  }

  //form = <IntakeFormIdentifyingInfo onSubmit={onIdentifyingInfoSubmit} />;



  return (
    <Box maxWidth={800} mx={3} mb={8}>
      {form}
    </Box>
  )
}

export default FormPanel;