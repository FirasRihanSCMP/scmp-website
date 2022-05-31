import React from "react";
import { getFullDate } from "./getFullDate";
import "./uploader.css";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify"
import DatePicker from 'sassy-datepicker'
import { Row, Button, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
export default function Uploader() {
  const [percentage, setPercentage] = useState(0);
  const [file, setFile] = useState([]);
  const [date, setDate] = useState(new Date());
  const [brief, setBrief] = useState('');
  const [title, setTitle] = useState('')
  const [paragraph, setParagraph] = useState('')
  const [ELink, setELink] = useState('')
  let navigate = useNavigate()
  const data = new FormData();
  let coverPhoto, innerPhotos;
  var FinalDate = getFullDate(date.toString());
data.append('ELink','')
data.append('date',FinalDate)
data.append('title','')
data.append('brief','')
data.append('paragraph','')
/* console.log(FinalDate) */
  const dateHandler = async (date) => {
if(data.has('date')){  data.delete('date')}  
    FinalDate = getFullDate(date.toString());
    data.append('date', FinalDate)

  };


  const onInputChangeMultiple = async (e) => {
    if(data.has('innerPhotos')){data.delete('innerPhotos')} 
    
    innerPhotos = e.target.files
    if (innerPhotos.length>0) {
    /*   console.log('okk') */
      for (let i = 0; i < innerPhotos.length; i++) {
        data.append('innerPhotos', innerPhotos[i], innerPhotos[i].name)
      }
    }

  };

  const onInputChange = async (e) => {
    if(data.has('coverPhoto')){
      data.delete('coverPhoto')
    } 
    
    coverPhoto = e.target.files
    
    if (coverPhoto.length>0) {
   /*    console.log('ok') */
      data.append('coverPhoto', coverPhoto[0], coverPhoto[0].name)
    }
  }
  const onTitleChange = async (e) => {
    if(data.has('title')){
      data.delete('title')
    } 
    
      data.append('title', e.target.value)
    
  }
  
  const onBriefChange = async (e) => {
    if(data.has('brief')){data.delete('brief')} 

    data.append('brief',  e.target.value)
  
}
const onParagraphChange = async (e) => {
  if(data.has('paragraph')){data.delete('paragraph')} 
  
  data.append('paragraph',  e.target.value)

}

const onELinkChange = async (e) => {
  if(data.has('ELink')){data.delete('ELink')} 
  
  data.append('ELink', e.target.value)

}
const options={
  onUploadProgress :(progressEvent)=>{
    const{loaded, total} =progressEvent;
    let percent = Math.floor(loaded*100 / total)
  console.log(percent/1000000 +"of"+total/1000000)
  if( percent < 100){
    setPercentage(percent)
  }
  }
} 
  const onSubmitFile = async (e) => {
    e.preventDefault();
   
    if (window.confirm("Press a button!")) {

      await axios.post("https://www.scmp-lb.com/api/EventUpload", data,options)
        .then((e) => {

          toast.success("Upload success");
          setPercentage(100)
         setTimeout(() => {
            setPercentage(0)
            }, 3000); 


        })
        .catch((e) => {
         /*  console.log(e) */
          toast.error("Upload error");
        });
    }

  }

  return (<div className="uploaderRoot" >

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
        <br />
        <div className="form-group files">
          <label className={'eventUploadTitle'}>Upload Inner Photos</label>
          <input
            required
            type="file"
            className="form-control"
            onChange={onInputChangeMultiple}
            multiple
          />
        </div>
        {percentage>0?  
 
 <div className={"circularProgressDiv"}>      <CircularProgressbar
 value={percentage}
 maxValue={100}
 text={`${percentage}%`}
 strokeWidth={5}
 className={"circularProgress"}
/></div>
: <div></div>} 
        </Col>
        <Col><p>Title</p>
          <textarea id="textarea-content-1" required rows="3" cols="45" type="text" onBlur={(e) => { onTitleChange(e) }} />
          <p>Brief</p>
          <textarea id="textarea-content-2" required rows="3" cols="45" type="text" onBlur={(e) => { onBriefChange(e) }} />
          <p>Paragraph</p>
          <textarea id="textarea-content-3"  rows="5" cols="45" type="text" onBlur={(e) => { onParagraphChange(e) }} />
          <p>Link</p>
          <textarea id="textarea-content-3"  rows="5" cols="45" type="text" onBlur={(e) => { onELinkChange(e) }} />

          <DatePicker onChange={dateHandler} />


          <br />
          <Button type="submit" variant="info">Submit</Button></Col>
          
      </Row>
    </form></div>
  );
}
