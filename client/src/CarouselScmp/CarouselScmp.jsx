import React from 'react'
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import stylesCarousel from "./carouselSCMP.module.css"
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function CarouselScmp(props) {
    return (
        <div className={stylesCarousel.bodyWidth}>
        <Carousel fade={true} >
           {props.img ? props.img.map(img => { 
              return  <Carousel.Item interval={img.duration || 5000} key={img.id} className={stylesCarousel.carouselmain}>
            {img.link?<Link to={`/${img.link}`}>
                <img rel="preload" 
                      style={{height: `${props.style}vw` }}
                    className={`d-block w-100 ${stylesCarousel.img}`}
                   
                    src={"../../imgs/"+img.img}
                    
                    alt="First slide"
                /></Link> :<img rel="preload"
                      style={{height: `${props.style}vw` }}
                    className={`d-block w-100 ${stylesCarousel.img}`}
                    src={"../../imgs/"+img.img}
                   
                    alt="First slide"
                />}   
            </Carousel.Item>
            }):""} 

        </Carousel>


    </div>
    )
}


