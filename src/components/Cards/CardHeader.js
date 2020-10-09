import React from "react";
import styles from "assets/jss/component/cards/cardsStyle";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(styles);

const CardHeader = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.cardHeader}>
        <h1>{props.children}</h1>
    </div>
  );
};

export default CardHeader;
