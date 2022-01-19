const boom = require('@hapi/boom');

const ThematicGroup = require('../models/ThematicGroup');

const model = new ThematicGroup();

class ThematicGroupService {
    async getThematicGroup(name) {
        try {
            const thematicGroup = await model.get(name);
            return thematicGroup;
        } catch {
            throw boom.notFound('Thematic group not found');
        }
    }
}

module.exports = ThematicGroupService;