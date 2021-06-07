import React, { useEffect } from 'react';
import '../../App.css';
import { makeStyles } from '@material-ui/core/styles';
import {MenuItem} from '@material-ui/core'
//formik
import { Formik, Form } from 'formik';
//component
import Buttons from '../commoncomponent/Buttons';
import { Textfields } from '../commoncomponent/Textfields';
import {Dropdowns} from '../commoncomponent/Dropdowns';
//redux
import { useSelector, useDispatch } from 'react-redux'
import {authorNameData} from '../../redux/action/authorNameAction';
import {saveBlogData} from '../../redux/action/saveBlogAction';


const Blogs = (props)=>{
  const dispatch = useDispatch();
  const {authorNameDatas } = useSelector(state => state.authorNameReducer);
  useEffect(()=>{
      dispatch(authorNameData())
  },[])
  console.log("authorlist",authorNameDatas.map((x)=>x))
  console.log("blogpropss",props)
    return(
        <>
         
        <Formik
         initialValues={{
           blogTitle: '',
           blogContnet:'',
           authorName:''
         }}
        //  validationSchema={validate}
         onSubmit={(values, { setSubmitting }) => {
          props.toggle();
           dispatch(saveBlogData(values))
          
         }}
       >
         {({ values,errors,touched }) => (
        <Form>
           <Textfields
             label="Blog Title"
             name="blogTitle"
             type="text"
           /> 
           <Textfields
             label="Blog Content"
             name="blogContnet"
             type="textArea"
             multiline
           /> 
           <Dropdowns
                name="authorName"
                id="authorName"
                type="select"
                label="Author"
            >
               <MenuItem value="" key='from_city_'>Select Author</MenuItem>
                      {
                        authorNameDatas && authorNameDatas.map((author, index) => (
                          <MenuItem value={`${author.authorName}`} key={index}>{author.authorName}</MenuItem>
                        ))
                      }
            </Dropdowns>
          <div style={{paddingTop:"2%",display:'flex',justifyContent:"center"}}>
          <Buttons buttonName="Post" type="submit" size="large"   />
          </div>
        </Form>
      )}
       </Formik>
     </>
   );
 };

export default Blogs
