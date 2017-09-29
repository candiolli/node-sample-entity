var sampleEntityData = require('../data/sampleEntityData');

var sampleService = module.exports = {
    
    find: function (callback) {
        sampleEntityData.find(callback);
    },
    save: function (req, callback) {
        sampleEntityData.save(req, callback);
    }
}