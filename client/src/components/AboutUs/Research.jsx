import React from "react";
import stylesAboutUs from "../aboutUs.module.css";
import Paragraph from "../paragraph";
export default function research() {
  return (
    <div>
      <div id="about1" className={stylesAboutUs.aboutUsPar}>
        <Paragraph
          title={"Research"}
          img={"../imgs/dawid.webp"}
          
          text={
            "The researches deal with the necessary needs of the society, categorize and arrange them in terms of priorities, and design tables for each of them that include all the questions that should be transformed into accurate scientific information that should be obtained to initiate any production process. After preparing an elaborate database, we are working on the spatial planning in preparation for the initiation of linking these addresses with the outputs of the first stage, which are production schemes that search for venture capital to see the light in the form of productive projects."}
        />
      </div>
    </div>
  );
}
