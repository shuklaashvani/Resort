import React from "react";
import classes from "./Title.module.css";

const Title = (props) => {
  return (
    <div className={classes.title}>
      <h1>{props.children}</h1>
      <div className={classes.col} />
    </div>
  );
};

export default Title;
