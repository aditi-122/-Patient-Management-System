const { Module } = require("module");

const loggerMW = (req,res,next)=>{
    const{method,url}=req;
    const timestamp = new Date ().toDateString();
    next();
}
Module.exports = loggerMW;