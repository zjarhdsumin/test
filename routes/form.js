var express = require('express')  //express 인스턴스를 받아 사용
var router = express.Router()  //express 프레임워크 라우터 사용

router.get('/',  function(req, res, next){
    res.render('form.ejs', {name :'안수민',
                        blog : 'google.com',
                        homepage : 'naver.com'
                    });  //해당 view 파일 지정 가능 함수
});

router.post('/', function(req, res, next){
    res.json(req.body);
});

router.get('/zip', function(req, res, next){   // app.js에서 /form으로 들어와야만 form.js에 들어올 수 있기 때문에 여기서 /~~ 하면 /form/~~ 이런 식으로 입력해야 함.
    res.render('index', { title: 'Express' })
})
module.exports = router;  //전역으로 해당 라우터 사용 가능