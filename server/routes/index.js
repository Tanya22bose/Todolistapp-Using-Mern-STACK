const express = require('express');



const applicationRoutes = require('./application.routes');
const router = express.Router();


router.use('/application', applicationRoutes);




module.exports = router;