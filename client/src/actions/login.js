import axios from "axios";
let result=false;
export const login=async (e)=>{
    const data={username:e.target[0].value,password:e.target[1].value}
 
  /*   const data = { email, password }; */
  await  axios
    .post("http://test.scmp-lb.com:3002/api/Login", data, { withCredentials: true })
    .then(await function (response)  {
      if(response.data.webmail===true){
        window.location.href=response.data.result
       return result=false;
      }
     else if(response.data.result==="Network Error"){
        return  result="Network Error"
      }
      else if (response.data.result===true && response.data.webmail===false){
         return  result =true
      }
    /* if(!!response.data.loggedIn && !!response.data.admin){ navigate( "/20ScMp21admin11" , { state:{loggedIn:response.data.loggedIn}} )}
   else if(!!response.data.loggedIn && ! !!response.data.admin){ window.location.href = "https://www.scmp-lb.com/webmail";}

  else{return(alert("Username or Password is not valid!")) */
  
})
  .catch((error)=>{
      result="Network Error"
  });
  return result
}