import React from 'react'
import stylesAboutUs from '../aboutUs.module.css'
import Paragraph from '../paragraph'
export default function InvFund() {
    return (
        <div>
       
              <div  className={stylesAboutUs.aboutUsPar}><Paragraph title={"Venture Capital"}   img={"../imgs/venture.webp"}text={"We enlarge existing small productive businesses by supporting them with the necessary financial support and scientific expertise, after matching the priorities of SCMP's activities."} order={'last'}/></div>
      
        </div>
    )
}
