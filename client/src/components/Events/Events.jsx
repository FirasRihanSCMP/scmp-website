import React from "react";
import { Row, Col } from "react-bootstrap";
import stylesEvents from "../events.module.css";
import Axios from 'axios'
import stylesDepPage from "../Departments.module.css";
import { useEffect, useState } from "react";
import TopTitle from "../topTitle";
import EventsCard from "./EventsCard";
import { Link } from "react-router-dom";
import Spinner from "../ClipLoader/Spinner";
export default function Events(props) {
  const [EventsLists, setEventsList] = useState([])
  const [Loaded, setLoaded] = useState(false);
 /*  const [startDate, setStartDate]=useState(new Date()); */
  useEffect(() => {
  Axios.get("http://test.scmp-lb.com:3002/api/Events").then((response)=>{
    setLoaded(true)
    setEventsList(response.data);
  
  
  }
  
  ).catch(err=>{
   
  })
      
  }, [])

  return ( <div className={stylesEvents.root}>
    { Loaded ?  
      <div>
      <TopTitle title={"Events"}/>
  <Row className={`g-4 ${stylesDepPage.root}`}>

    {EventsLists.length>0? EventsLists.map((val)=>{return <Col key={val.EID} xs={12} sm={12}md={6}>
   
        <EventsCard  className={stylesDepPage.Col} date={val.EDate} Photos={val.EPhotos} paragraph={val.EParagraph} title={val.ETitle} text2={val.EParagraph} src={val.EID}  img={`/events/${val.ECover} `}  />
      </Col>})  
:<div></div>} 
      </Row>
   </div>
 
    :<Spinner/>}
 </div>
  );
}
