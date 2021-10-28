const express = require('express');

const ThematicGroupsService = require('../services/ThematicGroups.service');

const router = express.Router();

const service = new ThematicGroupsService();

router.get('/:name', async (req, res) => {
    const { name } = req.params;

    try {
        const thematicGroup = await service.getThematicGroup(name);
        res.status(200).json(thematicGroup);
    } catch(err) {
        res.status(404).json({ error: err.message });
    }
})

module.exports = router;