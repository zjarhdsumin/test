const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const multer = require('multer');
// const upload = multer({dest : './public/upload'});  //업로드를 받아낼 수 있는 미들웨어를 리턴받음. 사용자가 업로드한 파일이 저장되는 위치 지정
const router = express.Router();

var storage = multer.diskStorage({
    destination : function(req, file, cb){
        cb(null, './public/upload')
    },
    filename : function(req, file, cb){
        cb(null, file.originalname)
    }
})

var upload = multer({storage:storage})

router.get('/', function(req, res){
    res.render('upload');
})

router.post('/', upload.single('userfile'), function(req, res){
//upload(multer) 미들웨어를 사용. 파일을 가공해 req 객체의 file 프로퍼티에 넣음.
    console.log(req.file);
    res.send('업로드 성공' + req.file.originalname); // -> 업로드한 사진이 오브젝트(객체)임을 확인할 수 있음
})

router.use('/upload', express.static('./public/upload'))
module.exports = router;