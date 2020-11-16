const router = require('express').Router();
const commentService = require('../services/commentService');
const responseObj = require('../config/response');
const { comments } = require('../models/');

module.exports = {

    async store(req, res) {
        console.log(req)
        const receivedComment = req.body;
        if (receivedComment) {
            const createdComment = await commentService.store(receivedComment);
            const response = responseObj.success;
            response.data = createdComment;
            res.json(response);
        } else {
            const response = responseObj.fail;
            response.message = "comment object was not found on request body";
            res.status(400).json(response);
        }
    },
    
}