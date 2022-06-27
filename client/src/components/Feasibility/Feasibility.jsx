import React, { useState } from "react";
import stylesForm from "./Feasibility.module.css";
import Spinner from "../ClipLoader/Spinner";
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
import { useEffect } from "react";
import axios from "axios";
import { Prev } from "react-bootstrap/esm/PageItem";
export default function Feasibility() {
  const [errorFetchedChecker, seterrorFetchedChecker] = useState(false)
  const [data, setdata] = useState({})
  const [Loaded, setLoaded] = useState(false)  
  const [page, setPage] = useState(0)
  const [FinalGrade, setFinalGrade] = useState(0)
  var finalGrade=0
  useEffect(() => {
    async function fetchData() {
      await axios
        .get("https://www.scmp-lb.com/api/formFS")
        .then((response) => {

          if (response.data === "not found") {

            console.log(response.data)

          }
          else if (response.data.length > 0) {
            console.log(response.data)
            setdata(response.data)
            setLoaded(true)
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

  
  const Prev = () => {

    goToTop()
    setPage((currPage) => currPage - 1)
  }
  const Next = () => {

    goToTop()
    setPage((currPage) => currPage + 1)
  }
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  const Submit = () => {
  finalGrade=0
    goToTop()
    for(var index in formData){
      for(var concatIndex in formData[index]){
       finalGrade=finalGrade+ (+formData[index][concatIndex].g)
      }
    }
 setFinalGrade(finalGrade.toFixed(2))
 console.log(FinalGrade)
setPage(24)
}
  const [formData, setFormData] = useState({
    step1: {
      c11: { ch: false, g: 0 },
      c12: { ch: false, g: 0 },
      c13: { ch: false, g: 0 },
      c14: { ch: false, g: 0 },
      c21: { ch: false, g: 0 },
      c22: { ch: false, g: 0 },
      c23: { ch: false, g: 0 }
    },
    step2: {
      c11: { ch: false, g: 0 },
      c12: { ch: false, g: 0 },
      c13: { ch: false, g: 0 }

    },
    step3: {
      c11: { ch: false, g: 0 },
      c12: { ch: false, g: 0 },
      c13: { ch: false, g: 0 },
      c21: { ch: false, g: 0 },
      c22: { ch: false, g: 0 },
      c23: { ch: false, g: 0 },
      c24: { ch: false, g: 0 },
      c25: { ch: false, g: 0 },
      c26: { ch: false, g: 0 },
      c27: { ch: false, g: 0 }

    },
    step4: {
      c11: { ch: false, g: 0 },
      c12: { ch: false, g: 0 },
      c13: { ch: false, g: 0 },
      c14: { ch: false, g: 0 },
      c15: { ch: false, g: 0 },
      c16: { ch: false, g: 0 },
      c17: { ch: false, g: 0 },
      c18: { ch: false, g: 0 },
      c21: { ch: false, g: 0 },
      c22: { ch: false, g: 0 },
      c23: { ch: false, g: 0 },
      c24: { ch: false, g: 0 },
      c25: { ch: false, g: 0 },
      c26: { ch: false, g: 0 },
      c31: { ch: false, g: 0 },
      c32: { ch: false, g: 0 },
      c33: { ch: false, g: 0 },
      c34: { ch: false, g: 0 }

    }, step5: {c11: { ch: false, g: 0 },c12: { ch: false, g: 0 }, c13: { ch: false, g: 0 }, c14: { ch: false, g: 0 }, c15: { ch: false, g: 0 }, c16: { ch: false, g: 0 }, c17: { ch: false, g: 0 }, c21: { ch: false, g: 0 }, c22: { ch: false, g: 0 }, c23: { ch: false, g: 0 }, c24: { ch: false, g: 0 }
    },
    step6: { c11: { ch: false, g: 0 }, c12: { ch: false, g: 0 }, c13: { ch: false, g: 0 }, c14: { ch: false, g: 0 }, c15: { ch: false, g: 0 }, c16: { ch: false, g: 0 }, c17: { ch: false, g: 0 }, c21: { ch: false, g: 0 }, c22: { ch: false, g: 0 }, c23: { ch: false, g: 0 }, c31: { ch: false, g: 0 }, c32: { ch: false, g: 0 }, c33: { ch: false, g: 0 }, c41: { ch: false, g: 0 }, c42: { ch: false, g: 0 }, c43: { ch: false, g: 0 }, c51: { ch: false, g: 0 }, c52: { ch: false, g: 0 }, c61: { ch: false, g: 0 }, c62: { ch: false, g: 0 }, c71: { ch: false, g: 0 }, c72: { ch: false, g: 0 }, c81: { ch: false, g: 0 }, c82: { ch: false, g: 0 }


    },
    step7: {
      c11: { ch: false, g: 0 },
      c12: { ch: false, g: 0 },
      c13: { ch: false, g: 0 },
      c14: { ch: false, g: 0 },
      c21: { ch: false, g: 0 },
      c22: { ch: false, g: 0 }
    },
    step8: {
      c11: { ch: false, g: 0 },
      c12: { ch: false, g: 0 },
      c13: { ch: false, g: 0 },
      c14: { ch: false, g: 0 },
      c15: { ch: false, g: 0 },
      c21: { ch: false, g: 0 },
      c22: { ch: false, g: 0 },
      c23: { ch: false, g: 0 },
      c24: { ch: false, g: 0 }
    }
    ,
    step9: {
      c11: { ch: false, g: 0 },
      c12: { ch: false, g: 0 },
      c13: { ch: false, g: 0 },
      c14: { ch: false, g: 0 },
      c21: { ch: false, g: 0 },
      c22: { ch: false, g: 0 },
      c31: { ch: false, g: 0 },
      c32: { ch: false, g: 0 },
      c33: { ch: false, g: 0 },
      c41: { ch: false, g: 0 },
      c42: { ch: false, g: 0 },
      c43: { ch: false, g: 0 },
      c51: { ch: false, g: 0 },
      c52: { ch: false, g: 0 },
      c53: { ch: false, g: 0 },
      c54: { ch: false, g: 0 },
      c55: { ch: false, g: 0 },
      c56: { ch: false, g: 0 },
      c61: { ch: false, g: 0 },
      c62: { ch: false, g: 0 },
      c71: { ch: false, g: 0 },
      c72: { ch: false, g: 0 },
      c81: { ch: false, g: 0 },
      c82: { ch: false, g: 0 },
      c91: { ch: false, g: 0 },
      c92: { ch: false, g: 0 },
      c93: { ch: false, g: 0 },
      c94: { ch: false, g: 0 }
    },
    step10: {
      c11: { ch: false, g: 0 },
      c12: { ch: false, g: 0 },
      c13: { ch: false, g: 0 },
      c14: { ch: false, g: 0 }
    },
    step11: {
      c11: { ch: false, g: 0 },
      c12: { ch: false, g: 0 },
      c13: { ch: false, g: 0 },
      c14: { ch: false, g: 0 }
    },
    step12: {
      c11: { ch: false, g: 0 },
      c12: { ch: false, g: 0 },
      c21: { ch: false, g: 0 },
      c22: { ch: false, g: 0 },
      c23: { ch: false, g: 0 },
      c31: { ch: false, g: 0 },
      c32: { ch: false, g: 0 },
      c41: { ch: false, g: 0 },
      c42: { ch: false, g: 0 },
      c51: { ch: false, g: 0 }
    },
    step13: {
      c11: { ch: false, g: 0 },
      c12: { ch: false, g: 0 },
      c21: { ch: false, g: 0 },
      c22: { ch: false, g: 0 },
      c23: { ch: false, g: 0 },
      c31: { ch: false, g: 0 },
      c32: { ch: false, g: 0 },
      c33: { ch: false, g: 0 },
      c41: { ch: false, g: 0 },
      c42: { ch: false, g: 0 },

    },
    step14: {
      c11: { ch: false, g: 0 },
      c12: { ch: false, g: 0 },
      c13: { ch: false, g: 0 },
      c14: { ch: false, g: 0 },
      c15: { ch: false, g: 0 }

    },
    step15: {
      c11: { ch: false, g: 0 },
      c12: { ch: false, g: 0 },
      c21: { ch: false, g: 0 },
      c22: { ch: false, g: 0 },
      c31: { ch: false, g: 0 },
      c32: { ch: false, g: 0 },
      c41: { ch: false, g: 0 },
      c42: { ch: false, g: 0 },
      c51: { ch: false, g: 0 },
      c52: { ch: false, g: 0 },
      c61: { ch: false, g: 0 },
      c62: { ch: false, g: 0 },
      c71: { ch: false, g: 0 },
      c72: { ch: false, g: 0 },
      c81: { ch: false, g: 0 },
      c82: { ch: false, g: 0 },
      c91: { ch: false, g: 0 },
      c92: { ch: false, g: 0 },
      c101: { ch: false, g: 0 },
      c102: { ch: false, g: 0 },
      c111: { ch: false, g: 0 },
      c112: { ch: false, g: 0 },
      c121: { ch: false, g: 0 },
      c122: { ch: false, g: 0 },
      c131: { ch: false, g: 0 },
      c132: { ch: false, g: 0 },
      c141: { ch: false, g: 0 },
      c142: { ch: false, g: 0 },
      c151: { ch: false, g: 0 },
      c152: { ch: false, g: 0 }
    },
    step16: {
      c11: { ch: false, g: 0 },
      c12: { ch: false, g: 0 },
      c21: { ch: false, g: 0 },
      c22: { ch: false, g: 0 },
      c31: { ch: false, g: 0 },
      c32: { ch: false, g: 0 },
      c41: { ch: false, g: 0 },
      c42: { ch: false, g: 0 },
      c43: { ch: false, g: 0 },
      c51: { ch: false, g: 0 },
      c52: { ch: false, g: 0 },
      c53: { ch: false, g: 0 },
      c61: { ch: false, g: 0 },
      c62: { ch: false, g: 0 },
      c71: { ch: false, g: 0 },
    },
    step17: {
      c11: { ch: false, g: 0 },
      c12: { ch: false, g: 0 },
      c13: { ch: false, g: 0 },
      c21: { ch: false, g: 0 },
      c22: { ch: false, g: 0 },
      c23: { ch: false, g: 0 },
      c31: { ch: false, g: 0 },
      c32: { ch: false, g: 0 },
      c33: { ch: false, g: 0 },
      c41: { ch: false, g: 0 },
      c42: { ch: false, g: 0 },
      c51: { ch: false, g: 0 },
      c52: { ch: false, g: 0 },
      c53: { ch: false, g: 0 },
      c61: { ch: false, g: 0 },
      c71: { ch: false, g: 0 },
      c81: { ch: false, g: 0 },
      c91: { ch: false, g: 0 },
      c101: { ch: false, g: 0 },
      c111: { ch: false, g: 0 }
    },
    step18: {
      c11: { ch: false, g: 0 },
      c12: { ch: false, g: 0 },
      c13: { ch: false, g: 0 }
    },
    step19: {
      c11: { ch: false, g: 0 },
      c12: { ch: false, g: 0 },
      c13: { ch: false, g: 0 },
      c14: { ch: false, g: 0 }
    },
    step20: {
      c11: { ch: false, g: 0 },
      c21: { ch: false, g: 0 },
      c31: { ch: false, g: 0 },
      c41: { ch: false, g: 0 },
      c51: { ch: false, g: 0 },
      c61: { ch: false, g: 0 },
    },
    step21: {
      c11: { ch: false, g: 0 },
      c21: { ch: false, g: 0 },
      c31: { ch: false, g: 0 },
      c41: { ch: false, g: 0 },
      c51: { ch: false, g: 0 },
      c61: { ch: false, g: 0 },
      c71: { ch: false, g: 0 }

    },
    step22: {
      c11: { ch: false, g: 0 },
      c21: { ch: false, g: 0 },
      c31: { ch: false, g: 0 },
      c41: { ch: false, g: 0 },
      c51: { ch: false, g: 0 },
    },
    step23: {
      c11: { ch: false, g: 0 },
      c12: { ch: false, g: 0 },
      c13: { ch: false, g: 0 },
    },
    step24:{
      c11: { ch: false, g: 0 },
      c21: { ch: false, g: 0 },
      c31: { ch: false, g: 0 },
      c41: { ch: false, g: 0 },
      c51: { ch: false, g: 0 },

    }
  })
  useEffect(() => {
    console.log(formData)
  }, [formData])


  const PageDisplay = (page) => {
    switch (page) {
      case 0: return <Step1 formData={formData} setFormData={setFormData} data={data} />;
      case 1: return <Step2 formData={formData} setFormData={setFormData} data={data} />;
      case 2: return <Step3 formData={formData} setFormData={setFormData} data={data} />;
      case 3: return <Step4 formData={formData} setFormData={setFormData} data={data} />;
      case 4: return <Step5 formData={formData} setFormData={setFormData} data={data} />;
      case 5: return <Step6 formData={formData} setFormData={setFormData} data={data} />;
      case 6: return <Step7 formData={formData} setFormData={setFormData} data={data} />;
      case 7: return <Step8 formData={formData} setFormData={setFormData} data={data} />;
      case 8: return <Step9 formData={formData} setFormData={setFormData} data={data} />;
      case 9: return <Step10 formData={formData} setFormData={setFormData} data={data} />;
      case 10: return <Step11 formData={formData} setFormData={setFormData} data={data} />;
      case 11: return <Step12 formData={formData} setFormData={setFormData} data={data} />;
      case 12: return <Step13 formData={formData} setFormData={setFormData} data={data} />;
      case 13: return <Step14 formData={formData} setFormData={setFormData} data={data} />;
      case 14: return <Step15 formData={formData} setFormData={setFormData} data={data} />;
      case 15: return <Step16 formData={formData} setFormData={setFormData} data={data} />;
      case 16: return <Step17 formData={formData} setFormData={setFormData} data={data} />;
      case 17: return <Step18 formData={formData} setFormData={setFormData} data={data} />;
      case 18: return <Step19 formData={formData} setFormData={setFormData} data={data} />;
      case 19: return <Step20 formData={formData} setFormData={setFormData} data={data} />;
      case 20: return <Step21 formData={formData} setFormData={setFormData} data={data} />;
      case 21: return <Step22 formData={formData} setFormData={setFormData} data={data} />;
      case 22: return <Step23 formData={formData} setFormData={setFormData} data={data} />;
      case 23: return <Step24 formData={formData} setFormData={setFormData} data={data} />;
      case 24: return <Step25 FinalGrade={FinalGrade} />;
       default:
        break;
    }
  }
  return (<div>{Loaded ? <div className={stylesForm.form}>
    <div className={stylesForm.progressBar}>
      <div style={{ width: page * 100 / 24 + "%" }}></div>
    </div>
    <div className={stylesForm.formContainer}>
      <div className={stylesForm.header}></div>
      <div className={stylesForm.body}>
        <div className={stylesForm.rtl}>{PageDisplay(page)}</div>

      </div>
      <div className={stylesForm.footer}>
        <button
          disabled={page === 0}
          onClick={() => { Prev() }}>Prev</button>
        <button
          disabled={page === 23}
          onClick={() => { Next() }}>Next</button>
      </div>
      {page===23? <div  className={stylesForm.footer}> <button
          onClick={() => { Submit() }}>Submit</button>
      </div>   : <span></span> }
    </div>
    <div className={stylesForm.DPreview}>Only For Desktop Preview</div>
  </div> : <Spinner/>}</div>

  );
}
