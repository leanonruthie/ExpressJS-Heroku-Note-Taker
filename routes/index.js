// 11-Express/01-Activities/21-Ins_Modular-Routing and 22-Stu_Modular-Routing for helpers folder

// Tutor taught me how to establish express app and router simultaneously
const router = require('express').Router();

// Import our modular routers for /api
const apiRouter = require('./api');

router.use('/api', apiRouter);

module.exports = router;
