import React from "react";
import styles from "assets/jss/component/cards/cardsStyle";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(styles);

const CardFooter = (props) => {
  const classes = useStyles();

  return (<div className={classes.cardFooter}>
      Your Sleep Score {props.children}
      </div>
      );
};

export default CardFooter;
