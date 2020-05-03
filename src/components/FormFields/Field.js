import React from "react";
import TextField from "@material-ui/core/TextField/TextField";
import Box from "@material-ui/core/Box";

function Field(props) {

  const defaultWidth = 150;
  const fieldWidth = props.width ? props.width : defaultWidth;

  const handleChange = (event) => {
    if (props.onChange) {
      props.onChange(event.target.value)
    }
  };

  return (
    <Box pr={2} component="span">
      <TextField
        required={props.required}
        variant="outlined"
        InputLabelProps={{
            shrink: true,
        }}
        label={props.label}
        onChange={handleChange}
        style={{width: fieldWidth,
                paddingBottom: 30}}
      />
    </Box>
  )
}

export default Field;