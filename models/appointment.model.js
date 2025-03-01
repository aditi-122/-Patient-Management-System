const mongoose = require("mongoose");
const UserShema = mongoose.Schema({
    patientId:{type:Schema.Types.objectId,ref:'user'},
    doctorId:{type:Schema.Types.objectId,ref:'user'},
    appointmentDateTime: Date,
    symptoms: {type:String,required:true},
    fees:{type:Number,required:true,default:500},
    prescription: String,
    isDiagnosisDone:{type:Boolean,default:false,required:true},
})
UserSchema.pre('save',function(next){
    this.fees =requ.body.fees;
    fees = netAmount+this.fees;
    next();
})
const UserModel = mongoose.model('user',UserSchema);
module.exports = UserModel;