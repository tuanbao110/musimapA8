
/*
 * GET artistscreen
 */

var data = require('../data.json');

exports.view = function(req, res){
    res.render('artistscreen', {});
};

exports.viewName = function(req, res){
    var name = req.params.name;
    console.log("Artist name: " + name);
    
    var artist;
    for(var i = 0; i < data.artists.length; i++) {
        var obj = data.artists[i];

        if(obj.name == name) {
            artist = obj;
            console.log("Found: " + artist.name);
        }
    }

    res.render('artistscreen', artist);
};
