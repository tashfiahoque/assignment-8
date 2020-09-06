import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const EachComment = (props) => {
    const {name, email, body, picture} = props.comment;
    const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
        },
        paper: {
          padding: theme.spacing(4),
          margin: 'auto',
          maxWidth: 500,
          height: '220px',
          backgroundColor: 'lightblue',
          marginBottom: '50px'
        },
        image: {
          width: '50%',
          height: '50%'
        },
        img: {
          margin: 'auto',
          display: 'block',
          maxWidth: '100%',
          maxHeight: '100%',
          borderRadius: '50%'
        },
        subtitle: {
            fontSize: '15px',
            fontWeight: 400,
            color: 'black'
        },
        body2: {
            fontSize: '12px',
            fontWeight: 300,
            color: 'black'
        },
        paragraph: {
            fontSize: '12px',
            fontWeight: 300,
            color: 'black'
        }
    }));
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container>
                    <Grid item>
                        <ButtonBase className={classes.image}>
                        <img className={classes.img} alt="complex" src={picture} />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column">
                            <Grid item xs>
                                <Typography gutterBottom variant="subtitle1" className={classes.subtitle}>Name: {name}</Typography>
                                <Typography variant="body2" gutterBottom className={classes.body2}>Email: {email}</Typography>
                                <Typography variant="body2" gutterBottom className={classes.paragraph}>Comment: {body}</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
};

export default EachComment;