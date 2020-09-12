import React from "react";
import { Container, Typography,Grid,Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

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
    
function Banner() {
    const classes = useStyles();

    return (
        <div className={classes.Content}>
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
                {/* <Grid item>
                    <Button  variant="contained" className={classes.navBtns}>Join Discord</Button>
                </Grid> */}
                <Grid item>
                    <Button  variant="contained" className={classes.navBtns}>Apply Now</Button>
                </Grid>
            </Grid>
        </div>
        </Container>
        </div>
    )
}
export default Banner;
