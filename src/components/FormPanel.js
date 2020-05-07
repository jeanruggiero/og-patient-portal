import React, { useState } from "react";
import IntakeFormIdentifyingInfo from "./IntakeFormIdentifyingInfo";
import Typography from "@material-ui/core/Typography";
import HipaaForm from "./HipaaForm";
import PatientInformationForm from "./PatientInformationForm";
import {Box} from "@material-ui/core";
import MedicalInformationForm from "./MedicalInformationForm";
import FamilyMedicalHistoryForm from "./FamilyMedicalHistoryForm";


function FormPanel() {

  const [gettingStartedSubmitted, setGettingStartedSubmitted] = useState(false);
  const [hipaaSubmitted, setHipaaSubmitted] = useState(false);
  const [patientId, setPatientId] = useState();

  let form = null;

  if (!gettingStartedSubmitted) {
    form = (
      <IntakeFormIdentifyingInfo onSubmit={(id) =>
        {
          setGettingStartedSubmitted(true);
          setPatientId(id);
        }
      }/>
    );
  } else if (!hipaaSubmitted) {
    console.log(patientId);
    form = <HipaaForm patientId={patientId}/>;
  }

  // TODO
  // form = <IntakeFormIdentifyingInfo onSubmit={(id) =>
  //       {
  //         setGettingStartedSubmitted(true);
  //         setPatientId(id);
  //       }
  //     }/>;
  //form=<HipaaForm patientId="58a9c26e-10d5-4952-a25b-d11c3953e233"/>;
  // form = <PatientInformationForm patientId="58a9c26e-10d5-4952-a25b-d11c3953e233"/>;
  form = <MedicalInformationForm patientId="58a9c26e-10d5-4952-a25b-d11c3953e233" />;

  return (
    <Box maxWidth={800} mx={3} mb={8}>
      {form}
    </Box>
  )

}

export default FormPanel;