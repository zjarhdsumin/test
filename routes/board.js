var express = require('express')
var router = express.Router()
var mariadb = require("./maria")
var conn = mariadb.init()

router.get('/list/:page', function(req, res, next){
    var page = req.params.page;
    var sql = "select * from board"

    conn.query(sql, function(err, rows){
        if(err) console.error("err : " + err)
        res.render('list', {title : '게시판 리스트', rows : rows})
    })
})

module.exports = router;