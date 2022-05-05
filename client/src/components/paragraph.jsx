import React from "react";
import { Col, Row } from "react-bootstrap";
import stylesParagraph from "./paragraph.module.css";
import stylesDepartment from "./seperateDep/department.module.css";
export default function paragraph(props) {
  return (
    <div>
     <h1 className={stylesDepartment.depTitle}>{props.topTitle}</h1>
      <Row className={[stylesParagraph.pardiv, stylesParagraph.bodyWidth]}>
      
        <Col className={stylesParagraph.parCol} xs={12} sm={12} md={12} lg={12} xl={{span:6 ,offset:0, order:props.order}} >
       
           {/*  <h2 className={ stylesParagraph.title}>{props.title}</h2> */}
          <div className={stylesParagraph.divPar}><p className={stylesParagraph.paragraph}>{props.text}</p> </div> 
       
        </Col>
        <Col className={stylesParagraph.imgCol} xs={12} sm={12} md={12} lg={12} xl={{span:6,offset:0}}>
          <img
            className={stylesParagraph.img}
            src={props.img}
            alt=""
          />
        </Col>
      </Row>
    </div>
  );
}
