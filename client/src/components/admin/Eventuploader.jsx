import React from "react";
import { getFullDate } from "./getFullDate";
import "./uploader.css";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify"
import DatePicker from 'sassy-datepicker'
import { Row, Button, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
export default function Uploader() {
  const [files, setFiles] = useState([]);
  const [file, setFile] = useState([]);
  const [date, setDate] = useState(new Date());
  const [brief, setBrief] = useState('');
  const [title, setTitle] = useState('')
  const [paragraph, setParagraph] = useState('')
  const [ELink, setELink] = useState('')
  let navigate = useNavigate()
  const data = new FormData();
  let coverPhoto, innerPhotos;
  var FinalDate = ""
  const dateHandler = async (date) => {
    FinalDate = getFullDate(date.toString());
    data.append('date', FinalDate)

  };


  const onInputChangeMultiple = async (e) => {
    data.delete('innerPhotos')
    innerPhotos = e.target.files
    if (innerPhotos) {
      for (let i = 0; i < innerPhotos.length; i++) {
        data.append('innerPhotos', innerPhotos[i], innerPhotos[i].name)
      }
    }
    for (var pair of data.entries()) {
      console.log(pair[0] + ', ' + pair[1].name);
    }
  };

  const onInputChange = async (e) => {
    data.delete('coverPhoto')
    coverPhoto = e.target.files
    if (coverPhoto) {
      data.append('coverPhoto', coverPhoto[0], coverPhoto[0].name)
    }
  }
  const onTitleChange = async (e) => {
  
      data.append('title', e.target.value)
    
  }
  
  const onBriefChange = async (e) => {
  
    data.append('brief',  e.target.value)
  
}
const onParagraphChange = async (e) => {
  
  data.append('paragraph',  e.target.value)

}
const onDateChange = async (e) => {
  
  data.append('date', date)

}
const onLinkChange = async (e) => {
  
  data.append('date', date)

}
  const onSubmitFile = async (e) => {
    e.preventDefault();
    data.delete('Elink')
    data.append('ELink', ELink)
   

    if (window.confirm("Press a button!")) {

      await axios.post("https://www.scmp-lb.com/api/EventUpload", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        }
      })
        .then((e) => {

          toast.success("Upload success");
          /*   setTimeout(() => {
              navigate("/Events")
            }, 3000); */


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
        </div></Col>
        <Col><p>Title</p>
          <textarea id="textarea-content-1" required rows="3" cols="45" type="text" onBlur={(e) => { onTitleChange(e) }} />
          <p>Brief</p>
          <textarea id="textarea-content-2" required rows="3" cols="45" type="text" onBlur={(e) => { onBriefChange(e) }} />
          <p>Paragraph</p>
          <textarea id="textarea-content-3" required rows="5" cols="45" type="text" onBlur={(e) => { onParagraphChange(e) }} />


          <DatePicker onChange={dateHandler} />


          <br />
          <Button type="submit" variant="info">Submit</Button></Col>
      </Row>
    </form>
  );
}
