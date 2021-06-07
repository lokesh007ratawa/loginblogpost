import React ,{useEffect, useState} from 'react';
import '../../App.css';
import { makeStyles } from '@material-ui/core/styles';
import {Avatar} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
//redux
import { useSelector, useDispatch } from 'react-redux';
import {signinData} from '../../redux/action/signinAction';
//formik
import { Formik, Form } from 'formik';
//component
import Buttons from '../commoncomponent/Buttons';
import { Textfields } from '../commoncomponent/Textfields';
import {NavLink, useHistory} from 'react-router-dom';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import {validate} from '../commoncomponent/validaion'

const useStyles = makeStyles((theme) => ({ 
  avatar: {
   marginLeft:"50%",
    margin: theme.spacing(2),
    backgroundColor: "red",
  },
  heading: {
    margin: theme.spacing(1),
    marginLeft:"5%",
    fontSize:"40px",
   },
}));

const Signinform = ()=>{
  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway')
    {
      return;
    }

    setOpen(false);
  };
  const classes = useStyles();
  const dispatch = useDispatch();
  const {signinDatas } = useSelector(state => state.signinReducer);
  useEffect(()=>{
    dispatch(signinData())
},[])
const [msg,setMsg]=useState("");
const histroy = useHistory()
let usersNames = signinDatas.filter((y)=> {return y.userName}).map((x)=>{return x.userName})
let passwords = signinDatas.filter((y)=> {return y.password}).map((x)=>{return x.password})
console.log("signinlistsss",usersNames,passwords)
    return(
        <>
         <Avatar className={classes.avatar}>
            <LockOutlinedIcon  />
          </Avatar> 
          <h1 className={classes.heading}>Sign In</h1>
       <Formik
         initialValues={{
           userName: '',
           password:'',
         }}
        //  validationSchema={validate}
         onSubmit={(values, { setSubmitting }) => {
          const user = usersNames.find((x)=>x===values.userName);
          const pss = passwords.find((x)=>x===values.password);
          console.log("userssssssssssss",user)
           if(user&&pss){
              return( histroy.push("/blog"))
           }else if(!user&&!pss){
             return setMsg("UserName and Password is invalid !!   please try again")
           }
           setOpen(true)
         }}
       >
         {({ errors,touched }) => (
        <Form>
          <span className="msg_error">{msg}</span>
          <div style={{marginTop:'5%'}}>
          <Textfields
             label="User Name"
             name="userName"
             type="text"
             error={errors.userName && touched.userName}
             helperText={errors.userName && touched.userName ? errors.userName : null }
           /> 
           <Textfields
             label="Password"
             name="password"
             type="password"
             error={errors.password && touched.password}
             helperText={errors.password && touched.password ? errors.password : null }
           /> 
           <NavLink className="nav-link-gdc" to="/signup">Create a Account</NavLink>
           <Buttons buttonName="Login" type="submit" size="large"   />
        
          </div>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} autoHideDuration={1000} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
                <Alert onClose={handleClose} elevation={6} variant="filled" severity="info">
                  Record Updated Successfully
                </Alert>
              </Snackbar>
          </Form>
      )}
       </Formik>
     </>
   );
 };

export default Signinform
