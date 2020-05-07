import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(() => ({
    root: {
      paddingBottom: 12,
      marginTop: 5
    },
    formLabel: {
      //paddingLeft: 2,
      fontSize: '0.9rem',
      fontWeight: 500
    }
  }
));

function FormInstruction(props) {

  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <FormLabel className={classes.formLabel} required={props.required}>{props.children}</FormLabel>
    </Box>
  )
}

export default FormInstruction;