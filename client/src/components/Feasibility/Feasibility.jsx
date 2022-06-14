import React, { useState } from "react";
import stylesForm from "./Feasibility.module.css";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";
import Step7 from "./Step7";
import Step8 from "./Step8";
import Step9 from "./Step9";
import Step10 from "./Step10";
import Step11 from "./Step11";
import Step12 from "./Step12";
import Step13 from "./Step13";
import Step14 from "./Step14";
import Step15 from "./Step15";
import Step16 from "./Step16";
import Step17 from "./Step17";
import Step18 from "./Step18";
import Step19 from "./Step19";
import Step20 from "./Step20";
import Step21 from "./Step21";
import Step22 from "./Step22";
import Step23 from "./Step23";
import Step24 from "./Step24";
import Step25 from "./Step25";
export default function Feasibility() {

    const [page, setPage] = useState(0)

const PageDisplay = (page)=>{
  switch (page) {
    case 0: return <Step1/>;
    case 1: return <Step2/>;
    case 2: return <Step3/>;
    case 3: return <Step4/>;
    case 4: return <Step5/>;
    case 5: return <Step6/>;
    case 6: return <Step7/>;
    case 7: return <Step8/>;
    case 8: return <Step9/>;
    case 9: return <Step10/>;
    case 10: return <Step11/>;
    case 11: return <Step12/>;
    case 12: return <Step13/>;
    case 13: return <Step14/>;
    case 14: return <Step15/>;
    case 15: return <Step16/>;
    case 16: return <Step17/>;
    case 17: return <Step18/>;
    case 18: return <Step19/>;
    case 19: return <Step20/>;
    case 20: return <Step21/>;
    case 21: return <Step22/>;
    case 22: return <Step23/>;
    case 23: return <Step24/>;
    case 24: return <Step25/>;
      default:
          break;
  }
}
  return (
    <div className={stylesForm.form}>
      <div className={stylesForm.progressBar}></div>
      <div className={stylesForm.formContainer}>
        <div className={stylesForm.header}></div>
        <div className={stylesForm.body}>
             {PageDisplay(page)}
             <div className={stylesForm.footer}>
          <button 
          disabled={page === 0}
          onClick={()=>{setPage((currPage)=>currPage-1)}}>Prev</button>
          <button
          disabled={page === 24}
          onClick={()=>{setPage((currPage)=>currPage+1)}}>Next</button>
        </div>
        </div>
    
      </div>
    </div>
  );
}
