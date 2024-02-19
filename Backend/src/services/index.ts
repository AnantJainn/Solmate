// export * from './routes';

// module.exports.routes = router;
import { createConnection } from 'typeorm';
const express = require('express');
const controller = require('./controller');
const router = express.Router();

router.route('/presaleinfo').get(controller.getPresaleInfo);

module.exports = { router };