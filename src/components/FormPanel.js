import React, { useState } from "react";
import IntakeFormIdentifyingInfo from "./IntakeFormIdentifyingInfo";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";


function FormPanel() {

  const [gettingStartedSubmitted, setGettingStartedSubmitted] = useState(false);
  const [patientId, setPatientId] = useState();

  if (!gettingStartedSubmitted) {
    return <IntakeFormIdentifyingInfo onSubmit={(id) =>
      {
        setGettingStartedSubmitted(true);
        setPatientId(id);
      }
    }/>;

  } else {
    return (
      <Typography>
        Submitted: {patientId}
      </Typography>
    )
  }

}

export default FormPanel;