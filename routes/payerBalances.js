var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: true
}))

router.get('/getPoints', (req, res) => {
    console.log(req.app.locals.totalPoints);
    res.send(req.app.locals.totalPoints);

});

module.exports = router;
