import React, {useState} from "react";

import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import Box from "@material-ui/core/Box";


function DateField(props) {

  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleAccept = (date) => {

    const d = date.getFullYear() + '-' + (date.getMonth() < 9 ? '0' : '') + (date.getMonth() + 1) +
      '-' + (date.getDate() < 10 ? '0' : '') + date.getDate();

    if (props.onChange) {
      props.onChange({target: {name: props.name, value: d}});
    }
  };

  if (props.error) {
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
                error
                helperText="This field is required"
                label={props.label}
          />
        </MuiPickersUtilsProvider>
      </Box>
    )
  }

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
              label={props.label}
        />
      </MuiPickersUtilsProvider>
    </Box>
  )
}

export default DateField;