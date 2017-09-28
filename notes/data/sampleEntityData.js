var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'pcrt.com.br',
    user     : 'silas',
    password : 'rsul001!',
    database : 'node_sample'
}).connect();

var sampleEntityData = module.exports = {
    
    find: function () {
        connection.query('SELECT * FROM sample_entity', function(err, result) {
            if (err) throw err;
            return result;
        });
    },
    save: function(req) {
        var values = [req.body.name, new Date(), req.body.value]
        connection.query('INSERT INTO sample_entity (name, creation_date, value) VALUES (?,?,?)', values, function(err, result) {
          if (err) throw err;
          return result;
        });
    }
}