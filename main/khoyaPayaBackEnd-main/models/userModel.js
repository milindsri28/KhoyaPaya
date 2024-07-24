
const mongoose=require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        require:true
    },
    email: {
        type: String,
        require:true,
        unique: true
    },
    password: {
        type: String,
        require:true
    },
    ConfirmPassword: {
        type: String,
        require:true
    }
});

const userModel=mongoose.model('userModel',userSchema);

module.exports=userModel;