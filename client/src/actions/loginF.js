import axios from "axios";
let result={};

export const loginF=async (e)=>{
  e.preventDefault();
    const data={username:e.target[0].value,password:e.target[1].value}
 
  await  axios
    .post("https://www.scmp-lb.com/api/Login", data)
    .then(function (response)  {
      if(response.data.auth===false){
        return result={auth:false, reason:"Wrong Credentials!",type:'error' };

      }
      else if(response.data.auth==="Network Error"){
        return  result={auth:false,reason:"Please check your network connection!",type:'error'}
      }
     
      else if(response.data.auth==='normal'){
        window.location.href=response.data.to
       return result={auth:false, type:response.data.auth};
      }
      else if(response.data.auth==='admin'){
        return result={auth:true, type:response.data.auth};
      }
      else if(response.data.auth==='fs'){
        return result={auth:true, type:response.data.auth};
      }
    

  
})
  .catch((error)=>{
      result={auth:false,reason:"Network Error"}
  });
  return result
}