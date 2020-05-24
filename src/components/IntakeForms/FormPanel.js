import React, { useState } from "react";
import IntakeFormIdentifyingInfo from "./IntakeFormIdentifyingInfo";
import HipaaForm from "./HipaaForm";
import PatientInformationForm from "./PatientInformationForm";
import {Box} from "@material-ui/core";
import MedicalInformationForm from "./MedicalInformationForm";
import FamilyMedicalHistoryForm from "./FamilyMedicalHistoryForm";
import { API_URL } from "../../constants";
import ErrorPage from "../ErrorPage";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import FormsLandingPage from "./FormsLandingPage";
import LandingPage from "../LandingPage/LandingPage";
import CovidScreening from "./CovidScreening";


const axios = require('axios');

function FormPanel() {

  const [office, setOffice] = useState();
  //const [appointmentRequest, setAppointmentRequest] = useState();
  const [patientId, setPatientId] = useState();
  const [formId, setFormId] = useState();
  const [currentForm, setCurrentForm] = useState("landingPage");

  const onLandingPageSubmit = (office) => {
    setOffice(office);
    setCurrentForm("identifyingInfo");
  };


  const onIdentifyingInfoSubmit = (id) => {
    setPatientId(id);

    axios.get(API_URL + "intake", {
      params: {
        patientId: id
      }
    }).then (function (response) {
      console.log(response);
      setFormId(response.data);
      setCurrentForm("covid");
    });

  };

  const onCovidScreeningSubmit = () => {
    setCurrentForm("hipaa")
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
    case "landingPage":
      form = <FormsLandingPage onSubmit={onLandingPageSubmit} />;
      break;
    case "identifyingInfo":
      form = <IntakeFormIdentifyingInfo onSubmit={onIdentifyingInfoSubmit}
                                        office={office}
      />;
      break;
    case "covid":
      form = <CovidScreening formId={formId}
                             onSubmit={onCovidScreeningSubmit}
                             office={office}
      />;
      break;
    case "hipaa":
      form = <HipaaForm formId={formId}
                        onSubmit={onHipaaSubmit}
                        office={office}
      />;
      break;
    case "patientInformation":
      form = <PatientInformationForm formId={formId}
                                     onSubmit={onPatientInformationSubmit}
                                     office={office}
      />;
      break;
    case "medicalInfo":
      form = <MedicalInformationForm formId={formId}
                                     onSubmit={onMedicalInfoSubmit}
                                     office={office}
      />;
      break;
    case "familyHistory":
      form = <FamilyMedicalHistoryForm formId={formId}
                                       onSubmit={onFamilyHistorySubmit}
                                       office={office}
      />;
      break;
    case "success":
      form = <h3>Submit successful!</h3>;

      break;
    default:
      form = <ErrorPage/>;
  }

  return (
    <Box>
      {form}
    </Box>
  )
}

export default FormPanel;