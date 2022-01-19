const express = require('express');

const ThematicGroupsService = require('../services/thematicGroups.service');

const nameSchema = require('../schemas/thematicGroup.schemas');
const validationHandler = require('../middleware/validation.handler');

const router = express.Router();

const service = new ThematicGroupsService();

router.get('/:name',
    validationHandler(nameSchema, 'params'),
    async (req, res, next) => {
        const { name } = req.params;

        try {
            const thematicGroup = await service.getThematicGroup(name);
            res.status(200).json(thematicGroup);
        } catch(err) {
            next(err)
        }
    }
)

module.exports = router;