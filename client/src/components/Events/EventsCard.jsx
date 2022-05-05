import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import stylesEventCard from "./EventsCard.module.css"
export default function EventsCard(props) {
    return (
        <div key={props.key}>
            
           <Link className={stylesEventCard.cardLinks} to={`/Events/${props.src}`} > 
                 <Card className={stylesEventCard.cardsbody }>
         <Card.Img
          className={stylesEventCard.cardImage}
          variant="top"
          src={"./imgs/" + props.img}
        />
        <Card.Body className={stylesEventCard.cardBody}>
    
            <Card.Title className={stylesEventCard.cardtitle}>{props.title}</Card.Title>
            <h6>{props.date}</h6>
      {/*       <div
              onClick={() => setOpen(!open)}
              aria-controls="example-collapse-text"
              aria-expanded={open}
              className={stylesEventCard.collapseIcon"
            >
              <img
                width="30"
                className={stylesEventCard.open === false ? "close" : "open"}
                src="./arrow_down.svg"
                alt=""
              />
            </div>
          </div>
          <Collapse in={open}>
            <div className={stylesEventCard.cardstexts1" id="example-collapse-text">
          {props.text}
            </div>
          </Collapse> */}

          <Card.Text className={stylesEventCard.cardstexts}>
        {props.text2}
          </Card.Text>
        </Card.Body>
      </Card></Link>
        </div>
    )
}
