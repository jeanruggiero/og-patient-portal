import React, {useState} from "react";
import IntakeFormHeader from "./IntakeFormHeader";
import Button from "@material-ui/core/Button";

import Pdf from '../static/Notice_of_Privacy_Practices.pdf'
import Field from "./FormFields/Field";
import Box from "@material-ui/core/Box";
import FormSection from "./FormSection";

//import Cookies from 'js-cookie'
import FormDescription from "./FormDescription";
import FormInstruction from "./FormFields/FormInstruction";
import SubmitButton from "./FormFields/SubmitButton";

const axios = require('axios');

function HipaaForm(props) {

  const [acknowledged, setAcknowledged] = useState(false);
  const [formValid, setFormValid] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!event.currentTarget.form.checkValidity()) {
      setFormValid(false);
      return;
    }

    let url = "http://127.0.0.1:8000/intake/" + props.formId + "/";

    // axios.post(url, {
    //     HipaaAcknowledgement: true
    //   },
    //   {
    //     xsrfHeaderName: 'X-CSRFToken',
    //     xsrfCookieName: 'csrftoken',
    //     withCredentials: true
    //   }
    //   ).then(function (response) {
    //     console.log(response);
    //   });

    props.onSubmit();

  };

  const form = {
    onChange: setAcknowledged,
    valid: formValid
  };

  return (
    <Box maxWidth={800}>

      <IntakeFormHeader subheader="Notice of Privacy Practices"/>
      <FormDescription/>

      <form>
        <FormSection label="Notice of Privacy Practices Acknowledgement">
          <Box pb={2}>
            <Button variant="contained" color="primary" href={Pdf} target="_blank">
              View Form
            </Button>
          </Box>

          <FormInstruction>
            By entering your name below, you acknowledge that you have received and reviewed the Notice of Privacy Practices.
          </FormInstruction>

          <Field label="Full Name"
                 width={300}
                 form={form}
                 required/>
        </FormSection>

        <SubmitButton onClick={handleSubmit} />
      </form>

    </Box>
  )
}

export default HipaaForm;