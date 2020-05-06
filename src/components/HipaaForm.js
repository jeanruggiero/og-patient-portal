import React, {useState} from "react";
import IntakeFormHeader from "./IntakeFormHeader";
import Button from "@material-ui/core/Button";

import Pdf from '../static/Notice_of_Privacy_Practices.pdf'
import Field from "./FormFields/Field";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import FormSection from "./FormSection";

import Cookies from 'js-cookie'
import FormDescription from "./FormDescription";

function HipaaForm(props) {

  //const patientId = props.patientId;
  const [acknowledged, setAcknowledged] = useState(false);

  const handleSubmit = () => {
    if (!acknowledged) {
      return;
    }

    let url = "http://127.0.0.1:8000/patients/" + props.patientId + "/";

    fetch(url, {
      mode: 'cors',
      method: 'PUT',
      headers: {'X-CSRFToken': Cookies.get('csrftoken'),
                'Content-Type': 'application/json'},
      credentials: 'include',
      body: JSON.stringify({HipaaAcknowledgement: true})
    }).then(response => console.log(response))
  };


  return (
    <Box maxWidth={800}>

        <IntakeFormHeader subheader="HIPAA Release"/>
        <FormDescription/>

        <FormSection label="HIPAA Acknowledgement">
          <Box py={3}>
            <Button variant="contained" color="primary" href={Pdf} target="_blank">
              View Form
            </Button>
          </Box>

          <Box pb={2}>
            <Typography>
              By entering your name & date below, you acknowledge that you have received and reviewed the above HIPAA Release.
            </Typography>
          </Box>

          <Field label="Full Name" width={250} onChange={setAcknowledged} required/>
      </FormSection>

      <Button variant="contained" color="primary" style={{float: "right"}} onClick={handleSubmit}>
        Continue
      </Button>

    </Box>
  )
}

export default HipaaForm;