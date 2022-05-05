import React from "react";

import { Col, Row } from "react-bootstrap";
import stylesAboutUs from "./aboutUs.module.css";

export default function aboutUsBottom() {
   
  return (
    <div className={stylesAboutUs.root}>
    
      <Row className={stylesAboutUs.paragraphs}>
      {/* <div id="about5" className={stylesAboutUs.aboutUsPar}><Paragraph  order={'last'}/></div> */}
     
      </Row>

      <Row>
        <Col></Col>
        <Col></Col>
      </Row>
    </div>
  );
}
