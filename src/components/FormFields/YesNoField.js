import React from "react";
import RadioControl from "./RadioControl";

function YesNoField(props) {

  return (
    <RadioControl options={["Yes", "No"]} {...props} />
  )
}

export default YesNoField;