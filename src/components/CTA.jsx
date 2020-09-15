import React from "react";
import {Container, Grid, Button, Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import ApplyNowButton from './ApplyNowButton';
import Classes from "./Timeline/timeline.module.css";

const useStyles = makeStyles((theme) => ({
    Content: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },

    navBtns: {
        background: "#9c4668",
        margin: "0 1rem",
        padding: "1.7rem 2rem",
        borderRadius: "3rem",
        height: "3rem",
        color: "#ffffff",
        fontWeight: "900"
    }
}));

function CTA() {
    const classes = useStyles();

    return (
        <div className={classes.Content}>
            <Typography className={Classes.title} variant="h2">
                Join now!
            </Typography>
            <br/>
            <Container maxWidth="sm">
                <Grid container spacing={2} justify="center">
                    <Grid item>
                        <Button  variant="contained" className={classes.navBtns}>Join Discord</Button>
                    </Grid>
                    <Grid item>
                        <ApplyNowButton/>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
export default CTA;
