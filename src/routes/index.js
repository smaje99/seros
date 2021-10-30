const router = require('express').Router();

router.use('/thematicGroups', require('./thematicGroups.routes'));

module.exports = router;