const ThematicGroup = require('../models/ThematicGroup');

class ThematicGroupService {
    async getThematicGroup(name) {
        const thematicGroup = await ThematicGroup.find({ name });
        return thematicGroup[0];
    }
}

module.exports = ThematicGroupService;