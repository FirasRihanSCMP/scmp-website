import React from 'react'
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import stylesCarousel from "./carouselSCMP.module.css"

export default function CarouselScmp(props) {

    return (
        <div className={stylesCarousel.bodyWidth}>
            <Carousel fade={true} >
               {props.img ? props.img.map(img => { 
                  return  <Carousel.Item interval={3000} className={stylesCarousel.carouselmain}>
                    <img
                          style={{height: `${props.style}vh` }}
                        className={`d-block w-100 ${stylesCarousel.img}`}
                        src={"../../imgs/"+img.img}
                        alt="First slide"
                    />
                </Carousel.Item>
                }):""} 

            </Carousel>


        </div>
    )
}


