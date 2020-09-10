import React from "react";
import { Typography, Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'

import Classes from "./Timeline/timeline.module.css";




const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(4),  
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    
  }));
  
export default function About() {
    const classes = useStyles();
  
    return (
        <div className={classes.root}>
            <Typography className={Classes.title} variant="h2">
                About us
            </Typography>
            <Grid container spacing={3} justify="center" >
                    <Grid item xs={9} >
                        <Paper className={classes.paper}>
                        Bacon ipsum dolor amet kielbasa bresaola ribeye jerky doner brisket turducken ball tip chuck cupim. Pork loin burgdoggen swine, sirloin picanha shoulder tail pork chop beef meatloaf buffalo beef ribs pig bacon. Pancetta beef leberkas cupim frankfurter pastrami, shoulder doner tail salami chislic. Boudin cupim chuck ball tip filet mignon. Tongue tenderloin porchetta jowl kevin venison ball tip ham tri-tip pork belly prosciutto ham hock brisket ribeye short loin. Ham biltong beef brisket meatball.        
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <img alt="random" src="https://source.unsplash.com/random" height="120px" width="100%"/>
                    </Grid>
                    <Grid item xs={3}>
                        <img alt="random" src="https://source.unsplash.com/random" height="120px" width="100%"/>
                    </Grid>
                    <Grid item xs={9} >
                        <Paper className={classes.paper}>
                        Bacon ipsum dolor amet kielbasa bresaola ribeye jerky doner brisket turducken ball tip chuck cupim. Pork loin burgdoggen swine, sirloin picanha shoulder tail pork chop beef meatloaf buffalo beef ribs pig bacon. Pancetta beef leberkas cupim frankfurter pastrami, shoulder doner tail salami chislic. Boudin cupim chuck ball tip filet mignon. Tongue tenderloin porchetta jowl kevin venison ball tip ham tri-tip pork belly prosciutto ham hock brisket ribeye short loin. Ham biltong beef brisket meatball.        
                        </Paper>
                    </Grid>
                    <Grid item xs={9} >
                        <Paper className={classes.paper}>
                        Bacon ipsum dolor amet kielbasa bresaola ribeye jerky doner brisket turducken ball tip chuck cupim. Pork loin burgdoggen swine, sirloin picanha shoulder tail pork chop beef meatloaf buffalo beef ribs pig bacon. Pancetta beef leberkas cupim frankfurter pastrami, shoulder doner tail salami chislic. Boudin cupim chuck ball tip filet mignon. Tongue tenderloin porchetta jowl kevin venison ball tip ham tri-tip pork belly prosciutto ham hock brisket ribeye short loin. Ham biltong beef brisket meatball.        
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <img alt="random" src="https://source.unsplash.com/random" height="120px" width="100%"/>
                    </Grid>
            </Grid>
        </div>
    );
  }
