import React from "react";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

function FormSection(props) {

  return (
    <Box pb={2} position="relative">
      <Box pl={2} position="absolute" zindex="speedDial" top={-10} mt={0} pt={0}>
        <Paper elevation={0} square>
          <Box px={0.5}>
            <Typography>
              {props.label}
            </Typography>
          </Box>
        </Paper>
      </Box>

      <Paper variant="outlined">
        <Box px={2} pt={3}>
          {props.children}
        </Box>
      </Paper>
    </Box>
  )

}

export default FormSection;