import React, {useState} from "react";

import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import Box from "@material-ui/core/Box";


function DateField(props) {

  const [selectedDate, setSelectedDate] = useState(null);

  let error = false;

  if (props.form && !props.form.valid && !selectedDate && props.required) {
    console.log("date field error");
    error = true;
  }

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleAccept = (date) => {

    const d = date.getFullYear() + '-' + (date.getMonth() < 9 ? '0' : '') + (date.getMonth() + 1) +
      '-' + (date.getDate() < 10 ? '0' : '') + date.getDate();

    if (props.form && props.form.onChange) {
      props.form.onChange({target: {name: props.name, value: d}});
    }
  };

  if (error) {
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
                label={props.label}
                required={props.required}
                disableFuture={props.disableFuture}
                views={props.views}
                openTo={props.openTo}
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
              required={props.required}
              disableFuture={props.disableFuture}
              views={props.views}
              openTo={props.openTo}
        />
      </MuiPickersUtilsProvider>
    </Box>
  )
}

export default DateField;