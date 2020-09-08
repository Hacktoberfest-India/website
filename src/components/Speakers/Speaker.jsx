/* eslint-disable react/prop-types */
import React from "react";
import { Grid, Typography } from "@material-ui/core";
import classes from "./speakers.module.css";

// props include photo, name and socials
const Speaker = ({ name, social }) => {
    return (
        <Grid item xs={12} sm={6} className={classes.card}>
            <div className={classes.photo} />
            <div className={classes.main}>
                <Typography className={classes.name}>{name}</Typography>
                <div>{social}</div>
            </div>
        </Grid>
    );
};
export default Speaker;
