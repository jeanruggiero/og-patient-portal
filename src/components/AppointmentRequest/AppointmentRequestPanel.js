import React, {useState} from "react";
import CovidScreening from "./CovidScreening";
import AppointmentRequest from "./AppointmentRequest";
import CovidContact from "./CovidContact";
import Box from "@material-ui/core/Box";
import AppointmentRequestSuccess from "./AppointmentRequestSuccess";

function AppointmentRequestPanel() {

  const [status, setStatus] = useState(null);

  console.log(status);

  const handleCovidScreeningSubmit = (status) => {
    setStatus(status);
  };

  const handleAppointmentRequestSubmit = () => {
    setStatus('success');
  };

  let form;

  if (status === false) {
    form = <AppointmentRequest onSubmit={handleAppointmentRequestSubmit}/>;
  } else if (status === true) {
    form = <CovidContact/>
  } else if (status === 'success') {
    form = <AppointmentRequestSuccess/>;
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