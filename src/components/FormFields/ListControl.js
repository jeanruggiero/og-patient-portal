import React, {useState} from "react";
import {Box} from "@material-ui/core";
import FormLabel from "@material-ui/core/FormLabel";
import Field from "./Field";
import Button from "@material-ui/core/Button";
import Icon from '@material-ui/core/Icon'

function ListControl(props) {

  const [fields, setFields] = useState([props.field]);

  const handleClick = () => {
    setFields(fields.concat([props.field]));
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