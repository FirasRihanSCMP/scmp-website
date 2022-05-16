import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Events from "../Events/Events";
import EventsComp from "../EventsComp";
import NotFound from "../NotFound";
import Topstyles from "./seperateEvent.module.css";
import { css } from "@emotion/react";
import Youtube from 'react-youtube'
import Spinner from "../ClipLoader/Spinner";
import { TabTitle } from "../../actions/GeneralFunctions";
import { Col, Row } from "react-bootstrap";
import stylesEvent from "../eventcarousel.module.css"
export default function SeperateEvent(props) {
  const [Event, setEvent] = useState([]);
  const [Loaded, setLoaded] = useState(false)
  const [errorFetchedChecker, seterrorFetchedChecker] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      await axios
        .post("https://www.scmp-lb.com/api/SeperateEvent", { EID: id })
        .then((response) => {

          if (response.data === "not found") {
            setLoaded(false)


          }
          else if (response.data.length > 0) {
            TabTitle(`${props.title || response.data[0].ETitle}`)
            setLoaded(true)
            setEvent(response.data)


          }
        })
        .catch(err => {

          seterrorFetchedChecker((c) => !c);
        });
    }
    if (errorFetchedChecker) {
      setTimeout(() => {
        fetchData();
      }, [3000])// 3 seconds
    } else {
      fetchData();
    }
  }, [errorFetchedChecker]);

  function youtubeParser(url){
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return (match&&match[7].length==11)? match[7] : false;
}
  return (
    <div className={Topstyles.root}>

      {Loaded ? (Event.length > 0 ? <div> <div className={Topstyles.titleEng}>
        <p className={Topstyles.date}>{props.date || Event[0].EDate}</p>
        <h1 className={Topstyles.title}>{props.title || Event[0].ETitle}</h1>
     
        <Row> 
        {props.link || Event[0].ELink ? ( <Col xs={props.link || Event[0].ELink ? {order:0} :12} md={6}> <div className={stylesEvent.root} ><Youtube  className={Topstyles.YoutubeVid} videoId={youtubeParser(props.link || Event[0].ELink)}/></div> </Col>):""}
          <Col xs={props.link || Event[0].ELink ? {order:2} : 12} md={6}> <EventsComp img={props.img || Event[0].EPhotos} />
</Col>
<Col  xs={props.link || Event[0].ELink ? {order:1} : 12} md={ props.link || Event[0].ELink ? {span:12,order:"first"} : 6}><div className={Topstyles.text}><p>{props.text2 || Event[0].EBrief}</p>
<p>{props.paragraph || Event[0].EParagraph||""}</p></div></Col>
</Row>
       
        
      </div>
       
      </div> : <NotFound />) : <Spinner />}


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
