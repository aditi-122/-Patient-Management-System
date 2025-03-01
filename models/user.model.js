const mongoose = require("mongoose");
const UserShema = mongoose.Schema({
name: {type:String,required:true},
email:{type:String,unique:true,required:true},
mobileNumber:{type:String,required:true},
password:{type:String,required:true},
role:{type:String,enum:['admin','doctor','patient'],default:'patient',required:true},
specialization:{typr:String,enum:['nerves','heart','lungs','skin'],required:true,default:'nerves'},
availableDays:{enum:[Sun, Mon, Tue, Wed, Thu, Fri, Sat],default:'monday',required:true}
})
const UserModel = mongoose.model('user',UserSchema);
module.exports = UserModel;