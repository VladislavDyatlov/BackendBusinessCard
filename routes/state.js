var express = require('express');
const { state, stateID, stateComment } = require('../controllers/state');
var router = express.Router();

/* GET users listing. */
router.post('/state', state);
router.post('/state/comment', stateComment);
router.get('/state/:id', stateID);

module.exports = router;