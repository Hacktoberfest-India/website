import React from "react";
import { Container, Grid, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles"
import Member from "./Member";
import Classes from "../Timeline/timeline.module.css";

const useStyles = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
}));

function Team() {
    const classes = useStyles();

    return (
        <div id="Team">
            <Typography className={Classes.title} variant="h2">
                Our Team
            </Typography>
            
            <Container className={classes.cardGrid} maxWidth="md">
                <Grid container spacing={4}>
                    <Member picture="https://source.unsplash.com/random" name="ABC"  />
                    <Member picture="https://source.unsplash.com/random" name="ABC"  />
                    <Member picture="https://source.unsplash.com/random" name="ABC" />
                    <Member picture="https://source.unsplash.com/random" name="ABC"  />
                    
                </Grid>
            </Container>
        </div>
    );
}
export default Team;
