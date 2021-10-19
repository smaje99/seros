const mongoose = require('mongoose');
const { Schema } = mongoose;

const ThematicGroupSchema = new Schema({
    name: { type: String, require: false },
    title: { type: String, require: true },
    group: { type: [], require: true }
}, { collection: 'ThematicGroups' });

ThematicGroupSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        delete returnedObject._id;
        delete returnedObject.name;
    }
})

const ThematicGroups = mongoose.model('ThematicGroup', ThematicGroupSchema);

module.exports = ThematicGroups;