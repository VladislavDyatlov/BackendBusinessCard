const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require('dotenv').config();
const app = express();
const { prisma } = require('../prisma/prisma-client.js');
const cors = require('cors');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/', express.static(path.join(__dirname, 'public')));

app.use('/api/user', async(req, res) => {
    const projects = await prisma.project.findMany({
        include: {
            image: true,
        }
    });
    res.status(200).json({ project: projects });
});

module.exports = app;