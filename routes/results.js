
/*
 * GET results
 */

var data = require('../data.json');

exports.view = function(req, res){

    var search = (req.query.searchName).toLowerCase();

    var resultData;

    //loop through data to find searched artist
    for(var i = 0; i < data.artists.length; i++) {
        var obj = data.artists[i];

        if((obj.name).toLowerCase() == search) {
            resultData = obj;
            break;
        }
    }

    res.render('results', resultData);
};
