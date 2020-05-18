import React from "react";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import Icon from "@material-ui/core/Icon";
import Grid from "@material-ui/core/Grid";

function ContactCard(props) {
  return (
    <Box width={350} minWidth={350} mr={4} mb={4}>
      <Card square>
        <CardMedia image={props.image}
                   title={props.location}
                   style={{height: 140}}
        />

        <CardContent>
          <Typography variant="h3" gutterBottom>
            {props.location}
          </Typography>


          <Grid container direction="row" alignItems="center">

            <Grid item>
              <Box p={0.2}>
                <Icon color="primary" fontSize="Small">place</Icon>
              </Box>
            </Grid>

            <Grid item>
              <Typography gutterBottom>

                <Link href={props.locationLink} target="_blank" rel="noopener">
                  {props.address}
                </Link>
              </Typography>
            </Grid>
          </Grid>

          <Grid container direction="row" alignItems="center">

            <Grid item>
              <Box p={0.2}>
                <Icon color="primary" fontSize="small">phone</Icon>
              </Box>
            </Grid>

            <Grid item>
              <Typography gutterBottom>
                <Link href={"tel:" + props.phoneNumber}>
                  {props.phoneNumber}
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </CardContent>

      </Card>
    </Box>
  )
}

export default ContactCard;