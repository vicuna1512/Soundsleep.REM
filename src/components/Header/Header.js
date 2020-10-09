import React from "react";

import styles from "assets/jss/component/Header/HeaderStyle";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(styles);

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.Header}>
      <Button>Analysis</Button>
      <Button>Customize</Button>
      <Button>Reviews</Button>
      <Button>Featured</Button>
    </div>
  );
};

export default Header;
