import React from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import stylesAboutUs from "./aboutUs.module.css";

export default function aboutUsTop() {
   
  return (
    <div className={stylesAboutUs.root1}>
  <Row className={stylesAboutUs.firstRow}>
     
     <div className={stylesAboutUs.title}>
       {" "}
       <div className={stylesAboutUs.textDiv}>
       <h1 className={stylesAboutUs.aboutHeader}>What Do We Do?</h1>
     <Row className={stylesAboutUs.iconsRow}><Col className={stylesAboutUs.imgCol}  sm={6}><img className={stylesAboutUs.icon2} src="./Icons/project1.svg" alt="" /> </Col> <Col className={stylesAboutUs.Col} sm={10}><Link  to="/Research"  href="/" className={stylesAboutUs.text}>Research</Link></Col></Row>  
<Row className={stylesAboutUs.iconsRow}><Col className={stylesAboutUs.imgCol} sm={6}><img className={stylesAboutUs.icon2} src="./Icons/technology.svg" alt="" /> </Col> <Col className={stylesAboutUs.Col} sm={10}><Link  to="/TechProvider"  href="/" className={stylesAboutUs.text}>Provide Technology</Link></Col></Row> 
     <Row className={stylesAboutUs.iconsRow}><Col className={stylesAboutUs.imgCol} sm={6}><img className={stylesAboutUs.icon2} src="./Icons/project2.svg" alt="" /> </Col> <Col className={stylesAboutUs.Col} sm={10}><Link  to="/InvFund"  href="/" className={stylesAboutUs.text}>Investment Funding</Link></Col></Row> 
<Row className={stylesAboutUs.iconsRow}><Col className={stylesAboutUs.imgCol} sm={6}><img className={stylesAboutUs.icon2} src="./Icons/ideas.png" alt="" /> </Col> <Col className={stylesAboutUs.Col} sm={10}><Link  to="/Ideas"  href="/" className={stylesAboutUs.text}>Incubate Ideas</Link></Col></Row> 
     
   {/*   <Row className={stylesAboutUs.iconsRow}><Col sm={6}><img className={stylesAboutUs.icon2} src="./Icons/project2.svg" alt="" /> </Col> <Col className={stylesAboutUs.Col} sm={10}><Link  to="about5"  href="/" className={stylesAboutUs.text}>Lorem ipsum, dolor sit amet consectetur</Link></Col></Row>  */}    
  
       </div>
     </div>
   </Row>

    </div>
    )
  }