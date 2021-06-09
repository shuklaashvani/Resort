import classes from "./Button.module.css";
import React from "react";
import { Link } from "react-router-dom";

const Button = (props) => {
  return (
    <Link to={props.pa} className={classes.btn}>
      {props.children}
    </Link>
  );
};

export default Button;
