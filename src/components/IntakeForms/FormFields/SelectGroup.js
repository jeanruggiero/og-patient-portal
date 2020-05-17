import React, {useState} from "react";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import {makeStyles} from "@material-ui/core/styles";
import ToggleChip from "./ToggleChip";

const useStyles = makeStyles(() => ({
    root: {
      marginTop: 10,
      marginBottom: 20
    },
    formLabel: {
      fontWeight: 500,
      fontSize: 'medium',
      marginBottom: 8,
      marginLeft: 4
    },
    formGroup: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: 4
      }
    }
  })
);

function SelectGroup(props) {

  const [state, setState] = useState({});
  const classes = useStyles();
  const controls = [];

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value});

    if (props.form && props.form.onChange) {
      let value = [];

      Object.keys(state).forEach(p => {
        if (p !== event.target.name && state[p]) {
          value.push(p);
        }
      });

      if (event.target.value) {
        value.push(event.target.name);
      }

      props.form.onChange({target: {name: props.name, value: value}});
    }
  };

  // Build list of toggle chips
  for (const option of props.options) {
    controls.push(<ToggleChip label={option} onChange={handleChange} />);
  }

  return (
    <div className={classes.root}>
      <FormControl component="fieldset">

        <FormLabel component="legend" className={classes.formLabel}>{props.label}</FormLabel>

        <div className={classes.formGroup}>
          {controls}
        </div>

      </FormControl>
    </div>
  )
}

export default SelectGroup;