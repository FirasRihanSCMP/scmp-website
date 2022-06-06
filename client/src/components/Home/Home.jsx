import React, { useEffect, useState } from 'react'
import Eventcarousel from '../eventcarousel.jsx'
import Firstcards from '../firstcards.jsx'
import Paragraph from '../paragraph.jsx'
import AboutUsTop from '../AboutUsTop.jsx'
import CarouselScmp from '../../CarouselScmp/CarouselScmp.jsx'
import Spinner from '../ClipLoader/Spinner.jsx'
import axios from 'axios'
import { TabTitle } from '../../actions/GeneralFunctions.js'
import stylesHome from "./width.module.css"
export default function Home() {
  const [Loaded, setLoaded] = useState(false)
  const [Imgs, setImgs] = useState([])
  const [errorFetchedChecker, seterrorFetchedChecker] = useState(false)
  TabTitle('Scientific Center For Manufacturing And Production')
  useEffect(() => {
    async function fetchData() {
      await axios
        .get("https://www.scmp-lb.com/api/home")
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

  return (
    <div>
      {Loaded ? <div className={stylesHome.root} >
        <div className={stylesHome.carouselContainer}>   <CarouselScmp img={Imgs} style={24} /></div>

        <Paragraph img={"./imgs/planner.webp"} topTitle={"Our Mission"} text={"SCMP works on studying needs as inputs, prioritizing them, and working within a specific time plan to produce studies and spatial planning which includes three items: standing situation, desired situation, and the proposed roadmap. Three types of outputs emerge from this spatial planning. First, the feasibility studies that turn into productive projects based on the partnership of three parties (the local capital, the center that provides all the required scientific services, the source of technology). Second, investment priorities according to which SCMP will enlarge existing small businesses. Last, new innovative ideas that are being used in a scientific, technical and financial greenhouse towards emerging companies."} />
        <AboutUsTop />
        <Firstcards title={["Technology Broker", "Energy and Water", "Food Industry"]} text={["We use our knowledge, skills, and resources to increase the productive capacity of the economy.", "We offer innovative and sustainable solutions for the production and consumption of energy and usage of water.", "Our vision in the Food Industry department is to be a leading provider of services, researchs and consultancies on agri-food sector."]} img={["techcover.webp", "energycover.webp", "photo1.webp"]} src={["Technology", "Energy", "Food"]} />
      </div> : <div><Spinner /></div>}</div>

  )
}
