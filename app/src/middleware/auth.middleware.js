const jwt = require("jsonwebtoken")
const { SEC_KEY } = process.env 

module.exports = function(req,res,next){
    console.log("in the AuthMidd");
    //token -> db 
      jwt.verify(req.headers.token,'private',function(err,decoded){

        if(err){
            console.log(err);
            res.json({msg:"Please Login before acccess the service",rcode:-9,data:""})
        }else{
            console.log("decoded => ",decoded);
            const exptimestamp = decoded.exp
            const currentTimeStamp = Math.floor(Date.now() / 1000);
            const difference = exptimestamp - currentTimeStamp;
            console.log("seconds:",difference)
            if(difference<=600){
              token = jwt.sign({"email":decoded.email,"userId":decoded._id,"role":"user"},'private',{expiresIn:"20m"})
              res.json({msg:"This is your new token",rcode:200,token:token})  
            }
            next();
        }
      })
}
