const mongoose=require('mongoose');


const adharSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    number:{
        type:Number,
        require:true,
    },
    adharNumber:{
        type:Number,
        require:true,
        unique:true
    },
    address:{
        type:String,
        require:true
    },
    faceImage:{
        type:String
    },
    fingerprintImage:{
        type:String
    }

})

const adharModel=mongoose.model("adharModel",adharSchema);



module.exports=adharModel;