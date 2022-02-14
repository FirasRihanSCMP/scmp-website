import React from "react";
import { getFullDate } from "./getFullDate";
import "./uploader.css";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify"
import DatePicker from 'sassy-datepicker'
import { Row,Button, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
export default function Uploader() {
  const [files, setFiles] = useState([]);
  const [file, setFile] = useState([]);
  const [date, setDate] = useState(new Date());
const [brief, setBrief] = useState('');
const [title, setTitle] = useState('')
const [paragraph, setParagraph] = useState('')
let navigate=useNavigate()
var FinalDate=""
  const dateHandler = async(date) => {
   FinalDate=getFullDate(date.toString());
   await  setDate(FinalDate)

  };


  const onInputChangeMultiple = async (e) => {

    await setFiles(e.target.files); 
  };
  const onInputChange=async(e)=>{
    await setFile(e.target.files) 
  }

  const onSubmitFile =async (e) => {
    e.preventDefault();
    const data = new FormData(); 
    console.log(files)
    console.log(file)
    for (let i = 0; i < files.length; i++) { 
    
    
      data.append("file2", files[i]);  
       
      }
   data.append("file", file[0]); 
      /*  data.append("title",title)
      data.append("brief",brief)
      data.append("paragraph",paragraph)
      data.append("date",date)  */
      const text=
data.append('title',title)
data.append('brief',brief)
data.append('paragraph',paragraph)
data.append('date',date)

if (window.confirm("Press a button!")) {await axios.post("//localhost:3001/api/EventUpload", data)
      .then((e) => {
     
         toast.success("Upload success");
    setTimeout(() => {
      navigate("/Events")
    }, 3000);
        
       
      })
      .catch((e) => {
      console.log(e)
        toast.error("Upload error");
      });  
    }
}

  return (
    <form method="post" action="#" id="#" className={'eventForm'} onSubmit={onSubmitFile}>
   <Row><Col><div className="form-group files">
        <label className={'eventUploadTitle'}>Upload A Cover Photo</label>
        <input
        required
          type="file"
          className="form-control"
          onChange={onInputChange}
         
        />
      </div>
      <br/>
      <div className="form-group files">
        <label className={'eventUploadTitle'}>Upload Inner Photos</label>
        <input
        required
          type="file"
          className="form-control"
          onChange={onInputChangeMultiple}
          multiple
        />
      </div></Col>
      <Col><p>Title</p>
<textarea id="textarea-content-1" required rows="3" cols="45" type="text"  onBlur={(e)=>{setTitle(e.target.value)}} />
<p>Brief</p>
<textarea  id="textarea-content-2" required rows="3" cols="45" type="text"   onBlur={(e)=>{setBrief(e.target.value)}} />
<p>Paragraph</p>
<textarea id="textarea-content-3" required rows="5" cols="45" type="text"  onBlur={(e)=>{setParagraph(e.target.value)}} />


    <DatePicker onChange={dateHandler}  />
 

    <br/>
 <Button type="submit" variant="info">Submit</Button></Col>
      </Row> 
    </form>
  );
}
