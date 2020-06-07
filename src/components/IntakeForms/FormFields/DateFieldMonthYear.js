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

    if (date instanceof Date && !isNaN(date)) {
      const d = date.getFullYear() + '-' + (date.getMonth() < 9 ? '0' : '') + (date.getMonth() + 1);

      if (props.form && props.form.onChange) {
        props.form.onChange({target: {name: props.name, value: d}});
      }
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
                value={selectedDate}
                onChange={handleDateChange}
                format="MM/yyyy"
                placeholder="MM/YYYY"
                InputLabelProps={{
                  shrink: true,
                }}
                style={{width: 167,
                        paddingBottom: 15}}
                error
                label={props.label}
                required={props.required}
                disableFuture={props.disableFuture}
                views={["year", "month"]}
                openTo={"year"}
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
              value={selectedDate}
              onChange={handleDateChange}
              format="MM/yyyy"
              placeholder="MM/YYYY"
              InputLabelProps={{
                shrink: true,
              }}
              style={{width: 167,
                      paddingBottom: 15}}
              label={props.label}
              required={props.required}
              disableFuture={props.disableFuture}
              views={["year", "month"]}
              openTo={"year"}
        />
      </MuiPickersUtilsProvider>
    </Box>
  )
}

export default DateField;