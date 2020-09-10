import React from "react";
import {
    Timeline as TM,
    TimelineItem,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineOppositeContent,
    TimelineSeparator,
} from "@material-ui/lab";

import { Typography, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: "6px 16px",
    },
    secondaryTail: {
        backgroundColor: theme.palette.secondary.main,
    },
    time: {
        width: "50%",
        alignSelf: "center",
    },
}));

export default function Timeline() {
    const classes = useStyles();
    const tasks = [
        {
            date: "Date",
            activity: "Activity",
        },
        {
            date: "Date",
            activity: "Activity",
        },
        {
            date: "Date",
            activity: "Activity",
        },
        {
            date: "Date",
            activity: "Activity",
        },
    ];

    const timeline = tasks.map((task) => {
        return (
            <TimelineItem className={classes.time}>
                <TimelineOppositeContent>
                    <Typography variant="body2" color="textSecondary">
                        {task.date}
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color="primary" />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h6" component="h1">
                            {task.activity}
                        </Typography>
                        <Typography>Because you need rest</Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
        );
    });

    return (
        <div>
            <Typography variant="h4" component="h4">
                Schedule
            </Typography>

            <TM align="alternate">{timeline}</TM>
        </div>
    );
}
