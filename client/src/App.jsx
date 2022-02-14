import React,{useState} from "react";
import {  Route, Routes, useParams } from "react-router-dom";
import Home from "./components/Home/Home";
import Events from "./components/Events/Events";
import "bootstrap/dist/css/bootstrap.min.css";
import ScrollToTop from "./components/ScrollToTop";
import TopLogo from "./components/TopLogo";
import Footer from "./components/footer";
import AllDepartments from "./components/Departments/AllDepartments";
import Admin from "./components/admin/admin"
import SeperateDep from "./components/seperateDep/seperateDep";
import SeperateEvent from "./components/seperateEvent/seperateEvent";
import SeperateDep2 from "./components/seperateDep/seperateDep2";
import InvFund from "./components/AboutUs/InvFund";
import TechProvider from "./components/AboutUs/TechProvider";
import Research from "./components/AboutUs/Research";
import Ideas from "./components/AboutUs/Ideas";
import NotFound from "./components/NotFound";
import Navigation from "./components/Navigation";
import Sws from "./components/sws/sws";




export default function App(props) {

  
 
  return (

    <div>
      <Navigation/>
   <ScrollToTop/>
   <TopLogo/>
    <Routes>

    
      {/* <Route path="/Resources" element={<Resources/>}></Route>  */}
      <Route path="/InvFund" element={<InvFund/>}></Route>
      <Route path="/auth" element={<Admin/>}></Route>
      <Route path="/Research" element={<Research/>}></Route>
      <Route path="/TechProvider" element={<TechProvider/>}></Route>
      <Route path="/Ideas" element={<Ideas/>}></Route>
      <Route path="/sws" element={<Sws/>}></Route>
      <Route path="/Departments" element={<AllDepartments />}></Route>
    <Route path="/Departments/Technology"   element={<SeperateDep img1={"../imgs/drill.jpg"} img2={"../imgs/welding.jpg"} dir={"Technology Broker Department"} text={"Technology plays a major role in increasing the productive capacity of the economy. Having that in mind, we use our knowledge, skills, experience, and resources to serve that goal and to meet the needs of our customers. We recognize the objectives and requirements of investors in order to investigate, design, develop, and implement best business plans to suit their wishes and expectations." }text2={"We introduce new technologies and strategies that can serve to increase the productivity and sustainability of businesses of all kinds. Our greatest contribution is through transfer of knowledge and technology, innovation, productivity, and growth."}  />}></Route>
      <Route path="/Departments/Food" exact  element={ <SeperateDep img2={"../imgs/photo2.jpg"} img1={"../imgs/food1.jpg"}text={"Our vision in the Food Industry department is to be a leading provider of services, researches and consultancies on the agri-food sector. We work in close collaboration with different stakeholders such as ministries, industrialists, cooperatives, local and international organizations to develop a sustainable agribusiness. This is done by the introduction of new and innovative technologies with a commitment to assure safe, healthy and authentic food products according to international standards while complying with environmental regulations, and managing water and energy costs."} text2={"Our multidisciplinary team has the highest qualifications and the expertise to help investors and industrialists to grow their business and find new opportunities in the agri-food sector. We value the chain analysis of the ‘agri-food’ sector. We also perform market, technical, and financial studies, in addition to the feasibility studies for food industrial projects. We also do consultancy, training, coaching, researches, and development."} dir={`Food Industry Department`} />}></Route>
      <Route path="/Departments/Energy"   element={ <SeperateDep img3={"./imgs/carCharge.jpg"} img2={"../imgs/saveWater.jpg"} img1={"../imgs/energy1.jpg"} dir={"Energy and Water Department"} text={"We harness science and technology to meet national energy and water needs of tomorrow, by using local and safe resources, with a clean and sustainable manner. In addition, we discover and deploy the most effective energy and water solutions with innovation, determination, ingenuity and respect for environment."} text2={"Our objective is to support new industrial projects by providing feasibility studies to cover energy and water needs in a sustainable and efficient manner. As well as to assist specific energy production projects dedicated to the energy market, in particular by renewable resources, and to offer consulting, and training services in energy and water fields. Finally, we establish and regularly update a national energy and water action plan which represents SCMP’s vision, besides, we support industrialists by encouraging them to adopt energy, water and waste management systems."}/>}></Route>
      <Route path="/Departments/Studies"   element={ <SeperateDep dir={"Studies Department"} img2={"../imgs/studies1.jpg"} img1={"../imgs/studies3.jpg"} text2={"We create a hub within SCMP for scientific and technical competencies, as well as conducting technical training sessions that are required by all stakeholders, and link between SCMP and Academic Institutions for the purpose of production support."} text={"We launch new ideas based on the needs. We also study the feasibility of productive or industrial projects, as well as incubating new or old projects and work to expand and elevate them to new levels. Moreover, we prepare all necessary studies (statistics, feasibility studies, financial analysis, ...) based on collected data, and propose them to the concerned authorities (investors, financers, funders, …) for approving. Last, our priority is to follow up with all details related to approved projects, starting from the idea all the way to production."} ></SeperateDep>}></Route>
      <Route path="/Departments/Accelerator"   element={ <SeperateDep img2={"../imgs/accelerator2.jpg"} img1={"../imgs/accelerator1.jpg"} text2={"The startup weekends offer golden opportunities for brainstorming, interacting and communicating with like-minded people, meeting entrepreneurs, specialists and experts. Thereby acquiring more skills and knowledge that will enable you to turn your idea into a successful project."} text={"Do you have an innovative and creative project idea which you want to turn into a successful company? The accelerator department at SCMP is at your service to help you fulfill your dream through startup weekends, which simulate the experience of the lives of entrepreneurs. Joining one of these startup weekends will be a starting and a turning point in the path of your creative idea. This department will help you find fertile ground to discuss, develop, engineer and endorse promising ideas and thus move them from the world of imagination to the world of reality."} dir={"Accelerator Department"}></SeperateDep>}></Route>
      <Route path="/Departments/Venture"   element={ <SeperateDep2 dir={"Venture Capital"} text={"We enlarge existing small productive businesses by supporting them with the necessary financial support and scientific expertise, after matching the priorities of SCMP's activities."} img={"../imgs/venture (3).jpg"} />}/>
      
     {/*  <Route path="/Events/e1" element={<SeperateEvent title={"A meeting session with Lebanese industrialists at SCMP"} date={"18/11/2021"} img={["ev1-4.jpg","ev1-6.jpg"]} />} ></Route>
      <Route path="/Events/e2" element={<SeperateEvent title={"Site visit to a complex of four industrial buildings under construction that will concentrate on manufacturing food, water and cleaning supplies."} date={"23/11/2021"} img={["ev3-1.jpg","ev3-2.jpg"]} />} ></Route>
      <Route path="/Events/e3" element={<SeperateEvent title={"A site visit to a regular and instant coffee factory to be built in Nabatiyeh-Toul area; concrete works did start."} date={"23/11/2021"} img={["ev2-4.jpg","ev2-7.jpg"]}/>}  ></Route> 
      <Route path="/Events/e4" element={<SeperateEvent title={"A visit to Fomatex Mattress Factory in Sareen, Bekaa"} date={"17/12/2021"} text2={"We also inspected few vacant warehouses that belong to the same company for possible future collaboration."} img={["e4-1.jpg","e4-3.jpg"]}/>}  ></Route> 
      <Route path="/Events/e5" element={<SeperateEvent title={"A visit to Assaf Mill in Al-Musayleh, South Lebaon."} date={"16/12/2021"} text2={"The aim of the visit was to check on the existing facilities and equipment, as well as possibility of collaboration."} img={["e5-1.jpg","e5-2.jpg"]}/>}  ></Route> 
    */}   <Route path="/Events/:id" element={<SeperateEvent/>}/>
  <Route  path="/Events"
        element={ <Events/>
            
        }
      ></Route> 
      <Route path="/" element={<Home />} exact></Route>
      <Route path="*" element={<NotFound/>} ></Route>
    </Routes> <Footer/></div>
  );
}
