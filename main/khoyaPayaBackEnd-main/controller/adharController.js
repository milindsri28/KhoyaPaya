const adharModel=require('../models/adharModel');

module.exports.createadhar=async function(req,res){
    try{
        let userData=req.body;
        const faceImagePath = req.files['faceImage'][0].path;
        const fingerprintImagePath = req.files['fingerprintImage'][0].path;

        userData.faceImage = faceImagePath;
        userData.fingerprintImage = fingerprintImagePath;
        let user=await adharModel.create(userData);
        
        return res.json({
            message:"adhar added succesfully",
            data:user
        })
    } catch(err){
        return res.status(500).json({
            message:"error while making adhar",
            error:err.message
        })
    }
}

module.exports.getAllAdhars=async function(req,res){
    try{
    let users=await adharModel.find();
    if(users){
        return res.json({
            message:"adhars retrieved",
            data:users
        })
    }
}catch(err){
    return res.status(500).json({
        message:"error while retriving adhars",
        error:err.message
    })
}
}


module.exports.getAdharByNumber = async function (req, res) {
    console.log("here")
    try {
        let adharNumber = req.body.adharNumber;
        console.log(adharNumber)
        let user = await adharModel.findOne({ adharNumber: adharNumber });
        if (user) {
            return res.json({
                message: "Adhar retrieved",
                data: user
            });
        } else {
            return res.json({
                message: "Adhar not found"
            });
        }
    } catch (err) {
        return res.status(500).json({
            message: "Error while retrieving Adhar",
            error: err.message
        });
    }
}

module.exports.updateAdhar = async function (req, res) {
    try {
        const adharNumber = req.body.adharNumber;
        let user = await adharModel.findOne({ adharNumber: adharNumber });
        if (user) {
            user.name = req.body.name || user.name;
            user.number = req.body.number || user.number;
            user.address = req.body.address || user.address;
            
            // Update images only if new images are provided
            if (req.files['faceImage']) {
                user.faceImage = req.files['faceImage'][0].path;
            }
            if (req.files['fingerprintImage']) {
                user.fingerprintImage = req.files['fingerprintImage'][0].path;
            }

            const updatedData = await user.save();
            return res.json({
                message: "Aadhar data updated successfully",
                data: updatedData
            });
        } else {
            return res.json({
                message: "Aadhar not found"
            });
        }
    } catch (err) {
        return res.status(500).json({
            message: "Error while updating Aadhar",
            error: err.message
        });
    }
}

module.exports.deleteAdhar=async function(req,res){
       try{
        let id = req.params.id;
        let user=await userModel.findByIdAndDelete(id);
        if(!user){
            return res.json({
                message:"user not found"
            })
        }
        res.json({
            message:"user deleted ! success"
    
        })
       }catch(err){
        return res.status(500).json({
            message:"error while making adhar",
            error:err.message
        })
       }
}