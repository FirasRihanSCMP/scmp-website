import React, { useEffect, useState } from "react";
import stylesadmin from "./admin.module.css";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
import Uploader from "./Eventuploader";
import { ToastContainer } from "react-toastify";
import UploadEvent from "./UploadEvent";
import 'react-toastify/dist/ReactToastify.css';
import  { Route,Redirect, Navigate } from 'react-router-dom'
import Auth from "../Auth";
import { useLocation } from "react-router-dom";
import { TabTitle } from "../../actions/GeneralFunctions";
/* const fileTypes = ["JPG", "PNG", "GIF"]; */



export default function Admin() {
  
  TabTitle('Admin - Scientific Center For Manufacturing And Production')
  const {state} = useLocation();
const [loggedIn, setloggedIn] = useState(false);
/* 
useEffect(()=>{
  const checkLogged =async()=>{
    const valid=await logIn()
    console.log(valid)
    setloggedIn(valid)
  }
checkLogged()

  }
,[]) */
 const fileUploadHandler = ()=>{
     axios.post('')
 }
 const setResult=(e)=>{
  console.log(e) 
  if(e===false||e==="Network Error"||typeof e==="undefined"){
    setloggedIn(false)
  }
else{console.log(e) 
  setloggedIn(true)}
 } 
/* console.log(fileSelected.target) */
/*  const [file, setFile] = useState(null);
 const handleChange = file => {
   setFile(file);
 }; */


return(
  loggedIn ? (
  <div>
  <Row className={stylesadmin.root}> 
    <Uploader/>
   {/*  <UploadEvent/> */}
   <ToastContainer/>  
  </Row>
</div>
) : (
<Auth handleResult={setResult}/>

))
/*   return <>{props.isLoggedIn ?  <div>
     <Row className={stylesadmin.root}> 
<Uploader/>
    <ToastContainer/>  </Row>
    </div> :<Auth/> }</> */
}