'use strict'

const boardDAO = require('../DAO/boardDAO');

async function board(req, res, next){
    try {
        const borad_data = await boardDAO.board();
        console.log(borad_data);
        res.json({
            "Message": "성공하였습니다.",
            "Data": borad_data
        });
    }
    catch (error) {
        res.json({
            "Message": "실패하였습니다.",
            "Error_Message": error
        });
    }
}

module.exports = {board}