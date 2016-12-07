/**
 * Created by jaymin on 12/6/2016.
 */
var bodyParser = require('body-parser');
var data = [{item: 'Task 1'}, {item: 'Task 2'}, {item: 'Task3'}];
var urlEncoder = bodyParser.urlencoded({extended: false});

module.exports = function (app) {
    app.get('/todo', function (req, res) {
        res.render('todo', {todos: data});
    });
    app.post('/todo', urlEncoder, function (req, res) {
    });
    app.delete('/todo/:item', function (req, res) {
    });
};