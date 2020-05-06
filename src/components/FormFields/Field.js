import React, {useState} from "react";
import TextField from "@material-ui/core/TextField/TextField";
import Box from "@material-ui/core/Box";

function Field(props) {

  //const [valid, setValid] = useState(true);
  const [error, setError] = useState(false);

  const defaultWidth = 150;
  const fieldWidth = props.width ? props.width : defaultWidth;

  if (props.error) {
    setError(true);
  }

  const handleChange = (event) => {
    if (props.onChange) {
      console.log('change');
      props.onChange(event);
    }

    if (event.target.value) {
      setError(false);
    }
  };

  return (
    <Box pr={2} component="span">
      <TextField
        error={error}
        helperText={error ? "This field is required" : ""}
        variant="outlined"
        InputLabelProps={{
            shrink: true,
        }}
        onChange={handleChange}
        style={{width: fieldWidth,
                paddingBottom: 15}}
        {...props}
      />
    </Box>
  )
}

export default Field;