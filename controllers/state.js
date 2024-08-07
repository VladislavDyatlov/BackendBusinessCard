const { prisma } = require('../prisma/prisma-client.js');

const state = async(req, res) => {

    const { category } = req.body;

    const state = await prisma.state.findMany({
        where: {
            category: "game"
        },
        orderBy: {
            date: "desc"
        },
    });
    res.status(200).json({ states: state });
}

const stateID = async(req, res) => {
    const id = req.params.id;

    const state = await prisma.state.findMany({
        where: {
            id,
        },
        include: {
            comment: true,
        }
    });
    res.status(200).json(state);
}

const stateComment = async(req, res) => {
    const { id, name, text } = req.body;

    const comment = await prisma.comments.create({
        data: {
            name: name,
            text: text,
            commentId: id,
        }
    })

    if (comment) {
        return res.status(200).json({ message: "Ваш отзыв успешно отправлен" });
    } else {
        return res.status(400).json({ message: "Что-то пошло не так" });
    }
}

module.exports = { state, stateID, stateComment };