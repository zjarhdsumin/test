var express = require('express')  //express 인스턴스를 받아 사용
var router = express.Router()  //express 프레임워크 라우터 사용

router.get('/',  function(req, res, next){
    res.render('form.ejs', {name :'안수민',
                        blog : 'google.com',
                        homepage : 'naver.com'
                    });  //해당 view 파일 지정 가능 함수
});

module.exports = router;  //전역으로 해당 라우터 사용 가능