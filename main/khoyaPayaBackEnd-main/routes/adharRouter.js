const express = require('express')
const app = express()
const path = require('path');
const adharRouter = express.Router();
const multer = require('multer');
const{createadhar,getAllAdhars,getAdharByNumber,updateAdhar,deleteAdhar}=require("../controller/adharController")
app.use("/adhar", adharRouter)

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        if (file.fieldname === 'faceImage') {
            cb(null, 'images/');
        } else if (file.fieldname === 'fingerprintImage') {
            cb(null, 'fingerprints/');
        } else {
            cb(new Error('Invalid fieldname'));
        }
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

adharRouter.route('/addAdhar')
    .post(upload.fields([{ name: 'faceImage', maxCount: 1 }, { name: 'fingerprintImage', maxCount: 1 }]), createadhar);

adharRouter.route('/allAdhars')
    .get(getAllAdhars)

adharRouter.route('/updateAdhar').patch(updateAdhar);

adharRouter.route('/getAdharByNumber').post(getAdharByNumber); // Route to get Aadhar details by Aadhar number



module.exports = adharRouter;