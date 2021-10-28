const ThematicGroup = require('../models/ThematicGroup');

const groups = ['intro', 'algo', 'lineal', 'no-lineal'];

class ThematicGroupService {
    async getThematicGroup(name) {
        if (!name) throw new TypeError('name is not defined');

        if (typeof name !== 'string') throw new TypeError('name must be a String');

        if (!groups.includes(name)) throw new TypeError(`name must be similar to ${groups.join(', ')}`)

        const thematicGroup = await ThematicGroup.find({ name });
        return thematicGroup[0];
    }
}

module.exports = ThematicGroupService;