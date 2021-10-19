const express = require('express');
const router = express.Router();

const ThematicGroup = require('../models/ThematicGroup');

const groups = ['intro', 'algo', 'lineal', 'no-lineal']

router.get('/:name', async (req, res) => {
    const { name } = req.params;

    if (!groups.includes(name)) res.status(404).end();

    const thematicGroup = await ThematicGroup.find({ name: name });
    res.json(thematicGroup[0]);
})

module.exports = router;