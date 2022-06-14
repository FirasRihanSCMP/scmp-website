import React from "react";
import StylesForm from "./Feasibility.module.css"
export default function Step1() {
  return (
    <div>
      <p>ملخص تنفيذي</p>
      <div>
        <label className={StylesForm.label}>:فكرة عامة عن المشروع</label>
        <input type="text" />
      </div>
      
      <br />

      <div>
        <label className={StylesForm.label}>:التواريخ</label>
        <label className={StylesForm.label}>:تاريخ البدء</label>
        <input type="date" />
      </div>
    </div>
  );
}
