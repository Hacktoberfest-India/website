import React from "react";
import { Container, Typography,Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import ApplyNowButton from './ApplyNowButton';

const useStyles = makeStyles((theme) => ({
    Content: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    }
}));
    
function Banner() {
    const classes = useStyles();

    return (
        <div id="#" className={classes.Content}>
        <Container maxWidth="sm">
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Hacktoberfest India
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
            Something short and leading about the collection below—its contents, the creator, etc.
            Make it short and sweet, but not too short so folks don&apos;t simply skip over it
            entirely.
        </Typography>
        <div className={classes.Buttons}>
            <Grid container spacing={2} justify="center">
                <Grid item>
                    <ApplyNowButton/>
                </Grid>
            </Grid>
        </div>
        </Container>
        </div>
    )
}
export default Banner;
