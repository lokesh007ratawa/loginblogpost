
import * as Yup from 'yup';

 export const validate =  Yup.object({
    firstName: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required')
      .matches(/^[aA-zZ\s]+$/, "Only Letters "),
    lastName: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Required')
      .matches(/^[aA-zZ\s]+$/, "Only Letters "),
    email: Yup.string()
      .email('Invalid email address')
      .required('Required'),
    password: Yup.string().required('Password is required').matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Password should be 8 character and Alpha Numeric with special character"
    ),
    confirmPassword: Yup.string()
    .required('Required')
         .oneOf([Yup.ref('password'), null], 'Passwords must match'),
    userName:Yup.string().required('User Name Require'),
    password: Yup.string().required('Password is required').matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Password should be 8 character and Alpha Numeric with special character"
    ),
  
  })
