import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

function SubmitButton (props) {
  return (
    <Box>
      {props.form.valid === false && (
        <Typography color="error">
          Please ensure all required fields have been filled out.
        </Typography>
      )}

      <Button type="submit" variant="contained" color="primary" style={{float: "right"}} onClick={props.onClick}>
        Continue
      </Button>
    </Box>
  )
}

export default SubmitButton;