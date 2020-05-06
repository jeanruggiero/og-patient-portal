import React, {useState} from "react";
import SelectGroup from "./SelectGroup";
import {Box} from "@material-ui/core";
import Field from "./Field";

function DetailSelectGroup(props) {

  const [state, setState] = useState({});
  const [detailFields, setDetailFields] = useState([]);

  const handleChange = (event) => {

    let newFields = [];

    console.log(event.target.value);
    for (const field of event.target.value) {
      newFields.push(<Field label={field + " Detail"} width={600} />);
    }

    setDetailFields(newFields);
  };


  return (
    <Box>
      <SelectGroup onChange={handleChange} {...props} />
      {detailFields}
    </Box>
  )
}

export default DetailSelectGroup;