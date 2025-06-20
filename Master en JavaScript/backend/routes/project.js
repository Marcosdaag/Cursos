'use strict'

var express = require('express');
var ProjectController = require('../controllers/project');
const { model } = require('mongoose');

var router = express.Router();

router.get('/home', ProjectController.home);
router.post('/test', ProjectController.test);
router.post('/save-project', ProjectController.saveProject);
router.get('/project', ProjectController.getProject);
router.get('/project/:id', ProjectController.getProject);

module.exports = router;