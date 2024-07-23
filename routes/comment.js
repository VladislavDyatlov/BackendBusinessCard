var express = require('express');
const { comment, comments, deleteComments, deleteComment } = require('../controllers/comment');
var router = express.Router();

router.get('/message', comment)
router.get('/messages', comments)
router.post('/delme', deleteComment)
router.post('/delmes', deleteComments)

module.exports = router;