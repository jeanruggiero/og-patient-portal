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

    console.log("handling checkbox change");
    setState({...state, [event.target.value]: event.target.checked});

    let value = [];
    const s = {...state, [event.target.value]: event.target.checked};

    Object.keys(s).forEach(key => {
      if (s[key]) {
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
                        error={error}
                        onChange={handleChange}
                        control={<Checkbox style={{
                          marginTop: -8,
                          marginBottom: -8
                        }} />}

      />);

  }

  const label = !props.label ? null : (
    <FormLabel component="legend"
               required={props.required}
               style={
                 {fontWeight: 500,
                   paddingBottom: 10}
               }>

      {props.label}

    </FormLabel>
  );


  return (
    <Box pb={2} display="inline-block">
      <FormControl component="fieldset"
                   name={props.name}
                   required={props.required}
                   error={error}
      >

        {label}

        <FormGroup row={props.row} required={props.required}>
          {fields}
        </FormGroup>

      </FormControl>

    </Box>
  )
}

export default CheckBoxControl;