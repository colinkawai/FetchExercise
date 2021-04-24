var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: true
}))

// posts the name of payer, points added, and the time
// payer is given as a parameter
// time is a Date object 
router.post('/add/:payer/:points/:time', (req, res) => {
    //update the transaction history 
    // that will go in the storage object 
    let payer = req.params.payer;
    let points = parseInt(req.params.points);
    let time = req.params.time;
    let data = { payer: payer, points: points };
    req.app.locals.storage[time] = data;

    //update the totalPoints history
    // that will go in the totalPoints object
    if (req.app.locals.totalPoints[payer] != null) {
        req.app.locals.totalPoints[payer] += points;
    }
    else {
        req.app.locals.totalPoints[payer] = points;
    }

    res.send("completed transaction");
});

module.exports = router;