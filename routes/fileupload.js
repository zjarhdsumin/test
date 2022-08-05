const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const fileupload = require('express-fileupload');
const cors = require('cors');
const _ = require('lodash');
const morgan = require('morgan');
const router = express.Router();


router.use(fileupload({
    createParentPath : true
})); //파일 업로드 허용

//미들웨어
router.use(cors());
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended : true}));
router.use(morgan('dev'));
router.use(express.static('./public/upload'));


router.get('/', function(req, res){
    res.render('upload');
})


router.post('/', f)


// router.post('/', async(req, res) => {
//     try{
//         if(!req.files){
//             res.send({status : false, message : '파일 업로드 실패'});
//         }
//         else{
//             let f = req.files.uploadFile;
//             f.mv('./public/upload/' + f.name);
//             res.send({
//                 status : true,
//                 message : '파일 업로드 성공',
//                 data : {
//                     name : f.name,
//                     minetype : f.minetype,
//                     size : f.size
//                 }
//             })
//         }
//     }
//     catch(err){
//         res.status(500).send(err);
//     }
// })

module.exports = router;