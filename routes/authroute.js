const express = require('express');
const router = express.Router();


// LOAD CONTROLLERS

const {
    registerController
} = require('../controllers/authController');

router.post('register', registerController);

module.exports = router;