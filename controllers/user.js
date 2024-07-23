const { prisma } = require('../prisma/prisma-client.js');

const project = async(req, res) => {
    const projects = await prisma.project.findMany({
        include: {
            image: true,
        }
    });
    res.status(200).json({ project: projects });
}

const projeсеID = async(req, res) => {
    const id = req.params.id;

    const projects = await prisma.project.findMany({
        where: {
            id,
        },
        include: {
            image: true,
            comment: true,
        }
    });
    res.status(200).json(projects);
}

const projectComment = async(req, res) => {
    const { id, name, text } = req.body;

    const comment = await prisma.comment.create({
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

module.exports = { project, projeсеID, projectComment };