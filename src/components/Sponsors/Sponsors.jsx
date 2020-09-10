import React from "react";
import { Container, Grid, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles"
import Sponsor from "./Sponsor";
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
        <div>
            <Typography className={Classes.title} variant="h2">
                Sponsors
            </Typography> 
            <Container className={classes.cardGrid} maxWidth="md">
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <Typography variant="h3">
                            Platinum Sponsors
                        </Typography>  
                    </Grid>
                    <Sponsor logo="https://source.unsplash.com/random" size="12" />
                    <Grid item xs={12}>
                        <Typography variant="h3">
                            Gold Sponsors
                        </Typography>  
                    </Grid>
                    <Sponsor logo="https://source.unsplash.com/random" size="6" />
                    <Sponsor logo="https://source.unsplash.com/random" size="6" />
                    <Grid item xs={12}>
                        <Typography variant="h3">
                            Silver Sponsors
                        </Typography>  
                    </Grid>
                    <Sponsor logo="https://source.unsplash.com/random" size="4" />
                    <Sponsor logo="https://source.unsplash.com/random" size="4" />
                    <Sponsor logo="https://source.unsplash.com/random" size="4" />
                </Grid>
            </Container>
        </div>
    );
}
export default Team;
