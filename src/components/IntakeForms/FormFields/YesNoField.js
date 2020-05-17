import React, {useState} from "react";
import RadioControl from "./RadioControl";

function YesNoField(props) {

  const [value, setValue] = useState();

  const handleChange = (event) => {

    let val = event.target.value === "Yes";
    console.log("yesno event handler");
    console.log(event.target.value);
    console.log(val);

    setValue(val);

    if (props.form && props.form.onChange) {
      props.form.onChange({
        target: {
          name: props.name,
          value: val
        }
      });
    }
  };

  const form = {
    valid: props.form.valid,
    onChange: handleChange
  };

  return (
    <RadioControl {...props}
                  options={["Yes", "No"]}
                  form={form}
    />
  )
}

export default YesNoField;