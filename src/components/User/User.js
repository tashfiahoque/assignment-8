import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const User = (props) => {
        const {id, title, body} = props.post;
        const history = useHistory();
        const handleClick = (postId) => {
            history.push(`/post/${postId}`);
        }
    const useStyles = makeStyles({
        root: {
          backgroundColor: '#D9AFD9',
          backgroundImage: 'linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%)',
          minWidth: 275,
          height: '100%'
        },
        title: {
          fontSize: 18,
          fontWeight: 500,
          color: 'purple'
        },
        body2:{
            textAlign: 'justify'
        }
      });
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} gutterBottom>
                   Post Title: {title}
                </Typography>
                <Typography variant="body2" component="p">
                   Post Detail: {body}
                    <br />
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" variant="contained" color="primary" onClick={() => handleClick(id)}>Learn More</Button>
            </CardActions>
        </Card>

    );
};

export default User;