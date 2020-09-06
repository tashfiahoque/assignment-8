import React, { useState, useEffect } from 'react';
import EachComment from '../EachComment/EachComment';
import { useParams } from 'react-router-dom';
import Fake from './Fake.js';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';


const Comments = () => {
    const {postId} = useParams();
    const [comments, setComments] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then(res => res.json())
        .then(data => setComments(data))
    }, []) 
    let newComments = comments.map((e) => {
        for(let element of Fake){
            if(e.id === element.id) Object.assign(e, element);
        }
        return e;
    });
    const useStyles = makeStyles({
        main: {
          padding: '50px'
        },
        textStyle: {
            fontSize: '30px',
            fontWeight: '700',
            color: 'orange',
            paddingBottom: '20px'
        
        }
      });
    const classes = useStyles();
    return (
        <Grid container direction="row" spacing={2} className={classes.main}>
            <Grid container direction="column" alignItems="center" spacing={2} className={classes.textStyle}>List of Users Posts</Grid> 
            {
              newComments.map(comment => <Grid item xs={1} md={4}><EachComment comment={comment} key={comment.id} /></Grid>)
            }
        </Grid>
    );
};

export default Comments;