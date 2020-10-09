import React from "react";
import styles from "assets/jss/component/cards/cardsStyle";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(styles);

const CardsBody = (props) => {

const classes = useStyles();

  return (
    <div className={classes.cardBody}>
        Your age {props.user.age}<br/>
        DrugLevel {props.user.drugLevel}<br/>
        sleepDuration {props.user.sleepDuration}<br/>
    </div>
  );
};

export default CardsBody;
