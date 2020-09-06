import React, { useState, useEffect } from 'react';
import User from '../User/User';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    padding: '50px'
  },
  textStyle: {
    fontSize: '30px',
    fontWeight: '700',
    color: 'blue',
    paddingBottom: '20px'
  }
});
  const PostsShow = () => {
      const[posts, setPosts] = useState([]);
  useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(error => console.log(error))
  },[])
  const classes = useStyles();
      return (
        <div className={classes.root}>     
          <Grid container direction="column" alignItems="center" spacing={2} className={classes.textStyle}>List of Users Posts</Grid>       
          <Grid container direction="row" spacing={2}>
              {
                  posts.map(post => <Grid item xs={2} md={4} lg={4}><User post={post} key={post.id}/></Grid>)
              }
          </Grid>
        </div>
      );
};

export default PostsShow;