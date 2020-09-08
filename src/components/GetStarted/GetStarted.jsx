import React from "react";
import { Typography } from "@material-ui/core";
import Step from "./Step";
import classes from "./getStarted.module.css";

function GetStarted() {
    return (
        <div className={classes.getStarted}>
            <Typography className={classes.title} variant="h2">
                Get Started
            </Typography>
            <Step
                number="1"
                text="Banner blah blah Main Banner blah blahMain Banner blah blah"
            />
            <Step
                number="2"
                text="Banner blah blah Main Banner blah blahMain Banner blah blah"
            />
            <Step
                number="3"
                text="Banner blah blah Main Banner blah blahMain Banner blah blah"
            />
            <Step
                number="4"
                text="Banner blah blah Main Banner blah blahMain Banner blah blah"
            />
        </div>
    );
}
export default GetStarted;
