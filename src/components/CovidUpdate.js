import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

function CovidUpdate() {
  return (
    <Box mb={4} mt={-3}>
      <Typography color="error" elementtype="span">
        COVID-19 Update:
      </Typography>

      <Typography elementtype="span">
        Please contact Westside Family Vision Center at 408-264-1555 or Saratoga Vision Center at (408) 370-7303 prior to requesting an appointment if any of the following apply to you:
        <ul>
          <li>
            You are currently experiencing any of the following symptoms: cough, fever, or any other viral symptoms
          </li>
          <li>
            You have been in contact with someone showing the above symptoms in the past two weeks
          </li>
          <li>
            You have traveled outside of Santa Clara County in the past two weeks
          </li>
          <li>
            You have been in contact with someone who has traveled outside of Santa Clara County in the past two weeks
          </li>
        </ul>

      </Typography>
    </Box>
  )
}

export default CovidUpdate;