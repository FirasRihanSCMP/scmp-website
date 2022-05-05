import React from 'react'
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; 
import stylesEvent from "./eventcarousel.module.css"
export default function Eventcarousel(props) {
    return (
        <div className={stylesEvent.bodyWidth}>
       <Carousel fade={true} >

  <Carousel.Item interval={3000} className={stylesEvent.carouselmain}>
    <img
     className={`d-block w-100 ${stylesEvent.img}`} 
    
      src={"./imgs/"+props.img[0]}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item interval={3000} className={stylesEvent.carouselmain}>
    <img
     className={`d-block w-100 ${stylesEvent.img}`} 
      
      src={"./imgs/"+props.img[1]}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item interval={3000} className={stylesEvent.carouselmain}>
    <img
     className={`d-block w-100 ${stylesEvent.img}`} 
     
      src={"./imgs/"+props.img[2]}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item interval={3000} className={stylesEvent.carouselmain}>
    <img
     className={`d-block w-100 ${stylesEvent.img}`} 
      
      src={"./imgs/"+props.img[3]}
      alt="First slide"
    />
  </Carousel.Item>
  </Carousel>

           
        </div>
    )
}
