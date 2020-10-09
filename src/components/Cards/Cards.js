import React from "react";
import styles from "assets/jss/component/cards/cardsStyle";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles(styles);

const Cards = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.card} >
        {props.children}
    </div>
  );
};

export default Cards;
