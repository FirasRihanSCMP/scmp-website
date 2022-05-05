import React from "react";
import Topstyles from "./TopLogo.module.css";
import { Row, Col } from "react-bootstrap";
import  "bootstrap/dist/css/bootstrap.min.css";

export default function TopLogo() {
  return (
    <div className={Topstyles.toplogobackground}>
      <Row className={Topstyles.logoBackground}>
        <Col className={Topstyles.imgCol} xs={'auto'}  sm={'auto'} >
          <img
            src="/ScmpLogo1.png"
            
            className={`d-inline-block ${Topstyles.logo } `}
            alt="React Bootstrap logo"
          />
        </Col>
        <Col className={Topstyles.col}  sm={'auto'} > 
        <Row  className={Topstyles.titleArb}>المركز العلمي للتصنيع و الإنتاج</Row>
          <Row className={Topstyles.titleEng}>Scientific Center For Manufacturing And Production </Row>
         
        </Col>
      </Row>
    </div>
  );
}
