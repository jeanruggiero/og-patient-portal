import React from "react";
import Button from "@material-ui/core/Button";

function SubmitButton (props) {
  return (
    <Button type="submit" variant="contained" color="primary" style={{float: "right"}} {...props}>
      Continue
    </Button>
  )
}

export default SubmitButton;