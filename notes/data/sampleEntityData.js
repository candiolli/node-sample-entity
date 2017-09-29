var mysql = require('mysql');

var sampleEntityData = module.exports = {

    connect: function() {
        var connection = mysql.createConnection({
            host     : 'pcrt.com.br',
            user     : 'silas',
            password : 'rsul001!',
            database : 'node_sample'
        });
        connection.connect();
        return connection;
    },
    find: function (callback) {
        this.connect().query('SELECT * FROM sample_entity', function(err, result) {
            if (err) callback(err);
            callback(result);
        });
    },
    save: function(req, callback) {
        var values = [req.body.name, new Date(), req.body.value]
        this.connect().query('INSERT INTO sample_entity (name, creation_date, value) VALUES (?,?,?)', values, function(err, result) {
          if (err) callback(err);
          callback(result);
        });
    }
}