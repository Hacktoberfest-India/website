import React from "react";
import { Container, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

// import ApplyNowButton from './ApplyNowButton';

const useStyles = makeStyles((theme) => ({
    Content: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(2),
    }
}));
    
function Banner() {
    const classes = useStyles();

    return (
        <div id="#" className={classes.Content}>
        <Container maxWidthLg style={{display:"flex", flexWrap:"wrap"}} >
            {/* <img style={{height:"500px", width:"auto"}} alt="HacktoberFest logo" src="https://hacktoberfest.digitalocean.com/assets/HF-full-logo-b05d5eb32b3f3ecc9b2240526104cf4da3187b8b61963dd9042fdc2536e4a76c.svg" /> */}
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Hacktoberfest India
        </Typography>
        <Typography variant="h5" align="justify" color="textSecondary" paragraph>
            Hacktoberfest is a month-long celebration of open source software organized by DigitalOcean. This is a perfect time to kick-start your journey into the world of open-source as well as improve your skills, and build greater technology in the process. Hacktoberfest encourages participation in the open-source community, whether you’re new to development, a student, long-time contributor, event host, or company of any size, you can help drive the growth of open source and make positive contributions to an ever-growing community. All backgrounds and skill levels are encouraged to complete the challenge where you get a chance to earn a limited-edition t-shirt as well as you&apos;ll find many ways to learn, grow, and contribute to a global community of developers.
        </Typography>
        {/* <div className={classes.Buttons}>
            <Grid container spacing={2} justify="center">
                <Grid item>
                    <ApplyNowButton/>
                </Grid>
            </Grid>
        </div> */}
        </Container>
        </div>
    )
}
export default Banner;
