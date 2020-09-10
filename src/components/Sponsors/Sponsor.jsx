import React from "react";
import { Grid, Card, CardMedia} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

// props include logo

const useStyles = makeStyles((theme) => ({
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
  }));


// eslint-disable-next-line react/prop-types
const Sponsor = ({ logo, size }) => {
    const classes = useStyles();

    return (
              <Grid item xs={size} >
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={logo}
                    title="Image title"
                  />
                </Card>
              </Grid>
    )
}
export default Sponsor;
