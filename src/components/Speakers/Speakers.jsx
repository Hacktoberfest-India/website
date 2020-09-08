import React from "react";
import { Typography, Grid, Box } from "@material-ui/core";
import Speaker from "./Speaker";
import classes from "./speakers.module.css";

function Speakers() {
    return (
        <Box className={classes.speakers}>
            <Typography className={classes.title} variant="h2">
                Speakers
            </Typography>
            <Grid className={classes.cardList} container spacing={3}>
                <Speaker
                    photo=""
                    name="Mr. Excepteur sint occaecat"
                    social="twitter"
                />
                <Speaker
                    photo=""
                    name="Mr. Excepteur sint occaecat"
                    social="twitter"
                />
                <Speaker
                    photo=""
                    name="Mr. Excepteur sint occaecat"
                    social="twitter"
                />
                <Speaker
                    photo=""
                    name="Mr. Excepteur sint occaecat"
                    social="twitter"
                />
                <Speaker
                    photo=""
                    name="Mr. Excepteur sint occaecat"
                    social="twitter"
                />
                <Speaker
                    photo=""
                    name="Mr. Excepteur sint occaecat"
                    social="twitter"
                />
            </Grid>
        </Box>
    );
}
export default Speakers;
