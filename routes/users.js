var express = require('express');
const { project, projeсеID, projectComment } = require('../controllers/user');
var router = express.Router();

/* GET users listing. */
router.get('/project', project);

module.exports = router;