import React, { useState } from "react";
import { Card, Collapse } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import stylesDepCard from "./firstcards.module.css";
import { Link } from "react-router-dom";
export default function DepartmentCard(props) {

  return (
    <div>
<Card className={stylesDepCard.cardsbody}>
<Link className="cardLinks" to={"/Departments/"+props.src}> 
  <Card.Img className={stylesDepCard.cardImage} variant="top" src={"./imgs/" + props.img} />
  </Link>
  <Card.Body>
  <Card.Title>{props.title}</Card.Title>
  <Card.Text className={stylesDepCard.cardstexts}>
        {props.text2}
          </Card.Text>
    
  </Card.Body>
</Card>
    </div>
  );
}
