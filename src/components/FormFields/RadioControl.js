import React, {useState} from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Box from "@material-ui/core/Box";

function RadioControl(props) {
  const [value, setValue] = useState(props.value);

  let controlStyle = {display: 'block'};
  let radioStyle = {marginBottom: -5, marginTop: -5, marginRight: -4};

  if (props.display && props.display === 'inline') {
    controlStyle = {display: 'inline-flex'};
  }

  let required = props.required !== undefined;
  let row = true;

  if (props.column !== undefined) {
    console.log("column prop exists");
    row = false;
    radioStyle.marginBottom = -10;
    controlStyle.marginTop = -6;

    if (!props.label && props.required !== undefined) {
      props.options[0] = props.options[0] + "   *";
      required = false;
    }
  }

  const handleChange = (event) => {
    setValue(event.target.value);

    if (props.onChange) {
      props.onChange(event);
    }
  };

  const options = [];

  for (const value of props.options) {
    options.push(<FormControlLabel value={value.toLowerCase()} control={<Radio style={radioStyle} />} label={value} style={{paddingBottom: 0}} />);
  }

  return (
    <Box pb={2} style={controlStyle}>
      <FormControl component="fieldset" required={required} style={controlStyle}>
        <Box component="span" mb={1}>
          <FormLabel component="legend" style={{fontWeight: 500}} >{props.label}</FormLabel>
        </Box>

        <RadioGroup row={row} aria-label={props.label} name={props.label} value={value} onChange={handleChange} >
          {options}
        </RadioGroup>

      </FormControl>
    </Box>
  )
}

export default RadioControl;