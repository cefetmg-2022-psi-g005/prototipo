module.exports.index = function(application, req, res) {
    var profileModel = new application.src.models.profile();
    profileModel.getProfile(function(err, result) {
    res.render("pages/profile/profile", {login : result});
    });
}