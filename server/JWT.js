const jwt =require('jsonwebtoken')

   const createToken=(user)=>{
/*   console.log(user) */
 const accessToken=jwt.sign({username:user.U_Name,id:user.id},"tanjarame2leyesakhane");
 return accessToken;
}
const  validateToken=(req,res,next)=>{
    const accessToken=req.cookies["access-token"]
    if(!accessToken){
        return res.send({loggedIn:false})
    }
    try {
        const validToken=jwt.verify(accessToken,"tanjarame2leyesakhane")   
        if(validToken){
            return res.send({loggedIn:true})
            return next()
        }

    } catch (error) {
        return res.send({loggedIn:false})
    }
}
module.exports={createToken,validateToken}