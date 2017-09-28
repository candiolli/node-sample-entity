var sampleEntityData = require('../data/sampleEntityData');

var sampleService = module.exports = {
    
    find: function (req, res) {
        sampleEntityData.find(function(data){
            res.send(data);
        });
    },
    save: function (req, res) {
        sampleEntityData.save(function(data){
            res.send(data);
        });
    }
}