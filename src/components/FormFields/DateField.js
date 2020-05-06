import React from "react";

import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import Box from "@material-ui/core/Box";


function DateField(props) {

  const [selectedDate, setSelectedDate] = React.useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleAccept = (date) => {
    if (props.onChange) {
      props.onChange({target: {name: props.name, value: date.toISOString().substring(0, 10)}});
    }
  };

  return (
    <Box pr={2} component="span">
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
              autoOk
              variant="inline"
              inputVariant="outlined"
              format="MM/dd/yyyy"
              value={selectedDate}
              onChange={handleDateChange}
              onAccept={handleAccept}
              InputLabelProps={{
                shrink: true,
              }}
              placeholder="MM/DD/YYYY"
              style={{width: 167,
                      paddingBottom: 15}}
              required={props.required}
              label={props.label}
        />
      </MuiPickersUtilsProvider>
    </Box>
  )
}

export default DateField;