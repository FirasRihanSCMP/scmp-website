import React, { useState } from "react";
import { Card, Collapse } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import stylesDepCard from "./firstcards.module.css";
import { Link } from "react-router-dom";
export default function DepartmentCard(props) {
  const [open, setOpen] = useState(false);

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


{/* 
      <Card className={stylesDepCard.cardsbody}>
       <Link className="cardLinks" to={"/Departments/"+props.src}>  <Card.Img
          className={stylesDepCard.cardImage}
          variant="top"
          src={"./imgs/" + props.img}
        /></Link>
        <Card.Body>
          <div className={stylesDepCard.cardCollapse}>
            <Card.Title>{props.title}</Card.Title>
            <div
              onClick={() => setOpen(!open)}
              aria-controls="example-collapse-text"
              aria-expanded={open}
              className={stylesDepCard.collapseIcon}
            >
              <img
                width="30"
                className={open === false ? stylesDepCard.close : stylesDepCard.open}
                src="./arrow_down.svg"
                alt=""
              />
            </div>
          </div>
          <Collapse in={open}>
            <div className={stylesDepCard.cardstexts1}id="example-collapse-text">
          {props.text}
            </div>
          </Collapse>

          <Card.Text className={stylesDepCard.cardstexts}>
        {props.text2}
          </Card.Text>
        </Card.Body>
      </Card> */}
    </div>
  );
}
