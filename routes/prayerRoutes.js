const express = require('express');
const router = express.Router();
const { fetchAndSavePrayerTimes } = require('../controllers/prayerController');
const verifyToken = require('../middleware/authMiddleware');

router.get('/:city', verifyToken, fetchAndSavePrayerTimes);

module.exports = router;
