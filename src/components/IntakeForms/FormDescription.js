import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

function FormDescription(props) {

  console.log(props.office);

  const phoneNumber = (props.office === "Westside Family Vision Center") ? "(408) 264-1555" : "(408) 370-7303";

  return (
    <Box mb={4}>
      <Typography>
        If you have questions, please contact {props.office} at {phoneNumber}.
      </Typography>
    </Box>
  )
}

export default FormDescription;