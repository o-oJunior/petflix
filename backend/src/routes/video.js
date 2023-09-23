const { Router } = require('express');
const router = Router();
const controller = require('../controllers/video');

router.get('/', controller.getAllVideos);

module.exports = router;
