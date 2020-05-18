import React, {useState} from "react";
import YesNoField from "./FormFields/YesNoField";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import RadioControl from "./FormFields/RadioControl";
import FormDescription from "./FormDescription";
import Button from "@material-ui/core/Button";
import FormSection from "./FormSection";

function FormsLandingPage(props) {



  const [hasAppt, setHasAppt] = useState(null);
  const [office, setOffice] = useState(null);
  const [appointmentRequest, setAppointmentRequest] = useState(null);
  console.log(office);
  const handleSubmit = () => {
    props.onSubmit(office);
  };


  return (
    <Box>
      <Box mt={5} mb={1}>
        <Typography variant="h2">
          Intake Forms
        </Typography>
      </Box>

      <Box mb={2}>
        <Typography>
          Please take 5 to 10 minutes to complete the following information before arriving for your appointment to help us enhance the safety of our community and comply with CDC regulations. Let's get started!
        </Typography>
      </Box>

      <FormSection>
        <RadioControl label="Which office are you planning to visit?"
                      options={["Saratoga Vision Center", "Westside Family Vision Center"]}
                      form={{
                        onChange: (event) => setOffice(event.target.value),
                        valid: true
                      }}

                      required
        />

        <YesNoField label="Do you have an appointment?"
                    form={{
                      onChange: (event) => setHasAppt(event.target.value),
                      valid: true
                    }}
                    required
        />


        {(hasAppt === false) && (
          <YesNoField label="Would you like to request an appointment?"
                      form={{
                        onChange: (event) => setAppointmentRequest(event.target.value),
                        valid: true
                      }}
          />
        )}

        {(appointmentRequest === false) && (
          null
        )}
      </FormSection>

      {(((hasAppt === true) && (office !== null)) || (hasAppt === false)) && (
        <Button variant="contained"
                color="primary"
                onClick={handleSubmit}
        >
          Continue
        </Button>
      )}

    </Box>
  )
}

export default FormsLandingPage;