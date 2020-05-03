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


  return (
    <Box pr={2} component="span">
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
              required={props.required}
              autoOk
              //disableToolbar
              //width={10}
              variant="inline"
              inputVariant="outlined"
              format="MM/dd/yyyy"
              //margin="normal"
              //id="date-picker-inline"
              label={props.label}
              value={selectedDate}
              onChange={handleDateChange}
              InputLabelProps={{
                shrink: true,
              }}
              placeholder="MM/DD/YYYY"
              //views={["year", "month", "date"]}
              // KeyboardButtonProps={{
              //   'aria-label': 'change date',
              // }}
              style={{width: 167,
                      paddingBottom: 30}}
        />
      </MuiPickersUtilsProvider>
    </Box>
  )
}

export default DateField;