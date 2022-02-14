import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button} from 'react-bootstrap';
import CarouselScmp from '../../CarouselScmp/CarouselScmp';


import Spinner from '../ClipLoader/Spinner';

import styleSws from "./sws.module.css"
export default function Sws() {

  const [Imgs, setImgs] = useState([]);
  const [Loaded, setLoaded] = useState(false)
  const [errorFetchedChecker, seterrorFetchedChecker] = useState(false);

  useEffect(() => {
    async function fetchData() {
      await axios
        .get("http://test.scmp-lb.com:3002/api/SWS")
        .then((response) => {

          if (response.data === "not found") {
            setLoaded(false)
            setImgs("");

          }
          else if (response.data.length > 0) {
            setLoaded(true)
            setImgs(response.data)
          }
        })
        .catch(err => {

          seterrorFetchedChecker((c) => !c);
        });
    }
    if (errorFetchedChecker) {
      setTimeout(() => {
        fetchData();
      }, [3000])// 3 seconds
    } else {
      fetchData();
    }
  }, [errorFetchedChecker]);
  return <div> {Loaded ? <div>  
  
    <div className={styleSws.swsCarousel}><CarouselScmp style={36} img={Imgs}/></div>
    <h2 className={styleSws.header}>The Scientific Center for Manufacturing and Production announces the organization of its first Startup Weekend Support! <br/> SCMP-SWS2022</h2>


    <div className={styleSws.root}>
      {/* {Loaded? */}
      <p className={styleSws.Application}> To Apply for this Event, Please Fill the Following  <a href="https://forms.gle/6cabDREDmKrLm4hm7" className={styleSws.formLink} >Application</a> before midnight of 6-March-2022</p>
      <br/>
      <h1 className={styleSws.title}>Why SCMP's Startup Weekend?</h1>
      <p className={styleSws.firstParagraph}>The “Startup Weekend” aims to attract creative ideas and innovations of young people in order to achieve their ambitions and goals.

      </p>
      <div className={styleSws.firstParagraph}>Submitted applications will go through an initial screening formed by experts
      in different fields. Next, the participants of the selected proposals will have to present their ideas in front of moderators and judges.
      <br/><br/>
       
        In the final stage, SCMP will provide the accepted proposals with the necessary:
        <ul className={styleSws.list}>
        <li>Financial</li>
        <li>Technical</li>
        <li>Legal</li>
        <li>Logistical</li>
        </ul> Assistance to launch new Startups. <br /> <br />
        Another objective of this Weekend is benefiting from technology to stimulate innovation, to market ideas, and to promote cooperation between different stake holders. {/* responsible for the success of the proposals. */}
        The competitive participation is open to ideas with technological background in the following fields:
       <br/>
       <br/>
       <div className="fields">
       <ul  >
        <li>Health</li>
         <li>Environment</li>  
         <li>Educational Platforms</li>
         <li>Software Applications</li>  
         <li>Agro-Food Development</li>
         <li>Energy, Water and Natural Resources</li>
          <li>
          E-Business, E-Commerce, Entrepreneurship
          </li>
          <li>Electronic, Electrical, and Mechanical Projects</li>
        
        </ul>

       </div>
      </div>
      <br />
      <h1 className={styleSws.title}>Confidentiality</h1>
      <div className={styleSws.firstParagraph}>
        <ol>
          <li> No Use; <br />
            SCMP agrees not to use the Confidential Information in any way, or to manufacture or test any product embodying Confidential Information.</li>
          <li> No Disclosure; <br />
            SCMP agrees to use its best efforts to prevent and protect the Confidential Information, or any part thereof, from disclosure to any person other than Startup Weekend teamwork having a need for disclosure in connection with SCMP authorized use of the Confidential Information.
          </li>
          <li>Protection of Secrecy; <br />
            SCMP agrees to take all steps reasonably necessary to protect the secrecy of the Confidential Information, and to prevent the Confidential Information from falling into the public domain or into the possession of unauthorized persons.
          </li>
        </ol>


      </div>
     <div className={styleSws.applyBtnDiv}> <Button onClick={()=>{window.location.href="https://forms.gle/6cabDREDmKrLm4hm7"}} className={styleSws.applyBtn}  variant='warning' >Apply Here!</Button></div> 
    </div></div>:<div><Spinner/></div>} </div> 
        
      


}
