import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

import {getBlogData} from '../../redux/action/getBlogAction';
import { useDispatch } from 'react-redux'
import CloseIcon from "@material-ui/icons/Close";
import Blogs from './Blogs';
const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    background: "rgb(255 255 255)",
    width: "70%",
    height: "70%",
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: "24px",
    marginLeft: "15%",
    marginTop:"90px",
  },
  heading: {
    margin: theme.spacing(2),
    display:"flex",
    justifyContent:"center",
    marginLeft:"5%",
    fontSize:"40px",
    paddingBottom:"10%",
    color: "#162F2F"
   },
}));

export default function Modalpostblog(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleClose = () => {
    props.toggle()
  };

  const body = (
    <div className={classes.paper}>
        <div style={{display:'flex',justifyContent:"center",flexDirection:"column"}}>
            <div style={{width:"100%",display:'flex',justifyContent:"space-between",marginTop:"1%"}}>
            <div style={{display:"flex",justifyContent:"flex-start",width:"50%"}}><h1 className={classes.heading}>Post your Blog</h1></div>
            <div style={{width:"5%",height:"5%", cursor: "pointer",display:"flex",justifyContent:"flex-end",margin:"2%"}} >
              <CloseIcon fontSize="large" onClick={()=>{return props.toggle() , dispatch(getBlogData()) }}/></div>
            </div>
            <div style={{width:"100%",marginLeft:"3%"}} >
            <Blogs toggle={props.toggle}/>
            </div>
        </div>
    
    </div>
  );

  return (
    <div>
      <Modal
        open={props.open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <>{body}</>
      </Modal>
    </div>
  );
}
