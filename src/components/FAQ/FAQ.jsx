import React from 'react';
import {  Typography, Grid } from '@material-ui/core';
import Faq from 'react-faq-component';
import Classes from "../Timeline/timeline.module.css";

const data = {
  rows: [
    {
      title: "What is open source?",
      content: "Open source refers to source code that is publicly accessible and allows anyone to inspect, modify or learn from it. Open source projects encourage collaboration and the freedom to use the software for any purpose you wish."
    },
    {
      title: "What is a pull request?",
      content: "Pull requests are proposed code changes you can submit to a branch in a repository on GitHub. Once submitted, a project maintainer will review and discuss the changes before they become final."
    },
    {
      title: "How do I get started?",
      content: "Please view our Steps To Join section for the instructions to participate in this initiative"
    },
    {
      title: "Do I get a prize for participating?",
      content: "Aside from the knowledge, you’ll gain and the fun you’ll have, you’ll also receive a limited-edition Hacktoberfest T-shirt for submitting 4 valid pull requests as well as any prizes offered by the organization you work under."
    }]
}

const FAQ = () => {
    return (
        <div id="FAQs">
        <Typography className={Classes.title} variant="h2">
                FAQ
        </Typography> 
        <Grid container   justify="center"
            alignItems="center">
        <Grid item xs={9}>        
        <Faq data={data} 
                styles={{
                    bgColor: "white",
                    rowTitleColor: "#000",
                    rowTitleTextSize: 'large',
                    rowContentColor: "#48484a",
                    rowContentTextSize: '16px',
                    arrowColor: "black",
                }}
                    />
        </Grid>
        </Grid>
    </div>
    )
}

export default FAQ;