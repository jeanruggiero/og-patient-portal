import React, {useState} from "react";
import TextField from "@material-ui/core/TextField/TextField";

function Field(props) {

  const defaultWidth = 150;
  const fieldWidth = props.width ? props.width : defaultWidth;

  const [value, setValue] = useState("");

  let error = false;

  if (props.form && !props.form.valid && !value && props.required) {
    console.log("field error");
    error = true;
  }

  const handleChange = (event) => {

    setValue(event.target.value);

    // if (props.form && props.form.onChange) {
    //   props.form.onChange({target: {name: props.name, value: event.target.value}});
    // }
  };

  const handleBlur = () => {
    if (props.form && props.form.onChange) {
      props.form.onChange({target: {name: props.name, value: value}});
    }
  };

  const style = {
    paddingBottom: 15,
    paddingRight: 12
  };

  if (props.width) {
    style.width = props.width;
  }

  return (

      <TextField
        value={value}
        variant="outlined"
        InputLabelProps={{
            shrink: true,
        }}
        onChange={handleChange}
        onBlur={handleBlur}
        style={style}
        error={error}
        //helperText={error ? "This field is required" : null}
        {...props}
      />

  )
}

export default Field;