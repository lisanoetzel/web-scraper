module.exports = function(router) {
    //Rendering the home handlebars page
    router.get("/", function(req, res){
        res.render("home");
    });
    //Rendering the saved handlebars page
    router.get("/saved", function(req, res){
        res.render("saved");
    });
}