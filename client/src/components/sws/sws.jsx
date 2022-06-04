import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { TabTitle } from '../../actions/GeneralFunctions';
import CarouselScmp from '../../CarouselScmp/CarouselScmp';


import Spinner from '../ClipLoader/Spinner';

import styleSws from "./sws.module.css"
export default function Sws() {
  TabTitle('Startup-Weekend Support - Scientific Center For Manufacturing And Production')
  const [Imgs, setImgs] = useState([]);
  const [Loaded, setLoaded] = useState(false)
  const [errorFetchedChecker, seterrorFetchedChecker] = useState(false);

  useEffect(() => {
    async function fetchData() {
      await axios
        .get("https://www.scmp-lb.com/api/SWS")
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
          /*  console.log(err) */
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


    <div className={styleSws.root}>
    <div className={styleSws.swsCarousel}><CarouselScmp style={20} img={Imgs} /></div>
    <h2 className={styleSws.header}>SCMP congratulates all participants in SWS2022!</h2>

  
    <p className={styleSws.firstParagraph}>  
    Greetings candidates!
    <br/><br/>
    <p className={styleSws.Indent}>
First of all, we would like to thank each participant that have joined us in our first Startup Weekend Support SWS-2022 event which was held on the 28th of May in cooperation with the Lebanese University. 
</p>
As you know, the number of applicants for this event has reached 76 competing teams, from whom we preselected 37 different ideas from various fields (Health, Agro-Food, Education, Technology and E-Business). 

After presenting these ideas in front of specialized committees composed of academics, experts and businessmen, it became clear to us that all the ideas have potential, but since we have to choose a finite number of ideas, these 37 chosen ideas were further filtered out and sorted according to the priorities that the Scientifc Center for Manufacturing and Production is looking for in addition to the consultation of the evaluation committee which led us to choose the following 14 ideas listed alphabetically, these 14 ideas will be proceeding to the next stage:
<br/><br/>
<ol>
<li>3dLife </li>
<li>A Little goes a Long Way</li>
<li>Carrot Pulp Chips </li>
<li>Dental Medical Products</li>
<li>Edubolt</li>
<li>Educational Platform</li>
<li>Health and Diet</li>
<li>Khadamat</li>
<li>Makit</li>
<li>Multi-Vitamine Immune Boosting Lollipops </li>
<li>PP Bread</li>
<li>Shopex</li>
<li>Teeth Tech</li>
<li>Un Petit Goût</li>
</ol>
<br/>
The above-mentioned ideas that qualified for the semi-finals will be notified later on regarding the next steps.

As for the ideas that were not selected, they will remain with us in a list of ideas that will be presented to different businessmen and financiers in a frequent manner in hopes of finding someone interested in incubating them in order to grant you further opportunities and help you grow.
<br/>
</p>
{/*    
  
  
      <p className={styleSws.Application}> To Apply for this Event, Please Fill the Following  <a href="https://forms.gle/6cabDREDmKrLm4hm7" className={styleSws.formLink} >Application</a> before midnight of <span className={styleSws.oldDate}>6-May-2022</span></p>
   
      <h2 className={styleSws.newDate}>In response to some requests, the deadline of ideas submission has been extended until midnight of 15-May-2022!</h2>
<br/>
      <h1 className={styleSws.title}>Why SCMP's Startup Weekend?</h1>
      <p className={styleSws.firstParagraph}>The “Startup Weekend” aims to attract creative ideas and innovations of young people in order to achieve their ambitions and goals.

      </p>
      <div className={styleSws.firstParagraph}>Submitted applications will go through an initial screening formed by experts
        in different fields. Next, the participants of the selected proposals will have to present their ideas in front of moderators and judges.
        <br /><br />

        In the final stage, SCMP will provide the accepted proposals with the necessary:
        <br />
        <br />
        <ul className={styleSws.list}>
          <li>Financial</li>
          <li>Technical</li>
          <li>Legal</li>
          <li>Logistical</li>
        </ul>  <br /> Assistance to launch new Startups. <br /> <br />
        Another objective of this Weekend is benefiting from technology to stimulate innovation, to market ideas, and to promote cooperation between different stake holders.
        The competitive participation is open to ideas with technological background in the following fields:
        <br />
        <br />
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
      <div className={styleSws.applyBtnDiv}> <Button onClick={() => { window.location.href = "https://forms.gle/6cabDREDmKrLm4hm7" }} className={styleSws.applyBtn} variant='warning' >Apply Here!</Button></div>
    </div> */}</div> </div> : <div><Spinner /></div>} </div>




}
