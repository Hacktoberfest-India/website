import React from 'react';
import {  Typography, Grid } from '@material-ui/core';
import Faq from 'react-faq-component';
import Classes from "../Timeline/timeline.module.css";

const data = {
  rows: [
    {
      title: "Lorem ipsum dolor sit amet,",
      content: "Meatloaf doner pork loin sirloin, pork ground round brisket tenderloin. Biltong shank swine kielbasa, ribeye pork belly capicola chicken turducken chislic. Chislic shoulder fatback shankle prosciutto, salami landjaeger sausage jowl bresaola pig chuck frankfurter ribeye. Salami tri-tip ribeye jowl meatball brisket."
    },
    {
      title: "Nunc maximus, magna at ultricies elementum",
      content: "Meatloaf doner pork loin sirloin, pork ground round brisket tenderloin. Biltong shank swine kielbasa, ribeye pork belly capicola chicken turducken chislic. Chislic shoulder fatback shankle prosciutto, salami landjaeger sausage jowl bresaola pig chuck frankfurter ribeye. Salami tri-tip ribeye jowl meatball brisket."
    },
    {
      title: "Curabitur laoreet, mauris vel blandit fringilla",
      content: "Meatloaf doner pork loin sirloin, pork ground round brisket tenderloin. Biltong shank swine kielbasa, ribeye pork belly capicola chicken turducken chislic. Chislic shoulder fatback shankle prosciutto, salami landjaeger sausage jowl bresaola pig chuck frankfurter ribeye. Salami tri-tip ribeye jowl meatball brisket."
    },
    {
      title: "What is the package version",
      content: "v1.0.5"
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