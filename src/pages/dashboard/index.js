import React,{useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Button, Grid,Paper} from '@material-ui/core';
import { useHistory } from 'react-router';
import Modalpostblog from '../../component/dashboard/Modalpostblog';
import { Cards } from '../../component/dashboard/Cards';
import {getBlogData} from '../../redux/action/getBlogAction';
import { useDispatch, useSelector } from 'react-redux';
const useStyles = makeStyles((theme) => ({
  
    root: {
      flexGrow: 1,
      width:"100%"
    },
    paper: {
      padding: theme.spacing(1),
      borderRadius:"10px",
      width:"100vw",
      backgroundColor:"#29454F",
      // height:"92vh",
      boxShadow:"20px 20px 20px 20px",
      color: theme.palette.text.secondary,
    },
    blogGrid:{
        display:'flex',
        justifyContent:"center",
        marginLeft:"2%",
        maxWidth:"95%",
        marginTop:"0.5%"
    }, 
  }));
  
const Dashboard = ()=>{
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const toggle = () => setOpen(!open);
    const histroy = useHistory();
    const dispatch = useDispatch()
    const handleModalClick = ()=>{setOpen(true);}
    //redux selector
    useEffect(()=>{
      dispatch(getBlogData())
    },[])
    const {blogData } = useSelector(state => state.getBlogReducer);
  useEffect(()=>{
      dispatch(getBlogData())
  },[])
  console.log("getblogdata",blogData.map((x)=>{return {blogTitle:x.blogTitle,blogContnet:x.blogContnet,authorName:x.authorName}}))
  let bolgsDatas = blogData.map((x)=>{return {blogTitle:x.blogTitle,blogContnet:x.blogContnet,authorName:x.authorName}})
    return(
        <>
           <div className={classes.root}>
          <div style={{display:"flex",justifyContent:"flex-end"}}>
            <div  className="blog_div_logout">
              <Paper>
              <Button variant="contained" color="primary" onClick={handleModalClick}>Post Blog</Button>  
              </Paper>
            </div>   
            <div  className="blog_div_logout">
              <Paper>
              <Button variant="contained" color="primary" onClick={ ()=>{histroy.push("/")}}>Log out</Button>
              </Paper>
              <Modalpostblog open={open} toggle={toggle} />
            </div>
          </div>
          <div> 
              <Grid container>
            <Grid item xs={12} style={{display:'flex',justifyContent:"flex-start",width:"100%"}}> 
            <Grid item xs={12} sm={6}  className={classes.blogGrid} >
              <Paper className={classes.paper}>
              {/* <div style={{backgroundColor:"pink",height:"100%",width:"100%"}}> */}
                {
                  bolgsDatas.map((elem) => (
                    <Cards details={elem} />
                  ))
                }      
              {/* </div> */}
              </Paper>
            </Grid>
            </Grid>
            
          </Grid>
        </div>
    </div>
        </>
    )
}

export default Dashboard