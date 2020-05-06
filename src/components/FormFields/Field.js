import React, {useState} from "react";
import TextField from "@material-ui/core/TextField/TextField";
import Box from "@material-ui/core/Box";

function Field(props) {

  const defaultWidth = 150;
  const fieldWidth = props.width ? props.width : defaultWidth;

  const [value, setValue] = useState();

  let error = false;

  if (props.form && !props.form.valid && !value && props.required) {
    console.log("field error");
    error = true;
  }

  const handleChange = (event) => {

    setValue(event.target.value);

    if (props.form && props.form.onChange) {
      props.form.onChange({target: {name: props.name, value: event.target.value}});
    }
  };

  return (
    <Box pr={2} component="span">
      <TextField
        value={value}
        variant="outlined"
        InputLabelProps={{
            shrink: true,
        }}
        onChange={handleChange}
        style={{width: fieldWidth,
                paddingBottom: 15}}
        error={error}
        //helperText={error ? "This field is required" : null}
        {...props}
      />
    </Box>
  )
}

export default Field;