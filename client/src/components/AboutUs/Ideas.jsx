import React from 'react'
import stylesAboutUs from '../aboutUs.module.css'
import Paragraph from '../paragraph'
export default function Ideas() {
    return (
        <div>
                  <div id="about2" className={stylesAboutUs.aboutUsPar}><Paragraph   img={"../imgs/rocket.webp"} text={"We incubate promising ideas that some new or experienced graduates are working on, providing them with scientific guidance and the equipment they need in addition to sums of money that cover the costs of work and walk with them slowly in the path of entrepreneurship, so they reach, as a first step, to the production of the prototype and then launch it in the form of a start-up company. These ideas will either arise from studies within the SCMP, or through startup weekends held to enable those with creative energies to present ideas in the areas SCMP identifies, so that SCMP can then choose the best and move it towards emerging companies."}order={'last'}/></div>
       
        </div>
    )
}
