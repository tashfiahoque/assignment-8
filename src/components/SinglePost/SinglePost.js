import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Comments from '../Comments/Comments';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const SinglePost = () => {
    const {postId} = useParams();
    const [singlePost, setSinglePost] = useState({});
   
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setSinglePost(data))
    }, [])
    const useStyles = makeStyles({
        title: {
          fontSize: '18px',
          fontWeight: 500,
          color: 'salmon'
        },
        body2:{
            textAlign: 'justify'
        },
        paper: {
            padding: '50px',
            margin: '50px auto',
            maxWidth: 500,
            backgroundColor: 'lightgreen'
        },
        heading: {
            fontSize: '22px',
            fontWeight: 700,
            color: 'goldenrod'
          }
      });
      const classes = useStyles();
    return (
        <Grid container direction="column">
            <Paper className={classes.paper}>
                <Typography className={classes.heading} gutterBottom>Post Id: {singlePost.id}</Typography>
                <Typography className={classes.title} gutterBottom>Post Title: {singlePost.title}</Typography>
                <Typography variant="body2" component="p">Post Detail: {singlePost.body}</Typography>
            </Paper>
        <Comments />
        </Grid>
    );
};

export default SinglePost;