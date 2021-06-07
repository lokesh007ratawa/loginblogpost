import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid,Paper} from '@material-ui/core';
import Image from "../../../src/images/abc.jpg";
import Signinform from '../../component/siginform/Signinform';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      height:"100vh",
      backgroundImage: `url(${Image})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition:"center",
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      borderRadius:"50px",
      width:"60%",
      marginLeft:"20%",
      // backgroundColor:'#75BCED',
      boxShadow:"20px 20px 20px 30px ",
      color: theme.palette.text.secondary,
    },
    Signin_grid:{
        marginTop:' 10% ',
    }, 
  }));
  
const Signin = ()=>{
    const classes = useStyles();
    return(
        <>
           <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} style={{display:'flex',justifyContent:"flex-end"}}>        
        <Grid item xs={12} sm={6} className={classes.Signin_grid}>
          <Paper className={classes.paper}>
         
            <Signinform/>
          </Paper>
        </Grid>
        </Grid>
        
      </Grid>
    </div>
        </>
    )
}

export default Signin