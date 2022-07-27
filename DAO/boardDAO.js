'use strict'

const db = require('../db/db_info');

function board(){
    return new Promise(function(resolve, reject){
        var queryData = 'select * from borad;';
        db.query(queryData, function(error, db_data){
            if(error){
                reject('DB ERR');
            }
            else{
                resolve(db_data);
            }
        })
    })
}

module.exports = {
    board
}