import React,{useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid,Paper,Avatar} from '@material-ui/core';
import Image from "../../../src/images/abc.jpg";
import Signupform from '../../component/signupform/Signupform';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      height:"100vh",
      backgroundImage: `url(${Image})`
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      borderRadius:"5%",
      width:"90%",
      // backgroundColor:'#75BCED',
      boxShadow:"20px 20px 20px 30px ",
      color: theme.palette.text.secondary,
    },
    signup_grid:{
        marginTop:'5%',
    }, 
  }));
  
const Signup = ()=>{
  
    const classes = useStyles();
    return(
        <>
           <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} style={{display:'flex',justifyContent:"flex-end"}}>        
        <Grid item xs={12} sm={6} className={classes.signup_grid}>
          <Paper className={classes.paper}>
         
              <Signupform />

          </Paper>
        </Grid>
        </Grid>
        
      </Grid>
    </div>
        </>
    )
}

export default Signup