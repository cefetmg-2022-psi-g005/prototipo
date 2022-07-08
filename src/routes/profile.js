module.exports = function(application){
    application.get('/', function(req, res){
        application.src.controllers.profile.index(application, req, res);
    });
}
