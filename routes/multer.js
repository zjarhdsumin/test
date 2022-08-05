// db저장이랑 우선 하나의 사진 출력하는 api 만들고 소희가 글라이드? 뭐시기 써가지고 띄워버리기~ 네트워크 url이 편할듯? 찬희형의 생각에는 내가 뭘 들은거지

const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const multer = require('multer');
const path = require('path');
const db = require('../db/db_info');
const { json } = require('body-parser');

// const upload = multer({dest : './public/upload'});  //업로드를 받아낼 수 있는 미들웨어를 리턴받음. 사용자가 업로드한 파일이 저장되는 위치 지정
const router = express.Router();

var storage = multer.diskStorage({
    destination : function(req, file, cb){
        cb(null, './public/upload')  //첫번째 인자 : 에러 / 두번째 인자 : 이미지 파일을 저장할 폴더 위치
    },
    filename : function(req, file, cb){
        cb(null, file.originalname)  //첫번째 인자값 : 에러 / 두번째 인자값 : 이미지 파일ㅇ르 저장할 파일명
    }
})

var upload = multer({storage:storage})

router.get('/', function(req, res){
    res.render('upload');
})

router.post('/', upload.single('userfile'), async (req, res) => {
//upload(multer) 미들웨어를 사용. 파일을 가공해 req 객체의 file 프로퍼티에 넣음.
    // const {name, FB_uid, total_score, daily_challenge_done, challenge_done, jwt_token} = req.body;
    const filename = req.file.originalname;
    // console.log(name, FB_uid, total_score, daily_challenge_done, challenge_done, jwt_token, filename);

    const sql = `insert into user(name, FB_uid, total_score, daily_challenge_done, challenge_done, jwt_token, profile_img)
                 values('a','b',10,10,10,'c', '${filename}')`;
    // const prepare = [user_id, FB_uid, total_score, daily_challenge_done, challenge_done, jwt_token, filename];

    db.query(sql, (err, db_data) => {
        if(err){
            console.error(err);
        }
        else{
            // console.log("rows : "  + JSON.stringify(db_data));
            res.send('파일 전송 성공 : ' + req.file + '\n' + "rows : " + db_data)
        }
    })
})

router.get('/:image', function(req, res){
    try{
        const sql = `select profile_img from user`;

        db.query(sql, (err, db_data) => {
            if(err){
                console.error(err);
            }
            else{
                res.json({
                    "Message" : "성공함",
                    "데이터" : db_data
                })
            }
        })
    }
    catch(error){
        res.json({
            "Message" : "err",
            "error" : error
        })
    }
})

router.use('/upload', express.static('./public/upload'))
module.exports = router;
 No newline at end of file
