import axios from 'axios';
import React from 'react'
import { Button } from 'react-bootstrap';
import { toast } from 'react-toastify';

export default function UploadEvent() {
let form=new FormData();
let coverPhoto, innerPhotos , title;
    const coverPhotoF = e=>{
        form.delete('coverPhoto')
        coverPhoto=e.target.files
        if(coverPhoto){
        form.append('coverPhoto', coverPhoto[0], coverPhoto[0].name)
    
    
    }}
    const innerPhotosF = e=>{
     
        form.delete('innerPhotos')
        innerPhotos=e.target.files
        if(innerPhotos){
            for(let i=0 ; i<innerPhotos.length; i++){
                form.append('innerPhotos', innerPhotos[i], innerPhotos[i].name)
            }
        }
        for (var pair of form.entries()) {
            console.log(pair[0]+ ', ' + pair[1].name); 
          }
    }
    const titleF = e=>{

        title=e.target.value
        if(title){
        form.append('title',title)
    }
}
    const onSubmit=async e=>{
        if(coverPhoto && innerPhotos && title){
            try {
                
                await axios.post("http://192.168.0.140:3002/api/EventUpload", form)
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
            } catch (error) {
                alert ('upload failed')
                console.log(error)
            }
        }
        else{
            alert('empty fields!')
        }
    }
  return (
    <div>
      
        <input type="file" onChange={e=>coverPhotoF(e)}/>
        <input type="file" multiple onChange={e=>innerPhotosF(e)}/>
        <input type="text" onChange={e=>titleF(e)}/>
<Button onClick={e=>onSubmit(e)}></Button>



    </div>
  )
}
