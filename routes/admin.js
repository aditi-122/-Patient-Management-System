const express = require("express");
const AdminRoute = express.Router();
const UserModel = require("../models/user.model")
AdminRoute.get("/admin/user",async(req,res)=>{
    let admin = await UserModel.find({role:'admin'});
})
module.exports = AdminRoute;