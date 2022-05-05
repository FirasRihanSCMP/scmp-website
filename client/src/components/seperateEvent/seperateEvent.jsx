import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Events from "../Events/Events";
import EventsComp from "../EventsComp";
import NotFound from "../NotFound";
import Topstyles from "./seperateEvent.module.css";
import { css } from "@emotion/react";

import Spinner from "../ClipLoader/Spinner";
import { TabTitle } from "../../actions/GeneralFunctions";
export default function SeperateEvent(props) {
  const [Event, setEvent] = useState([]);
  const [Loaded,setLoaded]=useState(false)
  const [errorFetchedChecker, seterrorFetchedChecker] = useState(false);
  let { id } = useParams();
 
   useEffect(() => {
    async function fetchData(){
    await axios
      .post("https://www.scmp-lb.com/api/SeperateEvent", { EID: id })
      .then((response) => {
  
    if(response.data==="not found"){
      setLoaded(false)
       
     
      }
    else if(response.data.length>0){
      TabTitle(`${props.title||response.data[0].ETitle}`)
      setLoaded(true)
      setEvent(response.data)
     
      
    }})
    .catch(err=>{
     
      seterrorFetchedChecker((c) => !c);
    });
  }
  if(errorFetchedChecker){
    setTimeout(()=>{
        fetchData();
    },[3000])// 3 seconds
} else {
    fetchData();
} }, [errorFetchedChecker]); 
  return (
    <div>

   {Loaded? (Event.length>0 ? <div> <div className={Topstyles.titleEng}>
        
        <p className={Topstyles.date}>Date: {props.date||Event[0].EDate}</p>
        <h1 className={Topstyles.title}>{props.title||Event[0].ETitle}</h1>
        <p>{props.text2||Event[0].EBrief}</p>
      </div>
      {props.link || Event[0].ELink ? (<a href={`http://${props.link||Event[0].ELink||""}`}><EventsComp  img={props.img||Event[0].EPhotos} /> </a> ): <EventsComp  img={props.img||Event[0].EPhotos} />}
</div>:  <NotFound/>) :<Spinner/> }
    
     
    </div>
/*     <div>
    <h1>{Event.ETitle}</h1>
    <div className={Topstyles.titleEng}>
      {" "}
      <p className={Topstyles.date}>Date: {props.date}</p>
      <h1 className={Topstyles.title}>{props.title}</h1>
      <p>{props.text2}</p>
    </div>
    <EventsComp img={props.img} />
  </div> */
  );
}
