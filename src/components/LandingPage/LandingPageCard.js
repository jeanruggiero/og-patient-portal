import React, {useState} from "react";
import {Box} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import {makeStyles} from "@material-ui/core/styles";
import CardActionArea from "@material-ui/core/CardActionArea";

const useStyles = makeStyles({
  card: {
    minWidth: 250,
    maxWidth: 400,
  }
});


function LandingPageCard(props) {

  const classes = useStyles();
  const [height, setHeight] = useState(1);

  const onMouseOver = () => setHeight(3);
  const onMouseOut = () => setHeight(1);

  return (

    <Box pb={2} pr={2} maxWidth={380} display="inline-block">
      <Card className={classes.card}
            onMouseOver={onMouseOver}
            onMouseOut={onMouseOut}
            elevation={height}
            maxWidth={300}

       >
        <CardActionArea component={Link} to={props.destination}>
          <CardContent>
            <Typography variant="h3" gutterBottom>
              {props.title}
            </Typography>

            <Typography>
              {props.description}
            </Typography>
          </CardContent>
        </CardActionArea>


      </Card>
    </Box>

  )
}

export default LandingPageCard;