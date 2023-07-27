var express = require('express');
const { project, projeсеID, projectComment } = require('../controllers/user');
var router = express.Router();

/* GET users listing. */
router.get('/project', project);
router.get('/project/:id', projeсеID);
router.post('/project/comment', projectComment);

module.exports = router;