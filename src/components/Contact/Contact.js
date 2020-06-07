import React from "react";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import Icon from "@material-ui/core/Icon";
import Grid from "@material-ui/core/Grid";
import ContactCard from "./ContactCard";

function Contact() {
  return (
    <Box>
      <Box mt={5} mb={2}>
        <Typography variant="h2">
          Contact Us
        </Typography>
      </Box>

      <Box display="flex" flexWrap="wrap">
        <ContactCard location="Westside Family Vision Center"
                     image={require("../../static/westside_family_vision_center.jpg")}
                     locationLink="https://g.page/westsidefamilyvisioncenter?share"
                     address="1817 Hamilton Avenue, San Jose, CA 95125"
                     phoneNumber="(408) 264-1555"
                     email="info@optometricgroup.com"
        />

        <ContactCard location="Saratoga Vision Center"
                     image={require("../../static/saratoga_vision_center.jpg")}
                     locationLink="https://g.page/saratoga-vision-center?share"
                     address="18816 Cox Avenue, Saratoga, CA 95070"
                     phoneNumber="(408) 370-7303"
                     email="info@optometricgroup.com"
        />
      </Box>



    </Box>
  )
}

export default Contact;