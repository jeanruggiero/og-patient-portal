import React, {useState} from "react";
import Box from "@material-ui/core/Box";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import FormGroup from "@material-ui/core/FormGroup";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

function CheckBoxControl (props) {

  let temp = {};

  for (const option of props.options) {
    temp[option] = false;
  }

  const [state, setState] = useState(temp);

  let value = [];

  Object.keys(state).forEach(key => {
    if (state[key]) {
      value.push(key);
    }
  });

  let error = false;

  if (props.form && !props.form.valid && !value && props.required) {
    error = true;
  }

  const handleChange = (event) => {
    setState({...state, [event.target.name]: event.target.value});

    let value = [];

    Object.keys(state).forEach(key => {
      if (state[key]) {
        value.push(key);
      }
    });

    if (props.form && props.form.onChange) {
      props.form.onChange({
        target: {
          name: props.name,
          value: value
        }
      });
    }
  };

  const fields = [];

  for (const option of props.options) {
    fields.push(
      <FormControlLabel value={option}
                        label={option}
                        control={<Checkbox />}

      />);

  }


  return (
    <Box pb={2}>
      <FormControl component="fieldset"
                   name={props.name}
                   required={props.required}
                   error={error}
      >
      <FormLabel component="legend" style={{fontWeight: 500}}>{props.label}</FormLabel>

        <FormGroup>
          {fields}
        </FormGroup>

      </FormControl>

    </Box>
  )
}

export default CheckBoxControl;