import React, {useState} from "react";
import {Box} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import FormSection from "../IntakeForms/FormSection";
import CheckBoxControl from "../IntakeForms/FormFields/CheckBoxControl";
import SubmitButton from "../IntakeForms/FormFields/SubmitButton";
import FormInstruction from "../IntakeForms/FormFields/FormInstruction";
import Button from "@material-ui/core/Button";
import RadioControl from "../IntakeForms/FormFields/RadioControl";
import Field from "../IntakeForms/FormFields/Field";
import DateField from "../IntakeForms/FormFields/DateField";

function AppointmentRequest() {

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const [state, setState] = useState({});
  const [formValid, setFormValid] = useState(true);

  const handleChange = (event) => {
    setState({...state, [event.target.name]: event.target.value});
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!event.currentTarget.form.checkValidity()) {
      setFormValid(false);
      return;
    }
  };

  const form = {
    valid: formValid,
    onChange: handleChange
  };

  return (
    <Box>
      <Box mb={2}>
        <Typography variant="h2" gutterBottom>
          Request an Appointment
        </Typography>

        <Typography>
          Tell us what type of appointment you'd like to request and what times you're usually available and a member of our staff will contact you to schedule an appointment.
        </Typography>
      </Box>

      <form>
        <FormSection label="Personal Information">
            <FormInstruction>Please enter your legal name as it appears on your insurance card.</FormInstruction>

            <Field label="First Name"
                   name="firstName"
                   form={form}
                   required/>

            <Field label="MI"
                   name="MI"
                   form={form}
                   width={45}/>

            <Field label="Last Name"
                   name="lastName"
                   form={form}
                   required/>

            <DateField label="Date of Birth"
                       name="DOB"
                       form={form}
                       disableFuture
                       views={["year", "month", "date"]}
                       openTo="year"
                       required/>

            <Field label="Email"
                   name="email"
                   form={form}
                   width={300}
                   required/>

        </FormSection>

        <FormSection label="Appointment Details">
          <CheckBoxControl label="Reason for Appointment (select all that apply):"
                           name="reason"
                           options={["Eye Exam", "Vision Therapy", "Laser Vision Correction Assessment", "Laser Vision Correction Follow-Up", "Non-Surgical Vision Improvement", "Contact Lenses", "Glasses", "Treatment for a Specific Condition", "Other"]}
                           form={form}
                           required
          />

          <RadioControl label="Which office would you like to visit?"
                        name="office"
                        options={["Saratoga Vision Center", "Westside Family Vision Center"]}
                        form={form}
                        required
          />

          <FormInstruction>
            What times are you usually available?
          </FormInstruction>

          <Box display="flex" mb={2}>

            {days.map((day, index) => {
              const am = day.toLowerCase() + "Am";
              const pm = day.toLowerCase() + "Pm";

              return (
                <Box pr={2}>
                  <Typography align="center" gutterBottom>
                    {day}
                  </Typography>

                  <Box pb={1}>
                    <Button variant={state[am] ? "contained" : "outlined"}
                            onClick={() => setState({...state, [am]: !state[am]})}
                            color="primary"
                            size="small"
                            disableRipple
                            disableElevation
                            fullWidth
                    >
                      AM
                    </Button>
                  </Box>

                  <Box>
                    <Button variant={state[pm] ? "contained" : "outlined"}
                            onClick={() => setState({...state, [pm]: !state[pm]})}
                            color="primary"
                            size="small"
                            disableRipple
                            disableElevation
                            fullWidth
                    >
                      PM
                    </Button>
                  </Box>

                </Box>
              )
            })}

          </Box>

        </FormSection>

        <FormSection label="Contact Information">
          <RadioControl label="How should we contact you to schedule your appointment?"
                        name="contactMethod"
                        options={["Phone", "Email"]}
                        form={form}
                        required
          />

          {(state.contactMethod && state.contactMethod === "Phone") && (
            <Field label="Phone Number"
                   name="phoneNumber"
                   form={form}
                   required
            />
          )}
        </FormSection>

        <SubmitButton onClick={handleSubmit} />
      </form>

    </Box>

  )
}

export default AppointmentRequest;