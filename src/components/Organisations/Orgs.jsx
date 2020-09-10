import React from "react";
import { Container, Grid, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles"
import Org from "./Org";
import Classes from "../Timeline/timeline.module.css";

const useStyles = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
}));

function Orgs() {
    const classes = useStyles();

    return (
        <div>
            <Typography className={Classes.title} variant="h2">
                Organisations
            </Typography>
            
            <Container className={classes.cardGrid} maxWidth="md">
                <Grid container spacing={4}>
                    <Org logo="https://source.unsplash.com/random" name="ABC" bio="Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely." />
                    <Org logo="https://source.unsplash.com/random" name="ABC" bio="Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely." />
                    <Org logo="https://source.unsplash.com/random" name="ABC" bio="Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely." />
                    <Org logo="https://source.unsplash.com/random" name="ABC" bio="Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely." />
                    <Org logo="https://source.unsplash.com/random" name="ABC" bio="Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely." />
                    <Org logo="https://source.unsplash.com/random" name="ABC" bio="Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely." />
                </Grid>
            </Container>
        </div>
    );
}
export default Orgs;
