import React, {useState} from "react";
import CovidScreening from "./CovidScreening";
import AppointmentRequest from "./AppointmentRequest";
import CovidContact from "./CovidContact";
import Box from "@material-ui/core/Box";

function AppointmentRequestPanel() {

  const [status, setStatus] = useState(null);

  console.log(status);

  const handleCovidScreeningSubmit = (status) => {
    setStatus(status);
  };

  let form;

  if (status === false) {
    form = <AppointmentRequest/>;
  } else if (status === true) {
    form = <CovidContact/>
  } else {
    form = <CovidScreening onSubmit={handleCovidScreeningSubmit} />
  }

  return (
    <Box>
      {form}
    </Box>
  )
}

export default AppointmentRequestPanel;