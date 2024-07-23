const { prisma } = require('../prisma/prisma-client.js');

const comment = async(req, res) => {

    const comment = await prisma.comment.findMany();

    res.status(200).json({ comments: comment });
}

const comments = async(req, res) => {

    const comment = await prisma.comments.findMany();

    res.status(200).json({ comments: comment });
}

const deleteComment = async(req, res) => {

    const { id } = req.body;

    await prisma.comment.delete({
        where: {
            id: id,
        },
    })
}

const deleteComments = async(req, res) => {

    const { id } = req.body;

    await prisma.comments.delete({
        where: {
            id: id,
        },
    })
}


module.exports = { comment, comments, deleteComments, deleteComment };