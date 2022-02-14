import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import stylesEvents from "./events.module.css";
import stylesEvent from "./eventcarousel.module.css"

export default function EventsComp(props) {

  const [Imgs, setImgs] = useState(props.img);





  return (
    <div className={stylesEvents.root}>


  
   
<Carousel fade={false} indicators={false}>
        {props.img ? JSON.parse(props.img).map((val) => {
          return <Carousel.Item interval={2000} key={val} className={stylesEvent.carouselmain} >
            <img
              className={`d-block w-100 ${stylesEvent.img}`}
              src={"../../imgs/events/" + val}
              alt="First slide"
            />

          </Carousel.Item>
        }) :""}

        


      </Carousel>

    </div>
  )
}
