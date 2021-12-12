const ThematicGroup = require('../models/ThematicGroup');

const model = new ThematicGroup();

class ThematicGroupService {
    getThematicGroup(name) {
        return model.get(name);
    }
}

module.exports = ThematicGroupService;