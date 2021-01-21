var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/getUserInfo', function(req, res, next) {
    // res.send('respond with a resource');
    res.json({
        statusCode: 0,
        msg: "yes"
    })
});

module.exports = router;