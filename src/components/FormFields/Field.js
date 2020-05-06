import React, {useState} from "react";
import TextField from "@material-ui/core/TextField/TextField";
import Box from "@material-ui/core/Box";

function Field(props) {

  const defaultWidth = 150;
  const fieldWidth = props.width ? props.width : defaultWidth;

  const handleChange = (event) => {
    if (props.onChange) {
      console.log('change');
      props.onChange(event);
    }
  };

  return (
    <Box pr={2} component="span">
      <TextField
        variant="outlined"
        InputLabelProps={{
            shrink: true,
        }}
        onChange={handleChange}
        style={{width: fieldWidth,
                paddingBottom: 15}}
        helperText={props.error ? "This field is required" : null}
        {...props}
      />
    </Box>
  )
}

export default Field;