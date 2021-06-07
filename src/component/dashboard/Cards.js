import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    margin:"20px"
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export const Cards = (props)=> {
  const classes = useStyles();
  console.log("blogsscard",props.details);
const {blogTitle,blogContnet,authorName}  = props.details
let avtars = authorName;
let res = avtars.split("")
console.log("ress",res.map((x,i)=>x[i]))
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {res.map((x,i)=>x[i])}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon onClick={()=>{return console.log("handleclickcard")}} />
          </IconButton>
        }
        title={blogTitle}
        subheader={authorName}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">{blogContnet}</Typography>
      </CardContent>
      
    </Card>
  );
}
