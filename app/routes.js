// require express
var express = require('express');
var path = require('path');

// create our router object
var router = express.Router();

// export our router
module.exports = router;

// route for our homepage
router.get('/', function(req, res) {
    res.render('pages/index');
});

// route for our about page
router.get('/about', function(req, res) {
    var users = [
        { name: 'Saurabh', email: 'sourabh@gmail.com', avatar: 'http://placekitten.com/300/300' },
        { name: 'Meghana', email: 'meghana@gmail.com', avatar: 'http://placekitten.com/400/400' },
        { name: 'Ashu', email: 'ashu@gmail.com', avatar: 'http://placekitten.com/500/500' },
        { name: 'Ashwin', email: 'ashwin@gmail.com', avatar: 'http://placekitten.com/700/700' }
    ];

    res.render('pages/about', { users: users });
});

router.get('/contact', function(req, res) {
    res.render('pages/contact');
});

router.post('/contact', function(req, res) {
    res.send('Thanks for contacting us ', + req.body.name + '! We will respond shortly!');
});