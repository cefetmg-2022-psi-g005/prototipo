var fs = require('fs');

function profile() {}

profile.prototype.getProfile = function(callback) {
    fs.readFile('./data/dadosUsuario.json', 'utf8', function(err, result) {
        var data = [];

        if (!err) {

            var obj = JSON.parse(result);
            var i = 0; //(obj.empresas.length - 1);

            obj.empresas.forEach(function(empresas) {
                if (i >= 0) {
                    data[i] = empresas;
                    i++;
                }
            });
        }
        callback(err, data);
    });
};

module.exports = function(){
    return profile;
}