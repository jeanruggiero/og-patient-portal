import React, {useState} from "react";
import YesNoField from "./YesNoField";
import Box from "@material-ui/core/Box";

function ConditionalYesNoField(props) {

  //const [conditionalFields, setConditionalFields] = useState();
  const [value, setValue] = useState(props.value !== undefined ? props.value : false);
  const conditionalFields = value ? props.conditionalFields : null;

  const handleChange = (event) => {
    setValue(event.target.value);

    if (props.onChange) {
      props.onChange(event);
    }
  };

  return (
    <Box>
      <YesNoField onChange={handleChange} {...props} />
      {conditionalFields}
    </Box>
  )
}

export default ConditionalYesNoField;