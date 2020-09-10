import React from "react";
import { Grid, Card, CardMedia, CardContent, Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
// props include photo and name

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
const Member = ({ picture, name }) => {
    const classes = useStyles();

    return (
              <Grid item xs={12} sm={6} md={3}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={picture}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {name}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
    )
}
export default Member;
