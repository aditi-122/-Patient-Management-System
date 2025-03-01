const jwt = require('jsonwebtoken');
const User = require("../models/user.model");
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
const auth = async(req,res,next)=>{
    try {
        const token = req.header('authorization')?.split("")[1];
        if(!token){
            return res.status(402).json({msg:"Unathorized"});
        }
        else{
            const decoded = jwt.verify(token,JWT_SECRET_KEY);
        }
        if(!decoded){
            const user = await User.findById(decoded.userId);
            req.user = user;
        }
        else{
            res.status(403).json({msg:"Permission Denied"});
        }
        next();
    } catch (err) {
        res.status(500).json({msg:"Unathorized"})
    }
}
module.exports = auth;