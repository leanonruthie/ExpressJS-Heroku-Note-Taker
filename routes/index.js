// 11-Express/01-Activities/21-Ins_Modular-Routing and 22-Stu_Modular-Routing for helpers folder

const router = require('express').Router();

// Import our modular routers for /tips and /feedback
const apiRouter = require('./api');

// const app = express();

router.use('/api', apiRouter);

module.exports = router;
