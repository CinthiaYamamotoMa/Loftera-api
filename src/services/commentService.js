const { comments } = require('../models/');

module.exports = {

    async store(comment) {
        comment.createdAt = new Date();
        const createdComment = await comments.create(comment);
        return createdComment;
    },

}