import React, {useState} from "react";
import Chip from "@material-ui/core/Chip";

function ToggleChip(props) {

  const [value, setValue] = useState(false);

  // const onChange = props.onChange;
  // useEffect(() => {
  //   props.onChange({target: {name: props.label, value: !value}});
  // }, [value]);

  const handleClick = () => {

    if (value) {
      setValue(false);
    } else {
      setValue(true);
    }

    if (props.onChange) {
      props.onChange({target: {name: props.label, value: !value}});
    }
  };

  return (
    <Chip size="small" variant={value ? "default" : "outlined"} color={value ? "primary" : "default"}
          label={props.label} clickable onClick={handleClick} />
  )
}

export default ToggleChip;