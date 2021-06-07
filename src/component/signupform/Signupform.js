import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Avatar} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
//redux
import { useSelector, useDispatch } from 'react-redux';
import {signupData} from '../../redux/action/Signupaction';
//formik
import { Formik, Form ,Field} from 'formik';
import {validate} from '../commoncomponent/validaion'
//component
import Buttons from '../commoncomponent/Buttons';
import { Textfields } from '../commoncomponent/Textfields';
import { Radiobutton } from '../commoncomponent/Radiobutton';
import {NavLink} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({ 
  avatar: {
   marginLeft:"50%",
    margin: theme.spacing(2),
    backgroundColor: "blue",
  },
  heading: {
    margin: theme.spacing(1),
    marginLeft:"5%",
    fontSize:"40px",
   },
}));

const Signupform = (props)=>{
  const dispatch = useDispatch();
  console.log("signupformprops",props)
  const options = ["Male", "Female", "Other"];
  const classes = useStyles();
  const handleSubmitForm = (values)=>{
    // e.preventDefault();
    dispatch(signupData(values))
    console.log("handle")
  }

    return(
        <>
         <Avatar className={classes.avatar}>
            <LockOutlinedIcon  />
          </Avatar> 
          <h1 className={classes.heading}>Sign Up</h1>
       <Formik
         initialValues={{
           firstName: '',
           lastName: '',
           email: '',
           userName:"",
           password:'',
           confirmPassword:"",
           gender:""
         }}
         validationSchema={validate}
         onSubmit={(values) => {
          handleSubmitForm(values)
          console.log("handleSubmitForm",handleSubmitForm(values))
         }}
       >
         {({ errors,touched }) => (
        <Form>
           <Textfields
             label="First Name"
             name="firstName"
             type="text"
             error={errors.firstName && touched.firstName}
             helperText={errors.firstName && touched.firstName ? errors.firstName : null }
           />
 
           <Textfields
             label="Last Name"
             name="lastName"
             type="text" 
             error={errors.lastName && touched.lastName}
            helperText={errors.lastName && touched.lastName ? errors.lastName : null }
           />
 
           <Textfields
             label="Email Address"
             name="email"
             type="email"
             error={errors.email && touched.email}
             helperText={errors.email && touched.email ? errors.email : null }
           /> 
            <Textfields
             label="User Name"
             name="userName"
             type="userName"
             error={errors.email && touched.email}
             helperText={errors.email && touched.email ? errors.email : null }
           /> 
           <Textfields
             label="Password"
             name="password"
             type="password"
             error={errors.password && touched.password}
             helperText={errors.password && touched.password ? errors.password : null }
           /> 
           <Textfields
             label="Confirm Password"
             name="confirmPassword"
             type="password"
             error={errors.confirmPassword && touched.confirmPassword}
             helperText={errors.confirmPassword && touched.confirmPassword ? errors.confirmPassword : null }
           /> 
            <Field            
              name="gender"
              options={options}
              component={Radiobutton}
            />
            <div className="signup_btn">
              <div> <Buttons buttonName="Signup" type="submit" size="large"   /></div>
              <div><NavLink className="nav-link-signup" to="/"> <Buttons buttonName="Login" size="large"   /></NavLink></div>
            </div>
        </Form>
      )}
       </Formik>
     </>
   );
 };

export default Signupform
