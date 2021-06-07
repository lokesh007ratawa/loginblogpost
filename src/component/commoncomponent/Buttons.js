import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(4),
      marginLeft:"8%"
    },
  },
}));

export default function Buttons(props) {
  const classes = useStyles();
  console.log("buttonsprops",props)
  const {buttonName,type} = props
  return (
    <div className={classes.root}>
      <Button variant="outlined" color="primary" type={type} >
       {buttonName}
      </Button>
    </div>
  );
}