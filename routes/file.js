// db저장이랑 우선 하나의 사진 출력하는 api 만들고 소희가 글라이드? 뭐시기 써가지고 띄워버리기~ 네트워크 url이 편할듯? 찬희형의 생각에는 내가 뭘 들은거지

const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
// const multer = require('multer');
const path = require('path');
const db = require('../db/db_info');
const uploads = require('../middleware/multer');
const { json } = require('body-parser');
const fileController = require('../controllers/fileController');


const router = express.Router();

router.get('/profile', function(req, res){
    res.render('profile file upload');
})

router.put('/profile', uploads.upload.single('userfile'),fileController.fileUpload);

// router.post('/', uploads.upload.single('userfile'), async (req, res) => {
// //upload(multer) 미들웨어를 사용. 파일을 가공해 req 객체의 file 프로퍼티에 넣음.
//     const filename = req.file.originalname;
//     const sql = `insert into user(name, FB_uid, total_score, daily_challenge_done, challenge_done, jwt_token, profile_img)
//                  values('a','b',10,10,10,'c', '${filename}')`;

//     db.query(sql, (err, db_data) => {
//         if(err){
//             console.error(err);
//         }
//         else{
//             res.send('파일 전송 성공 : ' + req.file + '\n' + "rows : " + db_data)
//         }
//     })
// })

// router.get('/:image', function(req, res){
//     try{
//         const sql = `select profile_img from user`;

//         db.query(sql, (err, db_data) => {
//             if(err){
//                 console.error(err);
//             }
//             else{
//                 res.json({
//                     "Message" : "성공함",
//                     "데이터" : db_data
//                 })
//             }
//         })
//     }
//     catch(error){
//         res.json({
//             "Message" : "err",
//             "error" : error
//         })
//     }
// })

router.use(express.static('./public/upload'))
module.exports = router;