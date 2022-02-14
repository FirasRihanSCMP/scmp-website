import React from 'react'
import Eventcarousel from '../eventcarousel.jsx'
import Firstcards from '../firstcards.jsx'
import Paragraph from '../paragraph.jsx'
import AboutUsTop from '../AboutUsTop.jsx'
/* import stylesHome from "./Home.module.css" */
export default function Home() {
    return (
        <div>

        
          
             <Eventcarousel img={["accelerator2.jpg", "dawid.jpg", "accelerator1.jpg", "drill.jpg", "rocket.jpg", "food1.jpg", "photo1.jpg", "energycover.jpg", "energy1.jpg", "studies3.jpg"]} />
            <Paragraph img={"./imgs/planner.jpg"} topTitle={"Our Mission"} text={"SCMP works on studying needs as inputs, prioritizing them, and working within a specific time plan to produce studies and spatial planning which includes three items: standing situation, desired situation, and the proposed roadmap. Three types of outputs emerge from this spatial planning. First, the feasibility studies that turn into productive projects based on the partnership of three parties (the local capital, the center that provides all the required scientific services, the source of technology). Second, investment priorities according to which SCMP will enlarge existing small businesses. Last, new innovative ideas that are being used in a scientific, technical and financial greenhouse towards emerging companies."} />
            <AboutUsTop />
            <Firstcards  title={["Technology Broker", "Energy and Water", "Food Industry"]} text={["We use our knowledge, skills, and resources to increase the productive capacity of the economy.", "We offer innovative and sustainable solutions for the production and consumption of energy and usage of water.", "Our vision in the Food Industry department is to be a leading provider of services, researchs and consultancies on agri-food sector."]} img={["techcover.jpg", "energycover.jpg", "photo1.jpg"]} src={["Technology", "Energy", "Food"]} />
         
        </div>
    )
}
