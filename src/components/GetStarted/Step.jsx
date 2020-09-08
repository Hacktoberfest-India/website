/* eslint-disable react/prop-types */
import React from "react";
import classes from "./getStarted.module.css";

const Step = ({ number, text }) => (
    <div className={classes.step}>
        <div className={classes.number}>{number}</div>
        <div className={classes.text}>
            <span style={{ color: "#FF8AE2", fontWeight: 900 }}>
                Step {number}
            </span>
            &nbsp;
            <span>{text}</span>
        </div>
    </div>
);
export default Step;
