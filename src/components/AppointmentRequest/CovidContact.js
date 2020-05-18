import React, {useState} from "react";
import {Box} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import FormSection from "../IntakeForms/FormSection";
import CheckBoxControl from "../IntakeForms/FormFields/CheckBoxControl";
import SubmitButton from "../IntakeForms/FormFields/SubmitButton";
import FormInstruction from "../IntakeForms/FormFields/FormInstruction";
import Button from "@material-ui/core/Button";
import ContactCard from "../Contact/ContactCard";
import ContactCardPhone from "./ContactCardPhone";

function CovidContact() {
  return (
    <Box>
      <Box mb={2}>
        <Typography variant="h2" gutterBottom>
          Request an Appointment
        </Typography>

        <Typography style={{fontWeight: 500}}>
          Because you answered "yes" to one or more of our screening questions, you must call our office to request an appointment.
        </Typography>
      </Box>

      <Box display="flex" flexWrap="wrap">
        <ContactCardPhone location="Westside Family Vision Center"
                          image={require("../../static/westside_family_vision_center.jpg")}
                          phoneNumber="(408) 264-1555"
        />

        <ContactCardPhone location="Saratoga Vision Center"
                          image={require("../../static/saratoga_vision_center.jpg")}
                          phoneNumber="(408) 370-7303"
        />
      </Box>



    </Box>

  )
}

export default CovidContact;