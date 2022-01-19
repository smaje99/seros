const { database } = require('../utils/deta');

const base = database('ThematicGroups');

class ThematicGroup {
    async get(name) {
        const thematicGroup = await base.get(name);
        delete thematicGroup.key;
        return thematicGroup;
    }
}

module.exports = ThematicGroup;