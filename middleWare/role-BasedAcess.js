const roleMW = (roles)=>{
    return(req,res,next)=>{
     if(!roles.includes(req.user.role)){
        return res.status(403).json({msg:"Forbidden"});
     }   
     next();
    }
}
module.exports = roleMW;