import React from 'react';
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

function IntakeFormHeader(props) {
  return (
    <Box mt={5} mb={2}>
      <Typography variant="h2">
        Intake Forms: {props.subheader}
      </Typography>
    </Box>

  )
}

export default IntakeFormHeader;