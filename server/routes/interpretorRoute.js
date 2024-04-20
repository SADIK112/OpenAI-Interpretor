const express = require('express');
const router = express.Router();
const { getOpenAiModels, createCompletion, createImage } = require('../controllers/interpretorController');

router.route('/models').get(getOpenAiModels);
router.route('/completions').post(createCompletion);
router.route('/images/generations').post(createImage);

module.exports = router;