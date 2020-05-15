import React, {useState} from "react";
import {Box} from "@material-ui/core";
import FormLabel from "@material-ui/core/FormLabel";
import Button from "@material-ui/core/Button";
import Icon from '@material-ui/core/Icon'

function isIterable(obj) {
  // checks for null and undefined
  if (obj == null) {
    return false;
  }
  return typeof obj[Symbol.iterator] === 'function';
}


function ListControl(props) {

  const [state, setState] = useState({});

  const handleChange = (event, index) => {
    let value = event.target.value;
    setState({...state, [index]: {...state[index],
      [event.target.name]: value}
    });

    const s = {...state, [index]: {...state[index],
      [event.target.name]: value}
    };

    let values = [];

    Object.keys(s).forEach(key => {
      if (s[key]) {
        values.push(s[key])
      }
    });

    if (props.form && props.form.onChange) {
      props.form.onChange({target:
          {
            name: props.name,
            value: values
          }});
    }
  };

  let fields = [];

  const [fieldCount, setFieldCount] = useState(1);

  // Inject some props into child fields
  for (let i = 0; i < fieldCount; i++) {
    if (isIterable(props.children)) {
      for (const child of props.children) {
        fields.push(React.cloneElement(child, {
            form: {onChange: (event) => handleChange(event, i)},
          }
        ));
      }
    } else {
      fields.push(React.cloneElement(props.children, {
          form: {onChange: (event) => handleChange(event, i)},
        }
      ));
    }
  }

  const handleClick = () => {
    // Increase number of child fields when 'ADD MORE' is clicked
    setFieldCount(fieldCount + 1);
  };

  return (
    <Box mb={1}>
      <FormLabel>{props.label}</FormLabel>
      <Box mb={-2} mt={1.5}>
        {fields}
      </Box>

      <Button color="primary" startIcon={<Icon>add</Icon>} onClick={handleClick}>Add More</Button>
    </Box>
  )
}

export default ListControl;