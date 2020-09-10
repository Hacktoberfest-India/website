import React from "react";
import { Typography } from "@material-ui/core";
import Step from "./Step";
import classes from "./getStarted.module.css";

function GetStarted() {
    const steps = [
        {
            number: 1,
            text: "According to the World Health Organization* more than one billion people worldwide live with a disability."
        },
        {
            number: 2,
            text: "According to the World Health Organization* more than one billion people worldwide live with a disability."
        },
        {
            number: 3,
            text: "According to the World Health Organization* more than one billion people worldwide live with a disability."
        },
        {
            number: 4,
            text: "According to the World Health Organization* more than one billion people worldwide live with a disability."
        }
    ]

    const Steps = steps.map((step) => <Step number={step.number} text={step.text}/>)
    return (
        <div className={classes.getStarted}>
            <Typography className={classes.title} variant="h2">
                Get Started
            </Typography>
            {Steps}
        </div>
    );
}
export default GetStarted;
