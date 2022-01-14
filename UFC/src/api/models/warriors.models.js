
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let warriorsSchema = new Schema({
    name: {
        type: 'string',
    },
    description: {
        type: 'string'
    },
    weight: {
        type: 'number'
    },
    height: {
        type: 'number'
    },
    record: {
        type: 'string'
    },
    category: {
        type: 'string'
    }
}, {
    collection: 'warriors'
});

module.exports = mongoose.model('warrior', warriorsSchema);