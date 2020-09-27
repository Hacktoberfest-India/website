import React from "react";
import { Typography } from "@material-ui/core";
import Step from "./Step";
import classes from "./getStarted.module.css";

function GetStarted() {
    const steps = [
        {
            number: 1,
            text: "Signup on the Hacktoberfest website with your GitHub account 12 AM, October 1st onwards"
        },
        {
            number: 2,
            text: "Find an organisation whose open-source projects you would like to contribute to. The list is available here:"
        },
        {
            number: 3,
            text: "Join our Discord Community to connect with the organization’s mentors and maintainers. Interact with them and understand how you can contribute to their open-source projects."
        },
        {
            number: 4,
            text: "Begin contributing to the listed projects, Happy Open Source :)"
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
