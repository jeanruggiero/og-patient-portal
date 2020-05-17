import React, {useState} from "react";
import SelectGroup from "./SelectGroup";
import {Box} from "@material-ui/core";
import Field from "./Field";

function DetailSelectGroup(props) {

  const [state, setState] = useState({});
  const [selected, setSelected] = useState([]);
  //const [detailFields, setDetailFields] = useState([]);

  console.log(selected);

  let detailFields = [];

  const handleDetailBlur = (event) => {
    setState({...state, [event.target.name]: event.target.value});

    const s = {...state, [event.target.name]: event.target.value};

    let details = {};

    for (const v of selected) {
      if (s[v]) {
        details[v] = s[v];
      }
    }

    if (props.form && props.form.onChange) {
      props.form.onChange({
        target: {
          name: props.name,
          value: {
            items: selected,
            details: details
          }
        }
      });
    }
  };

  for (const field of selected) {
    detailFields.push(
      <Field label={field + " Detail"}
             name={field}
             onBlur={handleDetailBlur}
             width={600}
      />
    );
  }

  const handleSelectChange = (event) => {

    const value = event.target.value;
    setSelected(value);

    let details = {};

    for (const v of value) {
      if (state[v]) {
        details[v] = state[v];
      }
    }

    if (props.form && props.form.onChange) {
      props.form.onChange({
        target: {
          name: props.name,
          value: {
            items: value,
            details: details
          }
        }
      });
    }
  };


  return (
    <Box>
      <SelectGroup {...props} form={{onChange: handleSelectChange}} />
      {detailFields}
    </Box>
  )
}

export default DetailSelectGroup;